"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { type Task } from "../../lib/tasks";
import { Toast } from "../ui/Toast";
import { TimelineSkeleton } from "./TimelineSkeleton";
import { useAuth } from "../auth/AuthContext";

type EventItem = { _id: string; videoId: string; taskId: string; type: string; data?: any; createdAt: string; };
type Progress = { videoId: string; watchedSecondsTotal: number; durationSeconds: number; segments: { start:number; end:number }[]; };

function fmt(sec:number){ const s=Math.max(0,Math.floor(sec)); const m=Math.floor(s/60); const r=s%60; return `${m}:${String(r).padStart(2,"0")}`; }

async function fetchJson<T>(url:string):Promise<T>{
  const r=await fetch(url,{cache:"no-store"});
  const j=await r.json().catch(()=>({}));
  if(!r.ok) throw new Error(j?.message || "Failed to load");
  return j as T;
}

export function TimelineView(){
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [events,setEvents]=useState<EventItem[]>([]);
  const [progressMap,setProgressMap]=useState<Record<string,Progress>>({});
  const [toast,setToast]=useState<string|null>(null);
  const [open,setOpen]=useState<Record<string,boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  const openTask = (videoId: string, seconds?: number) => {
    const t = tasks.find(x => x.videoId === videoId);
    if (!t) { setToast('Task not found for this video'); return; }
    const q = new URLSearchParams({ taskId: t.id });
    if (typeof seconds === 'number' && !Number.isNaN(seconds)) q.set('seek', String(Math.floor(seconds)));
    router.push(`/tasks?${q.toString()}`);
  };

  useEffect(()=>{
    if (authLoading) return;
    if (!user) {
      setIsLoading(false);
      return;
    }
    async function load() {
      setIsLoading(true);
      try {
        const [evs, ts] = await Promise.all([
          fetchJson<{events:EventItem[]}>("/api/events?limit=500"),
          fetchJson<{tasks:Task[]}>("/api/tasks"),
        ]);
        setEvents(evs.events);
        setTasks(ts.tasks);

        const eventVideoIds = Array.from(new Set((evs.events || []).map(e => e.videoId).filter(Boolean)));
        const targetIds = eventVideoIds.length > 0 ? eventVideoIds : ts.tasks.map(t => t.videoId);
        const entries = await Promise.all(
          targetIds.map(async (vid) => {
            try{
              const j = await fetchJson<{progress:Progress|null}>(`/api/progress?videoId=${encodeURIComponent(vid)}`);
              return j.progress ? ([vid, j.progress] as [string, Progress]) : null;
            }catch{
              return null;
            }
          })
        );
        const map: Record<string, Progress> = {};
        for (const e of entries) {
          if (!e) continue;
          const [k, v] = e;
          map[k] = v;
        }
        setProgressMap(map);
      } catch (e: any) {
        setToast(e?.message || "Failed to load timeline");
      }
      setIsLoading(false);
    }
    load();
  },[user, authLoading]);

  useEffect(()=>{ const t=window.setTimeout(()=>setToast(null), toast?2600:0); return ()=>window.clearTimeout(t); },[toast]);

  const grouped = useMemo(()=>{
    const byDate:Record<string,EventItem[]> = {};
    const filteredEvents = events.filter((e, i) => {
      if (e.type !== 'play_opened') return true;
      const prev = events[i - 1];
      if (!prev || prev.type !== 'play_opened' || prev.videoId !== e.videoId) return true;
      const diff = new Date(e.createdAt).getTime() - new Date(prev.createdAt).getTime();
      return diff > 1000 * 60 * 5; // 5 minutes
    });

    for(const e of filteredEvents){
      const key=new Date(e.createdAt).toISOString().slice(0,10);
      (byDate[key] ||= []).push(e);
    }
    return byDate;
  },[events]);

  const tree = useMemo(()=>{
    const dates=Object.keys(grouped).sort((a,b)=>a<b?1:-1);
    return dates.map(date=>{
      const items=grouped[date].slice().sort((a,b)=>a.createdAt<b.createdAt?1:-1);
      const byVideo:Record<string,EventItem[]> = {};
      for(const e of items){ (byVideo[e.videoId] ||= []).push(e); }
      const videos=Object.keys(byVideo).map(videoId=>{
        const evs=byVideo[videoId].slice().sort((a,b)=>a.createdAt<b.createdAt?-1:1);
        const sessions:{id:string;events:EventItem[]}[]=[];
        let cur:EventItem[]=[];
        let curHasPlayOpened = false;
        for(const e of evs){
          if(cur.length===0){
            curHasPlayOpened = e.type === "play_opened";
            cur.push(e);
            continue;
          }
          const prev=cur[cur.length-1];
          const diff=(new Date(e.createdAt).getTime()-new Date(prev.createdAt).getTime())/60000;
          if(diff<=20) {
            if (e.type === "play_opened" && curHasPlayOpened) continue;
            if (e.type === "play_opened") curHasPlayOpened = true;
            cur.push(e);
          }
          else {
            sessions.push({id:`${videoId}-${sessions.length+1}`,events:cur});
            cur = [e];
            curHasPlayOpened = e.type === "play_opened";
          }
        }
        if(cur.length) sessions.push({id:`${videoId}-${sessions.length+1}`,events:cur});
        return { videoId, sessions };
      });
      return { date, videos };
    });
  },[grouped]);

  const toggle=(k:string)=>setOpen(m=>({...m,[k]:!m[k]}));

  const onNodeSeek=(videoId:string, seconds:number)=>{
    openTask(videoId, seconds);
  };

  if (isLoading || authLoading) return <TimelineSkeleton />;

  if (!user) {
    return (
      <div className="card">
        <div className="cardInner">
          <h1 className="h1">Timeline</h1>
          <p className="p">Please log in to view your timeline.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <Toast message={toast} />
      <motion.div className="card" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.45}}>
        <div className="cardInner">
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
            <h1 className="h1">Timeline</h1>
            <button className="btn btnGhost" onClick={async ()=>{ try{ await fetch("/api/events",{method:"DELETE"}); const j=await fetchJson<{events:EventItem[]}>("/api/events?limit=500"); setEvents(j.events||[]); setToast("Timeline cleared"); }catch(e:any){ setToast(e?.message||"Failed to clear"); } }}>Clear</button>
          </div>
          <p className="p">Graphical segments per lesson + expandable tree view grouped by Date → Video → Session → Events.</p>
        </div>
      </motion.div>

      <div className="card cardSoft"><div className="cardInner">
        <div className="h2">Graphical segments</div>
        <div className="small">Hover and click a segment (seeking happens in Tasks).</div>
        <div className="split" />
        <div style={{maxHeight: 300, overflowY: 'auto', paddingRight: 12}}>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {tasks.map(t=>{
              const p=progressMap[t.videoId];
              const dur=p?.durationSeconds||0;
              const segs=p?.segments||[];
              return (
                <div key={t.id} onClick={()=>openTask(t.videoId)} style={{cursor: 'pointer'}}>
                  <div style={{display:"flex",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
                    <div style={{fontWeight:950,letterSpacing:"-.01em"}}>{t.title}</div>
                    <span className="badge">Watched {fmt(p?.watchedSecondsTotal||0)}</span>
                  </div>
                  <div className="small">Duration {fmt(dur)}</div>
                  <div style={{marginTop:8}}>
                    <div className="timelineBar">
                      {segs.map((seg,i)=>{
                        const left=dur>0?(seg.start/dur)*100:0;
                        const width=dur>0?Math.max(0.5,((seg.end-seg.start)/dur)*100):0;
                        return (
                          <span key={i} className="segment"
                            style={{left:`${left}%`,width:`${width}%`,cursor:"pointer"}}
                            title={`${fmt(seg.start)} → ${fmt(seg.end)}`}
                            onClick={(ev)=>{ev.stopPropagation(); onNodeSeek(t.videoId, seg.start)} }
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div></div>

      <div className="card cardSoft"><div className="cardInner">
        <div className="h2">Tree view</div>
        <div className="small">Expand/collapse nodes. Segment nodes include a seek target.</div>
        <div className="split" />
        <div className="tree" style={{maxHeight: 500, overflowY: 'auto'}}>
          {tree.length===0 && <div className="treeNode"><div className="treeMeta">No events yet. Watch a lesson to populate this view.</div></div>}
          {tree.map(d=>{
            const kDate=`date:${d.date}`;
            return (
              <div key={kDate} className="treeNode">
                <div className="treeRow" onClick={()=>toggle(kDate)} style={{cursor: 'pointer'}}>
                  <div><div className="treeTitle">{d.date}</div><div className="treeMeta">{d.videos.length} videos</div></div>
                  <button className="treeBtn">{open[kDate]?"Collapse":"Expand"}</button>
                </div>
                {open[kDate] && (
                  <div style={{padding:"8px 0 0 14px"}}>
                    {d.videos.map(v=>{
                      const t=tasks.find(x=>x.videoId===v.videoId);
                      const kVid=`${kDate}|vid:${v.videoId}`;
                      return (
                        <div key={kVid} style={{marginTop:10}}>
                          <div className="treeRow" onClick={()=>toggle(kVid)} style={{cursor: 'pointer'}}>
                            <div><div className="treeTitle">{t?.title||v.videoId}</div><div className="treeMeta">{v.sessions.length} sessions</div></div>
                            <button className="treeBtn">{open[kVid]?"Collapse":"Expand"}</button>
                          </div>
                          {open[kVid] && (
                            <div style={{padding:"8px 0 0 14px"}}>
                              {v.sessions.map((s,idx)=>{
                                const kSes=`${kVid}|ses:${idx}`;
                                return (
                                  <div key={kSes} style={{marginTop:8}}>
                                    <div className="treeRow" onClick={()=>toggle(kSes)} style={{cursor: 'pointer'}}>
                                      <div><div className="treeTitle">Session {idx+1}</div><div className="treeMeta">{s.events.length} events</div></div>
                                      <button className="treeBtn">{open[kSes]?"Collapse":"Expand"}</button>
                                    </div>
                                    {open[kSes] && (
                                      <div style={{padding:"8px 0 0 14px"}}>
                                        {s.events.slice().reverse().map(e=>{
                                          const stamp=new Date(e.createdAt).toLocaleString();
                                          const seg=e.type==="segment"?e.data:null;
                                          return (
                                            <div key={e._id} style={{padding:"6px 0"}}>
                                              <div className="treeRow">
                                                <div>
                                                  <div className="treeTitle">{e.type}</div>
                                                  <div className="treeMeta">{stamp}{seg?` · ${fmt(seg.start)} → ${fmt(seg.end)}`:""}</div>
                                                </div>
                                                {seg && <button className="treeBtn" onClick={(ev)=>{ev.stopPropagation(); onNodeSeek(e.videoId, seg.start)}}>Seek {fmt(seg.start)}</button>}
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div></div>
    </div>
  );
}
