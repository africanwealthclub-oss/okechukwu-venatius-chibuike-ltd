import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoPlaceholder from "@/components/projects/PhotoPlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Projects & Portfolio", "A reserved architectural project gallery for approved OVC client photographs and verified project descriptions.", "/projects");

const gallerySlots = ["Additional project image slot", "Additional project image slot", "Additional project image slot", "Additional project image slot", "Additional project image slot", "Additional project image slot"];

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="page-hero-grid shell"><div><p className="eyebrow">Portfolio</p><h1>Our projects</h1><p className="page-hero-description">A considered space for OVC construction and finishing work, presented with authentic photographs and verified descriptions.</p></div><aside className="page-hero-aside"><p>Project names, locations, dates, budgets and completion claims will only appear when confirmed by the company.</p></aside></div></section>
      <section className="page-content"><div className="shell"><div className="project-gallery-feature"><PhotoPlaceholder label="Featured authentic OVC client project photograph pending upload" /></div><div className="project-gallery-grid">{gallerySlots.map((label, index) => <article className="project-card" key={`${label}-${index}`}><PhotoPlaceholder label="Authentic client project photograph pending upload" /><span className="project-card-label">{label} {String(index + 2).padStart(2, "0")} · Awaiting client photo</span></article>)}</div><p className="project-gallery-note">The image areas on this page are labelled placeholders, not photographs or claims of completed OVC projects. Replace them with approved client project photographs and confirmed captions when available.</p></div></section>
      <section className="section section-muted"><div className="cta-panel shell"><div><p className="eyebrow">Plan a project</p><h2>Have a project in mind?</h2><p>Talk to the company about your construction, painting or finishing requirements.</p></div><Link className="button button-gold" href="/contact#quote">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
