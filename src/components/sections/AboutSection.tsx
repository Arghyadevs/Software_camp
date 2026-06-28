"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Zap, HeartHandshake, Laptop, Cpu, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    { icon: ShieldCheck, title: "Reliable", desc: "Trusted by 1000+ local customers for secure and authentic services." },
    { icon: Zap, title: "Fast", desc: "Quick processing of all government and digital applications." },
    { icon: HeartHandshake, title: "Customer Satisfaction", desc: "We prioritize your needs with professional support and guidance." },
    { icon: Cpu, title: "Technology Driven", desc: "Equipped with modern systems for high-quality digital solutions." },
    { icon: Laptop, title: "All Online Forms", desc: "From scholarships to passports, we handle all online registrations." },
    { icon: Users, title: "Affordable", desc: "Premium services at prices accessible to everyone in the community." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About SOFTWARE CAMP" 
          subtitle="Your most trusted digital service center, delivering reliable solutions using modern technology."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-heading mb-6 text-glow-purple">Our Vision</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              To become the most trusted and advanced Digital Service Center in rural India, bringing every essential digital facility to your doorstep with unmatched professionalism and speed.
            </p>
            
            <h3 className="text-3xl font-bold font-heading mb-6 text-glow">Our Mission</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Deliver reliable, fast, and affordable digital solutions using modern technology. We aim to simplify government processes, banking, and creative design for our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
            <GlassCard className="relative p-8 lg:p-12 border-[var(--color-primary)]/20">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">1000+</h4>
                  <p className="text-sm text-[var(--color-primary)] uppercase tracking-wider font-semibold">Customers Served</p>
                </div>
                <div>
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow-purple">50+</h4>
                  <p className="text-sm text-[var(--color-secondary)] uppercase tracking-wider font-semibold">Digital Services</p>
                </div>
                <div>
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">100%</h4>
                  <p className="text-sm text-[var(--color-primary)] uppercase tracking-wider font-semibold">Secure Process</p>
                </div>
                <div>
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow-purple">24/7</h4>
                  <p className="text-sm text-[var(--color-secondary)] uppercase tracking-wider font-semibold">Online Support</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-primary)] transition-colors">
                  <feature.icon className="w-6 h-6 text-white group-hover:text-[var(--color-primary)] transition-colors" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
