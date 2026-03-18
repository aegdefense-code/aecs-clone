import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { ShieldCheck, FileText, Globe } from 'lucide-react';

const TestingCertification = () => {
  return (
    <div>
      <PageHero 
        title="Testing, Inspection & Certification" 
        subtitle="Uncompromising Quality Assurance for Global Compliance"
        backgroundImage="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-10 lg:mb-0">
               <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Trust Through Rigorous Testing</h2>
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Before a product reaches the consumer market or critical infrastructure deployment, it must pass stringent quality gateways. AECS offers independent, third-party testing and dimensional inspection to ensure your products meet absolute safety and performance specifications.
               </p>
               <ul className="space-y-6">
                 <li className="flex items-start">
                   <ShieldCheck className="w-8 h-8 text-brand-primary shrink-0 mr-4" />
                   <div>
                     <h4 className="font-bold text-gray-900">Destructive & Non-Destructive Testing</h4>
                     <p className="text-gray-600 text-sm">Validating ultimate tensile strength, impact resistance, and conducting ultrasonic flaw detection.</p>
                   </div>
                 </li>
                 <li className="flex items-start">
                   <FileText className="w-8 h-8 text-brand-primary shrink-0 mr-4" />
                   <div>
                     <h4 className="font-bold text-gray-900">Compliance & Regulatory Support</h4>
                     <p className="text-gray-600 text-sm">Assisting with documentation and testing prep for CE, UL, ISO, and sector-specific certifications.</p>
                   </div>
                 </li>
                 <li className="flex items-start">
                   <Globe className="w-8 h-8 text-brand-primary shrink-0 mr-4" />
                   <div>
                     <h4 className="font-bold text-gray-900">Environmental Simulation</h4>
                     <p className="text-gray-600 text-sm">Temperature cycling, salt-spray corrosion, and UV degradation chambers.</p>
                   </div>
                 </li>
               </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Poling Group Certified Facilities</h3>
              <p className="text-gray-600 mb-6">
                As authorized partners, we grant our clients access to world-class tire testing machinery capable of executing global standards including DOT, ECE, and SASO.
              </p>
              <img src="https://images.unsplash.com/photo-1590487930843-08573cd8a379?q=80&w=2942&auto=format&fit=crop" alt="Lab Testing" className="rounded-lg shadow w-full" />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default TestingCertification;
