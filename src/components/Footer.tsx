import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';
import { GoogleMapDirections } from './GoogleMapDirections';
import { EditorialImage } from './EditorialImage';

interface FooterProps {
  onRequestService: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestService }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#FBF9F5] text-[#131313] pt-12 pb-16 sm:pb-24 border-t border-[#C9C1B7]/40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Step 1: Narrow Dark Horizontal Photographic Strip that Expands from 0 to 100% */}
        <div className="w-full flex justify-center mb-16 sm:mb-20">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[60px] sm:h-[80px] lg:h-[90px] overflow-hidden bg-[#171715] relative shadow-inner"
          >
            <EditorialImage
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2400&q=80"
              alt="Underground copper architectural conduit detail"
              className="w-full h-full object-cover grayscale contrast-125 object-center opacity-70"
              containerClassName="w-full h-full"
              overlayClassName="bg-[#171715]/40"
            >
              <div className="absolute inset-0 flex items-center justify-between px-6 font-mono-meta text-[10px] sm:text-[11px] text-[#C9C1B7] tracking-[0.25em]">
                <span>SYSTEM TRACE LATERAL // GPG-33125</span>
                <span className="hidden sm:inline">ZERO DRAMA · SOUND PRESSURE</span>
              </div>
            </EditorialImage>
          </motion.div>
        </div>

        {/* Step 2: Company Name Appears Through a Mask */}
        <div className="overflow-hidden mb-12 sm:mb-16">
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono-meta text-[14px] sm:text-[16px] text-black tracking-[0.22em] font-semibold"
          >
            {BUSINESS_INFO.legalName}
          </motion.div>
        </div>

        {/* Step 3: Contact Details & Navigation Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-16 sm:pb-20 border-b border-[#C9C1B7]/30"
        >
          {/* Large Address Block (Columns 1-6) */}
          <div className="md:col-span-6 flex flex-col gap-1">
            <span className="font-mono-meta text-[11px] text-[#999897] tracking-[0.16em] mb-2">
              DISPATCH FACILITY
            </span>
            <div className="font-sans text-[22px] sm:text-[26px] font-normal text-black leading-snug">
              {BUSINESS_INFO.street}
              <br />
              {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
            </div>
          </div>

          {/* Phone Block (Columns 7-9) */}
          <div className="md:col-span-3 flex flex-col gap-1 items-start">
            <span className="font-mono-meta text-[11px] text-[#999897] tracking-[0.16em] mb-2">
              VOICE & DISPATCH
            </span>
            <MagneticSpring strength={0.18} maxDistance={6}>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="link-editorial font-sans text-[22px] sm:text-[26px] font-normal text-black hover:text-[#585858] transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </MagneticSpring>
            <span className="font-mono-meta text-[11px] text-[#999897] tracking-[0.12em] mt-1">
              24/7 EMERGENCY READY
            </span>
          </div>

          {/* Small Navigation (Columns 10-12) */}
          <div className="md:col-span-3 flex flex-col gap-3 font-mono-meta text-[12px] tracking-[0.16em] items-start">
            <span className="text-[11px] text-[#999897] tracking-[0.16em] mb-1">
              DIRECTORY
            </span>
            <MagneticSpring strength={0.18} maxDistance={5}>
              <button
                type="button"
                onClick={() => scrollTo('#services')}
                className="link-editorial text-left text-black hover:text-[#585858] hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                SERVICES
              </button>
            </MagneticSpring>
            <MagneticSpring strength={0.18} maxDistance={5}>
              <button
                type="button"
                onClick={() => scrollTo('#process')}
                className="link-editorial text-left text-black hover:text-[#585858] hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                PROCESS
              </button>
            </MagneticSpring>
            <MagneticSpring strength={0.18} maxDistance={5}>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="link-editorial text-left text-black hover:text-[#585858] hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                CONTACT
              </button>
            </MagneticSpring>
            <MagneticSpring strength={0.2} maxDistance={6}>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="link-editorial text-black font-semibold hover:text-[#585858] hover:translate-x-1 transition-all duration-200 pt-1"
              >
                CALL NOW
              </a>
            </MagneticSpring>
          </div>
        </motion.div>

        {/* Google Maps Directions & Central Dispatch Map */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="my-14 sm:my-16"
        >
          <GoogleMapDirections />
        </motion.div>

        {/* Step 4: Bottom Metadata Enters Last */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-meta text-[11px] sm:text-[12px] text-[#999897] tracking-[0.18em]"
        >
          <div>MIAMI / FL</div>
          <div>© 2026 G P G Plumbing Service Company</div>
        </motion.div>

      </div>
    </footer>
  );
};
