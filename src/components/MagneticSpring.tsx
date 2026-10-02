import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

interface MagneticSpringProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier: 0.15 - 0.25 for quiet precision
  maxDistance?: number; // Maximum offset in px: 6 - 8px max
  onClick?: () => void;
}

export const MagneticSpring: React.FC<MagneticSpringProps> = ({
  children,
  className = '',
  strength = 0.2,
  maxDistance = 7,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Precise, critically-damped spring configuration (stiff, zero slop/bounce)
  const springConfig = { stiffness: 380, damping: 28, mass: 0.35 };
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Respect reduced-motion and touch devices
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    // Strict clamping to avoid loose/bouncy feel
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

    rawX.set(clampedX);
    rawY.set(clampedY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
