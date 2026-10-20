import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Construction & Architectural Finishing", "Professional construction, architectural finishing and building maintenance services focused on quality workmanship and customer satisfaction.", "/");

const strengths = [
  { number: "01", title: "Attention to detail", text: "A quality-focused approach to construction and finishing requirements." },
  { number: "02", title: "Range of services", text: "A broad scope spanning construction, finishing, maintenance and coordination." },
  { number: "03", title: "Project coordination", text: "Clear discussion of project requirements, scope and next steps." },
  { number: "04", title: "Customer satisfaction", text: "Workmanship and service focused on customer satisfaction." },
];

const projectImages = {
  hero: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.43.jpeg",
  feature: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44 (1).jpeg",
  build: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44.jpeg",
  exterior: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44 (2).jpeg",
};

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`project-image ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 60vw" /></div>;
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Construction · Architectural finishing · Maintenance</p>
            <h1>BUILDING QUALITY.<span>FINISHING WITH EXCELLENCE.</span></h1>
            <p className="hero-description">Professional construction, architectural finishing and building maintenance services focused on quality workmanship and customer satisfaction.</p>
            <div className="hero-actions"><Link className="button button-gold" href="/contact#quote">Request a Quote <ArrowRight size={17} aria-hidden="true" /></Link><Link className="button button-outline-dark" href="/projects">View Our Projects <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
            <p className="hero-annotation">A practical approach to every project conversation</p>
          </div>
          <div className="hero-media"><ProjectImage className="hero-photo" src={projectImages.hero} alt="Residential exterior design with a dark roof and detailed white façade" /><div className="hero-media-note"><span>Selected project visual</span>Residential design and construction work supplied by OVC.</div></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company service focus"><div className="trust-grid shell">{["Construction services", "Architectural finishing", "Building maintenance", "Customer-focused workmanship"].map((item) => <div className="trust-item" key={item}><span className="trust-item-mark" aria-hidden="true" /><span>{item}</span></div>)}</div></section>

      <section className="section" aria-labelledby="home-services-heading"><div className="shell"><SectionHeading eyebrow="What we do" title="Our construction & finishing services" description="Explore the service areas in the company's supplied scope. Share your requirements and the project details can be discussed directly." /><div className="services-grid">{services.slice(0, 6).map((service) => <ServiceCard key={service.id} service={service} compact />)}</div><div className="section-link-row"><Link className="text-link" href="/services">View all services <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>

      <section className="section section-muted" aria-labelledby="home-projects-heading"><div className="shell"><SectionHeading eyebrow="Portfolio" title="Our projects" description="A selection of residential design and construction visuals supplied for the OVC portfolio." /><div className="project-feature"><ProjectImage src={projectImages.feature} alt="Completed residential exterior with a dark roof, white walls and driveway" /><div className="project-feature-copy"><p className="eyebrow">Featured project visual</p><h3>Thoughtful design. Practical workmanship.</h3><p>Explore selected residential exteriors and construction visuals in the portfolio. Project names, locations and dates are available on request.</p><Link className="button button-navy" href="/projects">View the portfolio <ArrowRight size={16} aria-hidden="true" /></Link></div></div><div className="project-mini-grid" aria-label="Selected project visuals"><div className="project-card"><ProjectImage src={projectImages.exterior} alt="Two-storey residential exterior with warm architectural lighting" /><span className="project-card-label">Residential exterior visual</span></div><div className="project-card"><ProjectImage src={projectImages.build} alt="Residential building under construction with scaffolding" /><span className="project-card-label">Construction in progress</span></div><div className="project-card"><ProjectImage src={projectImages.hero} alt="Single-storey residential exterior design" /><span className="project-card-label">Residential design visual</span></div></div></div></section>

      <section className="section" aria-labelledby="home-about-heading"><div className="about-split shell"><div className="about-visual"><ProjectImage src={projectImages.build} alt="Residential building under construction with visible scaffolding" /></div><div className="about-copy"><p className="eyebrow">About OVC</p><h2 id="home-about-heading">Built on quality and commitment</h2><p>Okechukwu Venatius Chibuike Ltd. provides construction, architectural finishing and building maintenance services. The company’s stated focus is quality workmanship and customer satisfaction.</p><p>Explore the services or contact the team to discuss the scope and requirements of a project.</p><ul className="about-qualities"><li><span className="quality-check"><Check size={15} aria-hidden="true" /></span>Construction and finishing</li><li><span className="quality-check"><Check size={15} aria-hidden="true" /></span>Painting and design</li><li><span className="quality-check"><Check size={15} aria-hidden="true" /></span>Project coordination</li><li><span className="quality-check"><Check size={15} aria-hidden="true" /></span>Maintenance enquiries</li></ul><Link className="text-link" href="/about">About the company <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>

      <section className="section section-muted" aria-labelledby="why-heading"><div className="shell"><SectionHeading eyebrow="Why OVC" title="A considered approach to your project" description="Practical strengths drawn from the brief—not unverified statistics or credentials." /><div className="values-grid">{strengths.map((item) => <article className="value-card" key={item.number}><span className="value-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

      <section className="section"><div className="cta-panel shell"><div><p className="eyebrow">Start a conversation</p><h2>Have a project in mind?</h2><p>Let's discuss your construction, painting or finishing requirements.</p></div><Link className="button button-gold" href="/contact">Contact Us <ArrowRight size={17} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
