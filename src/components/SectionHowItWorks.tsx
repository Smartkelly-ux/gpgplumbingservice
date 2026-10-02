import React, { useState, useEffect, useRef } from 'react';

interface Step {
  id: string;
  name: string;
  detail: string;
  meta: string;
}

const STEPS: Step[] = [
  {
    id: 'call',
    name: 'CALL',
    detail: 'Direct contact with dispatch. We gather symptoms, location, and immediate shutoff instructions.',
    meta: 'STAGE 01 // INTAKE',
  },
  {
    id: 'diagnose',
    name: 'DIAGNOSE',
    detail: 'On-site camera inspection, pressure evaluation, and non-destructive isolation of root failure.',
    meta: 'STAGE 02 // ASSESSMENT',
  },
  {
    id: 'solve',
    name: 'SOLVE',
    detail: 'Targeted repair, replacement, or cleaning using Miami-code compliant materials and methods.',
    meta: 'STAGE 03 // EXECUTION',
  },
  {
    id: 'restore',
    name: 'RESTORE',
    detail: 'Full pressure test, drainage rate verification, and clean site sign-off with customer.',
    meta: 'STAGE 04 // COMPLETION',
  },
];

export const SectionHowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.5;
      let closestIdx = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const dist = Math.abs(viewportCenter - elementCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      className="relative w-full bg-[#FBF9F5] text-[#131313] py-28 sm:py-36 lg:py-44 border-b border-[#C9C1B7]/30"
      aria-label="How G P G Works"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Label */}
        <div className="mb-20 sm:mb-28">
          <span className="font-mono-meta text-[12px] sm:text-[13px] tracking-[0.2em] text-[#999897]">
            05 / SEQUENCE OF CARE
          </span>
        </div>

        {/* Vertical Editorial Stack */}
        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {STEPS.map((step, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={step.id}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start transition-all duration-500"
              >
                {/* Large Wordmark Column */}
                <div className="lg:col-span-8">
                  <div
                    className={`font-sans text-[60px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-semibold tracking-[-0.045em] leading-[0.9] select-none transition-colors duration-500 ${
                      isActive ? 'text-black' : 'text-[#C9C1B7]/60'
                    }`}
                  >
                    {step.name}
                  </div>
                </div>

                {/* Supporting Text Column */}
                <div className="lg:col-span-4 flex flex-col justify-center pt-2 sm:pt-4">
                  <div
                    className={`font-mono-meta text-[11px] sm:text-[12px] tracking-[0.2em] mb-4 transition-colors duration-500 ${
                      isActive ? 'text-black font-medium' : 'text-[#999897]'
                    }`}
                  >
                    {step.meta}
                  </div>
                  <p
                    className={`text-[17px] sm:text-[19px] leading-relaxed transition-colors duration-500 ${
                      isActive ? 'text-[#585858]' : 'text-[#999897]/80'
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
