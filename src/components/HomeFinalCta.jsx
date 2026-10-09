import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Clock, FileUp } from 'lucide-react';

const HomeFinalCta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/20 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-4 border border-brand-primary/30">
                <MessageSquare className="w-3.5 h-3.5" />
                Direct Engineering Dialogue
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Have an Engineering Challenge?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                Send AECS your engineering requirement, drawing, specification or product concept. Our engineering leadership will review the technical parameters and discuss the appropriate development path.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA Protection</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24–48h Technical Review</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FileUp className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>CAD / STEP / PDF Upload</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                to="/contact"
                className="btn-primary py-4 px-8 text-center text-base font-extrabold rounded-2xl shadow-xl shadow-brand-primary/40 flex items-center justify-center gap-2 group"
              >
                <span>Discuss With an Engineer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="py-3 px-6 text-center text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors"
              >
                Send Your Engineering Requirement
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinalCta;
