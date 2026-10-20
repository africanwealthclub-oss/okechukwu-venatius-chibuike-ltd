import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/company";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-topline" aria-hidden="true" />
      <div className="footer-main shell">
        <div className="footer-brand-column">
          <Link className="footer-logo-link" href="/" aria-label={`${COMPANY.name} home`}>
            <Image src="/brand/ovc-master-logo.png" alt={`${COMPANY.name} logo`} width={1959} height={803} className="footer-logo" sizes="(max-width: 760px) 190px, 220px" />
          </Link>
          <p>Professional construction, architectural finishing and building maintenance, with a focus on quality workmanship and customer satisfaction.</p>
          <span className="footer-motto">{COMPANY.motto}</span>
          <Link className="footer-enquiry-link" href="/contact#quote">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <nav className="footer-column" aria-label="Footer quick links">
          <h2>Explore</h2>
          <ul className="footer-link-list"><li><Link href="/">Home</Link></li><li><Link href="/about">About us</Link></li><li><Link href="/services">Services</Link></li><li><Link href="/projects">Projects</Link></li><li><Link href="/contact">Contact</Link></li></ul>
        </nav>
        <div className="footer-column">
          <h2>Our services</h2>
          <ul className="footer-link-list footer-service-list">
            {services.slice(0, 5).map((service) => <li key={service.id}><Link href={`/services#${service.id}`}>{service.title}</Link></li>)}
            <li><Link href="/services">View all services <span aria-hidden="true">→</span></Link></li>
          </ul>
        </div>
        <div className="footer-column footer-contact-column">
          <h2>Get in touch</h2>
          <p>Call to discuss your project requirements.</p>
          <ul className="footer-phone-list">{COMPANY.phones.map((phone) => <li key={phone.href}><Phone size={15} aria-hidden="true" /><div><a href={phone.href}>{phone.display}</a><span>{phone.country}</span></div></li>)}</ul>
          <p className="footer-availability"><MapPin size={14} aria-hidden="true" /> Serving project enquiries across Nigeria and Ghana</p>
        </div>
      </div>
      <div className="footer-bottom shell"><p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p><p>Construction <span>·</span> Architectural Finishing <span>·</span> Maintenance</p><Link href="/contact">Contact OVC <ArrowUpRight size={13} aria-hidden="true" /></Link></div>
    </footer>
  );
}
