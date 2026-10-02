import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_LIST, ServiceItem, BUSINESS_INFO } from '../types';
import { EditorialImage } from './EditorialImage';

interface SectionServicesProps {
  onRequestService: () => void;
}

export const SectionServices: React.FC<SectionServicesProps> = ({ onRequestService }) => {
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#FBF9F5] text-[#131313] py-24 sm:py-32 lg:py-40 border-b border-[#C9C1B7]/30"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <div className="mb-6">
            <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.18em] text-[#999897]">
              INDEX / SERVICES
            </span>
          </div>
          <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.04] tracking-[-0.035em] text-black">
            WHEN THE WATER
            <br />
            STOPS COOPERATING.
          </h2>
        </div>

        {/* Services Index Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Rows List (Columns 1-8) */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#C9C1B7]/30 border-t border-b border-[#C9C1B7]/30">
            {SERVICES_LIST.map((service) => {
              const isHovered = hoveredService?.id === service.id;
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative transition-colors duration-200"
                >
                  {/* Desktop Click / Mobile Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="w-full text-left py-6 sm:py-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      {/* Monospace 2-digit number */}
                      <span className="font-mono-meta text-[13px] sm:text-[14px] text-[#999897] w-6">
                        {service.number}
                      </span>

                      {/* Service Title with subtle horizontal shift on hover */}
                      <span
                        className={`text-[20px] sm:text-[26px] md:text-[30px] tracking-[-0.02em] transition-all duration-300 ${
                          isHovered
                            ? 'translate-x-3 text-black font-medium'
                            : 'translate-x-0 text-[#585858] font-normal group-hover:text-black'
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    {/* Right Action Indicator */}
                    <div className="flex items-center gap-4">
                      {/* Desktop Arrow appears on hover */}
                      <span
                        className={`hidden lg:inline-block font-mono-meta text-[13px] tracking-widest text-black transition-all duration-300 ${
                          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}
                        aria-hidden="true"
                      >
                        SPECIFICATION →
                      </span>

                      {/* Mobile Plus / Minus toggle */}
                      <span
                        className="lg:hidden text-2xl font-light text-[#585858] transition-transform duration-200"
                        aria-hidden="true"
                      >
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Mobile Expanded Row Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden lg:hidden pb-6 pl-10 sm:pl-14 pr-4"
                      >
                        <p className="text-[15px] sm:text-[16px] text-[#585858] font-light leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={onRequestService}
                            className="link-editorial text-[12px] font-mono-meta tracking-[0.14em] hover:tracking-[0.16em] text-black font-semibold cursor-pointer"
                          >
                            BOOK THIS SERVICE
                          </button>
                          <span className="text-[#C9C1B7]">/</span>
                          <a
                            href={`tel:${BUSINESS_INFO.phoneRaw}`}
                            className="link-editorial text-[12px] font-mono-meta tracking-[0.14em] hover:tracking-[0.16em] text-[#585858] hover:text-black"
                          >
                            CALL DISPATCH
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop Hover Floating Preview Panel (Columns 9-12) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 self-start pl-8">
            <div className="aspect-[4/5] w-full bg-[#171715] overflow-hidden relative shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredService ? hoveredService.id : 'default'}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <EditorialImage
                    src={
                      hoveredService
                        ? hoveredService.imageUrl
                        : 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80'
                    }
                    alt={hoveredService ? hoveredService.title : 'Plumbing service overview'}
                    className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
                    containerClassName="w-full h-full"
                    overlayClassName="bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="font-mono-meta text-[11px] text-[#C9C1B7] tracking-[0.18em] mb-1">
                      {hoveredService ? hoveredService.category : 'MIAMI METROPOLITAN SERVICE'}
                    </div>
                    <div className="text-xl font-medium tracking-tight mb-2">
                      {hoveredService ? hoveredService.title : 'INSPECTION & DISPATCH'}
                    </div>
                    <p className="text-xs text-[#C9C1B7] line-clamp-2 leading-relaxed">
                      {hoveredService
                        ? hoveredService.shortDesc
                        : 'Standard and urgent plumbing procedures carried out across Miami-Dade county.'}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Note below preview */}
            <div className="mt-4 flex items-center justify-between text-[11px] font-mono-meta text-[#999897] tracking-[0.12em]">
              <span>COVERAGE: 40 MILE RADIUS</span>
              <span>LICENSED // RESIDENTIAL & COMM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
