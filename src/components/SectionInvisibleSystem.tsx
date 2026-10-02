import React from 'react';
import { motion } from 'motion/react';
import { EditorialImage } from './EditorialImage';

export const SectionInvisibleSystem: React.FC = () => {
  return (
    <section
      id="system"
      className="relative w-full bg-[#FBF9F5] text-[#131313] py-24 sm:py-32 lg:py-40 border-b border-[#C9C1B7]/30"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Label + Headline + Body */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Small Mono Label */}
            <div className="mb-8">
              <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.18em] text-[#999897]">
                01 / THE SYSTEM
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="font-sans text-[38px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.04] tracking-[-0.035em] text-black mb-8 max-w-xl">
              MOST OF THE WORK
              <br />
              STAYS OUT OF SIGHT.
            </h2>

            {/* Body */}
            <p className="text-[18px] sm:text-[20px] lg:text-[21px] text-[#585858] font-light leading-relaxed max-w-xl mb-12">
              From drains and sewer lines to water heaters and water mains, G P G handles the plumbing behind the everyday.
            </p>

            {/* Architectural notation footnote */}
            <div className="pt-8 border-t border-[#C9C1B7]/40 flex flex-wrap items-center gap-6 font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
              <span>CONCEALED RUNS</span>
              <span>·</span>
              <span>PRESSURE STABILITY</span>
              <span>·</span>
              <span>ZERO VIBRATION</span>
            </div>
          </div>

          {/* Right Column: IMAGE TYPE B (Narrow Vertical Photograph) */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-[380px] lg:max-w-[420px]">
              {/* Narrow vertical framing with crisp architectural geometry */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4.6] w-full overflow-hidden bg-[#171715]"
              >
                <EditorialImage
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=85"
                  alt="Concealed mechanical plumbing pipework and pressure line access"
                  className="w-full h-full object-cover grayscale-[25%] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                  containerClassName="w-full h-full"
                >
                  {/* Quiet caption badge */}
                  <div className="absolute bottom-3 left-3 bg-[#171715]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono-meta text-[#C9C1B7] tracking-[0.16em]">
                    FIG 01.1 // SYSTEM CORE
                  </div>
                </EditorialImage>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
