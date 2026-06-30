import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-white bg-clip-padding font-geist text-sm font-medium text-white outline-none select-none will-change-transform transition-[transform,opacity,filter,background-color,color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none motion-reduce:transform-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] active:duration-75 active:ease-out disabled:pointer-events-none disabled:opacity-50 cursor-pointer ring-1 ring-rose-600 before:absolute before:inset-px before:-z-20 before:rounded-md before:bg-rose-600 before:content-[''] before:inset-shadow-sm before:inset-shadow-white/50 after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-linear-to-b after:from-transparent after:to-rose-600 after:content-[''] after:inset-shadow-sm after:inset-shadow-white/50 hover:brightness-[1.03] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
