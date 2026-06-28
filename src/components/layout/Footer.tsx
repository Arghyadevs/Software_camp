import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-background border-t border-[var(--color-border)] pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[var(--color-primary)]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-background rounded-[11px] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/logo.jpg" alt="Software Camp Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                SOFTWARE <span className="text-[var(--color-primary)]">CAMP</span>
              </span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Your complete digital service hub for government services, banking, printing, online applications, and premium graphic design.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-foreground/70 hover:text-[var(--color-primary)] text-sm transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-foreground/70 hover:text-[var(--color-primary)] text-sm transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-[var(--color-primary)] text-sm transition-colors">All Services</Link></li>
              <li><Link href="#gallery" className="text-foreground/70 hover:text-[var(--color-primary)] text-sm transition-colors">Gallery</Link></li>
              <li><Link href="#reviews" className="text-foreground/70 hover:text-[var(--color-primary)] text-sm transition-colors">Customer Reviews</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Monday - Saturday</p>
                  <p className="text-foreground/70 text-sm mt-1">9:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Sunday</p>
                  <p className="text-foreground/70 text-sm mt-1">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-foreground/70 text-sm">Near Raghunathpur Samiti</p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919732740816" className="text-foreground/70 hover:text-white text-sm transition-colors">+91 9732740816</a>
                  <a href="tel:+917872739691" className="text-foreground/70 hover:text-white text-sm transition-colors">+91 7872739691</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <a href="mailto:softwarecamp.ap@gmail.com" className="text-foreground/70 hover:text-white text-sm transition-colors">softwarecamp.ap@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} SOFTWARE CAMP. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-foreground/50 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-foreground/50 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
