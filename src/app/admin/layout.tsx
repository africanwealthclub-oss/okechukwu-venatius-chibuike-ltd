import Link from "next/link";
import type { Metadata } from "next";
import { Activity, BriefcaseBusiness, ClipboardList, LayoutDashboard, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Admin | OVC",
  description: "Non-production demonstration of an OVC website administration dashboard.",
  robots: { index: false, follow: false },
};

const navigation = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: BriefcaseBusiness },
  { href: "/admin/services", label: "Services", icon: ClipboardList },
  { href: "/admin/enquiries", label: "Enquiries", icon: Activity },
];

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link href="/admin" className="admin-brand"><span className="admin-brand-mark">OVC</span><span><strong>OVC Admin</strong><small>Website console</small></span></Link>
        <div className="admin-demo-tag">DEMO · NOT CONNECTED</div>
        <nav className="admin-navigation" aria-label="Admin demo navigation">
          <span className="admin-nav-label">Workspace</span>
          {navigation.map(({ href, label, icon: Icon }) => <Link href={href} key={href} className="admin-nav-link"><Icon size={17} aria-hidden="true" />{label}</Link>)}
          <span className="admin-nav-label admin-nav-label-spaced">System</span>
          <span className="admin-nav-link admin-nav-disabled"><Settings2 size={17} aria-hidden="true" />Settings <small>Preview</small></span>
        </nav>
        <div className="admin-sidebar-note"><span className="admin-status-dot" />Preview workspace<p>This demo does not save changes or manage live site data.</p></div>
      </aside>
      <div className="admin-content-wrap">
        <header className="admin-topbar"><div><span className="admin-breadcrumb">OVC / Admin</span><strong>Management preview</strong></div><span className="admin-user"><span className="admin-avatar">OV</span><span>Demo user<small>Read-only preview</small></span></span></header>
        <main id="main-content" className="admin-content">{children}</main>
      </div>
    </div>
  );
}
