import { UploadCloud } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";

const initial = { name: "", companyName: "", phone: "", email: "", requirement: "", material: "MS", quantity: "", deadline: "" };

export default function RFQ() {
  const [form, setForm] = useState(initial);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("Sending inquiry...");
    const body = new FormData();
    Object.entries(form).forEach(([key, value]) => body.append(key, value));
    if (file) body.append("drawing", file);
    try {
      const res = await fetch("/api/inquiries", { method: "POST", body });
      if (!res.ok) throw new Error("Unable to submit inquiry");
      setForm(initial);
      setFile(null);
      setStatus("Inquiry submitted. ANSH INDUSTRIES will contact you shortly.");
    } catch (error) {
      setStatus("The backend is not reachable yet. Please start the server or contact by phone/email.");
    }
  };

  return (
    <main className="page-top">
      <SEO title="Request Quote | ANSH INDUSTRIES" description="Send RFQ to ANSH INDUSTRIES with material type, quantity, requirement details, deadline and drawing upload." />
      <Section eyebrow="Requirement / RFQ" title="Send drawings, quantities and fabrication details for a fast response.">
        <Reveal className="glass-card p-7">
          <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
            <input className="input" required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="input" placeholder="Company Name" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} />
            <input className="input" required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input className="input" required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select className="input" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })}><option>MS</option><option>SS</option><option>Aluminium</option><option>Other</option></select>
            <input className="input" placeholder="Quantity" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
            <input className="input" type="date" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} />
            <label className="upload-box"><UploadCloud /><span>{file ? file.name : "Upload drawing / PDF"}</span><input type="file" accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png" onChange={(e) => setFile(e.target.files?.[0] || null)} /></label>
            <textarea className="input md:col-span-2" required rows="6" placeholder="Requirement details" value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} />
            <button className="btn-primary md:w-max" type="submit">Submit RFQ</button>
            <p className="self-center text-sm text-slate-400">{status}</p>
          </form>
        </Reveal>
      </Section>
    </main>
  );
}
