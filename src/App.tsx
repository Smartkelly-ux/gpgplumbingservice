/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionInvisibleSystem } from './components/SectionInvisibleSystem';
import { SectionServices } from './components/SectionServices';
import { SectionMiami } from './components/SectionMiami';
import { SectionDiagnosis } from './components/SectionDiagnosis';
import { SectionWaterHeat } from './components/SectionWaterHeat';
import { SectionRepairList } from './components/SectionRepairList';
import { SectionCustomerSignal } from './components/SectionCustomerSignal';
import { SectionWaterMain } from './components/SectionWaterMain';
import { SectionHowItWorks } from './components/SectionHowItWorks';
import { SectionEmergency } from './components/SectionEmergency';
import { SectionFinalCta } from './components/SectionFinalCta';
import { Footer } from './components/Footer';
import { ServiceRequestModal } from './components/ServiceRequestModal';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] text-[#131313] selection:bg-black selection:text-white">
      {/* Bespoke Editorial Preloader: "The House of Water" */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Floating Translucent Navigation */}
      <Navigation onRequestService={openModal} />

      {/* Main Single-Page Editorial Flow */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onRequestService={openModal} preloaderFinished={preloaderComplete} />

        {/* 01: The Invisible System */}
        <SectionInvisibleSystem />

        {/* 02: Services Index */}
        <SectionServices onRequestService={openModal} />

        {/* 03: Miami Is Home */}
        <SectionMiami />

        {/* 04: Diagnosis */}
        <SectionDiagnosis />

        {/* 05: Water Heat */}
        <SectionWaterHeat />

        {/* 06: The Repair List */}
        <SectionRepairList />

        {/* 07: Customer Signal (Horizontal Typographic Shift) */}
        <SectionCustomerSignal />

        {/* 08: Water Main (Architectural Composition with Offset Panel) */}
        <SectionWaterMain />

        {/* 09: How It Works (Vertical Editorial Stack) */}
        <SectionHowItWorks />

        {/* 10: Emergency (24/7 Support) */}
        <SectionEmergency />

        {/* 11: Final Call to Action */}
        <SectionFinalCta onRequestService={openModal} />
      </main>

      {/* Editorial Footer with Expanding Photographic Strip */}
      <Footer onRequestService={openModal} />

      {/* Service Request & Dispatch Intake Modal */}
      <ServiceRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
