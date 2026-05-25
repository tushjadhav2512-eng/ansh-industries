import { Blocks, Cog, Factory, Flame, Settings2, ShieldCheck, Wrench, Zap } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { services } from "../data/siteContent";

export default function Services() {
  const iconMap = { Blocks, Cog, Factory, Flame, Settings2, ShieldCheck, Wrench, Zap };
  return (
    <main className="page-top">
      <SEO title="Services | ANSH INDUSTRIES" description="Sheet metal press components, fabrication, MIG welding, TIG welding, Arc welding, SS fabrication, industrial fabrication and custom manufacturing." />
      <Section eyebrow="Services" title="Modern manufacturing services for industrial sheet metal requirements.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Cog;
            return (
              <Reveal delay={index * .04} className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-icon"><Icon size={22} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
