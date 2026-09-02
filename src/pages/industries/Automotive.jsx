import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { Car, Wrench, Shield, Zap, CheckCircle2, ChevronRight, BarChart3, Settings } from 'lucide-react';

const capabilities = [
  { title: "Runflat & Military Inserts", desc: "Specialized engineering for runflat tire inserts used in military and armored vehicles requiring zero-pressure mobility." },
  { title: "Safety Cage & Roll Over Protection", desc: "High-strength safety cage design and structural simulation for passenger, motorsport, and defense vehicle occupant protection." },
  { title: "BIW (Body in White) Design", desc: "Complete 3D CAD and engineering from concept design through detailed production drawings for body structures." },
  { title: "Non-Pneumatic Tires", desc: "Full lifecycle development of airless tire technology, including material selection, prototype testing, and production readiness." },
  { title: "Chassis & Suspension FEA", desc: "Structural analysis and dynamic load simulation for chassis components and suspension systems to optimize safety and durability." },
  { title: "Engineered Plastics & Composites", desc: "Strategic application of lightweight materials for weight reduction, vibration damping, and cost optimization." }
];

const stats = [
  { value: "20+", label: "Years in Automotive Engineering" },
  { value: "ISO", label: "9001:2015 Certified" },
  { value: "OEM", label: "Tier 1 & 2 Supplier Support" },
  { value: "360°", label: "End-to-End Solution" }
];

const useCases = [
  {
    title: "Passenger Car Components",
    desc: "AECS supports OEMs and Tier-1 suppliers in developing high-performance, cost-efficient passenger car parts—from structural body panels to suspension systems.",
    points: ["3D solid & surface modeling", "NC toolpath generation", "2/3/5-axis machining verification"]
  },
  {
    title: "Commercial Vehicle Systems",
    desc: "Delivering robust engineering for heavy commercial vehicles with an emphasis on payload optimization, structural durability, and regulatory compliance.",
    points: ["Heavy-load structural simulation", "Fatigue analysis & lifecycle prediction", "ECE and CMVR compliance"]
  },
  {
    title: "Tire Testing & Validation",
    desc: "As an authorized Poling Group representative, AECS provides world-class tire testing machinery and expert consultation for final finish validation.",
    points: ["CX111 Tire Uniformity Tester", "DB-111 Dynamic Balance Tester", "Full installation & training support"]
  }
];

const Automotive = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Automotive & Tires"
        subtitle="End-to-end automotive engineering and manufacturing solutions for OEMs, Tier-1 and Tier-2 suppliers—from structural design to final finish tire validation."
        backgroundImage="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2825&auto=format&fit=crop"
      >
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="btn-primary py-4 px-10 text-lg shadow-xl">Contact Us</Link>
          <Link to="/services/tyre-testing" className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-4 px-10 rounded-lg font-bold hover:bg-white/20 transition-all text-lg">
            View Tyre Testing
          </Link>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-brand-dark py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-white">
                <p className="text-4xl font-black text-brand-primary italic tracking-tighter">{s.value}</p>
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
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-red-50 text-brand-primary text-sm font-bold mb-6 border border-red-100 uppercase tracking-widest text-[10px]">
                Industry Overview
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Reliable Automotive <span className="text-brand-primary">Manufacturing Solutions</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                AECS is a reliable automotive components manufacturer delivering end-to-end automotive engineering and manufacturing solutions. We support OEMs, Tier-1 and Tier-2 suppliers with high-performance, durable, and cost-effective automotive parts that meet global quality and safety standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                By combining decades of hands-on experience with advanced CAD/CAM tools, FEA simulation, and world-class Poling Group testing equipment, AECS ensures that every component and tire product meets the most demanding industry benchmarks.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary py-3 px-8 font-bold uppercase tracking-widest text-sm">Contact Us</Link>
                {/* <Link to="/services/fea" className="btn-outline py-3 px-8 font-bold uppercase tracking-widest text-sm">View FEA Services</Link> */}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2874&auto=format&fit=crop"
                alt="Automotive Engineering"
                className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl border border-gray-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic mb-4">Core Capabilities</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-brand-primary hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <CheckCircle2 className="w-8 h-8 text-brand-primary mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{cap.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic mb-4">Application Areas</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-brand-primary transition-colors group">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{uc.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm">{uc.desc}</p>
                <ul className="space-y-3">
                  {uc.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <ChevronRight className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                      <span className="font-bold text-gray-300 uppercase tracking-tight text-xs">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">Standards & Compliance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { code: "ISO 9001:2015", desc: "Quality Management" },
              { code: "IATF 16949", desc: "Automotive QMS" },
              // { code: "ECE R30 & R117", desc: "Tyre Safety Regs" },
              { code: "SAE Standards", desc: "Automotive Testing" }
            ].map((std, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-primary transition-colors">
                <p className="text-2xl font-black text-brand-primary uppercase tracking-tight mb-2">{std.code}</p>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Partner with AECS for Automotive Excellence"
        subtitle="Contact us to discuss your component manufacturing or tire development needs with a dedicated automotive engineering team."
      />
    </div>
  );
};

export default Automotive;
