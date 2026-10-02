import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  onRequestService: () => void;
  preloaderFinished: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onRequestService, preloaderFinished }) => {
  return (
    <section
      className="relative min-h-[100svh] w-full flex flex-col justify-end overflow-hidden bg-[#171715] text-[#FBF9F5]"
      aria-label="Introduction"
    >
      {/* Background Image with Controlled Scale & Crop Expansion */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        initial={{ scale: 1.08, filter: 'brightness(0.55)' }}
        animate={
          preloaderFinished
            ? { scale: 1.0, filter: 'brightness(0.68)' }
            : { scale: 1.08, filter: 'brightness(0.55)' }
        }
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <EditorialImage
          src={`${import.meta.env.BASE_URL}images/hero_plumbing_environment_1790969209399.jpg`}
          alt="G P G Plumbing Miami Residential Utility and Domestic Water Systems"
          priority={true}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover"
          overlayClassName="bg-gradient-to-t from-[#171715] via-[#171715]/50 to-[#171715]/40"
        />
      </motion.div>

      {/* Content Container - Sits Low-Left with Generous Negative Space */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Primary Headline with Horizontal Clipping Mask Reveal */}
          <h1 className="font-sans text-[44px] sm:text-[62px] md:text-[76px] lg:text-[84px] font-medium leading-[0.98] tracking-[-0.04em] text-[#FBF9F5] mb-6 sm:mb-8">
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block"
                initial={{ y: 20, opacity: 0 }}
                animate={preloaderFinished ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                PLUMBING,
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block"
                initial={{ y: 20, opacity: 0 }}
                animate={preloaderFinished ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                WITHOUT
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block text-[#C9C1B7]"
                initial={{ y: 20, opacity: 0 }}
                animate={preloaderFinished ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.9, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              >
                THE DRAMA.
              </motion.span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <div className="overflow-hidden mb-8 sm:mb-10 max-w-xl">
            <motion.p
              className="text-[17px] sm:text-[19px] md:text-[21px] text-[#C9C1B7] font-light leading-relaxed"
              initial={{ y: 16, opacity: 0 }}
              animate={preloaderFinished ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Reliable plumbing service for Miami homes and businesses.
            </motion.p>
          </div>

          {/* CTA & Secondary Link */}
          <motion.div
            className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12 sm:mb-16"
            initial={{ x: -20, opacity: 0 }}
            animate={preloaderFinished ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticSpring strength={0.25} maxDistance={8}>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-motion inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FBF9F5] text-black font-mono-meta text-[13px] tracking-[0.14em] hover:tracking-[0.17em] font-medium hover:bg-white hover:shadow-2xl hover:shadow-white/20"
              >
                CALL G P G
              </a>
            </MagneticSpring>

            <MagneticSpring strength={0.2} maxDistance={6}>
              <button
                type="button"
                onClick={onRequestService}
                className="group link-editorial inline-flex items-center gap-2 font-mono-meta text-[13px] tracking-[0.14em] text-[#FBF9F5] hover:text-white cursor-pointer py-1"
              >
                <span>REQUEST SERVICE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </button>
            </MagneticSpring>
          </motion.div>

          {/* Small Metadata from Bottom Edge */}
          <motion.div
            className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono-meta text-[12px] sm:text-[13px] tracking-[0.16em] text-[#999897] pt-4 border-t border-white/10"
            initial={{ y: 16, opacity: 0 }}
            animate={preloaderFinished ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>MIAMI, FL</span>
            <span className="text-white/20">/</span>
            <span>SINCE 2015</span>
            <span className="text-white/20">/</span>
            <span className="text-[#C9C1B7]">EMERGENCY SERVICE</span>
          </motion.div>
        </div>

        {/* Secondary Photographic Asset (Image Type C: Small Floating Cropped Photograph) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={preloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="hidden xl:flex absolute bottom-20 right-16 flex-col items-end gap-2.5 pointer-events-none"
        >
          <div className="w-56 aspect-[4/3] overflow-hidden bg-black/70 border border-white/15 shadow-2xl relative">
            <EditorialImage
              src={`${import.meta.env.BASE_URL}images/miami_plumbing_detail_1790969238716.jpg`}
              alt="Miami residential plumbing brass valve assembly"
              className="w-full h-full object-cover contrast-105"
              containerClassName="w-full h-full"
              overlayClassName="bg-gradient-to-t from-black/85 via-transparent to-transparent"
            >
              <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between items-center font-mono-meta text-[9px] text-[#C9C1B7] tracking-[0.16em]">
                <span>SPEC 01 // DOMESTIC SUPPLY</span>
                <span>BRASS / PEX</span>
              </div>
            </EditorialImage>
          </div>
          <span className="font-mono-meta text-[10px] text-[#999897] tracking-[0.18em]">
            RESIDENTIAL FIXTURE TRACE
          </span>
        </motion.div>
      </div>
    </section>
  );
};
