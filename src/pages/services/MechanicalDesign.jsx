import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';

const MechanicalDesign = () => {
  // Key design and drafting capabilities
  const designCapabilityList = [
    {
      title: "3D Parametric Modeling",
      description: "Intelligent part design allowing rapid iterations and dimensional adjustments using SolidWorks, Creo, and Siemens NX."
    },
    {
      title: "Large Assembly Management",
      description: "Managing interferences and kinematics for machines with thousands of sub-components."
    },
    {
      title: "2D Manufacturing Drawings",
      description: "Creating factory-ready blueprints with precise tolerances, bill of materials (BOM), and surface finishing callouts."
    }
  ];

  return (
    <main>
      <PageHero 
        title="Mechanical Engineering Design" 
        subtitle="Precision 3D CAD Modeling and Mechanical Drafting Solutions"
        backgroundImage="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Transforming Geometry into Function</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {/* NOTE: Adherence to ASME Y14.5 is a critical business differentiator */}
                AECS delivers comprehensive mechanical design services, from blank-page concept modeling to complex assembly drawings. Our drafting adheres strictly to ASME Y14.5 Geometric Dimensioning and Tolerancing (GD&T) standards.
              </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1544378730-8b510ed03aa9?q=80&w=2942&auto=format&fit=crop" 
                  alt="Professional CAD environment showing complex mechanical assembly" 
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="flex flex-col justify-center">
                 <h3 className="text-3xl font-black text-slate-900 mb-8 border-l-4 border-brand-primary pl-6">CAD & Modeling Capabilities</h3>
                 <div className="space-y-8">
                    {designCapabilityList.map((capability, index) => (
                      <div key={index} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                         <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">{capability.title}</h4>
                         <p className="text-slate-600 text-sm leading-relaxed font-medium">{capability.description}</p>
                      </div>
                    ))}
                 </div>
                 
                 {/* TODO: Add 'Download Capability Statement' button here once PDF is ready */}
              </div>
           </div>
        </div>
      </section>

      <CtaSection 
        title="Require Reverse Engineering Services?" 
        subtitle="We utilize advanced laser scanning to convert legacy physical parts into precise 3D CAD data." 
      />
    </main>
  );
};

export default MechanicalDesign;
