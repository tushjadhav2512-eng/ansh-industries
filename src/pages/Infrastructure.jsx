import { useState } from "react";
import ImageModal from "../components/ImageModal";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { infrastructure, profile } from "../data/siteContent";

export default function Infrastructure() {
  const [active, setActive] = useState(null);
  return (
    <main className="page-top">
      <SEO title="Infrastructure | ANSH INDUSTRIES" description="Press shop, welding setup, factory images, machines and manufacturing floor at ANSH INDUSTRIES." />
      <Section eyebrow="Infrastructure" title="Press shop, welding setup, machines and factory floor.">
        <div className="grid gap-5 md:grid-cols-3">{infrastructure.map((item, i) => <Reveal delay={i * .04} className="image-tile cursor-pointer" key={item.title}><button onClick={() => setActive(item)}><img src={item.image} alt={item.title} loading="lazy" /><span>{item.tag}</span><h3>{item.title}</h3></button></Reveal>)}</div>
      </Section>
      <Section eyebrow="Facilities" title="Machinery details from the profile." className="bg-metal-900/55">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{profile.facilities.map((item) => <Reveal className="machine-card" key={item.label}><p>{item.count}</p><h3>{item.label}</h3><span>{item.value}</span></Reveal>)}</div>
      </Section>
      <ImageModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}
