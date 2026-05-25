import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Factory, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { heroSlides, industries, infrastructure, products, profile, services, testimonials } from "../data/siteContent";

function HeroSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % heroSlides.length), 5200);
    return () => clearInterval(timer);
  }, []);
  const slide = heroSlides[index];
  return (
    <section className="relative min-h-screen overflow-hidden bg-metal-950">
      {heroSlides.map((item, i) => (
        <motion.img key={item.image} src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" initial={false} animate={{ opacity: i === index ? 0.52 : 0, scale: i === index ? 1 : 1.04 }} transition={{ duration: 1.2 }} />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,18,.96),rgba(7,17,31,.76),rgba(7,17,31,.2))]" />
      <div className="absolute inset-0 industrial-grid opacity-55" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 23 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Sheet Metal Press Components & Fabrication</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">{profile.headline}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-9 flex flex-wrap gap-4">
            <Link to="/rfq" className="btn-primary">Get Quote <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, i) => <button key={item.title} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition ${i === index ? "w-10 bg-forge" : "w-5 bg-white/35"}`} aria-label={`Show ${item.title}`} />)}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <SEO title="ANSH INDUSTRIES | Precision Sheet Metal Manufacturing Solutions" description="Sheet metal press components, sheet metal fabrication, MIG, TIG, arc welding and custom metal manufacturing in Sangli MIDC." />
      <HeroSlider />
      <Section eyebrow="About ANSH INDUSTRIES" title="A focused manufacturing partner for precision sheet metal work.">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <Reveal><p className="text-lg leading-8 text-slate-300">{profile.intro}</p></Reveal>
          <Reveal delay={.1} className="grid gap-4 sm:grid-cols-2">
            {["MS", "SS", "Aluminium", "Custom Fabrication"].map((item) => <div className="glass-card p-5" key={item}><Sparkles className="mb-4 text-forge" /><p className="font-semibold text-white">{item}</p></div>)}
          </Reveal>
        </div>
      </Section>
      <Section eyebrow="Vision & Mission" title="Built around precision, innovation and reliable delivery." className="bg-metal-900/55">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass-card p-7"><p className="eyebrow">Vision</p><p className="mt-4 text-lg leading-8 text-slate-200">{profile.vision}</p></Reveal>
          <Reveal delay={.1} className="glass-card p-7"><p className="eyebrow">Mission</p><ul className="mt-4 space-y-3">{profile.mission.slice(0, 4).map((m) => <li className="flex gap-3 text-slate-300" key={m}><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-forge" />{m}</li>)}</ul></Reveal>
        </div>
      </Section>
      <Section eyebrow="Why Choose Us" title="Practical manufacturing capability under one roof.">
        <div className="grid gap-5 md:grid-cols-3">
          {[["Press range", "5 Ton to 75 Ton mechanical power press capability.", Factory], ["Multi-process shop", "Pressing, shearing, bending, welding, drilling and painting.", Award], ["Customer focus", "Reliable, timely and efficient solutions tailored to requirements.", Clock]].map(([title, text, Icon], i) => (
            <Reveal delay={i * .06} className="glass-card p-7" key={title}><Icon className="mb-5 text-forge" /><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Services" title="From press components to custom industrial fabrication." className="bg-metal-900/55">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service, i) => (
            <Reveal delay={i * .04} className="service-mini" key={service.title}>
              <img src={service.image} alt={service.title} loading="lazy" />
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Infrastructure" title="Factory, press shop and welding setup from the company profile.">
        <div className="grid gap-5 md:grid-cols-3">
          {infrastructure.slice(0, 6).map((item, i) => <Reveal key={item.title} delay={i * .05} className="image-tile"><img src={item.image} alt={item.title} loading="lazy" /><span>{item.tag}</span><h3>{item.title}</h3></Reveal>)}
        </div>
      </Section>
      <Section eyebrow="Machine Capabilities" title="Production equipment listed in the ANSH INDUSTRIES profile." className="bg-metal-900/55">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{profile.facilities.map((item) => <Reveal className="machine-card" key={item.label}><p>{item.count}</p><h3>{item.label}</h3><span>{item.value}</span></Reveal>)}</div>
      </Section>
      <Section eyebrow="Industries Served" title="Manufacturing support for industrial buyers and OEM supply chains.">
        <div className="flex flex-wrap gap-3">{industries.map((industry) => <span className="pill" key={industry}>{industry}</span>)}</div>
      </Section>
      <Section eyebrow="Products & Deliveries" title="Representative components and fabricated products.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 8).map((item) => <Reveal className="product-card" key={item.title}><img src={item.image} alt={item.title} loading="lazy" /><div><p>{item.category}</p><h3>{item.title}</h3></div></Reveal>)}</div>
      </Section>
      <Section compact className="bg-metal-900/55">
        <div className="grid gap-4 md:grid-cols-4">{profile.stats.map((stat) => <div className="stat-card" key={stat.label}><strong><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong><span>{stat.label}</span></div>)}</div>
      </Section>
      <Section eyebrow="Testimonials" title="What buyers value in a fabrication partner.">
        <div className="grid gap-5 md:grid-cols-2">{testimonials.map((t) => <Reveal className="glass-card p-7" key={t.name}><p className="text-lg leading-8 text-slate-200">"{t.quote}"</p><p className="mt-5 font-bold text-white">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p></Reveal>)}</div>
      </Section>
      <Section compact>
        <div className="cta-band"><div><p className="eyebrow">Inquiry</p><h2>Need a press component, fabrication or welding job quoted?</h2></div><Link to="/rfq" className="btn-primary">Send RFQ <ArrowRight size={18} /></Link></div>
      </Section>
    </main>
  );
}
