/**
 * FadeIn component for scroll-triggered animations
 * Style: Gentle fade-up with stagger support
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const { ref, isInView } = useInView();

  const directionMap = {
    up: { y: 30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionMap[direction],
      }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
