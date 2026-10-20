import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, ClipboardList, MessageSquareText, Plus } from "lucide-react";

const metrics = [
  { label: "Portfolio items", value: "04", note: "Sample project visuals", icon: BriefcaseBusiness, tone: "blue" },
  { label: "Services", value: "13", note: "From the public website", icon: ClipboardList, tone: "gold" },
  { label: "New enquiries", value: "03", note: "Illustrative demo records", icon: MessageSquareText, tone: "green" },
];
const activity = [
  { title: "Project visual added", detail: "Residential exterior · sample entry", time: "Today, 10:24", kind: "Project" },
  { title: "Service list reviewed", detail: "Public service descriptions", time: "Yesterday", kind: "Services" },
  { title: "Enquiry marked for follow-up", detail: "Demo enquiry · not a real customer", time: "18 Oct", kind: "Enquiry" },
];

export default function AdminDashboardPage() {
  return (
    <>
      <div className="admin-demo-alert"><strong>Demo dashboard</strong><span>Sample records only. No sign-in, database, or live editing is configured.</span></div>
      <div className="admin-page-heading"><div><p className="admin-eyebrow">Tuesday · Overview</p><h1>Good afternoon</h1><p>Here’s a quick snapshot of the OVC website workspace.</p></div><Link className="admin-primary-button" href="/admin/projects"><Plus size={16} /> Manage portfolio</Link></div>
      <section className="admin-metric-grid" aria-label="Sample dashboard metrics">{metrics.map(({ label, value, note, icon: Icon, tone }) => <article className="admin-metric-card" key={label}><span className={`admin-metric-icon ${tone}`}><Icon size={19} /></span><span className="admin-metric-label">{label}</span><strong>{value}</strong><small>{note}</small></article>)}</section>
      <div className="admin-dashboard-grid">
        <section className="admin-panel"><div className="admin-panel-heading"><div><p className="admin-eyebrow">Workspace activity</p><h2>Recent updates</h2></div><span className="admin-panel-badge">DEMO DATA</span></div><div className="admin-activity-list">{activity.map((item) => <article className="admin-activity-item" key={item.title}><span className="admin-activity-mark" /><div><strong>{item.title}</strong><p>{item.detail}</p></div><span className="admin-activity-time">{item.time}</span></article>)}</div><Link href="/admin/projects" className="admin-inline-link">Browse demo workspace <ArrowRight size={15} /></Link></section>
        <section className="admin-panel admin-shortcuts"><div className="admin-panel-heading"><div><p className="admin-eyebrow">Quick access</p><h2>Admin pages</h2></div></div><Link href="/admin/projects"><span className="admin-shortcut-icon"><BriefcaseBusiness size={17} /></span><span><strong>Projects</strong><small>Review portfolio visuals</small></span><ArrowUpRight size={15} /></Link><Link href="/admin/services"><span className="admin-shortcut-icon"><ClipboardList size={17} /></span><span><strong>Services</strong><small>Browse published offerings</small></span><ArrowUpRight size={15} /></Link><Link href="/admin/enquiries"><span className="admin-shortcut-icon"><MessageSquareText size={17} /></span><span><strong>Enquiries</strong><small>See illustrative examples</small></span><ArrowUpRight size={15} /></Link></section>
      </div>
      <p className="admin-footnote">Preview only: the counts and activity above are demonstration content and do not represent current company operations.</p>
    </>
  );
}
