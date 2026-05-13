"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center select-none rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",

        ghost:
          "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",

        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800",
      },

      size: {
        default: "h-9 px-3",
        sm: "h-7 rounded px-2 text-xs",
        icon: "size-8",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    sound?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  sound = false,
  onClick,
  type,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const clickSoundRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (!sound) return;

    const audio = new Audio(
      "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/sounds/click-TmKA0dWx6pzrULf44iAEBXU8FaPJBk.mp3",
    );

    audio.preload = "auto";

    clickSoundRef.current = audio;
  }, [sound]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (sound && clickSoundRef.current) {
      const audio = clickSoundRef.current;

      audio.pause();
      audio.currentTime = 0;

      void audio.play();
    }

    onClick?.(e);
  };

  return (
    <Comp
      type={!asChild ? type ?? "button" : undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Comp>
  );
}