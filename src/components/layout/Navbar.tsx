"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-background rounded-[11px] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src="/logo.jpg" alt="Software Camp Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-glow transition-all">
              SOFTWARE <span className="text-[var(--color-primary)]">CAMP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-white hover:text-glow transition-all flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>
                
                {/* Mega Menu Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass rounded-2xl p-6 grid grid-cols-2 gap-6 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                    <div>
                      <h4 className="text-[var(--color-primary)] font-semibold mb-3 flex items-center gap-2 text-glow">
                         Government & CSC
                      </h4>
                      <ul className="space-y-2">
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">PAN & Aadhaar Services</Link></li>
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Certificates (Income, Caste)</Link></li>
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Scholarship & PM Kisan</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[var(--color-primary)] font-semibold mb-3 flex items-center gap-2 text-glow">
                         Banking & Travel
                      </h4>
                      <ul className="space-y-2">
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">AEPS & Money Transfer</Link></li>
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Bill Payments & Recharges</Link></li>
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Flight, Train & Bus Tickets</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[var(--color-primary)] font-semibold mb-3 flex items-center gap-2 text-glow">
                         Design & Printing
                      </h4>
                      <ul className="space-y-2">
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Flex & Banner Design</Link></li>
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Logo & Visiting Cards</Link></li>
                        <li><Link href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Color Print & Lamination</Link></li>
                      </ul>
                    </div>
                    <div className="bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)] flex flex-col justify-center items-center text-center">
                      <p className="text-sm text-white mb-2 font-medium">View all 50+ services</p>
                      <Link href="#services" className="text-xs bg-[var(--color-primary)] text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition-colors">
                        Explore All
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="tel:+919732740816"
              className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>9732740816</span>
            </Link>
            <Link
              href="#contact"
              className="neon-border bg-transparent text-white px-6 py-2.5 rounded-full font-medium text-sm overflow-hidden group relative"
            >
              <span className="relative z-10">Book Service</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-20 group-hover:opacity-100 transition-opacity z-0"></div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl transition-all duration-300 overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-[var(--color-border)]" />
          <Link
            href="tel:+919732740816"
            className="flex items-center gap-3 text-lg font-medium text-white/80 hover:text-[var(--color-primary)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 9732740816</span>
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center py-3 rounded-xl font-medium mt-4"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </header>
  );
}
