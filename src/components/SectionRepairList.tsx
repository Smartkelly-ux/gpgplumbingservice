import React from 'react';
import { motion } from 'motion/react';
import { REPAIR_COLUMNS } from '../types';

export const SectionRepairList: React.FC = () => {
  return (
    <section
      id="repairs"
      className="relative w-full bg-[#FBF9F5] text-[#131313] py-28 sm:py-36 lg:py-44 border-b border-[#C9C1B7]/30"
      aria-label="Repair Scope"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Label */}
        <div className="mb-16 sm:mb-20">
          <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
            04 / SCOPE OF REPAIR
          </span>
        </div>

        {/* Minimal Three-Column Pure Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {REPAIR_COLUMNS.map((col, colIdx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: colIdx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col"
            >
              {/* Column Category Monospace Subtitle */}
              <div className="pb-4 mb-6 border-b border-[#C9C1B7]/40">
                <span className="font-mono-meta text-[11px] text-[#999897] tracking-[0.18em]">
                  {col.title}
                </span>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-6 sm:gap-8">
                {col.items.map((item) => (
                  <div
                    key={item}
                    className="font-sans text-[28px] sm:text-[32px] lg:text-[38px] font-normal tracking-[-0.03em] text-black leading-tight"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
