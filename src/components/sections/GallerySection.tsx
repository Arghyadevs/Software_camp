"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Monitor, Printer, Users, Award, Image as ImageIcon, FileText } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Modern Workstation", category: "Computer Setup", icon: Monitor, color: "from-blue-500/20 to-purple-500/20", colSpan: "md:col-span-2 lg:col-span-2", rowSpan: "row-span-2" },
  { id: 2, title: "High-Quality Printing", category: "Printer", icon: Printer, color: "from-cyan-500/20 to-blue-500/20", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 3, title: "Happy Customers", category: "Customers", icon: Users, color: "from-purple-500/20 to-pink-500/20", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 4, title: "Certificate Design", category: "Samples", icon: Award, color: "from-emerald-500/20 to-teal-500/20", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 5, title: "Flex Banners", category: "Design", icon: ImageIcon, color: "from-orange-500/20 to-red-500/20", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 6, title: "Document Processing", category: "Services", icon: FileText, color: "from-indigo-500/20 to-cyan-500/20", colSpan: "md:col-span-2 lg:col-span-2", rowSpan: "row-span-1" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Workspace & Work" 
          subtitle="Take a look inside our modern facility and some of the premium quality work we deliver."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass ${item.colSpan} ${item.rowSpan} border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all cursor-pointer`}
            >
              {/* Placeholder Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-700 ease-in-out flex items-center justify-center`}>
                <item.icon className="w-24 h-24 text-white/10 group-hover:text-[var(--color-primary)]/40 transition-colors duration-500" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold text-white group-hover:text-glow transition-all">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
