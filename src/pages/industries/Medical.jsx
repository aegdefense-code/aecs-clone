import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { HeartPulse, ShieldCheck, ClipboardList, Microscope, CheckCircle2, ChevronRight } from 'lucide-react';

const capabilities = [
  { title: "ISO 13485 QMS Design", desc: "Full quality management system setup and documentation aligned with ISO 13485, specifically tailored for medical device manufacture." },
  { title: "Ergonomic Product Concepting", desc: "Human-factors engineering and ergonomic design for surgical tools, diagnostic devices, and patient-contact equipment." },
  { title: "Injection Mold Design", desc: "Precision mold design for biocompatible polymer and elastomer components used in medical enclosures and housings." },
  { title: "FDA Regulatory Preparation", desc: "Expert guidance through 510(k), De Novo, and PMA submission processes with full documentation and risk management support." },
  { title: "ISO 14971 Risk Management", desc: "Systematic hazard identification, risk estimation, and risk control documentation for all medical device development stages." },
  { title: "Biocompatible Material Selection", desc: "Specification of USP Class VI and ISO 10993-compliant materials for all patient-contact and implantable applications." }
];

const steps = [
  { num: "01", title: "Device Discovery & Concept Definition", desc: "Feasibility assessment, clinical need validation, regulatory pathway identification, and initial concept generation with 3D CAD models." },
  { num: "02", title: "Preclinical Research & Prototype Development", desc: "Rapid prototyping using SLA, SLS, and FDM printing. Digital twins, simulation analysis, and bench testing for proof of concept." },
  { num: "03", title: "Regulatory Strategy & Clinical Preparation", desc: "ISO 13485-compliant QMS integration, ISO 14971 risk management documentation, and clinical trial protocol support." },
  { num: "04", title: "FDA Review & Market Authorization", desc: "Preparation and submission of FDA 510(k), De Novo, or PMA applications with design history file (DHF) and technical file documentation." },
  { num: "05", title: "Post-Market Surveillance & Compliance", desc: "Ongoing vigilance system setup, complaint handling, CAPA processes, and MDR 2017 regulatory compliance monitoring." }
];

const Medical = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Medical Device Engineering"
        subtitle="ISO 13485 compliant, FDA-ready design and development processes for surgical tools, medical devices, and biocompatible systems."
        backgroundImage="https://images.unsplash.com/photo-1530026405186-ed1f139313f3?q=80&w=2974&auto=format&fit=crop"
      >
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="btn-primary py-4 px-10 text-lg shadow-xl">Contact Us</Link>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-emerald-950 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80%", label: "Startup failure rate we help avoid" },
              { value: "ISO", label: "13485 & 14971 Compliant" },
              { value: "FDA", label: "510(k), De Novo, PMA" },
              { value: "5-Stage", label: "Structured Development Process" }
            ].map((s, i) => (
              <div key={i} className="text-center text-white">
                <p className="text-4xl font-black text-emerald-400 italic tracking-tighter">{s.value}</p>
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
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-6 border border-emerald-100 uppercase tracking-widest text-[10px]">
                Industry Overview
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Precision <span className="text-emerald-600">Medical Innovation</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                Statistics show that over 80% of medical device startups fail, often due to regulatory missteps, inadequate validation, or poor execution. AECS mitigates these risks through a structured, compliance-driven engineering approach that aligns technology, design, and regulatory strategy from day one.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Our structured approach dramatically reduces approval timelines, prevents costly regulatory rework, and minimizes compliance risk—providing a clear, reliable path to market for your medical device.
              </p>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary py-3 px-8 font-bold uppercase tracking-widest text-sm">Start a Medical Project</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2940&auto=format&fit=crop"
                alt="Medical Device Engineering"
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
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-emerald-600 hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{cap.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage NPD Process */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic mb-4">5-Stage Development Process</h2>
            <div className="w-20 h-1.5 bg-emerald-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-8 bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-emerald-400 transition-colors group"
              >
                <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-400 font-black text-2xl italic shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">{step.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">Compliance Standards</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { code: "ISO 13485", desc: "Medical Device QMS" },
              { code: "ISO 14971", desc: "Risk Management" },
              { code: "FDA QSR", desc: "Quality System Regs" },
              { code: "MDR 2017", desc: "EU Medical Device Reg" }
            ].map((std, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-600 transition-colors">
                <p className="text-2xl font-black text-emerald-600 uppercase tracking-tight mb-2">{std.code}</p>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Bring Your Medical Device to Market Faster"
        subtitle="AECS provides structured, compliance-driven engineering from concept to FDA clearance."
      />
    </div>
  );
};

export default Medical;
