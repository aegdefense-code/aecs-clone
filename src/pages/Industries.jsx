import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import { Car, Anchor, HeartPulse, Activity, ChevronRight } from 'lucide-react';

const industries = [
  {
    id: "automotive",
    icon: <Car className="w-8 h-8 text-brand-primary" />,
    title: "Automotive & Tires",
    desc: "From BIW (Body in White) design to complete non-pneumatic tire development. We supply Poling Group machinery for final finish validation and engineered plastics for weight reduction.",
    bullets: ["Chassis & Suspension FEA", "Tire Uniformity Verification", "Runflat Military Inserts"],
    link: "/industries/automotive",
    color: "brand-primary"
  },
  {
    id: "marine",
    icon: <Anchor className="w-8 h-8 text-blue-600" />,
    title: "Marine Engineering",
    desc: "Hydrodynamic simulations, hull stress analyses, and structural and fluid systems specifically designed for harsh marine environments and naval combat vessels.",
    bullets: ["CFD Hull Analysis", "Propeller Reverse Engineering", "Onboard HVAC & Plumbing"],
    link: "/industries/marine",
    color: "blue-600"
  },
  {
    id: "medical",
    icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
    title: "Medical Devices",
    desc: "ISO 13485 compliant design processes. We manage the development of surgical enclosures, ergonomic tool handles, and biocompatible material selection.",
    bullets: ["Ergonomic Concepting", "Injection Mold Design", "FDA Testing Prep"],
    link: "/industries/medical",
    color: "emerald-600"
  },
  {
    id: "consumer",
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    title: "Consumer & Sports",
    desc: "Rapid consumer goods development utilizing 3D printing and quick-turn urethane casting to test market fit before scaling to millions in production.",
    bullets: ["Wearables Development", "CPG Packaging Analysis", "High-Volume Sourcing"],
    link: "/industries/consumer-sports",
    color: "orange-500"
  }
];

const Industries = () => {
  return (
    <div>
      <PageHero
        title="Industries We Serve"
        subtitle="Domain-Specific Engineering Solutions for the World's Most Demanding Sectors"
        backgroundImage="https://images.unsplash.com/photo-1508344928928-7137b29de216?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 scroll-mt-24 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">{industry.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow font-medium leading-relaxed">{industry.desc}</p>
                <ul className="space-y-2 text-sm font-bold text-gray-500 mb-10">
                  {industry.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-brand-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  to={industry.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-gray-50 text-brand-dark font-black text-sm uppercase tracking-widest rounded-2xl border border-gray-100 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300"
                >
                  Explore {industry.title} <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Don't See Your Industry?" subtitle="Our foundational engineering principles (FEA, CAD, Materials) apply to virtually any physical product. Contact us to discuss your specific niche." />
    </div>
  );
};

export default Industries;
