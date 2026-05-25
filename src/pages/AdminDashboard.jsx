import { Download, Edit3, ImagePlus, Inbox, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Section from "../components/Section";
import SEO from "../components/SEO";

const authedFetch = (url, options = {}) => fetch(url, { ...options, headers: { ...(options.headers || {}), Authorization: `Bearer ${localStorage.getItem("anshAdminToken")}` } });

export default function AdminDashboard() {
  const [data, setData] = useState({ inquiries: [], analytics: { monthlyInquiries: [], mostVisitedPages: [], devices: [] } });
  const [message, setMessage] = useState("");

  useEffect(() => {
    Promise.all([authedFetch("/api/admin/inquiries").then((r) => r.json()), authedFetch("/api/admin/analytics").then((r) => r.json())])
      .then(([inquiries, analytics]) => setData({ inquiries, analytics }))
      .catch(() => setMessage("Login required or backend unavailable."));
  }, []);

  const exportCsv = () => {
    window.open("/api/admin/inquiries/export?token=" + encodeURIComponent(localStorage.getItem("anshAdminToken") || ""), "_blank");
  };

  return (
    <main className="page-top">
      <SEO title="Admin Dashboard | ANSH INDUSTRIES" description="Admin dashboard for inquiries, analytics, gallery, content and contact management." />
      <Section eyebrow="Admin Dashboard" title="Inquiries, visitor analytics, content and gallery management.">
        {message && <p className="mb-5 text-sm text-amber-300">{message}</p>}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="stat-card"><strong>{data.inquiries.length}</strong><span>Total Inquiries</span></div>
          <div className="stat-card"><strong>{data.analytics.mostVisitedPages?.length || 0}</strong><span>Tracked Pages</span></div>
          <div className="stat-card"><strong>{data.analytics.devices?.length || 0}</strong><span>Device Types</span></div>
          <button className="stat-card text-left" onClick={exportCsv}><Download className="mb-2 text-forge" /><span>Export CSV</span></button>
        </div>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-white"><Inbox /> Recent Inquiries</h3>
            <div className="space-y-3">{data.inquiries.slice(0, 6).map((inq) => <div className="rounded border border-white/10 bg-white/[.03] p-4" key={inq._id}><p className="font-semibold text-white">{inq.name} {inq.companyName && `- ${inq.companyName}`}</p><p className="text-sm text-slate-400">{inq.phone} | {inq.email}</p><p className="mt-2 text-sm text-slate-300">{inq.requirement}</p>{inq.fileUrl && <a className="mt-2 inline-block text-sm text-forge" href={inq.fileUrl}>Download drawing</a>}</div>)}</div>
          </div>
          <div className="glass-card p-6">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-white"><Users /> Monthly Inquiry Stats</h3>
            <ResponsiveContainer width="100%" height={300}><BarChart data={data.analytics.monthlyInquiries || []}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff18" /><XAxis dataKey="month" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip contentStyle={{ background: "#08111f", border: "1px solid #ffffff22" }} /><Bar dataKey="count" fill="#4fb5ff" radius={[5, 5, 0, 0]} /></BarChart></ResponsiveContainer>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[["Update Website Text", Edit3], ["Manage Gallery Images", ImagePlus], ["Update Contact Details", Users]].map(([label, Icon]) => <div className="glass-card p-5" key={label}><Icon className="mb-3 text-forge" /><p className="font-semibold text-white">{label}</p><p className="mt-2 text-sm text-slate-400">Backend endpoints are included for production CMS wiring.</p></div>)}
        </div>
      </Section>
    </main>
  );
}
