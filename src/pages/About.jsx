import { Building2, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { infrastructure, profile } from "../data/siteContent";

export default function About() {
  const timeline = ["Superior quality sheet metal press components", "Versatile fabrication for sheets, pipes and bars", "Welding and finishing support", "Long-term customer partnerships"];
  return (
    <main className="page-top">
      <SEO title="About ANSH INDUSTRIES | Vision, Mission & Infrastructure" description="Learn about ANSH INDUSTRIES, its vision, mission, manufacturing strength, factory and fabrication capability." />
      <Section eyebrow="About" title="Precision-led sheet metal manufacturing from Sangli MIDC.">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="stacked-media">{infrastructure.slice(0, 3).map((img) => <img key={img.image} src={img.image} alt={img.title} loading="lazy" />)}</Reveal>
          <Reveal delay={.1}>
            <p className="text-lg leading-8 text-slate-300">{profile.intro}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{profile.capabilities.map((item) => <div className="glass-card flex gap-3 p-4" key={item}><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-forge" /><span className="text-sm text-slate-200">{item}</span></div>)}</div>
          </Reveal>
        </div>
      </Section>
      <Section eyebrow="Vision & Mission" title="A clear operating philosophy for quality and delivery." className="bg-metal-900/55">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass-card p-8"><Building2 className="mb-5 text-forge" /><h3 className="text-2xl font-bold text-white">Vision</h3><p className="mt-4 leading-8 text-slate-300">{profile.vision}</p></Reveal>
          <Reveal delay={.1} className="glass-card p-8"><h3 className="text-2xl font-bold text-white">Mission</h3><div className="mt-5 space-y-4">{profile.mission.map((m) => <p className="border-l-2 border-forge/70 pl-4 leading-7 text-slate-300" key={m}>{m}</p>)}</div></Reveal>
        </div>
      </Section>
      <Section eyebrow="Manufacturing Strength" title="Profile-backed facilities with a practical process chain.">
        <div className="timeline">{timeline.map((item, index) => <Reveal className="timeline-item" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></Reveal>)}</div>
      </Section>
    </main>
  );
}
