"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Building2, GraduationCap, Building, Plane, Printer, 
  PenTool, Monitor, FileCheck, CreditCard, Camera,
  Briefcase, Search, ArrowRight
} from "lucide-react";

type Category = "All" | "Government" | "Education" | "Banking" | "Travel" | "Printing" | "Design" | "Digital";

const categories: { id: Category; label: string; icon: any }[] = [
  { id: "All", label: "All Services", icon: Search },
  { id: "Government", label: "Govt & CSC", icon: Building2 },
  { id: "Education", label: "Education", icon: GraduationCap },
  { id: "Banking", label: "Banking", icon: Building },
  { id: "Travel", label: "Travel", icon: Plane },
  { id: "Printing", label: "Printing", icon: Printer },
  { id: "Design", label: "Graphics", icon: PenTool },
  { id: "Digital", label: "Digital", icon: Monitor },
];

const services = [
  { title: "PAN Card", category: "Government", icon: FileCheck },
  { title: "Aadhaar Update Guidance", category: "Government", icon: FileCheck },
  { title: "Income Certificate", category: "Government", icon: FileCheck },
  { title: "Caste Certificate", category: "Government", icon: FileCheck },
  { title: "Residence Certificate", category: "Government", icon: FileCheck },
  { title: "Birth & Death Certificate", category: "Government", icon: FileCheck },
  { title: "Voter Services", category: "Government", icon: FileCheck },
  { title: "Scholarship", category: "Education", icon: GraduationCap },
  { title: "PM Kisan", category: "Government", icon: Building2 },
  { title: "e-Shram", category: "Government", icon: Briefcase },
  { title: "School Forms", category: "Education", icon: GraduationCap },
  { title: "College Admission", category: "Education", icon: GraduationCap },
  { title: "Exam Forms", category: "Education", icon: GraduationCap },
  { title: "Resume & CV Design", category: "Education", icon: PenTool },
  { title: "AEPS (Aadhaar Pay)", category: "Banking", icon: CreditCard },
  { title: "Cash Withdrawal", category: "Banking", icon: CreditCard },
  { title: "Money Transfer", category: "Banking", icon: CreditCard },
  { title: "Insurance Premium", category: "Banking", icon: Building },
  { title: "Rail & Bus Ticket", category: "Travel", icon: Plane },
  { title: "Flight & Hotel Booking", category: "Travel", icon: Plane },
  { title: "Color Print & Photocopy", category: "Printing", icon: Printer },
  { title: "Lamination & Passport Photo", category: "Printing", icon: Camera },
  { title: "Flex & Banner Design", category: "Design", icon: PenTool },
  { title: "Logo & Visiting Card", category: "Design", icon: PenTool },
  { title: "Wedding & Invitation Card", category: "Design", icon: PenTool },
  { title: "DigiLocker Setup", category: "Digital", icon: Monitor },
  { title: "Online Registration", category: "Digital", icon: Monitor },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Premium Services" 
          subtitle="A comprehensive range of digital and government services at your fingertips."
        />

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-primary)] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "glass text-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-foreground/50 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard hoverEffect className="h-full flex flex-col group p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 flex-grow">{service.title}</h4>
                  <div className="mt-4 flex items-center text-sm text-foreground/50 group-hover:text-white transition-colors">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/60 text-lg">No services found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
