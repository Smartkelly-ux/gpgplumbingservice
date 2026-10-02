import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EditorialImage } from './EditorialImage';

export const SectionDiagnosis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Vertical crop expansion motion on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  // Expand vertical clip from a narrow horizontal band (40% to 60%) to full (0% to 100%)
  const clipInsetTop = useTransform(scrollYProgress, [0, 0.9], [38, 0]);
  const clipInsetBottom = useTransform(scrollYProgress, [0, 0.9], [38, 0]);

  return (
    <section
      id="diagnosis"
      ref={containerRef}
      className="relative w-full bg-[#171715] text-[#FBF9F5] py-24 sm:py-32 lg:py-40 border-b border-white/10"
      aria-label="Plumbing Diagnosis"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            {/* Small Mono Label */}
            <div className="mb-6">
              <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
                02 / DIAGNOSE
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-sans text-[38px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.04] tracking-[-0.035em] text-[#FBF9F5] max-w-xl">
              SEE THE PROBLEM
              <br />
              BEFORE THE REPAIR.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#C9C1B7] font-light leading-relaxed mb-6">
              G P G uses plumbing inspection and diagnostic methods to trace difficult problems and identify what needs attention.
            </p>

            {/* Editorial Camera Diagnostic Reference */}
            <div className="p-4 bg-black/40 border border-white/10 flex items-center justify-between text-[11px] font-mono-meta text-[#999897] tracking-[0.16em]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                <span>VIDEO PIPE INSPECTION</span>
              </div>
              <span className="text-[#C9C1B7]">SUB-SURFACE TRACE</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Image Container with Gradual Vertical Crop Expansion */}
        <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-black">
          {/* Motion wrapper with dynamic vertical clip inset */}
          <motion.div
            className="w-full h-full"
            style={{
              clipPath: useTransform(
                [clipInsetTop, clipInsetBottom],
                ([top, bottom]) => `inset(${top}% 0% ${bottom}% 0%)`
              ),
            }}
          >
            <EditorialImage
              src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=2400&q=85"
              alt="Plumbing infrastructure inspection aperture showing internal water pathway"
              className="w-full h-full object-cover grayscale contrast-125"
              containerClassName="w-full h-full"
            >
              {/* Fine crosshair overlay reflecting diagnostic inspection */}
              <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
                <div className="w-full h-[1px] bg-white/40" />
                <div className="absolute h-full w-[1px] bg-white/40" />
              </div>

              {/* Technical diagnostic tags */}
              <div className="absolute top-4 left-4 font-mono-meta text-[10px] text-[#999897] tracking-[0.2em] bg-black/60 px-2 py-1">
                CH-01: LATERAL RECON
              </div>
              <div className="absolute bottom-4 right-4 font-mono-meta text-[10px] text-[#999897] tracking-[0.2em] bg-black/60 px-2 py-1">
                DEPTH / CALIBRATED
              </div>
            </EditorialImage>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
