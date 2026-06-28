import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-20", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mt-6 rounded-full", centered ? "mx-auto" : "")}></div>
    </div>
  )
}
