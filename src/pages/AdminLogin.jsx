import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("anshAdminToken", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-top">
      <SEO title="Admin Login | ANSH INDUSTRIES" description="Secure admin login for ANSH INDUSTRIES website management." />
      <Section eyebrow="Admin" title="Secure dashboard login.">
        <form onSubmit={login} className="glass-card mx-auto grid max-w-md gap-4 p-7">
          <input className="input" type="email" placeholder="Admin email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn-primary" type="submit">Login</button>
          {error && <p className="text-sm text-red-300">{error}</p>}
        </form>
      </Section>
    </main>
  );
}
