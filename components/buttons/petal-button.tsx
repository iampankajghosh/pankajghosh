import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-2xl border border-transparent bg-clip-padding font-geist text-sm font-medium outline-none select-none [corner-shape:squircle] will-change-transform transition-[transform,opacity,filter,background-color,color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none motion-reduce:transform-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] active:duration-75 active:ease-out disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 before:absolute before:inset-px before:-z-20 before:rounded-2xl before:content-[''] before:[corner-shape:squircle] after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:content-[''] after:[corner-shape:squircle] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-white text-white ring-1 ring-rose-600 before:bg-rose-600 before:inset-shadow-sm before:inset-shadow-white/50 after:bg-linear-to-b after:from-transparent after:to-rose-600 after:inset-shadow-sm after:inset-shadow-white/50 hover:brightness-[1.03]",
        outline:
          "border-border bg-background text-foreground hover:bg-muted hover:text-foreground before:hidden after:hidden",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 before:hidden after:hidden",
        ghost:
          "text-foreground hover:bg-muted hover:text-foreground before:hidden after:hidden",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 before:hidden after:hidden",
        link: "bg-transparent text-primary shadow-none ring-0 transition-colors hover:underline before:hidden after:hidden",
      },
      size: {
        default:
          "h-10 gap-2 px-4 py-2 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-7 gap-1.5 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 px-5 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-11 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
