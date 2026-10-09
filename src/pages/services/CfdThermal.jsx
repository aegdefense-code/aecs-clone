import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import SEO from '../../components/SEO';
import { 
  Wind, 
  Thermometer, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Gauge, 
  Flame 
} from 'lucide-react';

const CfdThermal = () => {
  const capabilities = [
    {
      title: "Aerodynamic & External Flow",
      desc: "Comprehensive drag and lift optimization, boundary layer separation analysis, and pressure distribution modeling for automotive bodies, marine superstructures, and high-speed equipment.",
      icon: <Wind className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Conjugate Heat Transfer (CHT)",
      desc: "Simultaneous thermal conduction through solid structures and convective heat transfer in fluids, critical for engine cooling jackets, battery thermal packs, and industrial exchangers.",
      icon: <Thermometer className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Electronics & EV Battery Thermal",
      desc: "Thermal management for power electronics, inverter enclosures, and high-discharge lithium-ion battery modules to prevent thermal runaway and optimize parasitic pump loads.",
      icon: <Cpu className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Multiphase & Free-Surface Flows",
      desc: "Eulerian and Lagrangian tracking of fluid-gas interactions, sloshing in tanks, maritime hydrodynamic wake prediction, and pneumatic fluid mixing dynamics.",
      icon: <Layers className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Combustion & High-Temperature Gas",
      desc: "Reacting flow dynamics, exhaust manifold gas velocities, burner efficiency studies, and high-temperature material thermal stress coupling.",
      icon: <Flame className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Hydrodynamics & Marine Propulsion",
      desc: "Cavitation risk prediction, propeller thrust efficiency, watercraft resistance curves, and marine fender kinetic damping during berthing impacts.",
      icon: <Gauge className="w-6 h-6 text-brand-primary" />
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Geometry Preparation & Fluid Domain",
      desc: "CAD cleanup, fluid volume extraction, defeaturing, and boundary condition specification."
    },
    {
      step: "02",
      title: "High-Fidelity Meshing",
      desc: "Polyhedral and boundary-layer prism meshing capturing near-wall y+ turbulence physics."
    },
    {
      step: "03",
      title: "Physics Setup & Numerical Solving",
      desc: "Turbulence modeling (k-epsilon, k-omega SST, LES/DES), Navier-Stokes multi-equation convergence."
    },
    {
      step: "04",
      title: "Validation & Design Deliverables",
      desc: "Pressure drop curves, velocity streamline plots, thermal gradient maps, and actionable CAD revisions."
    }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="CFD & Thermal Analysis Services | Flow Simulation & Heat Transfer"
        description="Advanced Computational Fluid Dynamics (CFD) and conjugate thermal simulation services by AECS. Aerodynamics, heat exchangers, electronics cooling, and multiphase flow."
        canonical="/services/cfd-thermal"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Computational Fluid Dynamics (CFD) & Thermal Analysis",
          "provider": {
            "@type": "Organization",
            "name": "American Engineering Consultancy Services (AECS)"
          },
          "description": "High-accuracy numerical flow simulation, conjugate heat transfer, aerodynamics, and thermal management."
        }}
      />

      <PageHero
        title="CFD & Thermal Analysis Services"
        subtitle="Computational Fluid Dynamics and Conjugate Heat Transfer Simulation for High-Performance Systems"
        backgroundImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary py-3.5 px-8 text-base shadow-xl">
            Send Us Your CFD Requirement
          </Link>
          <Link to="/projects" className="py-3.5 px-6 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base backdrop-blur-sm">
            View Simulation Case Studies
          </Link>
        </div>
      </PageHero>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Fluid Dynamics Engineering</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Predict Flow Physics, Minimize Pressure Loss, and Control Thermal Gradients
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                At AECS, our Computational Fluid Dynamics (CFD) engineering practice combines advanced numerical mechanics with experimental engineering insight. We simulate complex fluid behavior, thermodynamic dissipation, and aerodynamic interaction before physical prototypes are built.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Whether developing active aerodynamic ducting for automotive platforms, validating cooling efficiency in high-density electric vehicle battery packs, or modeling hydrodynamic drag on marine vessels, our simulation engineers deliver quantitative, validated answers.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-brand-primary rounded-r-xl text-sm font-medium text-slate-700">
                “Coupling accurate turbulence physics with structural FEA allows AECS to deliver unified thermo-mechanical reliability for mission-critical industrial hardware.”
              </div>
            </div>

            <div className="mt-12 lg:mt-0 space-y-4">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-xl font-bold mb-4 text-white">CFD Simulation Capabilities</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Incompressible & compressible Navier-Stokes solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Conjugate Heat Transfer (solid-fluid thermal conduction)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Particle tracing, spray patterns & multiphase volume-of-fluid (VOF)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Turbulence modeling: k-ε, k-ω SST, Transition SST, and Large Eddy Simulation (LES)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>FSI (Fluid-Structure Interaction) one-way and two-way coupling with Abaqus/ANSYS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capability Areas */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Technical Scope</span>
            <h2 className="text-3xl font-extrabold text-slate-900">CFD & Thermal Analysis Applications</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">Targeted physics solving across industrial, mobility, and marine systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Standardized Engineering Workflow</span>
            <h2 className="text-3xl font-extrabold text-slate-900">How We Execute CFD Projects</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((s, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative">
                <span className="text-3xl font-black text-brand-primary/20 block mb-3">{s.step}</span>
                <h4 className="font-bold text-slate-900 text-base mb-2">{s.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <CtaSection
        title="Ready to Analyze Your Fluid Flow or Thermal System?"
        subtitle="Upload your CAD model or flow requirements. Our simulation engineering team will perform an initial feasibility review within 24-48 hours."
        buttonText="Send Us Your CFD Requirement"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CfdThermal;
