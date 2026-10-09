import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import safetyCageImg from '../assets/images/portfolio/safety-cage.jpg';
import runFlatImg from '../assets/images/portfolio/run-flat.jpeg';
import appleFenderImg from '../assets/images/portfolio/apple-fender.jfif';
import pneumaticFenderImg from '../assets/images/portfolio/pneumatic-fender.jfif';
import airlessTireImg from '../assets/images/portfolio/airless-tire.jpeg';
import polingMachineImg from '../assets/images/machines/tyre-testing/cx111-1.jpg';
import { 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Send, 
  Gauge, 
  Layers, 
  FileText, 
  SlidersHorizontal 
} from 'lucide-react';

const productsData = [
  {
    id: 'pneumatic-floating-fenders',
    title: 'ISO 17357-1 Pneumatic Floating Fenders',
    category: 'Marine Products',
    subtitle: 'Ship-to-Ship (STS) & Port Berthing High-Absorption Protection',
    image: pneumaticFenderImg,
    description: 'Multi-layer cord-reinforced vulcanized rubber floating bladders protected by heavy-duty aircraft tire chain netting for demanding open-water ship-to-ship transfers and deep-water terminal berthing.',
    compliance: 'Certified in Full Compliance with ISO 17357-1:2014',
    specs: [
      { label: 'Diameter Range', val: '0.5 m to 4.5 m' },
      { label: 'Length Range', val: '1.0 m to 9.0 m' },
      { label: 'Initial Pressure', val: '50 kPa (Pneumatic 50) & 80 kPa (Pneumatic 80)' },
      { label: 'Netting Armor', val: 'Heavy Galvanized Aircraft Tire Chain Net' }
    ],
    features: [
      'Low reaction force with exceptional kinetic berthing energy absorption',
      'Aircraft tyre chain nets with heavy galvanized shackles and swivel rings',
      'Suitable for both low and high tide variations without hull marring',
      'Deployed across major deep-water ports, LNG terminals, and naval shipyards'
    ],
    ctaText: 'Request Fender Quotation',
    isTireMachine: false
  },
  {
    id: 'apple-marine-fenders',
    title: 'Heavy-Duty Apple Profile Marine Fenders',
    category: 'Marine Products',
    subtitle: 'Harbor Quay & Workboat High-Shear Impact Absorption',
    image: appleFenderImg,
    description: 'Solid molded elastomeric rubber fenders featuring proprietary apple-cross-section geometry designed for harbor quays, tugboat bows, berthing jetties, and workboats.',
    compliance: 'PIANC 2002 & ASTM D2000 Elastomer Standard',
    specs: [
      { label: 'Polymer Compound', val: 'High-Tensile Natural/EPDM Elastomer' },
      { label: 'Environmental Resistance', val: 'Severe Ozone, UV & Seawater Degradation' },
      { label: 'Mounting Style', val: 'Curved Hull Wrap or Quay Channel Anchored' },
      { label: 'Energy Dissipation', val: 'High Shear Strain Damping Ratio' }
    ],
    features: [
      'High angular compression capability without structural delamination',
      'Solid rubber core eliminates puncture risk common to hollow bumpers',
      'Low friction face compounds minimize hull paint abrasion',
      'Custom pre-curved lengths manufactured to specific hull geometries'
    ],
    ctaText: 'Request Fender Specifications',
    isTireMachine: false
  },
  {
    id: 'runflat-mobility-systems',
    title: 'Tactical Run-Flat Tire Wheel Inserts',
    category: 'Advanced Tire Technologies',
    subtitle: 'Extreme Mobility Zero-Pressure Wheel Technology for Defense Fleets',
    image: runFlatImg,
    description: 'Lightweight composite and elastomer run-flat inserts engineered for 4x4, 6x6, and 8x8 tactical armored vehicles. Guarantees steering control and continuous vehicle escape following catastrophic deflation.',
    compliance: 'Military Proving Ground & Severe Duty Mobility Validated',
    specs: [
      { label: 'Operational Range', val: 'Exceeding 50 km at 80 km/h under Zero Pressure' },
      { label: 'Payload Envelope', val: 'Validated up to 12 Tons per Axle System' },
      { label: 'Rim Compatibility', val: 'Standard 16.5”, 17”, 18”, 20” Drop-Center Rims' },
      { label: 'Material Matrix', val: 'High-Toughness Composite & Elastomeric Damper' }
    ],
    features: [
      'Multi-piece wheel insert architecture for quick field installation',
      'Validated through continuous zero-pressure desert proving ground trials',
      'Elastomeric damping ring attenuates harsh shock transmission to suspension',
      'High-temperature degradation-resistant compound prevents thermal lockup'
    ],
    ctaText: 'Discuss Defense Specifications',
    isTireMachine: false
  },
  {
    id: 'safety-containment-cages',
    title: 'Tire Inflation Blast Safety Containment Cages',
    category: 'Workshop Safety Systems',
    subtitle: 'Certified Heavy-Duty Blast Containment for Industrial Wheel Service',
    image: safetyCageImg,
    description: 'Heavy structural steel tubular containment cages engineered to absorb and deflect explosive blast energy, multi-piece rim separation, and projectile debris during high-pressure tire inflation.',
    compliance: 'Exceeds OSHA Standard 29 CFR 1910.177 & CE Machinery Directive',
    specs: [
      { label: 'Blast Capacity', val: 'Overpressure Containment up to 150+ PSI' },
      { label: 'Structural Steel', val: 'Heavy Seamless Tubular ASTM Structural Grade' },
      { label: 'Tire Dimensions', val: 'Commercial Truck, OTR, Mining & Tactical Assemblies' },
      { label: 'Finish', val: 'Electrostatic High-Durability Powder Coat' }
    ],
    features: [
      'Multi-pipe blast dispersion geometry vents pressure while capturing fragments',
      'Mandatory workshop safety system for high-pressure commercial & earthmover tires',
      'Ergonomic roll-in wheel ramp and integrated tire air line guide slot',
      'Custom sizing available for oversized agricultural and aircraft wheel assemblies'
    ],
    ctaText: 'Request Safety Cage Quotation',
    isTireMachine: false
  },
  {
    id: 'airless-non-pneumatic-tire',
    title: 'Biomimetic Non-Pneumatic (Airless) Tire',
    category: 'Advanced Tire Technologies',
    subtitle: 'Next-Generation Zero-Puncture Mobility (R&D Program)',
    image: airlessTireImg,
    description: 'Advanced non-pneumatic wheel assemblies utilizing generative biomimetic honeycomb spoke architecture and high-durability polyurethane elastomers for autonomous ground vehicles, robotics, and industrial utility.',
    compliance: 'Proprietary AECS Finite Element & Prototyping Program',
    specs: [
      { label: 'Structure', val: 'Auxetic Honeycomb Thermoplastic Polyurethane' },
      { label: 'Maintenance', val: '100% Puncture-Proof, Zero Pressure Monitoring' },
      { label: 'Applications', val: 'Autonomous AGVs, Tactical Rovers, Industrial Mowers' },
      { label: 'Status', val: 'Prototype Evaluation & Custom Client R&D' }
    ],
    features: [
      'Completely eliminates puncture risk and flat-tire fleet downtime',
      'Generative cell geometry mimics pneumatic ride compliance and rolling resistance',
      'Recyclable elastomer construction resistant to petrochemicals and ozone',
      'Custom stiffness tuning tailored to specific vehicle axle weight profiles'
    ],
    ctaText: 'Discuss Airless Development',
    isTireMachine: false
  }
];

const categories = [
  'All Products',
  'Marine Products',
  'Advanced Tire Technologies',
  'Workshop Safety Systems'
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProductForRfq, setSelectedProductForRfq] = useState(null);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  const filteredProducts = activeCategory === 'All Products'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  const openRfqModal = (product) => {
    setSelectedProductForRfq(product);
    setRfqSubmitted(false);
  };

  const closeRfqModal = () => {
    setSelectedProductForRfq(null);
    setRfqSubmitted(false);
  };

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="AECS Engineered Products & Technology Solutions | Industrial Equipment & Marine"
        description="AECS engineered hardware: Poling Group tire testing machines, ISO 17357-1 marine floating fenders, tactical run-flat inserts, and blast containment safety cages."
        canonical="/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "AECS Engineered Products & Technology Solutions",
          "description": "Industrial testing equipment, certified marine safety products, and specialized mobility solutions."
        }}
      />

      <PageHero
        title="AECS Engineered Products & Technology Solutions"
        subtitle="Industrial testing machinery, certified marine safety systems, and tactical mobility products engineered to international standards."
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
      />

      {/* Category Filter Pills */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md bg-slate-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-slate-50/60 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Visual Half */}
                <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-[440px] bg-slate-950 overflow-hidden group">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {prod.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-amber-300 text-xs font-semibold border border-white/10">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      {prod.compliance}
                    </span>
                  </div>
                </div>

                {/* Content Half */}
                <div className="lg:w-1/2 p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary block mb-1">
                      {prod.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                      {prod.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {/* Technical Specifications Grid */}
                    <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200/80">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-brand-primary" />
                        Technical Parameters
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prod.specs.map((sp, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <span className="text-slate-500 font-medium block">{sp.label}:</span>
                            <span className="text-slate-900 font-bold block">{sp.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 mb-8">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual B2B CTAs */}
                  <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => openRfqModal(prod)}
                      className="btn-primary py-3 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>{prod.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      to="/contact"
                      className="py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                    >
                      Discuss Application
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical RFQ / Specification Modal */}
      <AnimatePresence>
        {selectedProductForRfq && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeRfqModal}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!rfqSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-1">
                      Technical Inquiry & Quotation Request
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {selectedProductForRfq.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Provide your technical envelope. Our application engineers will return formal datasheets, load limits, and pricing within 24–48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleRfqSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-slate-50 rounded-xl border border-slate-300 focus:border-brand-primary px-3.5 py-2.5 text-xs sm:text-sm outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Company / Institution *
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-slate-50 rounded-xl border border-slate-300 focus:border-brand-primary px-3.5 py-2.5 text-xs sm:text-sm outline-none"
                          placeholder="Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Business Email *
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-slate-50 rounded-xl border border-slate-300 focus:border-brand-primary px-3.5 py-2.5 text-xs sm:text-sm outline-none"
                          placeholder="engineer@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-slate-50 rounded-xl border border-slate-300 focus:border-brand-primary px-3.5 py-2.5 text-xs sm:text-sm outline-none"
                          placeholder="+1 555-0192 / +91 99615 85261"
                        />
                      </div>
                    </div>

                    {/* Specialized prompt for tire testing equipment as required by audit */}
                    {selectedProductForRfq.isTireMachine && (
                      <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
                        <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
                          Tell Us the Tire Size and Test Requirement *
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white rounded-xl border border-amber-300 focus:border-brand-primary px-3.5 py-2 text-xs sm:text-sm outline-none"
                          placeholder="e.g. 225/55R17 Passenger & 295/80R22.5 Truck, Endurance drum + Rolling Resistance"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Application Details or Operating Parameters
                      </label>
                      <textarea
                        rows={3}
                        className="w-full bg-slate-50 rounded-xl border border-slate-300 focus:border-brand-primary px-3.5 py-2.5 text-xs sm:text-sm outline-none"
                        placeholder="Mention required diameter, load ratings, quantity, target delivery timeframe, or testing standards..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full btn-primary py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Technical RFQ</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Your technical inquiry for <strong>{selectedProductForRfq.title}</strong> has been forwarded directly to our product engineering leads. A formal technical specification and quotation will be prepared.
                  </p>
                  <button
                    onClick={closeRfqModal}
                    className="btn-primary py-2.5 px-6 rounded-xl font-bold text-xs"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CtaSection 
        title="Need Specialized Engineering Equipment or Custom Machinery?" 
        subtitle="Our engineering workshop customizes test rigs, containment cages, and marine fenders to exact client specifications."
        buttonText="Discuss Your Application"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Products;
