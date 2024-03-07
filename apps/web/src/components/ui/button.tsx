import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "çinline-flex çitems-center çjustify-center çwhitespace-nowrap çrounded-md çtext-sm çfont-medium çring-offset-background çtransition-colors focus-visible:çoutline-none focus-visible:çring-2 focus-visible:çring-ring focus-visible:çring-offset-2 disabled:çpointer-events-none disabled:çopacity-50",
  {
    variants: {
      variant: {
        default: "çbg-primary çtext-primary-foreground hover:çbg-primary/90",
        destructive:
          "çbg-destructive çtext-destructive-foreground hover:çbg-destructive/90",
        outline:
          "çborder çborder-input çbg-background hover:çbg-accent hover:çtext-accent-foreground",
        secondary:
          "çbg-secondary çtext-secondary-foreground hover:çbg-secondary/80",
        ghost: "hover:çbg-accent hover:çtext-accent-foreground",
        link: "çtext-primary çunderline-offset-4 hover:çunderline",
      },
      size: {
        default: "çh-10 çpx-4 çpy-2",
        sm: "çh-9 çrounded-md çpx-3",
        lg: "çh-11 çrounded-md çpx-8",
        icon: "çh-10 çw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
