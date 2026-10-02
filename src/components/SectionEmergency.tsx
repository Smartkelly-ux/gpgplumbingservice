import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';
import { EditorialImage } from './EditorialImage';

export const SectionEmergency: React.FC = () => {
  return (
    <section
      id="emergency"
      className="relative w-full min-h-[75vh] flex flex-col justify-center overflow-hidden bg-[#171715] text-[#FBF9F5] py-28 sm:py-36 border-b border-white/10"
      aria-label="Emergency Plumbing"
    >
      {/* Dark Photographic Background with slow calm transition */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ filter: 'brightness(0.22) contrast(1.1)' }}
        whileInView={{ filter: 'brightness(0.3) contrast(1.15)' }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <EditorialImage
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2400&q=85"
          alt="Emergency plumbing high-pressure valve shutoff infrastructure"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover"
          overlayClassName="bg-[#171715]/85"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          {/* Small Mono Label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#C9C1B7]">
              24 / 7
            </span>
            <span className="text-white/20">/</span>
            <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
              DISPATCH READY
            </span>
          </div>

          {/* Large Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[48px] sm:text-[68px] lg:text-[80px] font-medium leading-[0.98] tracking-[-0.04em] text-[#FBF9F5] mb-8"
          >
            WHEN IT
            <br />
            CAN'T WAIT.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#C9C1B7] font-light leading-relaxed mb-12 max-w-xl"
          >
            Emergency plumbing support when an urgent problem needs attention.
          </motion.p>

          {/* Clickable Call Button CTA */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <MagneticSpring strength={0.2} maxDistance={8}>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group link-editorial inline-flex items-center gap-4 text-[28px] sm:text-[38px] lg:text-[46px] font-medium tracking-[-0.03em] text-[#FBF9F5] hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white py-1"
              >
                <span>CALL EMERGENCY DISPATCH</span>
                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-3" aria-hidden="true">
                  →
                </span>
              </a>
            </MagneticSpring>
          </motion.div>

          {/* Emergency protocol metadata */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 font-mono-meta text-[11px] text-[#999897] tracking-[0.16em]">
            <span>BURST PIPES</span>
            <span>·</span>
            <span>MAIN SEWER BACKUPS</span>
            <span>·</span>
            <span>FAILED MAIN SHUTOFFS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
