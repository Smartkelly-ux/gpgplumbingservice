import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';

interface NavigationProps {
  onRequestService: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onRequestService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <header
        className={`fixed top-5 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 transition-transform duration-300 pointer-events-none`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[980px] h-[52px] sm:h-[56px] px-4 sm:px-6 rounded-[24px] bg-[#171715]/80 backdrop-blur-md border border-white/10 text-[#FBF9F5] shadow-2xl transition-all duration-300 ${
            scrolled ? 'shadow-black/40 bg-[#171715]/90' : 'shadow-black/20'
          }`}
          aria-label="Main Navigation"
        >
          {/* Left: Brand */}
          <MagneticSpring strength={0.18} maxDistance={6}>
            <a
              href="#"
              className="text-[17px] sm:text-[19px] font-semibold tracking-[-0.03em] text-[#FBF9F5] hover:text-[#C9C1B7] hover:tracking-normal transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded px-1"
            >
              G P G
            </a>
          </MagneticSpring>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <MagneticSpring key={link.label} strength={0.2} maxDistance={7}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="link-editorial font-mono-meta text-[12px] tracking-[0.14em] text-[#C9C1B7] hover:text-[#FBF9F5] px-1 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
                >
                  {link.label}
                </a>
              </MagneticSpring>
            ))}
          </div>

          {/* Right: CALL NOW + Hamburger toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <MagneticSpring strength={0.24} maxDistance={8}>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-motion inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-mono-meta tracking-[0.12em] hover:tracking-[0.14em] bg-white text-black hover:bg-[#F3F1ED] hover:shadow-lg hover:shadow-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                CALL NOW
              </a>
            </MagneticSpring>

            {/* Tablet/Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="btn-motion md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white hover:bg-white/10 active:scale-90 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-lg cursor-pointer"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {/* Line 1 */}
              <motion.span
                className="w-5 h-[1.5px] bg-[#FBF9F5] origin-center block"
                animate={
                  isOpen
                    ? { y: 6.5, rotate: 45 }
                    : { y: 0, rotate: 0 }
                }
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Line 2 (middle disappears) */}
              <motion.span
                className="w-5 h-[1.5px] bg-[#FBF9F5] block"
                animate={
                  isOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              {/* Line 3 */}
              <motion.span
                className="w-5 h-[1.5px] bg-[#FBF9F5] origin-center block"
                animate={
                  isOpen
                    ? { y: -6.5, rotate: -45 }
                    : { y: 0, rotate: 0 }
                }
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile/Tablet Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-[#171715]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 pt-28 text-[#FBF9F5]"
          >
            {/* Nav List */}
            <div className="flex flex-col gap-6">
              <span className="font-mono-meta text-[11px] text-[#999897] tracking-[0.2em]">
                DIRECTORY / NAVIGATION
              </span>
              <nav className="flex flex-col gap-4">
                {[
                  ...navLinks,
                  { label: 'DIAGNOSIS', href: '#diagnosis' },
                  { label: 'EMERGENCY', href: '#emergency' },
                ].map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center justify-between text-3xl font-light tracking-[-0.02em] hover:text-white hover:translate-x-2 transition-all duration-300 py-1"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 font-mono-meta text-sm text-[#C9C1B7] transition-all duration-300" aria-hidden="true">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onRequestService();
                  }}
                  className="btn-motion w-full py-3.5 rounded-full bg-white text-black font-mono-meta text-xs tracking-[0.14em] hover:tracking-[0.16em] text-center font-medium shadow-md hover:bg-[#F3F1ED] cursor-pointer"
                >
                  REQUEST SERVICE
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="btn-motion w-full py-3.5 rounded-full border border-white/20 text-[#FBF9F5] font-mono-meta text-xs tracking-[0.14em] hover:tracking-[0.16em] text-center hover:bg-white/10 hover:border-white/40"
                >
                  CALL DISPATCH NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
