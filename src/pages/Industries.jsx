import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import { ChevronRight } from 'lucide-react';

const industries = [
  {
    id: "automotive",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2825&auto=format&fit=crop",
    title: "Automotive & Tires",
    desc: "From BIW design to complete non-pneumatic tire development and machinery validation.",
    link: "/industries/automotive"
  },
  {
    id: "marine",
    image: "https://images.unsplash.com/photo-1543886566-6b22c7102e3b?q=80&w=2874&auto=format&fit=crop",
    title: "Marine Engineering",
    desc: "Hydrodynamic simulations, hull stress analyses, and structural and fluid systems.",
    link: "/industries/marine"
  },
  {
    id: "medical",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?q=80&w=2974&auto=format&fit=crop",
    title: "Medical Devices",
    desc: "ISO 13485 compliant design processes for surgical enclosures and ergonomic tools.",
    link: "/industries/medical"
  },
  {
    id: "consumer",
    image: "https://images.unsplash.com/photo-1544117518-30dd5ff7a4b0?q=80&w=2938&auto=format&fit=crop",
    title: "Wearables & Sports Tech",
    desc: "Precision engineering for smartwatch integration, biometric wearables, and performance athletic gear.",
    link: "/industries/consumer-sports"
  }
];

const Industries = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Industries We Serve"
        subtitle="Domain-Specific Engineering Solutions for the World's Most Demanding Sectors"
        backgroundImage="https://images.unsplash.com/photo-1508344928928-7137b29de216?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* 90% Image Height Container */}
                <div className="relative aspect-[4/3] sm:aspect-[21/9] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-2 tracking-tighter uppercase italic">{industry.title}</h3>
                  <p className="text-gray-600 text-base font-medium mb-4 leading-relaxed line-clamp-2">
                    {industry.desc}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={industry.link}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-lg hover:bg-brand-dark transition-all duration-300 group/link shadow-md shadow-brand-primary/20"
                    >
                      Read More
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" strokeWidth={3} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Don't See Your Industry?" subtitle="Our foundational engineering principles apply to virtually any physical product. Contact us to discuss your specific niche." />
    </div>
  );
};

export default Industries;
