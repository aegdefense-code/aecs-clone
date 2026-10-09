import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import SEO from '../../components/SEO';
import { 
  Wrench, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  Gauge, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Boxes 
} from 'lucide-react';

const IndustrialEquipment = () => {
  const capabilities = [
    {
      title: "Custom Testing Benches & Dynamometers",
      desc: "Turnkey design, fabrication, and PLC control integration of specialized endurance, fatigue, and load-frame testing machinery for rubber, tire, and mechanical component validation.",
      icon: <Gauge className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Tire Testing Automation & Machine Support",
      desc: "As the authorized India representative for Poling Group, AECS supports high-speed dynamic uniformity testers (HSU), rolling resistance systems, and force & moment rigs with local calibration and engineering.",
      icon: <Settings className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Tooling, Fixtures & DFM Engineering",
      desc: "High-precision assembly jigs, CNC machining fixtures, hydraulic clamping systems, and specialized vulcanization mold tooling engineered for high cycle life.",
      icon: <Wrench className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Blast Containment & Safety Systems",
      desc: "Custom structural tubular steel tire inflation safety cages engineered to dissipate catastrophic blast overpressures and retain projectile rim rings in full compliance with OSHA 29 CFR 1910.177.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Structural Frame & Gantry FEA",
      desc: "Linear and nonlinear static and dynamic stress analysis on heavy crane girders, automated transfer carriages, and heavy mechanical press beds to eliminate harmonic resonance.",
      icon: <Boxes className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Hydraulic & Electro-Mechanical Integration",
      desc: "Servo-hydraulic cylinder sizing, manifold routing, sensor array DAQ integration, and safety PLC programming for industrial automation systems.",
      icon: <Cpu className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Industrial Equipment Engineering | Machinery, Fixtures & Testing Rigs"
        description="AECS industrial equipment engineering: Custom test benches, Poling Group tire testing machines, assembly fixtures, DFM, and blast containment safety systems."
        canonical="/industries/industrial-equipment"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Industrial Equipment Engineering",
          "provider": {
            "@type": "Organization",
            "name": "American Engineering Consultancy Services (AECS)"
          },
          "description": "Heavy industrial machinery design, custom test benches, automation fixtures, and equipment commissioning."
        }}
      />

      <PageHero
        title="Industrial Equipment & Machinery Engineering"
        subtitle="Specialized Machinery Design, Custom Testing Systems, and Heavy Industrial Automation"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary py-3.5 px-8 text-base shadow-xl">
            Discuss Your Equipment Requirement
          </Link>
          <Link to="/products" className="py-3.5 px-6 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base backdrop-blur-sm">
            View Engineered Products
          </Link>
        </div>
      </PageHero>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Machinery & Tooling Engineering</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                From Custom Prototyping Fixtures to Industrial-Scale Testing Infrastructure
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Industrial manufacturing demands machinery that operates with unwavering precision, minimal cycle times, and uncompromising structural integrity. AECS designs and engineers custom mechanical equipment, high-force hydraulic test rigs, and automated manufacturing fixtures for leading industrial clients across India and international markets.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Through our long-standing technical collaboration as the authorized representative for Poling Group, we provide Indian tire and automotive manufacturers with high-precision dynamic testing machines—accompanied by comprehensive local commissioning, calibration, and engineering support.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-brand-primary rounded-r-xl text-sm font-medium text-slate-700">
                “We engineer equipment that withstands punishing duty cycles—combining analytical structural FEA, precision tolerance stackups, and rigorous shop-floor commissioning.”
              </div>
            </div>

            <div className="mt-12 lg:mt-0 space-y-4">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
                <h3 className="text-xl font-bold mb-4 text-white">Industrial Capabilities Overview</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Poling Group tire uniformity (CX111) and dynamic balance (DB-111) systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Multi-axis servo-hydraulic force & moment (F&M) evaluation benches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>OSHA-compliant blast mitigation tire inflation safety containment cages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Custom CNC machining fixtures and automated production line tooling</span>
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
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Industrial Scope</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Machinery & Fixture Engineering Solutions</h2>
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
        title="Need Custom Equipment or Testing Machinery Designed?"
        subtitle="Submit your technical specification or machine duty requirements. Our mechanical engineering team will provide a comprehensive engineering evaluation."
        buttonText="Discuss Your Industry Requirement"
        buttonLink="/contact"
      />
    </div>
  );
};

export default IndustrialEquipment;
