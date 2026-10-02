import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';

interface SectionFinalCtaProps {
  onRequestService: () => void;
}

export const SectionFinalCta: React.FC<SectionFinalCtaProps> = ({ onRequestService }) => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#FBF9F5] text-[#131313] py-32 sm:py-44 lg:py-56"
      aria-label="Direct Service Request"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          
          {/* Section Mono Label */}
          <div className="mb-8">
            <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
              06 / DISPATCH & INTAKE
            </span>
          </div>

          {/* Large Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[52px] sm:text-[76px] lg:text-[96px] font-medium leading-[0.96] tracking-[-0.04em] text-black mb-10"
          >
            LET'S FIX
            <br />
            WHAT'S WRONG.
          </motion.h2>

          {/* Supporting Entity Lines */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <p className="text-[20px] sm:text-[24px] text-[#585858] font-light leading-relaxed">
              {BUSINESS_INFO.legalName}
            </p>
            <p className="text-[17px] sm:text-[19px] text-[#999897] font-mono-meta tracking-[0.12em] mt-1">
              MIAMI, FLORIDA
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 sm:gap-10"
          >
            <MagneticSpring strength={0.25} maxDistance={8}>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-motion inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-[#FBF9F5] font-mono-meta text-[13px] tracking-[0.16em] hover:tracking-[0.19em] font-medium hover:bg-[#171715] hover:shadow-2xl hover:shadow-black/25"
              >
                CALL G P G
              </a>
            </MagneticSpring>

            <MagneticSpring strength={0.2} maxDistance={6}>
              <button
                type="button"
                onClick={onRequestService}
                className="group link-editorial inline-flex items-center gap-3 font-mono-meta text-[13px] tracking-[0.16em] text-black hover:text-[#585858] cursor-pointer py-1"
              >
                <span>REQUEST SERVICE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                  →
                </span>
              </button>
            </MagneticSpring>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
