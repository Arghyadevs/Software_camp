"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { NeonButton } from "@/components/ui/NeonButton";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ArrowRight, Monitor, Printer, Fingerprint, FileText } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (headlineRef.current) {
      const chars = headlineRef.current.innerText.split("");
      headlineRef.current.innerText = "";
      
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        if (char === " ") span.innerHTML = "&nbsp;";
        headlineRef.current?.appendChild(span);
      });

      gsap.to(headlineRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
    }
  }, []);

  const floatingIcons = [
    { Icon: Monitor, color: "text-blue-400", delay: 0, position: "top-20 left-[10%]" },
    { Icon: Printer, color: "text-purple-400", delay: 1, position: "top-40 right-[15%]" },
    { Icon: Fingerprint, color: "text-cyan-400", delay: 2, position: "bottom-32 left-[20%]" },
    { Icon: FileText, color: "text-emerald-400", delay: 1.5, position: "bottom-40 right-[25%]" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full blur-[120px] -z-10"></div>
      
      {/* Floating Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden md:flex items-center justify-center w-16 h-16 rounded-2xl glass ${item.color} -z-10 opacity-60`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-primary)]/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
          <span className="text-sm font-medium text-[var(--color-primary)]">Modern Digital Technology Hub</span>
        </motion.div>

        <h1 
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight text-glow max-w-5xl mx-auto leading-tight"
        >
          Your Complete Digital Service Hub
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          From Government Services to Printing, Banking, Online Applications and Premium Graphic Design — <strong className="text-white font-medium">Everything Under One Roof.</strong>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#services">
            <NeonButton className="w-full sm:w-auto">
              Book a Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
          </Link>
          <div className="flex gap-4 w-full sm:w-auto">
            <Link href="tel:+919732740816" className="flex-1 sm:flex-none">
              <NeonButton variant="outline" className="w-full">
                Call Now
              </NeonButton>
            </Link>
            <Link href="https://wa.me/919732740816" target="_blank" className="flex-1 sm:flex-none">
              <NeonButton variant="secondary" className="w-full">
                WhatsApp
              </NeonButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
