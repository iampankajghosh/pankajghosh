import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-2xl border border-transparent bg-neutral-800 bg-clip-padding font-geist text-sm font-medium text-white outline-none select-none [corner-shape:squircle] will-change-transform transition-[transform,opacity,background-color,color,border-color,box-shadow,filter] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none motion-reduce:transform-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] active:duration-75 active:ease-out cursor-pointer ring-1 ring-neutral-300 before:absolute before:inset-0.5 before:-z-10 before:rounded-2xl before:bg-transparent before:content-[''] before:[corner-shape:squircle] before:inset-shadow-2xs before:inset-shadow-neutral-400 after:absolute after:inset-0 after:-z-20 after:m-px after:rounded-2xl after:bg-neutral-700 after:content-[''] after:[corner-shape:squircle] after:inset-shadow-sm after:inset-shadow-neutral-900 after:filter-[blur(0.4px)] hover:brightness-[1.03] dark:ring-neutral-800 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
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
      size: "default",
    },
  },
);

function Button({
  className,
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
      data-size={size}
      className={cn(buttonVariants({ size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
