import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Projects & Portfolio", "Selected residential design and construction visuals supplied for the OVC portfolio.", "/projects");

const images = [
  { src: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44 (1).jpeg", alt: "Completed residential exterior with a dark roof, white walls and driveway", label: "Residential exterior visual" },
  { src: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44 (2).jpeg", alt: "Two-storey residential exterior with warm architectural lighting", label: "Residential exterior visual" },
  { src: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44.jpeg", alt: "Residential building under construction with visible scaffolding", label: "Construction in progress" },
  { src: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.43.jpeg", alt: "Single-storey residential exterior design with a detailed white façade", label: "Residential design visual" },
];

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`project-image ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>;
}

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="page-hero-grid shell"><div><p className="eyebrow">Portfolio</p><h1>Our projects</h1><p className="page-hero-description">A considered selection of residential design and construction visuals supplied for OVC’s portfolio.</p></div><aside className="page-hero-aside"><p>Project names, locations, dates, budgets and completion claims will only appear when confirmed by the company.</p></aside></div></section>
      <section className="page-content"><div className="shell"><div className="project-gallery-feature"><ProjectImage src={images[0].src} alt={images[0].alt} /></div><div className="project-gallery-grid">{images.slice(1).map((image) => <article className="project-card" key={image.src}><ProjectImage src={image.src} alt={image.alt} /><span className="project-card-label">{image.label}</span></article>)}<article className="project-card project-video-card"><video controls muted loop playsInline preload="metadata" poster={images[2].src} aria-label="OVC project video"><source src="/images/projects/WhatsApp Video 2026-10-19 at 00.54.44.mp4" type="video/mp4" />Your browser does not support the project video.</video><span className="project-card-label">Project video visual</span></article></div><p className="project-gallery-note">These visuals were supplied for the OVC portfolio. Specific project names, locations and dates are not displayed because they were not provided with the assets. Contact the company for project details and availability.</p></div></section>
      <section className="section section-muted"><div className="cta-panel shell"><div><p className="eyebrow">Plan a project</p><h2>Have a project in mind?</h2><p>Talk to the company about your construction, painting or finishing requirements.</p></div><Link className="button button-gold" href="/contact#quote">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
