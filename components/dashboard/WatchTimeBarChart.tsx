"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export function WatchTimeBarChart({ data, onBarClick }: { data: { name: string; minutes: number }[]; onBarClick: (taskId: string) => void }) {
  return (
    <div className="card">
      <div className="cardInner">
        <div className="h2">Watch minutes per lesson</div>
        <div className="small">Per user when logged in. Local fallback otherwise.</div>
        <div style={{ height: 260, marginTop: 12 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="minutes" fill="#8b5cf6" radius={[8, 8, 0, 0]} onClick={(d: any) => {
                const tid = d?.payload?.name;
                if (tid) onBarClick(String(tid));
              }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
