import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../types';
import { MagneticSpring } from './MagneticSpring';

interface GoogleMapDirectionsProps {
  className?: string;
}

export const GoogleMapDirections: React.FC<GoogleMapDirectionsProps> = ({ className = '' }) => {
  const fullAddress = `${BUSINESS_INFO.street}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`;
  const encodedAddress = encodeURIComponent(fullAddress);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`w-full overflow-hidden border border-black/10 bg-[#F4EFE6] text-black ${className}`}>
      {/* Map Header */}
      <div className="p-6 sm:p-8 border-b border-black/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono-meta text-[11px] text-[#999897] tracking-[0.2em] block mb-2">
            DISPATCH HQ &amp; WORKSHOP DIRECTIONS
          </span>
          <h3 className="font-sans text-[24px] sm:text-[30px] font-medium tracking-[-0.02em] text-black">
            {BUSINESS_INFO.street}
          </h3>
          <p className="font-mono-meta text-[12px] text-[#585858] tracking-[0.14em] mt-1">
            {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip} · CENTRAL DISPATCH FOR HIALEAH &amp; MIAMI-DADE
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <MagneticSpring strength={0.2} maxDistance={6}>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-[#FBF9F5] font-mono-meta text-[12px] tracking-[0.14em] hover:tracking-[0.16em] font-medium hover:bg-[#171715]"
            >
              <span>GET DIRECTIONS</span>
              <span aria-hidden="true">↗</span>
            </a>
          </MagneticSpring>

          <MagneticSpring strength={0.2} maxDistance={6}>
            <a
              href={mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/20 text-black font-mono-meta text-[12px] tracking-[0.14em] hover:bg-black/5"
            >
              <span>VIEW IN GOOGLE MAPS</span>
            </a>
          </MagneticSpring>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-[320px] sm:h-[380px] bg-[#E5E0D8]">
        <iframe
          title="G P G Plumbing Miami Headquarters & Dispatch Location"
          src={embedUrl}
          className="w-full h-full border-0 filter grayscale contrast-110 opacity-90 hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Ambient Technical Map Inset Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-black/10 px-3 py-2 shadow-sm font-mono-meta text-[11px] text-black tracking-[0.12em] pointer-events-none hidden sm:flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>25.7877° N, 80.2198° W</span>
          <span className="text-[#999897]">|</span>
          <span className="text-[#585858]">DISPATCH READY</span>
        </div>
      </div>
    </div>
  );
};
