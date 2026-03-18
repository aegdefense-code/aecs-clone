import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { 
  Rocket, Target, Zap, Infinity, CheckCircle2, 
  Workflow, Cpu, Globe, Wrench, ShieldAlert,
  Beaker, Microscope, BarChart2, Ship
} from 'lucide-react';

const NewProductDevelopment = () => {
  const processSteps = [
    { 
      title: "Idea Generation", 
      desc: "Identifying engineering opportunities from OEM problem statements, tactical vehicle performance gaps, or internal R&D." 
    },
    { 
      title: "Idea Screening", 
      desc: "Evaluating technical feasibility, manufacturability, and military certification constraints using ISO 9001 criteria." 
    },
    { 
      title: "Concept Development & Engineering Testing", 
      desc: "Developing 3D CAD models, digital twins, and rapid prototypes to review geometry, weight, and durability." 
    },
    { 
      title: "Business Analysis & Product Strategy", 
      desc: "Conducting cost modeling (tooling, materials) and determining dual-use paths for military and commercial applications." 
    },
    { 
      title: "Product Development", 
      desc: "Building full-scale prototypes, conducting fatigue and ballistic testing, and optimizing manufacturing parameters." 
    },
    { 
      title: "Test Marketing / Limited Field Trials", 
      desc: "Executing controlled field deployments, such as military field tests or OEM fleet trials, to refine stress points." 
    },
    { 
      title: "Commercialization & Launch", 
      desc: "Setting up full-scale manufacturing lines, quality documentation, and providing post-launch support & training." 
    }
  ];

  return (
    <div className="bg-white">
      <PageHero 
        title="New Product Development (NPD)" 
        subtitle="Structured, Evidence-Based Engineering from Concept to Production-Ready Hardware"
        backgroundImage="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2940&auto=format&fit=crop"
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Book an Appointment
        </Link>
      </PageHero>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is Engineering New Product Development?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Engineering NPD at AECS is a structured, evidence-based process designed to transform an idea into a fully engineered, tested, and validated product. It serves as the bridge between an initial concept and functional, production-ready hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Beaker />, 
                title: "Scientific & Technical Drivers", 
                desc: "Material science, FEA and CAD modeling, and high-fidelity prototype iteration." 
              },
              { 
                icon: <ShieldAlert />, 
                title: "Feasibility & Standards", 
                desc: "Testing and certification standards, manufacturing feasibility, and mission requirements." 
              },
              { 
                icon: <Workflow />, 
                title: "Disciplined Cycle", 
                desc: "Modeling, material selection, fatigue simulation, and validation testing for every product." 
              }
            ].map((driver, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-brand-primary mb-4">{React.cloneElement(driver.icon, { className: 'w-10 h-10' })}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{driver.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{driver.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceleration Section */}
      <section className="py-20 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How AECS Accelerates Engineering Product Development</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Shortening development timelines and increasing confidence for commercial and defense adoption.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: "Integrated Ecosystem", 
                points: ["Partnerships with Classic-Apollo", "L&T Collaboration", "Composite Material Experts"]
              },
              { 
                icon: <Cpu className="w-8 h-8" />, 
                title: "Advanced Technologies", 
                points: ["Digital Twin Modeling", "AI-assisted Optimization", "Additive Manufacturing"]
              },
              { 
                icon: <Wrench className="w-8 h-8" />, 
                title: "In-House Capabilities", 
                points: ["Rapid Prototyping", "Modular Tooling", "Reduced Delay Risks"]
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Strategic Models", 
                points: ["Agile Engineering", "Stage-Gate Controls", "Lean Material Screening"]
              }
            ].map((box, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-brand-secondary mb-4">{box.icon}</div>
                <h3 className="text-lg font-bold mb-4">{box.title}</h3>
                <ul className="space-y-2">
                  {box.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refined 7-Step Process - Vertical Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AECS Refined 7-Step NPD Model</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A systematic, engineering-focused framework from imagination to physical reality.</p>
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 md:left-[28px] top-0 bottom-0 w-0.5 bg-red-200 hidden md:block"></div>

            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 md:gap-8">
                  {/* Badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 bg-brand-primary text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md ring-4 ring-white">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Full-width content card */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Step {idx + 1}</span>
                    <h4 className="font-black text-gray-900 text-xl mb-3 leading-snug">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Portfolio Section (Optional refinement of the existing one) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:flex lg:items-center lg:gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineered for Technical Adoption</h2>
                 <p className="text-lg text-gray-600 mb-8">
                    We specialize in high-stakes engineering where failure is not an option. Our developments are driven by fatigue simulation, material selection, and rigorous validation testing (mechanical, environmental, and ballistic).
                 </p>
                 <div className="space-y-4">
                    {[
                       { title: "Military & Defense", label: "Stage-Gate Engineering for risk control" },
                       { title: "Commercial Automotive", label: "Agile Engineering for rapid iteration" },
                       { title: "Advanced Materials", label: "Lean Engineering for early screening" }
                    ].map((item, idx) => (
                       <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <CheckCircle2 className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0" />
                          <div>
                             <span className="font-bold text-gray-900 block">{item.title}</span>
                             <span className="text-sm text-gray-500">{item.label}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1580983546513-39d67d730a9e?q=80&w=2938&auto=format&fit=crop" alt="Engineering Lab" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                    <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2940&auto=format&fit=crop" alt="Prototype Testing" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
                    <img src="https://images.unsplash.com/photo-1581092162384-8987c1794ed9?q=80&w=2940&auto=format&fit=crop" alt="CAD Design" className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8" />
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop" alt="Final Product" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <CtaSection title="Transform Your Concept Into Production-Ready Hardware" subtitle="Contact AECS today to leverage our structured engineering NPD process." />
    </div>
  );
};

export default NewProductDevelopment;

