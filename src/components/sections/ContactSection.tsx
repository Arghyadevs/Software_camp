"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or need to book a service? We're here to help you!"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <GlassCard className="flex items-start gap-6 p-6">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Near Raghunathpur Samiti<br />
                  SOFTWARE CAMP Digital Hub
                </p>
                <a href="#" className="text-sm font-semibold text-[var(--color-primary)] hover:text-white transition-colors flex items-center gap-2">
                  Get Directions <span className="text-lg">→</span>
                </a>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-6 p-6">
              <div className="w-14 h-14 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Call or WhatsApp</h4>
                <div className="space-y-2 mb-4">
                  <a href="tel:+919732740816" className="block text-foreground/70 hover:text-white transition-colors">+91 9732740816 (Primary)</a>
                  <a href="tel:+917872739691" className="block text-foreground/70 hover:text-white transition-colors">+91 7872739691 (Alternate)</a>
                </div>
                <a href="https://wa.me/919732740816" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--color-secondary)] hover:text-white transition-colors flex items-center gap-2">
                  Message on WhatsApp <span className="text-lg">→</span>
                </a>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-6 p-6">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Business Hours</h4>
                <div className="space-y-2 text-foreground/70">
                  <p className="flex justify-between w-full max-w-xs">
                    <span>Monday - Saturday:</span>
                    <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between w-full max-w-xs">
                    <span>Sunday:</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 lg:p-10 border-[var(--color-primary)]/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Book a Service or Enquire</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service Required</label>
                  <select 
                    id="service" 
                    defaultValue=""
                    className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="gov">Government Services (PAN, Aadhaar etc)</option>
                    <option value="banking">Banking & Money Transfer</option>
                    <option value="design">Graphic Design (Banner, Logo)</option>
                    <option value="printing">Printing & Lamination</option>
                    <option value="other">Other Query</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                    placeholder="Tell us exactly what you need..."
                  ></textarea>
                </div>

                <NeonButton type="submit" className="w-full pt-4">
                  Send Message
                  <Send className="w-4 h-4" />
                </NeonButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
