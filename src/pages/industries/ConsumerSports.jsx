import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { Activity, Package, TrendingUp, Users, CheckCircle2, ChevronRight } from 'lucide-react';

const capabilities = [
  { title: "Wearables Development", desc: "End-to-end engineering for smart wearables including ergonomic design, sensor integration, material selection, and DFM (design for manufacturability)." },
  { title: "CPG Packaging Analysis", desc: "Structural and aesthetic analysis of consumer goods packaging to optimize for protection, cost, sustainability, and shelf appeal." },
  { title: "High-Volume Sourcing", desc: "AECS directly manages procurement and pricing negotiations with commercial and custom manufacturers to reduce cost and lead times." },
  { title: "3D Printing & Rapid Prototyping", desc: "FDM, SLA, and SLS printing for rapid, functional test models—enabling fast market validation before committing to tooling." },
  { title: "Quick-Turn Urethane Casting", desc: "Short-run silicone mold casting for 10–500 units, ideal for pre-production market testing and functional pilot batches." },
  { title: "Sports Equipment Engineering", desc: "Structural analysis and material optimization for high-performance sports gear, from helmet design to professional training equipment." }
];

const process = [
  { title: "Ideation & Market Research", desc: "AI-driven market analysis, customer insight studies, and concept definition to identify winning product opportunities.", icon: <TrendingUp className="w-8 h-8" /> },
  { title: "Industrial Design & Rendering", desc: "Aesthetic concept creation, 3D CAD modeling, photorealistic rendering, and marketing illustration for early stakeholder validation.", icon: <Package className="w-8 h-8" /> },
  { title: "Engineering & Prototype Build", desc: "Rapid plastic and elastomer prototyping using 3D printing and urethane casting. Functional testing in real-world conditions.", icon: <Activity className="w-8 h-8" /> },
  { title: "Production Scale-Up", desc: "Injection mold design, supplier qualification, and high-volume manufacturing setup for seamless market launch.", icon: <Users className="w-8 h-8" /> }
];

const ConsumerSports = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Consumer & Sports Engineering"
        subtitle="Rapid product development using 3D printing, quick-turn casting, and expert sourcing—from concept to market-ready production in record time."
        backgroundImage="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2970&auto=format&fit=crop"
      >
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="btn-primary py-4 px-10 text-lg shadow-xl">Let's Talk!</Link>
          <Link to="/services/prototyping" className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-4 px-10 rounded-lg font-bold hover:bg-white/20 transition-all text-lg">
            View Prototyping
          </Link>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-orange-950 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3D", label: "Printing & Rapid Prototyping" },
              { value: "500+", label: "Units via Urethane Casting" },
              { value: "20%", label: "Faster Time to Market" },
              { value: "360°", label: "End-to-End Solution" }
            ].map((s, i) => (
              <div key={i} className="text-center text-white">
                <p className="text-4xl font-black text-orange-400 italic tracking-tighter">{s.value}</p>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-6 border border-orange-100 uppercase tracking-widest text-[10px]">
                Industry Overview
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Fast-Track <span className="text-orange-600">Consumer Product Development</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                AECS delivers rapid consumer goods development utilizing 3D printing and quick-turn urethane casting to test market fit before scaling to millions in production. Our capabilities span generating marketing illustrations, 3D CAD models, high-quality renderings, physical models, and fully functional prototypes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Whether you're an inventor with a breakthrough concept or an established CPG brand looking to reduce time to market, AECS provides the engineering backbone to validate, iterate, and scale your product efficiently.
              </p>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary py-3 px-8 font-bold uppercase tracking-widest text-sm">Start a Consumer Project</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop"
                alt="Consumer Product Engineering"
                className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl border border-gray-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic mb-4">Core Capabilities</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-500 hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <CheckCircle2 className="w-8 h-8 text-orange-500 mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{cap.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-orange-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic mb-4">Our Development Process</h2>
            <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-orange-400 transition-colors group flex gap-6"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-orange-400 transition-colors">{step.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">Product Categories We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { code: "Wearables", desc: "Smart & Athletic Gear" },
              { code: "Sports", desc: "Equipment & Apparel" },
              { code: "Home", desc: "Consumer Appliances" },
              { code: "CPG", desc: "Packaged Goods" }
            ].map((cat, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-orange-500 transition-colors">
                <p className="text-2xl font-black text-orange-500 uppercase tracking-tight mb-2">{cat.code}</p>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Launch Your Consumer Product Faster"
        subtitle="AECS bridges concept and production with rapid prototyping, expert sourcing, and end-to-end engineering."
      />
    </div>
  );
};

export default ConsumerSports;
