"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TASKS } from "../../lib/tasks";
import { Toast } from "../ui/Toast";

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
  const [events,setEvents]=useState<EventItem[]>([]);
  const [progressMap,setProgressMap]=useState<Record<string,Progress>>({});
  const [toast,setToast]=useState<string|null>(null);
  const [open,setOpen]=useState<Record<string,boolean>>({});

  useEffect(()=>{ fetchJson<{events:EventItem[]}>("/api/events?limit=500").then(j=>setEvents(j.events)).catch((e:any)=>setToast(e?.message||"Failed to load timeline")); },[]);
  useEffect(()=>{
    const load=async()=>{
      const map:Record<string,Progress>={};
      for(const t of TASKS){
        const j=await fetchJson<{progress:Progress|null}>(`/api/progress?videoId=${encodeURIComponent(t.videoId)}`);
        if(j.progress) map[t.videoId]=j.progress;
      }
      setProgressMap(map);
    };
    load().catch(()=>{});
  },[]);

  useEffect(()=>{ const t=window.setTimeout(()=>setToast(null), toast?2600:0); return ()=>window.clearTimeout(t); },[toast]);

  const grouped = useMemo(()=>{
    const byDate:Record<string,EventItem[]> = {};
    for(const e of events){
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
        for(const e of evs){
          if(cur.length===0){ cur.push(e); continue; }
          const prev=cur[cur.length-1];
          const diff=(new Date(e.createdAt).getTime()-new Date(prev.createdAt).getTime())/60000;
          if(diff<=20) cur.push(e);
          else { sessions.push({id:`${videoId}-${sessions.length+1}`,events:cur}); cur=[e]; }
        }
        if(cur.length) sessions.push({id:`${videoId}-${sessions.length+1}`,events:cur});
        return { videoId, sessions };
      });
      return { date, videos };
    });
  },[grouped]);

  const toggle=(k:string)=>setOpen(m=>({...m,[k]:!m[k]}));

  const onNodeSeek=(seconds:number)=>{
    setToast(`Go to Tasks and seek to ${fmt(seconds)} using the segments bar.`);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <Toast message={toast} />
      <motion.div className="card" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.45}}>
        <div className="cardInner">
          <h1 className="h1">Timeline</h1>
          <p className="p">Graphical segments per lesson + expandable tree view grouped by Date → Video → Session → Events.</p>
        </div>
      </motion.div>

      <div className="card cardSoft"><div className="cardInner">
        <div className="h2">Graphical segments</div>
        <div className="small">Hover and click a segment (seeking happens in Tasks).</div>
        <div className="split" />
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {TASKS.map(t=>{
            const p=progressMap[t.videoId];
            const dur=p?.durationSeconds||0;
            const segs=p?.segments||[];
            return (
              <div key={t.id}>
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
                          onClick={()=>onNodeSeek(seg.start)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div></div>

      <div className="card cardSoft"><div className="cardInner">
        <div className="h2">Tree view</div>
        <div className="small">Expand/collapse nodes. Segment nodes include a seek target.</div>
        <div className="split" />
        <div className="tree">
          {tree.length===0 && <div className="treeNode"><div className="treeMeta">No events yet. Watch a lesson to populate this view.</div></div>}
          {tree.map(d=>{
            const kDate=`date:${d.date}`;
            return (
              <div key={kDate} className="treeNode">
                <div className="treeRow">
                  <div><div className="treeTitle">{d.date}</div><div className="treeMeta">{d.videos.length} videos</div></div>
                  <button className="treeBtn" onClick={()=>toggle(kDate)}>{open[kDate]?"Collapse":"Expand"}</button>
                </div>
                {open[kDate] && (
                  <div style={{padding:"8px 0 0 14px"}}>
                    {d.videos.map(v=>{
                      const t=TASKS.find(x=>x.videoId===v.videoId);
                      const kVid=`${kDate}|vid:${v.videoId}`;
                      return (
                        <div key={kVid} style={{marginTop:10}}>
                          <div className="treeRow">
                            <div><div className="treeTitle">{t?.title||v.videoId}</div><div className="treeMeta">{v.sessions.length} sessions</div></div>
                            <button className="treeBtn" onClick={()=>toggle(kVid)}>{open[kVid]?"Collapse":"Expand"}</button>
                          </div>
                          {open[kVid] && (
                            <div style={{padding:"8px 0 0 14px"}}>
                              {v.sessions.map((s,idx)=>{
                                const kSes=`${kVid}|ses:${idx}`;
                                return (
                                  <div key={kSes} style={{marginTop:8}}>
                                    <div className="treeRow">
                                      <div><div className="treeTitle">Session {idx+1}</div><div className="treeMeta">{s.events.length} events</div></div>
                                      <button className="treeBtn" onClick={()=>toggle(kSes)}>{open[kSes]?"Collapse":"Expand"}</button>
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
                                                {seg && <button className="treeBtn" onClick={()=>onNodeSeek(seg.start)}>Seek {fmt(seg.start)}</button>}
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
