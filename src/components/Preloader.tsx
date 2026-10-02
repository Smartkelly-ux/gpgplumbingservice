import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'converge' | 'reveal' | 'exit'>('initial');

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Step 1: Start converging letters
    const t1 = setTimeout(() => {
      setPhase('converge');
    }, 150);

    // Step 2: Move wordmark slightly upward & mask reveal
    const t2 = setTimeout(() => {
      setPhase('reveal');
    }, 1200);

    // Step 3: Trigger exit / hero photograph reveal
    const t3 = setTimeout(() => {
      setPhase('exit');
    }, 2100);

    // Step 4: Final callback
    const t4 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF9F5] text-black select-none pointer-events-auto"
          aria-label="Loading G P G Plumbing Service Company"
        >
          {/* Main Wordmark Container */}
          <motion.div
            className="flex flex-col items-center justify-center text-center px-6"
            animate={
              phase === 'reveal'
                ? { y: -16 }
                : { y: 0 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* G P G letters with tracking motion: far apart -> normal */}
            <motion.div
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-black leading-none font-sans"
              initial={{ letterSpacing: '0.65em', opacity: 0 }}
              animate={
                phase === 'initial'
                  ? { letterSpacing: '0.65em', opacity: 0.6 }
                  : { letterSpacing: '0.04em', opacity: 1 }
              }
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              G P G
            </motion.div>

            {/* Subtitle emerging from clipped horizontal mask */}
            <div className="overflow-hidden mt-5 sm:mt-6">
              <motion.div
                className="font-mono-meta text-[13px] sm:text-[15px] font-medium text-[#131313] tracking-[0.2em]"
                initial={{ y: '105%', opacity: 0 }}
                animate={
                  phase === 'converge' || phase === 'reveal'
                    ? { y: 0, opacity: 1 }
                    : { y: '105%', opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                PLUMBING SERVICE COMPANY
              </motion.div>
            </div>

            {/* Tiny mono label underneath */}
            <div className="overflow-hidden mt-3">
              <motion.div
                className="font-mono-meta text-[11px] sm:text-[12px] text-[#999897] tracking-[0.25em]"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  phase === 'converge' || phase === 'reveal'
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              >
                MIAMI / FL
              </motion.div>
            </div>
          </motion.div>

          {/* Skip button for immediate access / accessibility */}
          <button
            onClick={onComplete}
            className="absolute bottom-8 text-[11px] font-mono-meta text-[#999897] hover:text-black tracking-[0.2em] transition-colors focus:outline-none"
            aria-label="Skip intro animation"
          >
            SKIP [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
