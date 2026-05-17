"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useCallback, useEffect, useRef } from "react";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-2xl border border-transparent bg-clip-padding font-geist text-sm font-medium outline-none select-none [corner-shape:squircle] will-change-transform transition-[transform,opacity,background-color,color,border-color,box-shadow] duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none focus-visible:ring-2 focus-visible:ring-neutral-600/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] active:duration-75 active:ease-out [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
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
        sm: "h-7 rounded-md px-2 text-xs",
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

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  sound = false,
  onClick,
  type,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!sound) return;

    const audio = new Audio(
      "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/sounds/click-TmKA0dWx6pzrULf44iAEBXU8FaPJBk.mp3",
    );

    audio.preload = "auto";
    audio.volume = 0.7;

    clickSoundRef.current = audio;

    return () => {
      audio.pause();
      clickSoundRef.current = null;
    };
  }, [sound]);

  const playSound = useCallback(() => {
    if (!sound || !clickSoundRef.current) return;

    const audio = clickSoundRef.current;

    audio.pause();
    audio.currentTime = 0;

    void audio.play();
  }, [sound]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound();

    onClick?.(e);
  };

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      type={!asChild ? (type ?? "button") : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
