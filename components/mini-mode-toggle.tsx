"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ComputerIcon, MoonIcon, Sun01Icon } from "./icons";

const modes = [
  { id: "system", icon: ComputerIcon },
  { id: "light", icon: Sun01Icon },
  { id: "dark", icon: MoonIcon },
];

export function MiniModeToggle() {
  const [active, setActive] = useState("light");

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-gray-950/5 p-0.5">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setActive(mode.id)}
          className="relative inline-flex size-7 cursor-pointer items-center justify-center rounded-full outline-none"
        >
          {active === mode.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-white ring-1 ring-gray-950/10"
              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
            />
          )}

          <mode.icon className="relative z-10 fill-gray-950/10" />
        </button>
      ))}
    </div>
  );
}
