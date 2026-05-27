import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Home,
  Trash2,
  Wind,
  Wrench,
  Layers,
  Check,
  ChevronRight,
  Clock,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/C68ADC9E-0D0F-47D3-A937-11CC2C0C25F0.png";
import roofingPhoto from "@/imports/image.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Droplets,
    title: "Gutter Services",
    description:
      "Keep water flowing away from your foundation with our full range of gutter care.",
    items: ["Gutter cleaning", "New gutter installation", "Repair & resealing"],
  },
  {
    icon: Home,
    title: "Roof Debris & Shingle Repair",
    description:
      "We clear what accumulates and restore what wears — keeping your roof tight and reliable.",
    items: ["Debris removal & haul-away", "Shingle repair", "Shingle replacement"],
  },
  {
    icon: Trash2,
    title: "Junk Removal",
    description:
      "Fast, responsible removal of unwanted items and waste from your residential or commercial property.",
    items: ["Residential junk removal", "Construction debris", "Yard waste hauling"],
  },
  {
    icon: Wind,
    title: "HVAC Curb Installation",
    description:
      "Weatherproof, code-compliant rooftop HVAC curb installations done right the first time.",
    items: ["Rooftop curb mounting", "Curb adapter fitting", "Weatherproofing & flashing"],
  },
  {
    icon: Wrench,
    title: "Roof Vent Pipe Services",
    description:
      "Proper ventilation protects your home. We install and repair vent pipes to seal and perform correctly.",
    items: ["New vent pipe installation", "Vent pipe repair", "Flashing & collar sealing"],
  },
  {
    icon: Layers,
    title: "Clay Tile Roofs",
    description:
      "Skilled repair and complete installation of clay tile roofing — timeless beauty, lasting protection.",
    items: ["Clay tile repair", "Full tile installation", "Underlayment & flashing"],
  },
  {
    icon: Waves,
    title: "Pressure Washing",
    description:
      "High-pressure cleaning that restores driveways, walkways, siding, and exterior surfaces to like-new condition.",
    items: ["Driveway & walkway washing", "Siding & exterior cleaning", "Deck & patio washing"],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-primary shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
          {/* Left: Logo + Name */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center justify-self-start"
            aria-label="Torres Property Services — home"
          >
            <div className="h-11 w-11 rounded overflow-hidden bg-white flex items-center justify-center shadow-sm flex-shrink-0">
              <ImageWithFallback
                src={logoSrc}
                alt="Torres Property Services logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="ml-2.5 flex flex-col leading-none">
              <span
                className="text-white text-sm font-bold tracking-tight"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Torres
              </span>
              <span className="text-white/60 text-[9px] tracking-widest uppercase font-medium">
                Property Services
              </span>
            </div>
          </button>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-white/75 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden" />

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded tracking-wide uppercase hover:bg-[#1F6BA8] transition-colors"
            >
              Get a Quote
            </button>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 px-6 pb-6 pt-2 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/80 hover:text-white text-base font-semibold uppercase tracking-wide transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-4 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded uppercase tracking-wide text-center hover:bg-[#1F6BA8] transition-colors"
            >
              Get a Quote
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&h=900&fit=crop&auto=format"
          alt="Roofing work in progress"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/60" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Large logo in hero */}
            <div className="mb-8 inline-block">
              <div className="w-28 h-28 rounded-xl overflow-hidden bg-white shadow-xl flex items-center justify-center">
                <ImageWithFallback
                  src={logoSrc}
                  alt="Torres Property Services"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-5">
              Serving the Greater Houston Area
            </p>
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Your Property,
              <br />
              <span className="text-accent">Our Craft.</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
              From gutters to clay tile roofs, Torres Property Services handles the
              jobs that protect what you own — done cleanly, done right.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-7 py-3.5 bg-accent text-white text-sm font-bold uppercase tracking-wide rounded hover:bg-[#1F6BA8] transition-colors flex items-center gap-2"
              >
                Get a Free Quote <ChevronRight size={16} />
              </button>
              <button
                onClick={() => handleNavClick("#services")}
                className="px-7 py-3.5 border border-white/30 text-white text-sm font-bold uppercase tracking-wide rounded hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Callout cards */}
          <div className="hidden md:flex flex-col gap-4">
            {[
              { icon: ShieldCheck, label: "Quality Guaranteed", sub: "Every job backed by our workmanship promise" },
              { icon: Clock, label: "Prompt Scheduling", sub: "We show up on time and finish what we start" },
              { icon: Phone, label: "English Line", sub: "(346) 442-9770" },
              { icon: Phone, label: "Línea en Español", sub: "(832) 800-0256" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded p-4"
              >
                <div className="mt-0.5 p-2 bg-accent/20 rounded">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-white/50 text-sm mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Our Services
            </h2>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
              A focused range of exterior and roofing services — each one done with the
              same level of care and attention to detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, description, items }) => (
              <div
                key={title}
                className="group bg-card border border-border rounded p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="inline-flex p-3 bg-accent/10 rounded mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3
                  className="text-foreground text-lg font-bold mb-2"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={13} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="overflow-hidden rounded bg-muted aspect-[4/3]">
              <ImageWithFallback
                src={roofingPhoto}
                alt="Roofing installation and repair work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded p-5 shadow-xl hidden sm:block">
              <p
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                10+
              </p>
              <p className="text-xs uppercase tracking-widest mt-1 text-white/80">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Built on Trust,
              <br />
              Delivered with Pride.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Torres Property Services was founded on a simple idea: do the work right,
              treat every property like your own, and the rest follows. We are a
              family-owned operation with over a decade of hands-on experience in roofing,
              gutter systems, and property maintenance.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Whether it is a single shingle repair or a complete clay tile installation,
              we bring the same attention to every job — showing up on time, communicating
              clearly, and cleaning up when we leave.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {[
                "Free estimates",
                "Family owned",
                "No subcontracting",
                "Transparent pricing",
                "Satisfaction guaranteed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check size={14} className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Request a Free Estimate
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Tell us about your project and we will get back to you promptly with honest
              pricing and a clear plan. No pressure, no surprises.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Phone,
                  label: "English",
                  value: "(346) 442-9770",
                  sub: undefined,
                },
                {
                  icon: Phone,
                  label: "Español",
                  value: "(832) 800-0256",
                  sub: undefined,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "torrespropertyservices1@gmail.com",
                  sub: "We respond within 24 hours",
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "Houston",
                  sub: "Residential & commercial",
                },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/10 rounded mt-0.5">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    <p className="text-foreground font-semibold text-sm">{value}</p>
                    {sub && <p className="text-muted-foreground text-xs mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Check size={32} className="text-accent" />
                </div>
                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  Message Received!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thank you for reaching out. We will be in touch within one business day
                  to discuss your project.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                  }}
                  className="mt-2 text-accent text-sm font-semibold underline underline-offset-2 hover:text-[#1F6BA8] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input-background border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input-background border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input-background border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="bg-input-background border border-border rounded px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition appearance-none"
                  >
                    <option value="">Select a service…</option>
                    <option>Gutter Cleaning</option>
                    <option>Gutter Installation</option>
                    <option>Gutter Repair</option>
                    <option>Roof Debris Removal</option>
                    <option>Shingle Repair</option>
                    <option>Junk Removal</option>
                    <option>HVAC Curb Installation</option>
                    <option>Roof Vent Pipe Services</option>
                    <option>Clay Tile Roof Work</option>
                    <option>Pressure Washing</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project or what you need help with…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input-background border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full py-3.5 bg-accent text-white text-sm font-bold uppercase tracking-wide rounded hover:bg-[#1F6BA8] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded overflow-hidden bg-white flex items-center justify-center">
              <ImageWithFallback
                src={logoSrc}
                alt="Torres Property Services logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p
                className="text-white font-bold text-sm"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Torres Property Services
              </p>
              <p className="text-white/40 text-xs mt-0.5">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/45 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
