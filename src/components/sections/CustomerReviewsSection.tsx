"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Rahul M.",
    date: "2 weeks ago",
    content: "Best CSC center in the area. I applied for my PAN card here and got it within the promised time. The staff is very knowledgeable and helped me with all the documents.",
    rating: 5,
    service: "PAN Card Application"
  },
  {
    name: "Priya S.",
    date: "1 month ago",
    content: "Got my college project printed and spiral bound here. The quality of color printing is excellent and prices are very reasonable compared to other shops.",
    rating: 5,
    service: "Printing & Binding"
  },
  {
    name: "Amit Kumar",
    date: "2 months ago",
    content: "Very helpful in applying for PM Kisan scheme. They explained the whole process clearly. Highly recommend Software Camp for any government online work.",
    rating: 5,
    service: "PM Kisan Registration"
  },
  {
    name: "Sneha Das",
    date: "3 weeks ago",
    content: "I needed an urgent flex banner design for my boutique. The graphic design team did an amazing job and delivered the final print on the same day!",
    rating: 5,
    service: "Graphic Design"
  }
];

export function CustomerReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Don't just take our word for it. Here's what people in our community think about our services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full relative pt-10">
                <div className="absolute top-0 right-6 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Quote className="w-5 h-5 text-white fill-white" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
                
                <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-white">{review.name}</h5>
                      <p className="text-xs text-foreground/50">{review.date}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1 text-[8px] uppercase tracking-wider font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </div>
                      <span className="text-xs text-foreground/50 line-clamp-1 max-w-[100px]" title={review.service}>
                        {review.service}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">4.9</span>
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
              </div>
            </div>
            <div className="w-px h-8 bg-[var(--color-border)]"></div>
            <p className="text-sm text-foreground/70">Based on <strong className="text-white">150+</strong> Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
