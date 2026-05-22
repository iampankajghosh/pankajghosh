"use client";

import { useEffect, useRef } from "react";

interface SpriteFrame {
  x: string;
  y: string;
  duration: number;
}

const WALK_FRAMES: SpriteFrame[] = [
  { x: "0px", y: "0px", duration: 110 },
  { x: "-32px", y: "0px", duration: 110 },
  { x: "-64px", y: "0px", duration: 110 },
  { x: "-96px", y: "0px", duration: 110 },
  { x: "-128px", y: "0px", duration: 110 },
  { x: "-160px", y: "0px", duration: 110 },
];

const IDLE_FRAMES: SpriteFrame[] = [
  { x: "0px", y: "-32px", duration: 100 },
  { x: "-32px", y: "-32px", duration: 100 },
  { x: "-64px", y: "-32px", duration: 120 },
  { x: "-96px", y: "-32px", duration: 120 },
  { x: "-128px", y: "-32px", duration: 400 },
  { x: "-160px", y: "-32px", duration: 500 },
  { x: "0px", y: "-64px", duration: 120 },
  { x: "-32px", y: "-64px", duration: 120 },
  { x: "-64px", y: "-64px", duration: 80 },
  { x: "-96px", y: "-64px", duration: 80 },
  { x: "-128px", y: "-64px", duration: 150 },
  { x: "-160px", y: "-64px", duration: 400 },
];

export function AnimatedCharacter() {
  const characterRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const scaleXRef = useRef(1);

  const isMovingRef = useRef(false);
  const startMovementTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const frameIndexRef = useRef<number>(0);
  const currentStateRef = useRef<"walking" | "idle">("idle");

  const isActiveRef = useRef(true);

  useEffect(() => {
    const runSpriteAnimation = () => {
      if (!characterRef.current) return;

      const isMoving = isMovingRef.current;
      const activeSequence = isMoving ? WALK_FRAMES : IDLE_FRAMES;
      const activeState = isMoving ? "walking" : "idle";

      if (currentStateRef.current !== activeState) {
        currentStateRef.current = activeState;
        frameIndexRef.current = 0;
      }

      const currentFrame = activeSequence[frameIndexRef.current];

      characterRef.current.style.backgroundPosition = `${currentFrame.x} ${currentFrame.y}`;
      frameIndexRef.current =
        (frameIndexRef.current + 1) % activeSequence.length;

      animationTimeoutRef.current = setTimeout(
        runSpriteAnimation,
        currentFrame.duration,
      );
    };

    runSpriteAnimation();

    return () => {
      if (animationTimeoutRef.current)
        clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    const SPEED = 1.2;
    const STOP_DISTANCE = 24;
    const HOME_STOP_DISTANCE = 4;
    const REACTION_DELAY = 300;

    const updateMovement = () => {
      if (!characterRef.current) {
        rafId = requestAnimationFrame(updateMovement);
        return;
      }

      if (!isActiveRef.current) {
        targetRef.current = { x: 0, y: 0 };
      }

      const dx = targetRef.current.x - positionRef.current.x;
      const dy = targetRef.current.y - positionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const threshold = isActiveRef.current
        ? STOP_DISTANCE
        : HOME_STOP_DISTANCE;

      if (isMovingRef.current) {
        if (distance > threshold) {
          const angle = Math.atan2(dy, dx);
          positionRef.current.x += Math.cos(angle) * SPEED;
          positionRef.current.y += Math.sin(angle) * SPEED;

          if (dx < -1) {
            scaleXRef.current = -1;
          } else if (dx > 1) {
            scaleXRef.current = 1;
          }
        } else {
          isMovingRef.current = false;
          if (!isActiveRef.current) {
            scaleXRef.current = 1;
          }
        }
      }

      characterRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) scaleX(${scaleXRef.current})`;

      rafId = requestAnimationFrame(updateMovement);
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosRef.current = {
        x: e.clientX - 16,
        y: e.clientY - 16,
      };

      if (!isActiveRef.current) return;

      targetRef.current = { ...lastMousePosRef.current };

      if (isMovingRef.current) return;

      if (!startMovementTimeoutRef.current) {
        startMovementTimeoutRef.current = setTimeout(() => {
          const currentDx = targetRef.current.x - positionRef.current.x;
          const currentDy = targetRef.current.y - positionRef.current.y;
          const currentDistance = Math.sqrt(
            currentDx * currentDx + currentDy * currentDy,
          );

          if (currentDistance > STOP_DISTANCE && isActiveRef.current) {
            isMovingRef.current = true;
          }

          startMovementTimeoutRef.current = null;
        }, REACTION_DELAY);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "c") {
        e.preventDefault();

        const nextState = !isActiveRef.current;
        isActiveRef.current = nextState;

        if (!nextState) {
          if (startMovementTimeoutRef.current) {
            clearTimeout(startMovementTimeoutRef.current);
            startMovementTimeoutRef.current = null;
          }
          isMovingRef.current = true;
        } else {
          targetRef.current = { ...lastMousePosRef.current };
          isMovingRef.current = true;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    rafId = requestAnimationFrame(updateMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(rafId);
      if (startMovementTimeoutRef.current)
        clearTimeout(startMovementTimeoutRef.current);
    };
  }, []);

  return (
    <span
      ref={characterRef}
      id="character"
      className="pointer-events-none absolute top-0 left-0 size-8 bg-no-repeat will-change-[transform,background-position] [image-rendering:pixelated]"
      style={{
        backgroundImage: `url('https://52zfksbd04lay7w1.public.blob.vercel-storage.com/animated-character/doraemon-UmwgkvO7NJjdOEX4c9HLPeERoG1N2U.png')`,
        backgroundSize: "192px 96px",
        backgroundPosition: "0px -32px",
        transform: "translate3d(0px, 0px, 0) scaleX(1)",
      }}
    />
  );
}
