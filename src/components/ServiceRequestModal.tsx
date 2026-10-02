import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../types';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOCUMENTED_CATEGORIES = [
  'Drain & Rooter Service',
  'Clogged Toilets & Fixtures',
  'Drain Cleaning',
  'Sewer Line Repair',
  'Leak Detection & Repair',
  'Water-Line Installation / Maintenance',
  'Sewer Re-Lining (Trenchless)',
  'Hydro Jetting',
  'Water-Heater Repair & Installation',
  'Water-Main Replacement',
  'Pipe Thawing',
  'Emergency Plumbing Support',
];

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [category, setCategory] = useState(DOCUMENTED_CATEGORIES[0]);
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('standard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setAddress('');
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#FBF9F5] text-[#131313] p-8 sm:p-12 shadow-2xl border border-[#C9C1B7]/40 z-10 my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Close Button & Mono Label */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#C9C1B7]/30">
              <span className="font-mono-meta text-[11px] sm:text-[12px] text-[#999897] tracking-[0.2em]">
                DISPATCH INTAKE // MIAMI-DADE
              </span>
              <button
                type="button"
                onClick={resetForm}
                className="link-editorial font-mono-meta text-[12px] text-[#585858] hover:text-black tracking-[0.16em] cursor-pointer focus:outline-none"
                aria-label="Close service request dialog"
              >
                CLOSE [ESC]
              </button>
            </div>

            {submitted ? (
              <div className="py-8">
                <div className="font-mono-meta text-[12px] text-[#999897] tracking-[0.2em] mb-3">
                  DISPATCH CONFIRMATION
                </div>
                <h3 className="font-sans text-[32px] sm:text-[40px] font-medium tracking-tight text-black mb-4">
                  Request Logged.
                </h3>
                <p className="text-[17px] text-[#585858] font-light leading-relaxed mb-8">
                  A G P G technician will review your intake details for {address} and call{' '}
                  <span className="font-medium text-black">{phone}</span> directly.
                </p>

                <div className="p-5 bg-[#F3F1ED] border border-[#C9C1B7]/40 mb-8 font-mono-meta text-[12px] text-[#585858] flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span>SERVICE:</span>
                    <span className="text-black font-semibold">{category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-black font-semibold">
                      {urgency === 'emergency' ? 'PRIORITY DISPATCH' : 'STANDARD SCHEDULING'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>OPERATIONS:</span>
                    <span className="text-black">2121 NW 13TH ST, MIAMI</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="btn-motion px-6 py-3 bg-black text-white font-mono-meta text-[12px] tracking-[0.16em] hover:tracking-[0.18em] hover:bg-[#171715] hover:shadow-lg shadow-black/20"
                  >
                    NEED IMMEDIATE HELP? CALL DISPATCH
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-motion px-6 py-3 border border-black/30 font-mono-meta text-[12px] tracking-[0.16em] hover:tracking-[0.18em] text-black hover:bg-black/5 cursor-pointer"
                  >
                    RETURN TO SITE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 id="modal-title" className="font-sans text-[28px] sm:text-[36px] font-medium tracking-tight text-black mb-2">
                    Request Plumbing Service
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#585858] font-light">
                    Direct dispatch for Miami residential and commercial properties.
                  </p>
                </div>

                {/* Urgency Toggle (Segmented control) */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
                    TIMING REQUIREMENT
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#F3F1ED] border border-[#C9C1B7]/40">
                    <button
                      type="button"
                      onClick={() => setUrgency('standard')}
                      className={`btn-motion py-2 text-[12px] font-mono-meta tracking-[0.14em] hover:tracking-[0.16em] cursor-pointer ${
                        urgency === 'standard'
                          ? 'bg-black text-white shadow-md'
                          : 'text-[#585858] hover:text-black hover:bg-white/50'
                      }`}
                    >
                      STANDARD APPOINTMENT
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`btn-motion py-2 text-[12px] font-mono-meta tracking-[0.14em] hover:tracking-[0.16em] cursor-pointer ${
                        urgency === 'emergency'
                          ? 'bg-black text-white shadow-md'
                          : 'text-[#585858] hover:text-black hover:bg-white/50'
                      }`}
                    >
                      URGENT / EMERGENCY
                    </button>
                  </div>
                </div>

                {/* Service Category */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service-cat" className="font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
                    SERVICE CATEGORY
                  </label>
                  <select
                    id="service-cat"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#F3F1ED] border border-[#C9C1B7]/50 px-4 py-3 text-[14px] text-black focus:outline-none focus:border-black cursor-pointer hover:border-black transition-colors"
                  >
                    {DOCUMENTED_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-input" className="font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
                      YOUR NAME *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="e.g. David Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F3F1ED] border border-[#C9C1B7]/50 px-4 py-3 text-[14px] text-black focus:outline-none focus:border-black placeholder:text-[#999897] hover:border-[#999897] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone-input" className="font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
                      CALLBACK PHONE *
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder="(786) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#F3F1ED] border border-[#C9C1B7]/50 px-4 py-3 text-[14px] text-black focus:outline-none focus:border-black placeholder:text-[#999897] hover:border-[#999897] transition-colors"
                    />
                  </div>
                </div>

                {/* Property Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="addr-input" className="font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
                    MIAMI PROPERTY ADDRESS / NEIGHBORHOOD *
                  </label>
                  <input
                    id="addr-input"
                    type="text"
                    required
                    placeholder="e.g. Coral Gables, Brickell, or 2121 NW 13th St"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-[#F3F1ED] border border-[#C9C1B7]/50 px-4 py-3 text-[14px] text-black focus:outline-none focus:border-black placeholder:text-[#999897] hover:border-[#999897] transition-colors"
                  />
                </div>

                {/* Symptoms / Notes */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="notes-input" className="font-mono-meta text-[11px] text-[#999897] tracking-[0.14em]">
                    OBSERVED SYMPTOMS (OPTIONAL)
                  </label>
                  <textarea
                    id="notes-input"
                    rows={2}
                    placeholder="Describe leak location, backing up drains, cold water, or pressure drop..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#F3F1ED] border border-[#C9C1B7]/50 px-4 py-2.5 text-[14px] text-black focus:outline-none focus:border-black placeholder:text-[#999897] resize-none hover:border-[#999897] transition-colors"
                  />
                </div>

                {/* Action Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn-motion px-8 py-3.5 bg-black text-white font-mono-meta text-[13px] tracking-[0.16em] hover:tracking-[0.18em] font-medium hover:bg-[#171715] hover:shadow-xl hover:shadow-black/25 cursor-pointer text-center"
                  >
                    TRANSMIT DISPATCH INTAKE
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="link-editorial text-[11px] font-mono-meta text-[#999897] hover:text-black tracking-[0.14em] text-center sm:text-right w-fit sm:self-center"
                  >
                    OR CALL DIRECT DISPATCH
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
