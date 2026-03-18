import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';

const MechanicalDesign = () => {
  return (
    <div>
      <PageHero 
        title="Mechanical Engineering Design" 
        subtitle="Precision 3D CAD Modeling and Mechanical Drafting Solutions"
        backgroundImage="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transforming Geometry into Function</h2>
              <p className="text-lg text-gray-600">
                AECS delivers comprehensive mechanical design services, from blank-page concept modeling to complex assembly drawings. Our drafting adheres strictly to ASME Y14.5 Geometric Dimensioning and Tolerancing (GD&T) standards.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <img src="https://images.unsplash.com/photo-1544378730-8b510ed03aa9?q=80&w=2942&auto=format&fit=crop" alt="CAD Screen" className="rounded-xl shadow-lg w-full h-[400px] object-cover" />
              
              <div className="flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-brand-primary mb-6">CAD & Modeling Capabilities</h3>
                 <ul className="space-y-6">
                   <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong className="block text-gray-900 mb-1">3D Parametric Modeling</strong>
                      <span className="text-gray-600 text-sm">Intelligent part design allowing rapid iterations and dimensional adjustments using SolidWorks, Creo, and Siemens NX.</span>
                   </li>
                   <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong className="block text-gray-900 mb-1">Large Assembly Management</strong>
                      <span className="text-gray-600 text-sm">Managing interferences and kinematics for machines with thousands of sub-components.</span>
                   </li>
                   <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <strong className="block text-gray-900 mb-1">2D Manufacturing Drawings</strong>
                      <span className="text-gray-600 text-sm">Creating factory-ready blueprints with precise tolerances, bill of materials (BOM), and surface finishing callouts.</span>
                   </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      <CtaSection title="Require Reverse Engineering Services?" subtitle="We utilize advanced laser scanning to convert legacy physical parts into precise 3D CAD data." />
    </div>
  );
};

export default MechanicalDesign;
