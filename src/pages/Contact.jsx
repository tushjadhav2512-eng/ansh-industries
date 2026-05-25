import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { contact } from "../data/siteContent";

export default function Contact() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
  return (
    <main className="page-top">
      <SEO title="Contact ANSH INDUSTRIES | Sangli MIDC" description="Contact ANSH INDUSTRIES for sheet metal press components, fabrication and welding inquiries." />
      <Section eyebrow="Contact" title="Talk to ANSH INDUSTRIES about your fabrication requirement.">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="glass-card p-7">
            <div className="contact-row"><MapPin /><p>{contact.address}</p></div>
            <div className="contact-row"><Mail /><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            {contact.phones.map((phone) => <div className="contact-row" key={phone}><Phone /><a href={`tel:+91${phone.replace(/\s/g, "")}`}>+91 {phone}</a></div>)}
            <p className="mt-8 text-sm uppercase tracking-[.2em] text-slate-500">GSTIN: {contact.gstin}</p>
            <a className="btn-primary mt-8 inline-flex" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Inquiry</a>
          </Reveal>
          <Reveal delay={.1} className="glass-card overflow-hidden p-2"><iframe title="ANSH INDUSTRIES Google Map" src={map} className="h-[460px] w-full rounded border-0" loading="lazy" /></Reveal>
        </div>
      </Section>
    </main>
  );
}
