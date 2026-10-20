import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export default function AdminServicesPage() {
  return <><div className="admin-demo-alert"><strong>Read-only demo page</strong><span>Service details mirror the public site. Editing is disabled and does not save.</span></div><div className="admin-page-heading"><div><p className="admin-eyebrow">Content · Service catalog</p><h1>Services</h1><p>Browse the published service areas and their current summaries.</p></div><Link className="admin-quiet-button" href="/services" target="_blank" rel="noreferrer">View public page <ArrowUpRight size={15} /></Link></div><section className="admin-panel"><div className="admin-panel-heading"><div><p className="admin-eyebrow">Published catalog</p><h2>All services <span className="admin-count">{String(services.length).padStart(2, "0")}</span></h2></div><span className="admin-panel-badge">READ ONLY</span></div><div className="admin-service-list">{services.map((service, index) => <article className="admin-service-row" key={service.id}><span className="admin-service-number">{String(index + 1).padStart(2, "0")}</span><div><strong>{service.title}</strong><p>{service.summary}</p></div><span className="admin-published"><CheckCircle2 size={14} /> Published</span></article>)}</div></section></>;
}
