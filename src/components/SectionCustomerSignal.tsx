import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CUSTOMER_NOTES } from '../types';

export const SectionCustomerSignal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle horizontal typography shift on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Moves subtly horizontally across the viewport
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-14%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F3F1ED] text-[#131313] py-20 sm:py-28 overflow-hidden border-b border-[#C9C1B7]/30"
      aria-label="Verified Customer Feedback Themes"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-8">
        <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
          CUSTOMER NOTES
        </span>
      </div>

      {/* Horizontal Editorial Typography Strip */}
      <div className="w-full select-none">
        <motion.div
          style={{ x }}
          className="flex items-center gap-12 sm:gap-20 whitespace-nowrap will-change-transform"
        >
          {CUSTOMER_NOTES.map((note, idx) => (
            <div key={`${note}-${idx}`} className="flex items-center gap-12 sm:gap-20">
              <span className="font-sans text-[36px] sm:text-[50px] lg:text-[68px] font-light tracking-[-0.035em] text-[#131313]">
                {note}
              </span>
              <span className="text-[#C9C1B7] text-2xl sm:text-3xl font-light" aria-hidden="true">
                /
              </span>
            </div>
          ))}

          {/* Repeat set for seamless scroll continuity */}
          {CUSTOMER_NOTES.map((note, idx) => (
            <div key={`dup-${note}-${idx}`} className="flex items-center gap-12 sm:gap-20" aria-hidden="true">
              <span className="font-sans text-[36px] sm:text-[50px] lg:text-[68px] font-light tracking-[-0.035em] text-[#999897]">
                {note}
              </span>
              <span className="text-[#C9C1B7] text-2xl sm:text-3xl font-light">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-8">
        <div className="flex items-center justify-between font-mono-meta text-[11px] text-[#999897] tracking-[0.16em]">
          <span>VERIFIED SERVICE FEEDBACK</span>
          <span>MIAMI-DADE RESIDENTIAL & COMMERCIAL</span>
        </div>
      </div>
    </section>
  );
};
