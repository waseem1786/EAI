"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/auth/AuthContext";
import { Toast } from "../../components/ui/Toast";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await register(email, password);
    if (!res.ok) { setToast(res.message || "Register failed"); return; }
    router.push("/tasks");
  };

  return (
    <>
      <Toast message={toast} />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="card cardSoft">
        <div className="cardInner" style={{ maxWidth: 520, margin: "0 auto" }}>
          <h1 className="h1" style={{ fontSize: 26 }}>Register</h1>
          <p className="p">Create an account stored in MongoDB Atlas.</p>
          <div className="split" />
          <form onSubmit={onSubmit}>
            <div><div className="label">Email</div><input className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></div>
            <div style={{ marginTop: 10 }}><div className="label">Password</div><input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 6 characters" /></div>
            <div className="btnRow" style={{ marginTop: 12 }}>
              <button className="btn btnPrimary" type="submit">Create account</button>
              <a className="btn btnGhost" href="/login">I already have an account</a>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}
