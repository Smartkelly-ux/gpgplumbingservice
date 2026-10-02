import React from 'react';
import { motion } from 'motion/react';
import { EditorialImage } from './EditorialImage';

export const SectionMiami: React.FC = () => {
  return (
    <section
      id="miami"
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center overflow-hidden bg-[#171715] text-[#FBF9F5] py-24 sm:py-32"
      aria-label="Miami Service Region"
    >
      {/* Full-width Photographic Background: Miami Modern Architecture Context */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <EditorialImage
          src={`${import.meta.env.BASE_URL}images/miami_residential_architecture_1790969223100.jpg`}
          alt="Miami Modern Residential Architecture"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover"
          overlayClassName="bg-[#171715]/80 backdrop-contrast-105"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Footprint */}
          <div className="lg:col-span-7">
            {/* Small Mono Label */}
            <div className="mb-6 sm:mb-8">
              <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#C9C1B7]">
                MIAMI / SOUTH FLORIDA
              </span>
            </div>

            {/* Large Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[48px] sm:text-[64px] lg:text-[76px] font-medium leading-[0.98] tracking-[-0.04em] text-[#FBF9F5] mb-8"
            >
              MIAMI
              <br />
              IS HOME.
            </motion.h2>

            {/* Below Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#C9C1B7] font-light leading-relaxed mb-12 max-w-xl"
            >
              G P G Plumbing serves customers across the Miami area, with a published service range extending roughly 40 miles from central Miami.
            </motion.p>

            {/* Micro Territory Footprint */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 font-mono-meta text-[12px] text-[#999897] tracking-[0.16em]">
              <div>
                <span className="text-white block">CENTER</span>
                <span className="text-[#999897]">2121 NW 13TH ST</span>
              </div>
              <div>
                <span className="text-white block">DISPATCH RADIUS</span>
                <span className="text-[#999897]">~40 MILES</span>
              </div>
              <div>
                <span className="text-white block">YEAR ESTABLISHED</span>
                <span className="text-[#999897]">2015</span>
              </div>
            </div>
          </div>

          {/* Right Column: Secondary Photographic Asset of Miami Plumbing Environment */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] aspect-[4/5] bg-black/60 border border-white/15 overflow-hidden shadow-2xl"
            >
              <EditorialImage
                src={`${import.meta.env.BASE_URL}images/hero_plumbing_environment_1790969209399.jpg`}
                alt="Miami residential plumbing mechanical water room environment"
                className="w-full h-full object-cover grayscale-[15%] contrast-110"
                containerClassName="w-full h-full"
                overlayClassName="bg-gradient-to-t from-black/85 via-black/20 to-transparent"
              >
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="font-mono-meta text-[10px] text-[#C9C1B7] tracking-[0.2em] block mb-1">
                    TERRITORY DISPATCH // ZONE 01
                  </span>
                  <span className="font-sans text-[15px] font-normal text-[#FBF9F5]">
                    Miami Residential Plumbing Environments
                  </span>
                </div>
              </EditorialImage>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
