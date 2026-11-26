import React, { useEffect, useRef, useState } from "react";

interface ScrollTiltProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum X-axis tilt in degrees driven by scroll progress */
  maxTiltX?: number;
  /** Maximum Y-axis tilt in degrees driven by scroll progress */
  maxTiltY?: number;
  /** Direction multiplier for Y-axis tilt (-1 or 1) to alternate cards */
  tiltDirection?: 1 | -1;
  /** Enable interactive pointer hover tilt on top of scroll tilt */
  hoverTilt?: boolean;
  /** Slight scale boost at center of viewport */
  centerScale?: number;
  /** Perspective distance in px */
  perspective?: number;
  /** Show subtle warm butter-gold sheen reacting to tilt */
  glare?: boolean;
}

/**
 * ScrollTilt applies hardware-accelerated 3D perspective tilt driven by the
 * element's vertical scroll progress through the viewport, optionally blended
 * with pointer hover tilt.
 */
export function ScrollTilt({
  children,
  className = "",
  maxTiltX = 11,
  maxTiltY = 7,
  tiltDirection = 1,
  hoverTilt = true,
  centerScale = 1.02,
  perspective = 1100,
  glare = true,
}: ScrollTiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    let rafId = 0;
    let isVisible = true;

    const updateTransform = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Normalized progress: -1 (below viewport) -> 0 (center) -> +1 (above viewport)
      const elementCenter = rect.top + rect.height / 2;
      const rawProgress = (vh / 2 - elementCenter) / (vh / 2 + rect.height / 2);
      const progress = Math.max(-1, Math.min(1, rawProgress));

      const scrollRotX = progress * maxTiltX;
      const scrollRotY = progress * maxTiltY * tiltDirection;
      const closeness = 1 - Math.abs(progress);
      const scale = 1 + closeness * (centerScale - 1);
      const translateY = progress * -10;

      const hoverRotX = pointerRef.current.active ? pointerRef.current.y * -6 : 0;
      const hoverRotY = pointerRef.current.active ? pointerRef.current.x * 7 : 0;

      const totalRotX = scrollRotX + hoverRotX;
      const totalRotY = scrollRotY + hoverRotY;

      el.style.transform = `perspective(${perspective}px) translate3d(0, ${translateY.toFixed(
        2
      )}px, 0) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(
        2
      )}deg) scale(${scale.toFixed(4)})`;

      if (glare) {
        const glareX = 50 + totalRotY * 3.5;
        const glareY = 50 - totalRotX * 3.5;
        el.style.setProperty("--glare-x", `${glareX.toFixed(1)}%`);
        el.style.setProperty("--glare-y", `${glareY.toFixed(1)}%`);
        el.style.setProperty(
          "--glare-opacity",
          pointerRef.current.active ? "0.22" : (0.06 + closeness * 0.08).toFixed(2)
        );
      }
    };

    const scheduleUpdate = () => {
      if (!isVisible) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateTransform);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting;
          if (isVisible) scheduleUpdate();
        }
      },
      { rootMargin: "120px 0px" }
    );

    observer.observe(el);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    updateTransform();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, maxTiltX, maxTiltY, tiltDirection, centerScale, perspective, glare]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverTilt || reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    pointerRef.current = { x: nx, y: ny, active: true };
    containerRef.current.style.transition = "transform 80ms ease-out";
    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const vh = window.innerHeight || 1;
      const elementCenter = rect.top + rect.height / 2;
      const progress = Math.max(
        -1,
        Math.min(1, (vh / 2 - elementCenter) / (vh / 2 + rect.height / 2))
      );
      const scrollRotX = progress * maxTiltX;
      const scrollRotY = progress * maxTiltY * tiltDirection;
      const closeness = 1 - Math.abs(progress);
      const scale = 1 + closeness * (centerScale - 1);
      const translateY = progress * -10;
      const totalRotX = scrollRotX + ny * -6;
      const totalRotY = scrollRotY + nx * 7;

      containerRef.current.style.transform = `perspective(${perspective}px) translate3d(0, ${translateY.toFixed(
        2
      )}px, 0) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(
        2
      )}deg) scale(${scale.toFixed(4)})`;
      if (glare) {
        containerRef.current.style.setProperty("--glare-x", `${(50 + totalRotY * 3.5).toFixed(1)}%`);
        containerRef.current.style.setProperty("--glare-y", `${(50 - totalRotX * 3.5).toFixed(1)}%`);
        containerRef.current.style.setProperty("--glare-opacity", "0.22");
      }
    });
  };

  const handleMouseLeave = () => {
    if (!hoverTilt || reducedMotion || !containerRef.current) return;
    pointerRef.current = { x: 0, y: 0, active: false };
    containerRef.current.style.transition = "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)";
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`scroll-tilt ${glare ? "scroll-tilt--glare" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
