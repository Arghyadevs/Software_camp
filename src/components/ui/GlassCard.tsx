import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass rounded-2xl p-6",
          hoverEffect && "glass-hover cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"
