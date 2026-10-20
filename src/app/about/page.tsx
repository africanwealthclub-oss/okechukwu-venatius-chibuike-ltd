import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PhotoPlaceholder from "@/components/projects/PhotoPlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About Us", "Learn about Okechukwu Venatius Chibuike Ltd. and its construction, architectural finishing and maintenance service scope.", "/about");

const focusAreas = ["Construction services", "Architectural finishing", "Building maintenance", "Customer satisfaction"];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="page-hero-grid shell"><div><p className="eyebrow">About the company</p><h1>Built on quality and commitment</h1><p className="page-hero-description">An introduction to Okechukwu Venatius Chibuike Ltd. and the construction and finishing services in its supplied brief.</p></div><aside className="page-hero-aside"><p>“YOUR SATISFACTION IS OUR UTMOST PRIORITY.”</p></aside></div></section>
      <section className="page-content"><div className="about-split shell"><div className="about-visual"><PhotoPlaceholder label="Approved company or engineer photograph pending upload" /></div><div className="about-copy"><p className="eyebrow">Okechukwu Venatius Chibuike Ltd.</p><h2>Construction and finishing with a focus on workmanship</h2><p>Okechukwu Venatius Chibuike Ltd. is a construction and architectural finishing company. Its supplied service scope includes construction, painting and design, wall screeding, wallpaper installation, stucco finishing, maintenance, project coordination and related work.</p><p>The company describes its focus as quality workmanship and customer satisfaction. This website keeps the introduction concise until approved company history, mission, vision, leadership details or professional credentials are provided.</p><ul className="about-qualities">{focusAreas.map((area) => <li key={area}><span className="quality-check"><Check size={15} aria-hidden="true" /></span>{area}</li>)}</ul><Link className="button button-navy" href="/services">Explore Services <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>
      <section className="section section-muted"><div className="shell"><SectionHeading eyebrow="Our approach" title="Clear scope. Careful execution." description="Project details, site conditions and the requested service are discussed before a scope is agreed. No project history, completion statistics or qualifications are assumed on this page." /><div className="values-grid"><article className="value-card"><span className="value-number">01</span><h3>Discuss the brief</h3><p>Share the requirements, service needed and project location.</p></article><article className="value-card"><span className="value-number">02</span><h3>Clarify the scope</h3><p>Review project details and confirm what work is required.</p></article><article className="value-card"><span className="value-number">03</span><h3>Plan next steps</h3><p>Contact the company to discuss how to proceed with an enquiry.</p></article><article className="value-card"><span className="value-number">04</span><h3>Stay customer-focused</h3><p>Keep quality workmanship and customer satisfaction in focus.</p></article></div></div></section>
      <section className="section"><div className="cta-panel shell"><div><p className="eyebrow">Discuss your requirements</p><h2>Let's talk about your project.</h2><p>Contact the company to discuss a construction, painting or finishing enquiry.</p></div><Link className="button button-gold" href="/contact#quote">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
