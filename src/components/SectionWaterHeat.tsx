import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';
import { EditorialImage } from './EditorialImage';

export const SectionWaterHeat: React.FC = () => {
  return (
    <section
      id="water-heat"
      className="relative w-full bg-[#FBF9F5] text-[#131313] pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-[#C9C1B7]/30"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Type B (Vertical Water-Heater Photo) with slight bottom overlap */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] sm:aspect-[4/5] max-w-[480px] overflow-hidden bg-[#171715] lg:translate-y-12 z-10 shadow-2xl"
            >
              <EditorialImage
                src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1400&q=85"
                alt="Modern water heater installation and mechanical pressure system"
                className="w-full h-full object-cover grayscale-[15%] contrast-110"
                containerClassName="w-full h-full"
              >
                <div className="absolute top-4 left-4 font-mono-meta text-[11px] text-[#C9C1B7] bg-black/70 px-3 py-1 tracking-[0.16em]">
                  THERMAL // TANK & TANKLESS
                </div>
              </EditorialImage>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & Small Black CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Small Mono Label */}
            <div className="mb-6">
              <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
                03 / TEMPERATURE
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-sans text-[38px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.04] tracking-[-0.035em] text-black mb-6">
              HOT WATER.
              <br />
              BACK TO NORMAL.
            </h2>

            {/* Small Copy */}
            <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#585858] font-light leading-relaxed mb-8 max-w-md">
              Water-heater repair, installation and replacement services.
            </p>

            {/* Small Black CTA Button */}
            <div>
              <MagneticSpring strength={0.24} maxDistance={8}>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="btn-motion inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-[#FBF9F5] font-mono-meta text-[12px] sm:text-[13px] tracking-[0.16em] hover:tracking-[0.19em] font-medium hover:bg-[#171715] hover:shadow-xl hover:shadow-black/25"
                >
                  CALL NOW
                </a>
              </MagneticSpring>
            </div>

            {/* Minimal Specs */}
            <div className="mt-12 pt-6 border-t border-[#C9C1B7]/40 flex flex-wrap items-center gap-6 font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
              <span>ELEMENT TESTING</span>
              <span>·</span>
              <span>EXPANSION TANKS</span>
              <span>·</span>
              <span>GAS & ELECTRIC</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
