"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/content/profile";

const initials = profile.name
  .split(" ")
  .map((n) => n[0])
  .join("");

interface AvatarProps {
  src?: string;
  size?: number;
  glow?: boolean;
  className?: string;
}

/**
 * Renders the profile photo when present at `src`; falls back to an
 * initials badge if the file is missing (e.g. before the real photo is added).
 */
export function Avatar({ src = "/profile.png", size = 88, glow = true, className }: AvatarProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  // The browser can finish loading a fast/cached image before React finishes
  // hydrating and attaches onLoad — `complete` catches that race on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) {
      setStatus(img.naturalWidth > 0 ? "loaded" : "failed");
    }
  }, [src]);

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-line-strong bg-bg-overlay",
        glow && "glow-ring",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {/* Base layer: initials, always mounted so a failed/loading photo never
          shows the browser's native broken-image icon + alt text. */}
      {status !== "loaded" && (
        <div className="gradient-text absolute inset-0 flex items-center justify-center bg-bg-overlay font-display text-lg font-bold">
          {initials}
        </div>
      )}
      {status !== "failed" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={`${profile.name} — profile photo`}
          width={size}
          height={size}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            status === "loaded" ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("failed")}
        />
      )}
    </div>
  );
}
