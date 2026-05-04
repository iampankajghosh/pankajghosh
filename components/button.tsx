"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "group cursor-pointer inline-flex items-center justify-center text-sm transition-all duration-150 ease-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/20 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px active:translate-y-0.5 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-600 hover:text-foreground",
        ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-900 dark:border-neutral-700",
      },
      size: {
        default: "h-7",
        sm: "h-5 text-xs px-1.5 rounded",
        icon: "size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const clickSoundRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    clickSoundRef.current = new Audio(
      "https://res.cloudinary.com/ddws3mapm/video/upload/v1777781848/switch-on_lmi5av.mp3",
    );
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }

    onClick?.(e);
  };

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={handleClick}
      {...props}
    />
  );
}
