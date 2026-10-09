import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { CheckCircle2 } from 'lucide-react';
import marineImg from '../assets/images/marine-engineering.jpg';

const industries = [
  {
    id: "automotive",
    title: "Automotive & Tires",
    tagline: "Tier 1 & OEM | BIW & Chassis | Run-Flat Systems | Poling Testing Rigs",
    description: "Turnkey automotive mechanical design, lightweight composite integration, and tire testing machinery validation for global OEMs and Tier-1 suppliers.",
    capabilities: [
      "BIW structural modeling, chassis kinematics & NVH analysis",
      "Non-pneumatic (airless) tire design & biomimetic spoke development",
      "High-speed tire uniformity (TUM) & dynamic balance testing rigs",
      "Finite element crashworthiness, fatigue prediction & durability simulation"
    ],
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2825&auto=format&fit=crop",
    link: "/industries/automotive",
    linkText: "Explore Automotive Solutions",
    delay: 0.05
  },
  {
    id: "defense-mobility",
    title: "Defense & Tactical Mobility",
    tagline: "Armored Fleets | Run-Flat Inserts | Blast Simulation | Ballistic Composites",
    description: "Mission-critical engineering for tactical defense platforms, specialized armored vehicles, and high-threat mobility systems under strict operational compliance.",
    capabilities: [
      "Multi-piece composite run-flat wheel inserts (50+ km zero-pressure escape)",
      "Explicit dynamic blast overpressure & spall mitigation simulation",
      "Heavy-payload military suspension & extreme duty-cycle elastomeric mounts",
      "Compartmentalized technical data handling & strict NDA security"
    ],
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
    link: "/industries/defense-mobility",
    linkText: "Explore Defense & Mobility",
    delay: 0.1
  },
  {
    id: "marine",
    title: "Marine & Offshore Engineering",
    tagline: "Hydrodynamics | ISO 17357 Fenders | Hull Mechanics | Naval Vessels",
    description: "Specialized maritime naval architecture, computational fluid dynamics (CFD) for hull efficiency, and heavy-duty port berthing fender systems.",
    capabilities: [
      "ISO 17357 compliant pneumatic floating & apple dock rubber fenders",
      "Multiphase hydrodynamic CFD drag reduction & wake prediction",
      "Hull plate structural stress, wave slamming & cyclic fatigue FEA",
      "Corrosion-resistant marine alloy selection & onboard fluid systems"
    ],
    image: marineImg,
    link: "/industries/marine",
    linkText: "Explore Marine Engineering",
    delay: 0.15
  },
  {
    id: "medical",
    title: "Medical Devices & Healthcare",
    tagline: "ISO 13485 QMS | Biocompatible Polymers | Surgical Tools | FDA Compliance",
    description: "Medical device development from clinical concept through risk management, sterile enclosure design, and FDA 510(k)/PMA regulatory documentation.",
    capabilities: [
      "ISO 13485 quality management & ISO 14971 medical risk documentation",
      "Ergonomic human-factors design for surgical handpieces & diagnostic consoles",
      "USP Class VI & ISO 10993 compliant biocompatible material engineering",
      "Precision cleanroom injection mold tooling & rapid prototyping"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop",
    link: "/industries/medical",
    linkText: "Explore Medical Devices",
    delay: 0.2
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment & Machinery",
    tagline: "Custom Dynamometers | Poling Group Rep | Fixtures & Jigs | Safety Cages",
    description: "Industrial testing machinery integration, heavy machine structural frame FEA, automated assembly tooling, and certified blast containment safety systems.",
    capabilities: [
      "Authorized Poling Group representative for tire testing machine commissioning",
      "Custom automated endurance dynamometers & PLC sensor instrumentation",
      "Heavy assembly jigs, CNC hydraulic clamping fixtures & vulcanization dies",
      "OSHA-compliant structural tubular steel tire inflation blast safety cages"
    ],
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2940&auto=format&fit=crop",
    link: "/industries/industrial-equipment",
    linkText: "Explore Industrial Equipment",
    delay: 0.25
  },
  {
    id: "consumer-sports",
    title: "Consumer Products & Sports Tech",
    tagline: "Wearable Sensors | Impact Elastomers | Athletic Gear | Rapid DFM",
    description: "High-volume consumer electronics, smart wearable devices, and athletic impact-protection equipment engineered for performance and scalability.",
    capabilities: [
      "Biometric wearable enclosure design with IP67/IP68 environmental sealing",
      "Impact-absorbing elastomer structures for athletic footwear & protective gear",
      "Functional rapid prototyping via high-resolution SLA/SLS 3D printing",
      "Production scale-up, silicone tooling & bridge urethane casting"
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop",
    link: "/industries/consumer-sports",
    linkText: "Explore Consumer & Sports",
    delay: 0.3
  }
];

const Industries = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Industries We Serve | Automotive, Defense, Marine, Medical & Industrial"
        description="Domain-specific engineering solutions across automotive, tactical defense, naval marine, medical devices, heavy industrial equipment, and sports technology."
        canonical="/industries"
      />
      <PageHero
        title="Industries We Serve"
        subtitle="Domain-Specific Engineering Solutions for the World's Most Demanding Sectors"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
      />

      {/* Industries Grid */}
      <section id="industries" className="section-padding bg-gray-50">
        <div className="section-padding text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">
              Specialized Industry Verticals
            </h2>
            <p className="text-4xl leading-tight font-black tracking-tighter text-gray-900 sm:text-5xl mb-6">
              Engineering Tailored to Sector Requirements
            </p>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl text-lg text-gray-600 mx-auto font-medium leading-relaxed">
              Our multidisciplinary engineering teams understand the specialized regulatory frameworks, environmental extremes, and rigorous quality standards of your vertical.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: industry.delay }}
                className="engineering-tile group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-brand-primary hover:shadow-xl">
                  {/* Industry Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/15 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                      {industry.title}
                    </h3>

                    <p className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-3 leading-snug">
                      {industry.tagline}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                      {industry.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-gray-100 mb-6 flex-grow">
                      {industry.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-2">
                      <Link
                        to={industry.link}
                        className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider group/link hover:text-red-700 transition-colors"
                      >
                        <span>{industry.linkText}</span>
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Standards Bar */}
        <div className="bg-white border-y border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
              AECS Cross-Sector Excellence • ISO 9001:2015 Protocol • Strict NDA & Data Security
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AECS for Industry Engineering */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-20">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">
                Why Partner With AECS Across Industries?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                We combine deep sector knowledge with cross-industry technical synergies. Breakthroughs in aerospace composite failure modeling enrich our automotive chassis work, while high-strain defense dynamics empower our marine and heavy machinery durability testing.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Cross-Pollinated Innovation", desc: "Applying advanced materials insights from aerospace and defense to commercial automotive and consumer products." },
                { title: "Regulatory Compliance", desc: "Rigorous alignment with ISO 9001, ISO 13485 (Medical), ISO 17357 (Marine), and OSHA standards." },
                { title: "Physical & Digital Validation", desc: "Unifying Abaqus/ANSYS finite element simulation with real-world physical test bench commissioning." },
                { title: "End-to-End Lifecycle", desc: "From early feasibility trade studies to production tooling, pilot-batches, and serial manufacturing." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-brand-primary hover:shadow-lg transition-all">
                  <h4 className="font-black text-gray-900 uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Don't See Your Specific Industry?"
        subtitle="Our core physics simulation, CAD mechanics, and materials engineering fundamentals apply across any complex physical hardware. Connect with our engineering team to discuss your technical specifications."
        buttonText="Discuss Your Industry Project"
      />
    </div>
  );
};

export default Industries;
