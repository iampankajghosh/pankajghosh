"use client";

import { SourceCodeIcon } from "@/app/icons";
import { motion } from "motion/react";
import Link from "next/link";

export function Logo() {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <Link
        href="/"
        className="font-inter flex w-36 items-center leading-6 tracking-tight overflow-hidden focus:outline-none focus-visible:ring focus-visible:ring-neutral-300 active:scale-95 transition duration-150 ease-in-out"
      >
        <motion.span
          variants={{
            rest: { rotate: 0 },
            hover: {
              rotate: 180,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          className="flex items-center justify-center mx-1"
        >
          <SourceCodeIcon className="size-6 pt-px" />
        </motion.span>

        <div className="relative flex items-center overflow-hidden">
          <motion.span
            className="whitespace-nowrap"
            variants={{
              rest: { x: 0 },
              hover: {
                x: -60,
                transition: { duration: 0.3, ease: "easeInOut" },
              },
            }}
          >
            <motion.span
              variants={{
                rest: { opacity: 1, filter: "blur(0px)" },
                hover: {
                  opacity: 0,
                  filter: "blur(10px)",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              code by{" "}
            </motion.span>
            pankaj{" "}
            <motion.span
              variants={{
                rest: { opacity: 0, filter: "blur(10px)" },
                hover: {
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              ghosh
            </motion.span>
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
