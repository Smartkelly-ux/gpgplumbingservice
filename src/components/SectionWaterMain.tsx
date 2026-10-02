import React from 'react';
import { motion } from 'motion/react';
import { EditorialImage } from './EditorialImage';

export const SectionWaterMain: React.FC = () => {
  return (
    <section
      id="water-main"
      className="relative w-full bg-[#FBF9F5] text-[#131313] py-24 sm:py-32 lg:py-40 border-b border-[#C9C1B7]/30"
      aria-label="Water Mains and Street Infrastructure"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Architectural Composition with Offset Dark Panel */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Main Large Editorial Photography (IMAGE TYPE A: large rectangular photograph) */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[580px] overflow-hidden bg-[#171715]">
            <EditorialImage
              src="https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=2000&q=85"
              alt="Underground municipal and residential water main line connection"
              className="w-full h-full object-cover grayscale-[20%] contrast-110"
              containerClassName="w-full h-full"
              overlayClassName="bg-gradient-to-r from-black/60 via-transparent to-transparent lg:to-black/30"
            >
              {/* Inset Photo Tag */}
              <div className="absolute top-6 left-6 font-mono-meta text-[11px] text-[#C9C1B7] bg-black/60 px-3 py-1 tracking-[0.18em]">
                INFRASTRUCTURE // SUPPLY INGRESS
              </div>
            </EditorialImage>
          </div>

          {/* Offset Dark Floating Panel */}
          <div className="lg:col-span-4 lg:-ml-12 lg:my-10 z-10 flex flex-col justify-between bg-[#171715] text-[#FBF9F5] p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div>
              {/* Mono Label */}
              <div className="mb-8">
                <span className="font-mono-meta text-[12px] tracking-[0.2em] text-[#C9C1B7]">
                  WATER LINE / MIAMI
                </span>
              </div>

              {/* Large Text Overlay */}
              <h2 className="font-sans text-[36px] sm:text-[44px] lg:text-[50px] font-medium leading-[1.04] tracking-[-0.035em] text-[#FBF9F5] mb-6">
                FROM THE STREET
                <br />
                TO THE SINK.
              </h2>

              {/* Supporting Copy */}
              <p className="text-[16px] sm:text-[18px] text-[#C9C1B7] font-light leading-relaxed mb-8">
                Water-line installation, maintenance and replacement.
              </p>
            </div>

            {/* Technical Sub-specifications */}
            <div className="pt-8 border-t border-white/10 flex flex-col gap-2 font-mono-meta text-[11px] text-[#999897] tracking-[0.16em]">
              <div className="flex justify-between">
                <span>METER TIE-IN</span>
                <span className="text-[#FBF9F5]">COPPER / POLY</span>
              </div>
              <div className="flex justify-between">
                <span>PRESSURE REGULATION</span>
                <span className="text-[#FBF9F5]">PRV CALIBRATION</span>
              </div>
              <div className="flex justify-between">
                <span>LOCAL PERMITTING</span>
                <span className="text-[#FBF9F5]">MIAMI-DADE COMPLIANT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
