import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import SEO from '../../components/SEO';
import { 
  ShieldCheck, 
  Crosshair, 
  Truck, 
  Layers, 
  Activity, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Award 
} from 'lucide-react';

const DefenseMobility = () => {
  const capabilities = [
    {
      title: "Tactical Run-Flat Tire Wheel Systems",
      desc: "Engineering lightweight multi-piece composite and elastomeric run-flat inserts engineered for 4x4, 6x6, and 8x8 armored platforms to guarantee sustained vehicle escape and steering control following ballistic or IED tire deflation.",
      icon: <Truck className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Lightweight Armored Composites & Spall Liners",
      desc: "Advanced fiber-reinforced polymers, aramid laminates, and carbon-epoxy composite structures engineered for maximum energy absorption, structural weight reduction, and ballistic fragment mitigation.",
      icon: <Layers className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "High-Strain Dynamic Impact Simulation",
      desc: "Explicit dynamic finite element analysis (FEA) modeling blast overpressure wave interaction, vehicle hull deflections, and shock transmission into crew compartment seating systems.",
      icon: <Crosshair className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Military Vehicle Suspension & Mobility Rigs",
      desc: "Extreme terrain mobility simulation, heavy-duty elastomer suspension bushings, and dynamic durability testing under severe combat payload duty cycles.",
      icon: <Activity className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Non-Pneumatic (Airless) Defense Wheel Concepts",
      desc: "Zero-pressure biomimetic spoke wheels engineered with high-tear polyurethane formulations, completely eliminating puncture vulnerability for autonomous tactical rovers and utility vehicles.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Controlled Program Security & Compliance",
      desc: "Strict compartmentalization of proprietary technical data, NDA adherence, and adherence to public release boundaries for defense-contract deliverables.",
      icon: <Lock className="w-6 h-6 text-brand-primary" />
    }
  ];

  const stats = [
    { value: "50+ km", label: "Zero-Pressure Run-Flat Range" },
    { value: "12 Ton", label: "Payload Capacity Validated" },
    { value: "ISO", label: "9001:2015 Quality Accredited" },
    { value: "100%", label: "Strict NDA & Data Security" }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Defense & Tactical Mobility Engineering | Run-Flat Systems & Composites"
        description="AECS defense engineering solutions: Tactical run-flat tire systems, lightweight armored composites, blast mitigation analysis, and severe-duty mobility engineering."
        canonical="/industries/defense-mobility"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Defense & Tactical Mobility Engineering",
          "provider": {
            "@type": "Organization",
            "name": "American Engineering Consultancy Services (AECS)"
          },
          "description": "Tactical run-flat wheel inserts, ballistic-resistant composite structures, and military vehicle mobility analysis."
        }}
      />

      <PageHero
        title="Defense & Mobility Engineering"
        subtitle="Mission-Critical Mobility, Tactical Run-Flat Technology, and High-Energy Impact Protection"
        backgroundImage="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2940&auto=format&fit=crop"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary py-3.5 px-8 text-base shadow-xl">
            Discuss Your Defense Requirement
          </Link>
          <Link to="/projects" className="py-3.5 px-6 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base backdrop-blur-sm">
            View Run-Flat Case Study
          </Link>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-slate-950 py-10 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx}>
                <p className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">{s.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Tactical Mobility & Defense Engineering</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Engineering Resilience Under Extreme Ballistic and Dynamic Shock Environments
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                In military and tactical operations, vehicle mobility is synonymous with survival. AECS supports defense equipment manufacturers, tactical vehicle builders, and government contractors with precision-engineered mobility components built to withstand total pneumatic loss, severe blast overpressure, and punishing terrain.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Our flagship defense developments include lightweight, high-lubricity composite Run-Flat Tire Insert systems tested in extreme Middle Eastern desert temperatures and validated across hundreds of kilometers of hostile proving ground testing.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm font-medium text-slate-700">
                <strong>Data Protection & Compliance Notice:</strong> AECS strictly adheres to proprietary non-disclosure obligations and export controls. Defense program content presented on this site represents solely unclassified, publicly releasable engineering capabilities.
              </div>
            </div>

            <div className="mt-12 lg:mt-0 space-y-4">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
                <h3 className="text-xl font-bold mb-4 text-white">Defense Mobility Competencies</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Run-Flat inserts for standard 16.5”, 17”, 18”, and 20” drop-center combat rims</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>High-temperature friction damping polymers and internal beadlock systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>FINABEL and military standard zero-pressure distance validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Extreme fatigue suspension dampers, bump stops, and track pad elastomers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Defense Applications</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Engineering Solutions for Tactical Fleets</h2>
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

      {/* Contextual CTA */}
      <CtaSection
        title="Require Mission-Critical Mobility Engineering?"
        subtitle="Schedule a secure technical consultation with our engineering directors. Strict non-disclosure agreements provided prior to technical review."
        buttonText="Discuss Your Defense Requirement"
        buttonLink="/contact"
      />
    </div>
  );
};

export default DefenseMobility;
