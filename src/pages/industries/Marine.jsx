import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { Anchor, Waves, Settings, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import marineImg from '../../assets/images/marine-engineering.jpg';

const capabilities = [
  // { title: "CFD Hull Analysis", desc: "Advanced computational fluid dynamics simulations to optimize hydrodynamic performance and reduce fuel consumption." },
  // { title: "Propeller Reverse Engineering", desc: "Precise 3D scanning and CAD reconstruction of existing propellers for performance analysis or accurate replacement." },
  // { title: "Onboard HVAC & Plumbing", desc: "Engineering of climate control and fluid systems built to withstand corrosion, vibration, and harsh marine environments." },
  // { title: "Pneumatic Fender Design", desc: "Design, analysis, and testing of ISO 17357-compliant marine fenders for safe port and vessel-to-vessel docking." },
  // { title: "Structural Hull Design", desc: "Detailed finite element analysis (FEA) of hull structures for stress distribution, fatigue life, and wave impact loads." },
  { title: "Naval & Offshore Systems", desc: "Specialized engineering for naval combat vessels and offshore platforms requiring extreme structural integrity." }
];

const stats = [
  { value: "ISO", label: "17357 Fender Compliance" },
  { value: "CFD", label: "Hydrodynamic Simulation" },
  { value: "3D", label: "Full CAD & Prototyping" },
  { value: "360°", label: "Concept to Delivery" }
];

const projects = [
  {
    title: "Pneumatic Marine Fenders",
    desc: "AECS has executed government contract projects for the design and manufacturing of industrial fenders, meeting stringent regulatory and performance requirements.",
    points: ["ISO 17357 compliance", "Rubber material engineering", "Performance testing & certification"]
  },
  // {
  //   title: "Naval Vessel Engineering",
  //   desc: "Structural and fluid systems engineering specifically designed for naval combat vessels, including specialized hull modifications and equipment integration.",
  //   points: ["Hydrodynamic drag reduction", "Hull stress analysis under combat loads", "Propulsion system optimization"]
  // },
  {
    title: "Marine Product Development",
    desc: "Full NPD support for marine products—from concept design and 3D CAD models to prototype manufacturing and functional test-ready assemblies.",
    points: ["Concept design & rendering", "Physical prototype fabrication", "Functional test-ready assemblies"]
  }
];

const Marine = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Marine Engineering"
        subtitle="Hydrodynamic simulations, hull stress analysis, structural systems, and pneumatic fender design for naval and commercial marine applications."
        backgroundImage="https://images.unsplash.com/photo-1543886566-6b22c7102e3b?q=80&w=2874&auto=format&fit=crop"
      >
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="btn-primary py-4 px-10 text-lg shadow-xl">Contact Us</Link>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-white">
                <p className="text-4xl font-black text-blue-400 italic tracking-tighter">{s.value}</p>
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
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 border border-blue-100 uppercase tracking-widest text-[10px]">
                Industry Overview
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Advanced Marine <span className="text-blue-600">Engineering Services</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                With extensive experience in the marine sector, AECS has delivered concept designs, 3D CAD models, detailed engineering drawings, high-quality renderings, physical prototypes, and functional test-ready assemblies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Our comprehensive approach ensures marine product concepts are validated early, comply with strict industry standards (including ISO 17357 for pneumatic fenders), and perform reliably under real-world marine conditions.
              </p>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary py-3 px-8 font-bold uppercase tracking-widest text-sm">Start a Marine Project</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src={marineImg}
                alt="Marine Engineering"
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
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-600 hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{cap.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Applications */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic mb-4">Application Areas</h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-400 transition-colors group">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm">{proj.desc}</p>
                <ul className="space-y-3">
                  {proj.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
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
              { code: "ISO 17357", desc: "Pneumatic Fenders" },
              { code: "ISO 9001", desc: "Quality Management" },
              // { code: "MARPOL", desc: "Marine Pollution Regs" },
              { code: "SOLAS", desc: "Ship Safety Standards" }
            ].map((std, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-600 transition-colors">
                <p className="text-2xl font-black text-blue-600 uppercase tracking-tight mb-2">{std.code}</p>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Navigate Marine Challenges with AECS"
        subtitle="Contact us to discuss your marine engineering, fender design, or structural analysis requirements."
      />
    </div>
  );
};

export default Marine;
