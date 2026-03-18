import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';

const EngineeringMaterials = () => {
  return (
    <div>
      <PageHero 
        title="Engineering Materials" 
        subtitle="Material Science Solutions: Rubber, Plastic, and Composites"
        backgroundImage="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Material Selection & Processing</h2>
              <p className="text-lg text-gray-600">
                The success of any engineered product relies fundamentally on material application. We specialize in developing and processing elastomers, high-performance thermoplastics, and fiber-reinforced composites to meet specific chemical, thermal, and structural requirements.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Rubber */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                 <img src="https://images.unsplash.com/photo-1549468057-5426b38c03e8?q=80&w=2960&auto=format&fit=crop" alt="Rubber Extrusion" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Industrial Rubber & Elastomers</h3>
                    <p className="text-gray-300 text-sm">Specialized compounding for extreme temperatures (EPDM), chemical resistance (Viton), and high-wear profiles (Polyurethane).</p>
                 </div>
              </div>
              
              {/* Plastics */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                 <img src="https://images.unsplash.com/photo-1623835694200-e22e96ebbe5c?q=80&w=2942&auto=format&fit=crop" alt="Plastic Injection" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Engineered Plastics</h3>
                    <p className="text-gray-300 text-sm">Injection-ready thermoplastics like PEEK, Delrin, and Glass-filled Nylon optimized for strength-to-weight ratios.</p>
                 </div>
              </div>

              {/* Composites */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                 <img src="https://images.unsplash.com/photo-1555448259-c29eb24874c7?q=80&w=2938&auto=format&fit=crop" alt="Carbon Fiber" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Advanced Composites</h3>
                    <p className="text-gray-300 text-sm">Carbon fiber woven laminates and Kevlar matrices for military and aerospace lightweighting applications.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <CtaSection title="Material Uncertainty Guaranteeing Failure?" subtitle="Our material scientists perform rheological testing and compound analyses to ensure your product survives the real world." />
    </div>
  );
};

export default EngineeringMaterials;
