import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { 
  Settings, Zap, ShieldCheck, Cpu, 
  Layers, Package, Microscope, CheckCircle2,
  Lock, TrendingUp, DollarSign, Clock, Award
} from 'lucide-react';

const RapidPrototyping = () => {
  // Service offerings grid data
  const manufacturingSolutions = [
    { 
      icon: <Settings />, 
      title: "Custom Part Manufacturing", 
      desc: "Tailored solutions for complex geometries and rigorous functional requirements." 
    },
    { 
      icon: <Zap />, 
      title: "Prototype Manufacturing", 
      desc: "Rapid prototyping using both additive and traditional subtractive methods." 
    },
    { 
      icon: <Layers />, 
      title: "Additive Manufacturing", 
      desc: "High-accuracy 3D printing in metal, plastic, and silicone with intricate designs." 
    },
    { 
      icon: <Package />, 
      title: "Advanced Materials", 
      desc: "Specialized manufacturing expertise in rubber, composites, and performance plastics." 
    },
    { 
      icon: <Microscope />, 
      title: "Assembly & Testing", 
      desc: "Full turnkey solutions including QA, environmental testing, and retail packaging." 
    },
    { 
      icon: <ShieldCheck />, 
      title: "Industrial Standards", 
      desc: "ISO-certified quality management ensures consistent production for global markets." 
    }
  ];

  // Core benefits for partnership
  const partnershipUSPs = [
    { icon: <Cpu />, title: "Multidisciplinary Expertise", desc: "Combining customer vision with AECS technical knowledge for optimal design." },
    { icon: <TrendingUp />, title: "Expand Capabilities", desc: "Access high-end facilities without long-term capital or staffing commitments." },
    { icon: <Clock />, title: "Timeline Management", desc: "We oversee milestones and deliverables for predictable project completion." },
    { icon: <Layers />, title: "State-of-the-Art Tech", desc: "Advanced CNC, additive manufacturing, and micro-machining at your disposal." },
    { icon: <DollarSign />, title: "Project Cost Control", desc: "Transparent budgeting and optimized designs reduce overall development expenses." },
    { icon: <Zap />, title: "Reduced Time to Market", desc: "Streamlined processes from design to production accelerate your launch." },
    { icon: <Lock />, title: "Absolute Confidentiality", desc: "Strict NDAs and secure development procedures to protect your innovations." },
    { icon: <Award />, title: "Market Advantage", desc: "Innovative manufacturing solutions that make your products distinct and competitive." },
    { icon: <CheckCircle2 />, title: "IP Protection", desc: "AECS supports patent preparation while ensuring IP remains customer-owned." },
    { icon: <TrendingUp />, title: "Competitive Edge", desc: "Outsourcing supports faster innovation cycles for sustained market leadership." }
  ];

  return (
    <article className="bg-white">
      <PageHero 
        title="Manufacturing & Rapid Prototyping" 
        subtitle="End-to-End Custom Part Production and Advanced Prototyping Solutions"
        backgroundImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop"
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Contact Us
        </Link>
      </PageHero>

      {/* Overview Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Precision Engineering Meets Agile Production</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Navigate the complexities of product development with AECS, your trusted partner in manufacturing and rapid prototyping services. Our end-to-end solutions encapsulate custom part production, leveraging both additive and traditional manufacturing techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <div className="inline-flex items-center px-5 py-2 rounded-xl bg-red-50 text-brand-primary text-xs font-black uppercase tracking-widest border border-red-100/50">
                  <Award className="w-4 h-4 mr-2" /> ISO 9001:2015
               </div>
               <div className="inline-flex items-center px-5 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs font-black uppercase tracking-widest border border-slate-100">
                  <Clock className="w-4 h-4 mr-2" /> High-Agility Timelines
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-10">
                <div className="relative pl-6 border-l-4 border-brand-primary/20">
                   <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                      <Settings className="text-brand-primary mr-3" size={24} /> Role of Custom Manufacturing
                   </h3>
                   <p className="text-slate-600 leading-relaxed">
                      Custom manufacturing ensures your ideas are realized efficiently and cost-effectively. From prototyping to full-scale production, AECS combines engineering expertise with advanced materials to validate concepts and accelerate commercialization.
                   </p>
                </div>
                <div className="relative pl-6 border-l-4 border-brand-primary/20">
                   <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                      <ShieldCheck className="text-brand-primary mr-3" size={24} /> Standardized Quality Controls
                   </h3>
                   <p className="text-slate-600 leading-relaxed">
                      AECS follows strict quality and process controls to ensure every part meets specifications. Standardized processes minimize errors, reduce cost, and enable consistent production quality—critical for competitive advantage.
                   </p>
                </div>
             </div>
             
             <div className="relative group">
                <div className="absolute inset-0 bg-brand-primary/5 rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <img 
                   src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2940&auto=format&fit=crop" 
                   alt="Precision manufacturing equipment and materials" 
                   className="rounded-3xl shadow-2xl relative z-10" 
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-sm">
                   <p className="text-sm font-bold text-slate-800 leading-relaxed italic">
                    "Specialized expertise in advanced materials including industrial rubber, performance composites, and high-strength alloys."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Manufacturing Infrastructure</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">Full-lifecycle solutions designed to meet highly technical and rigorous design specifications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingSolutions.map((solution, sIdx) => (
              <div key={sIdx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-red-50/50 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(solution.icon, { className: 'w-7 h-7' })}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Value Table/Grid */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Subtle texture overlay for human feel */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Strategic Partnership Benefits</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">Outsourcing to AECS streamlines the development lifecycle through cutting-edge technology and management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {partnershipUSPs.map((usp, uIdx) => (
              <div key={uIdx} className="flex gap-7">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary border border-white/10 group shadow-inner">
                    {React.cloneElement(usp.icon, { className: 'w-6 h-6 group-hover:scale-110 transition-transform' })}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold mb-3 tracking-tight">{usp.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation & Prototyping Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 px-4">Functional Prototyping</h2>
            <p className="text-slate-500 font-medium">We deliver high-fidelity prototypes that go beyond visual representation to offer true functional validation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              { 
                label: "Metal Fabrication", 
                type: "Precision Functional Parts",
                img: "https://images.unsplash.com/photo-1581092162384-8987c1794ed9?q=80&w=2940&auto=format&fit=crop"
              },
              { 
                label: "Polymer Molding", 
                type: "Industrial Injection Parts",
                img: "https://images.unsplash.com/photo-1563969411978-e8cb9b917de5?q=80&w=2938&auto=format&fit=crop"
              },
              { 
                label: "Silicone Prototyping", 
                type: "Flexible Solution Testing",
                img: "https://images.unsplash.com/photo-1544378730-8b510ed03aa9?q=80&w=2942&auto=format&fit=crop"
              }
            ].map((feature, fIdx) => (
              <div key={fIdx} className="overflow-hidden rounded-3xl group cursor-default shadow-sm border border-slate-100 flex flex-col h-full bg-slate-50/20">
                <div className="h-56 overflow-hidden">
                  <img src={feature.img} alt={feature.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-8 bg-white flex-grow flex flex-col justify-center">
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{feature.type}</span>
                  <h4 className="font-black text-slate-900 text-xl">{feature.label}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50/40 rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-red-100/50">
             <div className="relative z-10 lg:flex lg:items-center lg:gap-16">
                <div className="lg:w-2/3">
                   <h3 className="text-3xl font-black text-slate-900 mb-6">Validate Designs Before Production</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">
                      {/* NOTE: Functional validation is a core requirement for AECS clients */}
                      Additive manufacturing allows us to iterate on complex geometries with unmatched speed. Each prototype undergoes rigorous internal testing protocols to ensure mechanical and dimensional validation before moving to mass production.
                   </p>
                </div>
                <div className="lg:w-1/3 mt-10 lg:mt-0">
                   <Link to="/contact" className="btn-primary w-full justify-center py-5 text-center text-lg font-bold rounded-2xl shadow-xl shadow-brand-primary/20">
                      Get a Prototype Quote
                   </Link>
                </div>
             </div>
             {/* Abstract background element */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      <CtaSection title="Unlock the Potential of Your Engineering Vision" subtitle="Let’s discuss how our multidisciplinary expertise can contribute to your next market success." />
    </article>
  );
};

export default RapidPrototyping;


