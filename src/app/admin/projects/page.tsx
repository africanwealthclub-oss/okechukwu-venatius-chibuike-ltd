import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ImagePlus } from "lucide-react";

const projects = [
  { name: "Residential exterior", type: "Design visual", image: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.43.jpeg" },
  { name: "Completed residence", type: "Exterior visual", image: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44 (1).jpeg" },
  { name: "Two-storey residence", type: "Exterior visual", image: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44 (2).jpeg" },
  { name: "Construction site", type: "Work-in-progress visual", image: "/images/projects/WhatsApp Image 2026-10-19 at 00.54.44.jpeg" },
];

export default function AdminProjectsPage() {
  return <><div className="admin-demo-alert"><strong>Read-only demo page</strong><span>These are supplied portfolio visuals. Upload and edit controls are not connected.</span></div><div className="admin-page-heading"><div><p className="admin-eyebrow">Content · Portfolio</p><h1>Projects</h1><p>Review the visuals currently displayed in the public portfolio.</p></div><Link className="admin-quiet-button" href="/projects" target="_blank" rel="noreferrer">View public page <ArrowUpRight size={15} /></Link></div><section className="admin-panel"><div className="admin-panel-heading"><div><p className="admin-eyebrow">Portfolio gallery</p><h2>Project visuals <span className="admin-count">04</span></h2></div><span className="admin-panel-badge">SAMPLE CONTENT</span></div><div className="admin-project-grid">{projects.map((project) => <article className="admin-project-card" key={project.name}><div className="admin-project-image"><Image src={project.image} alt={project.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /></div><div className="admin-project-copy"><span>{project.type}</span><strong>{project.name}</strong></div></article>)}</div><div className="admin-info-banner"><ImagePlus size={18} /><p><strong>Project updates are a preview.</strong> No upload or delete action is wired to this demo dashboard.</p></div></section></>;
}
