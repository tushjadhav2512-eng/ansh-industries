import { useMemo, useState } from "react";
import ImageModal from "../components/ImageModal";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { products } from "../data/siteContent";

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const categories = useMemo(() => ["All", ...new Set(products.map((p) => p.category))], []);
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);
  return (
    <main className="page-top">
      <SEO title="Products & Deliveries | ANSH INDUSTRIES" description="Sheet metal components, fabrication products, SS fabrication, industrial structures, conveyor brackets, stirrers, gratings and elevator boxes." />
      <Section eyebrow="Products / Deliveries" title="Real delivery examples from the ANSH INDUSTRIES profile.">
        <div className="mb-8 flex flex-wrap gap-3">{categories.map((cat) => <button className={`filter-chip ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)} key={cat}>{cat}</button>)}</div>
        <div className="masonry">{visible.map((item, i) => <Reveal delay={i * .035} className="product-card cursor-pointer" key={item.title}><button onClick={() => setActive(item)}><img src={item.image} alt={item.title} loading="lazy" /><div><p>{item.category}</p><h3>{item.title}</h3></div></button></Reveal>)}</div>
      </Section>
      <ImageModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}
