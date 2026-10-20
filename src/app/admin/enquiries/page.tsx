import { Info, MessageSquareText } from "lucide-react";

const enquiries = [
  { initials: "JD", name: "Demo contact A", service: "Interior & exterior painting", location: "Sample location", status: "New", date: "Today" },
  { initials: "MK", name: "Demo contact B", service: "General construction", location: "Sample location", status: "In review", date: "Yesterday" },
  { initials: "EO", name: "Demo contact C", service: "Building maintenance", location: "Sample location", status: "Follow-up", date: "18 Oct" },
];

export default function AdminEnquiriesPage() {
  return <><div className="admin-demo-alert"><strong>Illustrative records only</strong><span>These are fictional examples, not real enquiries or customer information.</span></div><div className="admin-page-heading"><div><p className="admin-eyebrow">Inbox · Enquiries</p><h1>Enquiries</h1><p>A visual preview of how a future enquiry inbox could be organized.</p></div><span className="admin-quiet-button admin-static-label"><MessageSquareText size={15} /> 03 examples</span></div><section className="admin-panel"><div className="admin-panel-heading"><div><p className="admin-eyebrow">Recent enquiries</p><h2>Enquiry inbox</h2></div><span className="admin-panel-badge">FICTIONAL DATA</span></div><div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Contact</th><th>Service</th><th>Location</th><th>Status</th><th>Received</th></tr></thead><tbody>{enquiries.map((enquiry) => <tr key={enquiry.initials}><td><span className="admin-contact-cell"><span className="admin-avatar">{enquiry.initials}</span><strong>{enquiry.name}</strong></span></td><td>{enquiry.service}</td><td>{enquiry.location}</td><td><span className={`admin-enquiry-status ${enquiry.status.toLowerCase().replace(" ", "-")}`}>{enquiry.status}</span></td><td>{enquiry.date}</td></tr>)}</tbody></table></div><div className="admin-info-banner"><Info size={18} /><p><strong>No contact form submissions are stored on this website.</strong> The public quote form is preview-only. These records are fictional UI examples.</p></div></section></>;
}
