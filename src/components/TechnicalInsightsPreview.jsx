import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 'nonlinear-fea-rubber',
    title: 'Understanding Nonlinear FEA for Rubber Components',
    excerpt: 'How to calibrate Ogden, Mooney-Rivlin, and Yeoh hyperelastic strain energy potentials against multi-axial experimental stress-strain curves.',
    topic: 'FEA & Simulation',
    date: 'March 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'run-flat-mobility-systems',
    title: 'Engineering Run-Flat Mobility Systems for Tactical Vehicles',
    excerpt: 'Design considerations for dual-stage composite and elastomer run-flat inserts operating under total loss of pneumatic inflation pressure.',
    topic: 'Defense & Mobility',
    date: 'February 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tire-testing-validation',
    title: 'Tire Testing: Endurance, Rolling Resistance & High-Speed Uniformity',
    excerpt: 'Inside the testing protocols, dynamic force & moment measurement rigs, and international ISO/SAE standards that validate automotive tires.',
    topic: 'Testing & Validation',
    date: 'January 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop'
  }
];

const TechnicalInsightsPreview = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
              Engineering Knowledge Center
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Technical Insights & Research
            </h2>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-red-700 transition-colors"
          >
            <span>Visit Full Knowledge Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {art.topic}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-brand-primary transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Technical Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalInsightsPreview;
