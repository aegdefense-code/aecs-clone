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
  return (
    <div className="bg-white">
      <PageHero 
        title="Manufacturing & Rapid Prototyping" 
        subtitle="End-to-End Custom Part Production and Advanced Prototyping Solutions"
        backgroundImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop"
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Book an Appointment
        </Link>
      </PageHero>

      {/* Intro Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Precision Engineering Meets Agile Production</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Navigate the complexities of product development with AECS, your trusted partner in manufacturing and rapid prototyping services. Our end-to-end solutions encapsulate custom part production, leveraging both additive and traditional manufacturing techniques to meet innovative engineering demands. 
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-brand-primary text-sm font-bold border border-red-100">
                  <Award className="w-4 h-4 mr-2" /> ISO 9001:2015 Certified
               </span>
               <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-brand-primary text-sm font-bold border border-red-100">
                  <Clock className="w-4 h-4 mr-2" /> Competitive Timelines
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Settings className="text-brand-primary mr-3" /> Role of Custom Manufacturing
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                      Custom manufacturing ensures your ideas are realized efficiently and cost-effectively. From prototyping to full-scale production, AECS combines engineering expertise with advanced materials and manufacturing techniques to validate concepts and accelerate commercialization.
                   </p>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <ShieldCheck className="text-brand-primary mr-3" /> Standardized Processes
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                      AECS follows strict quality and process controls to ensure every part meets specifications. Standardized processes minimize errors, reduce cost, and enable consistent production quality, critical for competitive advantage and market success.
                   </p>
                </div>
             </div>
             <div className="relative">
                <img 
                   src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2940&auto=format&fit=crop" 
                   alt="Manufacturing Precision" 
                   className="rounded-2xl shadow-2xl" 
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block max-w-xs">
                   <p className="text-sm font-medium text-gray-900">Expertise in advanced materials including rubber, composites, and high-performance metals.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Advanced Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Custom Manufacturing Solutions</h2>
            <p className="text-gray-600">A full range of services to meet diverse and complex project requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((sol, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {React.cloneElement(sol.icon, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section - 10 Points */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with AECS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Outsourcing to AECS helps streamline development, reduce costs, and leverage advanced technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
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
            ].map((point, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-primary border border-white/10">
                    {React.cloneElement(point.icon, { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototyping Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Functional Prototyping for Validation</h2>
            <p className="text-gray-600">AECS offers high-fidelity prototypes that are both visually and functionally representative.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: "Metal Rapid Prototyping", 
                type: "Precision Functional Parts",
                img: "https://images.unsplash.com/photo-1581092162384-8987c1794ed9?q=80&w=2940&auto=format&fit=crop"
              },
              { 
                title: "Plastic Injection Molding", 
                type: "Realistic Polymer Components",
                img: "https://images.unsplash.com/photo-1563969411978-e8cb9b917de5?q=80&w=2938&auto=format&fit=crop"
              },
              { 
                title: "Silicone Rapid Prototyping", 
                type: "Flexible and Durable Parts",
                img: "https://images.unsplash.com/photo-1544378730-8b510ed03aa9?q=80&w=2942&auto=format&fit=crop"
              }
            ].map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl group cursor-default shadow-sm border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">{item.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="relative z-10 lg:flex lg:items-center lg:gap-12">
                <div className="lg:w-2/3">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Validate Designs Before Production</h3>
                   <p className="text-gray-600 leading-relaxed">
                      Our additive manufacturing capabilities allow for the creation of complex geometries, intricate designs, and functional prototypes with speed and accuracy. Prototypes are evaluated and tested according to AECS protocols to ensure designs are fully validated before mass production.
                   </p>
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                   <Link to="/contact" className="btn-primary w-full justify-center py-4 text-center">
                      Get a Prototype Quote
                   </Link>
                </div>
             </div>
             {/* Abstract background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      <CtaSection title="Unlock the Potential of Your Designs" subtitle="Let’s discuss how our multidisciplinary expertise can contribute to your market success." />
    </div>
  );
};

export default RapidPrototyping;

