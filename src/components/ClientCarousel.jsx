import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Client Logo Assets
import cslLogo from '../assets/images/clients/csl.png';
import mrfLogo from '../assets/images/clients/mrf.png';
import eurogripLogo from '../assets/images/clients/eurogrip.png';
import apolloLogo from '../assets/images/clients/apollo.png';
import ceatLogo from '../assets/images/clients/ceat.png';

const clients = [
  {
    id: "csl",
    name: "Cochin Shipyard Limited",
    shortName: "CSL",
    logo: cslLogo,
    sector: "Shipbuilding & Marine",
  },
  {
    id: "mrf",
    name: "MRF Tyres",
    shortName: "MRF",
    logo: mrfLogo,
    sector: "Automotive & Tyres",
  },
  {
    id: "eurogrip",
    name: "TVS Eurogrip",
    shortName: "Eurogrip",
    logo: eurogripLogo,
    sector: "Two-Wheeler & Tyres",
  },
  {
    id: "apollo",
    name: "Apollo Tyres",
    shortName: "Apollo",
    logo: apolloLogo,
    sector: "Commercial & Passenger Tyres",
  },
  {
    id: "ceat",
    name: "CEAT Tyres",
    shortName: "CEAT",
    logo: ceatLogo,
    sector: "Global Tyre Solutions",
  },
];

const ClientCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create a seamless infinite loop
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 mb-3">
            Our Clients
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="w-8 h-1 bg-brand-primary rounded-full"></span>
            <span className="w-2 h-1 bg-slate-300 rounded-full"></span>
            <span className="w-8 h-1 bg-brand-primary rounded-full"></span>
          </div>
        </div>

        {/* Carousel / Infinite Marquee Track */}
        <div 
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left & Right Gradient Shadows for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Row */}
          <div className="flex">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 shrink-0"
              animate={isPaused ? { x: undefined } : { x: ['0%', '-33.333%'] }}
              transition={{
                ease: 'linear',
                duration: 25,
                repeat: Infinity,
              }}
            >
              {marqueeItems.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="flex flex-col items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shrink-0 min-w-[210px] sm:min-w-[250px] h-48 sm:h-52 select-none shadow-sm"
                >
                  <div className="h-24 w-full flex items-center justify-center p-2">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-20 max-w-[140px] sm:max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="text-center w-full mt-2 pt-2 border-t border-slate-100">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors tracking-tight leading-snug">
                      {client.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      {client.sector}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientCarousel;
