"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}

const styles: Record<string, string> = {
  primary:
    "bg-ink text-bg hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
  secondary:
    "border border-line-strong bg-bg-raised text-ink hover:border-accent-soft hover:text-white",
  ghost: "text-ink-muted hover:text-ink",
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external,
  className,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200",
    styles[variant],
    className,
  );

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {inner}
    </Link>
  );
}
