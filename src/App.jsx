import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "./assets/logo.png";

import InquiryButtons from "./components/InquiryButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Infrastructure from "./pages/Infrastructure";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import RFQ from "./pages/RFQ";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import { contact } from "./data/siteContent";

const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/infrastructure", "Infrastructure"],
  ["/products", "Products"],
  ["/rfq", "RFQ"],
  ["/contact", "Contact"]
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        path: location.pathname,
        userAgent: navigator.userAgent,
        device: window.innerWidth < 768 ? "mobile" : "desktop"
      })
    }).catch(() => {});
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition ${
        scrolled
          ? "bg-metal-950/85 shadow-glow backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-1">

          <img
            src={logo}
            alt="ANSH INDUSTRIES"
            className="h-40 w-auto object-contain"
          />

          <div>
            <span className="block font-display text-lg font-black tracking-wide text-white">
              {contact.company}
            </span>

            <span className="block text-xs uppercase tracking-[.22em] text-slate-400">
              Sheet Metal Works
            </span>
          </div>

        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Quote Button */}
        <NavLink
          to="/rfq"
          className="hidden rounded bg-forge px-5 py-3 text-sm font-bold text-metal-950 transition hover:bg-white lg:inline-flex"
        >
          Get Quote
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="icon-button lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-metal-950/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className="block rounded px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] py-12">

      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">

        {/* Company */}
        <div>

          <p className="font-display text-2xl font-black text-white">
            {contact.company}
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Sheet metal press components, fabrication, welding and custom metal manufacturing from Sangli MIDC.
          </p>

          <p className="mt-4 text-xs uppercase tracking-[.2em] text-slate-500">
            GSTIN: {contact.gstin}
          </p>

        </div>

        {/* Contact */}
        <div>

          <p className="footer-title">Contact</p>

          <a
            href={`mailto:${contact.email}`}
            className="footer-link"
          >
            {contact.email}
          </a>

          {contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:+91${phone.replace(/\s/g, "")}`}
              className="footer-link"
            >
              +91 {phone}
            </a>
          ))}

        </div>

        {/* Factory */}
        <div>

          <p className="footer-title">Factory</p>

          <p className="text-sm leading-6 text-slate-400">
            {contact.address}
          </p>

        </div>

      </div>

    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rfq" element={<RFQ />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />
      </Routes>

      <Footer />

      <InquiryButtons />
    </>
  );
}
