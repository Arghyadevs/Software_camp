import * as React from "react"
import { cn } from "@/lib/utils"

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group px-8 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300",
          variant === "primary" && "bg-[var(--color-primary)] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]",
          variant === "secondary" && "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:shadow-[0_0_20px_rgba(112,0,255,0.6)]",
          variant === "outline" && "neon-border bg-transparent text-white hover:text-white",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        {variant === "outline" && (
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-10 group-hover:opacity-100 transition-opacity z-0"></div>
        )}
      </button>
    )
  }
)
NeonButton.displayName = "NeonButton"
