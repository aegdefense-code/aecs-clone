import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import ClientCarousel from '../components/ClientCarousel';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
   Award, 
   ShieldCheck, 
   Zap, 
   Repeat, 
   Headphones, 
   X, 
   ZoomIn, 
   ZoomOut, 
   ChevronLeft, 
   ChevronRight, 
   Maximize2, 
   Sparkles, 
   CheckCircle2, 
   Layers,
   ArrowRight
} from 'lucide-react';

// Portfolio Assets
import runFlatImg from '../assets/images/portfolio/run-flat.jpeg';
import safetyCageImg from '../assets/images/portfolio/safety-cage.jpg';
import appleFenderImg from '../assets/images/portfolio/apple-fender.jfif';
import pneumaticFenderImg from '../assets/images/portfolio/pneumatic-fender.jfif';
import airlessTireImg from '../assets/images/portfolio/airless-tire.jpeg';

const Home = () => {
   const [selectedProductIndex, setSelectedProductIndex] = useState(null);
   const [isZoomed, setIsZoomed] = useState(false);

   // Features list for 'Why Choose'
   const keyDifferentiators = [
      {
         icon: <Award className="w-6 h-6 sm:w-8 h-8" />,
         title: "Decades of Industry Experience",
         desc: "Trusted by leading tire manufacturers worldwide"
      },
      {
         icon: <ShieldCheck className="w-6 h-6 sm:w-8 h-8" />,
         title: "Authorized Poling Group Rep",
         desc: "Access to genuine machines and expert guidance"
      },
      {
         icon: <Zap className="w-6 h-6 sm:w-8 h-8" />,
         title: "Comprehensive Solutions",
         desc: "From equipment supply to testing consultation"
      },
      {
         icon: <Repeat className="w-6 h-6 sm:w-8 h-8" />,
         title: "Standardized, Repeatable Results",
         desc: "Ensuring reliable, actionable data for critical decisions"
      },
      {
         icon: <Headphones className="w-6 h-6 sm:w-8 h-8" />,
         title: "End-to-End Support",
         desc: "Installation, training, maintenance, and reporting"
      }
   ];

   // Featured Products & Engineering Innovations Dataset with Case Studies
   const featuredProducts = [
      {
         id: "run-flat",
         title: "Run Flat Tire Inserts",
         cat: "Automotive & Defense",
         badge: "High Mobility System",
         img: runFlatImg,
         caseStudySummary: "AECS has successfully engineered, manufactured, and supplied high-performance Run Flat Tire Insert systems to specialized institutions and defense clients in Dubai and international markets. Designed for mission-critical armored and tactical platforms, our lightweight composite-reinforced assemblies ensure fail-safe mobility, continuous vehicle control, and sustained high-speed operational range exceeding 50 km at 80 km/h under payloads up to 12 tons during total tyre deflation or ballistic compromise."
      },
      {
         id: "safety-cage",
         title: "Safety Cage",
         cat: "Automotive & Testing Safety",
         badge: "Custom Engineered System",
         img: safetyCageImg,
         caseStudySummary: "AECS manufactures and supplies heavy-duty, custom-built Inflation Safety Cages to commercial tyre service centers, fleet maintenance workshops, and industrial testing facilities worldwide. Engineered using customized impact-absorbing structural tubular steel and multi-angle blast-venting architecture tailored to client specifications, our safety cages ensure 100% containment of projectile shrapnel and blast overpressure up to 150+ PSI during catastrophic tire or rim ring burst events."
      },
      {
         id: "apple-fender",
         title: "Apple Marine Fender",
         cat: "Marine & Port Engineering",
         badge: "Commercial Product",
         img: appleFenderImg,
         caseStudySummary: "AECS manufactures, supplies, and sells heavy-duty Apple Marine Fenders for commercial ports, berthing jetties, docks, and naval tug operators worldwide. Formulated with high-grade elastomeric rubber compounds offering superior UV and ozone resistance, our proprietary apple-profile fenders provide high shear resistance and extreme energy absorption while minimizing reaction forces on harbor quays and vessel hulls."
      },
      {
         id: "pneumatic-fender",
         title: "Pneumatic Floating Fender",
         cat: "Marine & Offshore Transfer",
         badge: "Commercial Product",
         img: pneumaticFenderImg,
         caseStudySummary: "AECS manufactures, supplies, and sells certified Pneumatic Floating Fenders to offshore energy operators, shipping fleets, and deep-water terminal authorities worldwide. Built with multi-layered cord-reinforced vulcanized rubber bladders and protected by heavy-duty aircraft tyre netting in full compliance with ISO 17357-1 international standards, our floating fenders deliver critical stand-off buffering and hydrodynamic damping during demanding ship-to-ship (STS) transfers and harbor berthing."
      },
      {
         id: "airless-tire",
         title: "Non-Pneumatic Airless Tire",
         cat: "Sustainable Mobility & Future Tech",
         badge: "Under Active Development",
         img: airlessTireImg,
         caseStudySummary: "AECS is currently developing next-generation Non-Pneumatic (Airless) Tires as an advanced R&D engineering innovation for commercial utility, defense, and autonomous mobility platforms. Utilizing generative biomimetic honeycomb spoke architecture and high-durability polyurethane elastomers, this development program is focused on eliminating puncture risks and fleet maintenance downtime while delivering pneumatic-grade compliance and 100% recyclable spoke construction."
      }
   ];

   // Modal keyboard navigation and scroll lock
   useEffect(() => {
      const handleKeyDown = (e) => {
         if (selectedProductIndex === null) return;
         if (e.key === 'Escape') {
            closeModal();
         } else if (e.key === 'ArrowRight') {
            handleNextProduct();
         } else if (e.key === 'ArrowLeft') {
            handlePrevProduct();
         }
      };

      if (selectedProductIndex !== null) {
         document.body.style.overflow = 'hidden';
         window.addEventListener('keydown', handleKeyDown);
      } else {
         document.body.style.overflow = 'unset';
      }

      return () => {
         document.body.style.overflow = 'unset';
         window.removeEventListener('keydown', handleKeyDown);
      };
   }, [selectedProductIndex]);

   const openModal = (index) => {
      setSelectedProductIndex(index);
      setIsZoomed(false);
   };

   const closeModal = () => {
      setSelectedProductIndex(null);
      setIsZoomed(false);
   };

   const handleNextProduct = (e) => {
      if (e) e.stopPropagation();
      setIsZoomed(false);
      setSelectedProductIndex((prev) => (prev + 1) % featuredProducts.length);
   };

   const handlePrevProduct = (e) => {
      if (e) e.stopPropagation();
      setIsZoomed(false);
      setSelectedProductIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
   };

   const toggleZoom = (e) => {
      if (e) e.stopPropagation();
      setIsZoomed((prev) => !prev);
   };

   const currentProduct = selectedProductIndex !== null ? featuredProducts[selectedProductIndex] : null;

   return (
      <main className="overflow-x-hidden">
         <SEO
            title="American Engineering Consultancy Services"
            description="AECS provides world-class mechanical design, FEA simulation, prototyping, tire testing machinery, and product manufacturing solutions."
            canonical="/"
            jsonLd={{
               "@context": "https://schema.org",
               "@type": "Organization",
               "name": "American Engineering Consultancy Services",
               "url": "https://aecs-websites.web.app",
               "logo": "https://aecs-websites.web.app/logo.png",
               "description": "Comprehensive engineering consultancy and manufacturing solutions."
            }}
         />
         <Hero />

         <About />
         <Services />

         {/* Core Value Proposition Section */}
         <section className="py-16 sm:py-28 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12 sm:mb-20">
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">Why Choose AECS?</h2>
                  <div className="flex justify-center">
                     <span className="w-12 h-1.5 bg-brand-primary rounded-full"></span>
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10">
                  {keyDifferentiators.map((feature, featureIndex) => (
                     <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                     >
                        <div className="w-14 h-14 sm:w-20 h-20 bg-red-50/50 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                           {feature.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 leading-tight">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Project Showcase / Portfolio */}
         <section className="py-24 bg-brand-dark text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div>
                     <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Industrial Portfolio</span>
                     <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight leading-tight">Featured Products & Engineering Innovations</h2>
                  </div>
                  <p className="text-slate-400 text-sm max-w-md">
                     Click on any product to examine high-resolution zoom imagery and detailed engineering case studies.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {featuredProducts.map((project, pIdx) => (
                     <motion.div
                        key={project.id}
                        whileHover={{ y: -8 }}
                        onClick={() => openModal(pIdx)}
                        className="group rounded-3xl overflow-hidden cursor-pointer relative aspect-[3/4] border border-white/10 hover:border-brand-secondary/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
                     >
                        <img 
                           src={project.img} 
                           alt={project.title} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent group-hover:via-slate-950/50 transition-colors duration-300"></div>
                        
                        {/* Hover Zoom & Product Prompt */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                           <Maximize2 className="w-3.5 h-3.5" />
                           <span>View Details</span>
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                           <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-1.5 block">{project.cat}</span>
                           <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">{project.title}</h3>
                           <p className="text-xs text-slate-400 mt-2 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                              {project.caseStudySummary}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Interactive Product & Case Study Lightbox Modal */}
         <AnimatePresence>
            {currentProduct && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-slate-950/90 backdrop-blur-xl overflow-y-auto"
                  onClick={closeModal}
               >
                  <motion.div
                     initial={{ scale: 0.94, opacity: 0, y: 20 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     exit={{ scale: 0.94, opacity: 0, y: 20 }}
                     transition={{ type: "spring", damping: 25, stiffness: 260 }}
                     onClick={(e) => e.stopPropagation()}
                     className="relative w-full max-w-6xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl my-auto text-white flex flex-col max-h-[92vh]"
                  >
                     {/* Modal Top Action Bar */}
                     <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 z-20 shrink-0">
                        <div className="flex items-center gap-3">
                           <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brand-primary/20 text-brand-secondary border border-brand-primary/30">
                              {currentProduct.badge}
                           </span>
                           <span className="text-xs text-slate-400 font-bold hidden sm:inline-block">
                              Innovation {selectedProductIndex + 1} of {featuredProducts.length}
                           </span>
                        </div>

                        <div className="flex items-center gap-3">
                           <button
                              onClick={toggleZoom}
                              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-all"
                              title={isZoomed ? "Reset Zoom" : "Zoom In (2x)"}
                           >
                              {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                              <span>{isZoomed ? "1x View" : "Zoom Picture"}</span>
                           </button>

                           <button
                              onClick={closeModal}
                              className="p-2 rounded-xl bg-white/10 hover:bg-red-600/80 text-white transition-colors"
                              title="Close Modal (Esc)"
                           >
                              <X size={20} />
                           </button>
                        </div>
                     </div>

                     {/* Modal Main Body (2 Columns on large screen) */}
                     <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
                        
                        {/* LEFT COLUMN: Zoomable Picture Canvas */}
                        <div className="lg:col-span-6 xl:col-span-7 bg-slate-950/90 p-4 sm:p-8 flex flex-col justify-center items-center relative min-h-[320px] lg:min-h-[500px]">
                           {/* Zoom Controls Overlay inside Image */}
                           <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-[11px] font-semibold text-slate-300 pointer-events-none">
                              <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
                              <span>{isZoomed ? "Zoomed 2.2x (Click image to reset)" : "Click image or button to zoom"}</span>
                           </div>

                           <div 
                              className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl cursor-pointer relative"
                              onClick={toggleZoom}
                           >
                              <motion.img
                                 key={currentProduct.id}
                                 src={currentProduct.img}
                                 alt={currentProduct.title}
                                 animate={{
                                    scale: isZoomed ? 2.2 : 1,
                                 }}
                                 transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                 className={`max-h-[60vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all select-none ${
                                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                                 }`}
                                 draggable={false}
                              />
                           </div>

                           {/* Image Zoom Quick Toggle Button (Mobile & Desktop) */}
                           <button
                              onClick={toggleZoom}
                              className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-xs text-white font-medium hover:bg-brand-primary transition-colors backdrop-blur-md"
                           >
                              {isZoomed ? <ZoomOut size={14} /> : <ZoomIn size={14} />}
                              <span>{isZoomed ? "Reset" : "Zoom In"}</span>
                           </button>
                        </div>

                        {/* RIGHT COLUMN: Case Study Information */}
                        <div className="lg:col-span-6 xl:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 space-y-6">
                           <div>
                              <div className="mb-4">
                                 <span className="text-xs font-extrabold uppercase tracking-widest text-brand-secondary">
                                    {currentProduct.cat}
                                 </span>
                                 <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                                    {currentProduct.title}
                                 </h3>
                              </div>

                              {/* Product Overview Small Paragraph */}
                              <div className="space-y-4">
                                 <div>
                                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                                       <Layers className="w-4 h-4 text-brand-secondary" />
                                       Product Overview
                                    </h4>
                                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
                                       {currentProduct.caseStudySummary}
                                    </p>
                                 </div>

                                 {/* Challenge & Solution Blocks */}
                                 {currentProduct.challenge && currentProduct.solution && (
                                    <div className="space-y-3">
                                       <div className="bg-slate-800/30 p-3.5 rounded-xl border border-slate-800">
                                          <span className="text-xs font-bold text-red-400 block mb-1">Challenge & Requirement:</span>
                                          <p className="text-xs text-slate-300 leading-relaxed">
                                             {currentProduct.challenge}
                                          </p>
                                       </div>

                                       <div className="bg-slate-800/30 p-3.5 rounded-xl border border-slate-800">
                                          <span className="text-xs font-bold text-emerald-400 block mb-1">Engineering Solution & Methodology:</span>
                                          <p className="text-xs text-slate-300 leading-relaxed">
                                             {currentProduct.solution}
                                          </p>
                                       </div>
                                    </div>
                                 )}

                                 {/* Key Metrics */}
                                 {currentProduct.metrics && currentProduct.metrics.length > 0 && (
                                    <div>
                                       <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
                                          Engineering Performance
                                       </h4>
                                       <div className="grid grid-cols-3 gap-2.5">
                                          {currentProduct.metrics.map((metric, mIdx) => (
                                             <div key={mIdx} className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-center">
                                                <span className="text-xs font-extrabold text-brand-secondary block truncate">
                                                   {metric.val}
                                                </span>
                                                <span className="text-[10px] text-slate-400 font-medium block mt-0.5 truncate">
                                                   {metric.label}
                                                </span>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 )}

                                 {/* Tech Tags */}
                                 {currentProduct.tags && currentProduct.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                       {currentProduct.tags.map((tag, tIdx) => (
                                          <span key={tIdx} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                                             #{tag}
                                          </span>
                                       ))}
                                    </div>
                                 )}
                              </div>
                           </div>

                           {/* Bottom Navigation & Controls */}
                           <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                              <div className="flex gap-1.5">
                                 {featuredProducts.map((_, idx) => (
                                    <button
                                       key={idx}
                                       onClick={() => openModal(idx)}
                                       className={`h-2 rounded-full transition-all ${
                                          selectedProductIndex === idx 
                                             ? 'w-6 bg-brand-primary' 
                                             : 'w-2 bg-slate-700 hover:bg-slate-600'
                                       }`}
                                       aria-label={`View product ${idx + 1}`}
                                    />
                                 ))}
                              </div>

                              <div className="flex items-center gap-2">
                                 <button
                                    onClick={handlePrevProduct}
                                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700 flex items-center gap-1 text-xs font-bold"
                                    title="Previous Product"
                                 >
                                    <ChevronLeft size={16} />
                                    <span className="hidden sm:inline">Prev</span>
                                 </button>
                                 <button
                                    onClick={handleNextProduct}
                                    className="p-2.5 rounded-xl bg-brand-primary hover:bg-red-600 text-white transition-colors flex items-center gap-1 text-xs font-bold shadow-md"
                                    title="Next Product"
                                 >
                                    <span className="hidden sm:inline">Next</span>
                                    <ChevronRight size={16} />
                                 </button>
                              </div>
                           </div>

                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Recognition, Certifications & Educational Synergy */}
         <section className="py-24 bg-white border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                  <div className="flex flex-col items-start lg:items-end lg:text-right order-2 md:order-1">
                     <h3 className="text-3xl font-black text-slate-900 mb-10">Compliance & Recognition</h3>
                     <div className="space-y-6 w-full flex flex-col items-start lg:items-end">
                        <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center group hover:bg-white hover:shadow-md transition-all duration-300 max-w-md w-full">
                           <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mr-5 shrink-0 group-hover:rotate-6 transition-transform">
                              <span className="text-brand-primary font-black text-xs uppercase">ISO</span>
                           </div>
                           <div className="text-left">
                              <h4 className="font-extrabold text-slate-900">ISO 9001:2015 Registered</h4>
                              <p className="text-sm text-slate-500 font-medium">Quality Management Protocol</p>
                           </div>
                        </div>

                        <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center group hover:bg-white hover:shadow-md transition-all duration-300 max-w-md w-full">
                           <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center mr-5 shrink-0 group-hover:-rotate-6 transition-transform">
                              <span className="text-white font-black text-xs uppercase tracking-tighter">AEC</span>
                           </div>
                           <div className="text-left">
                              <h4 className="font-extrabold text-slate-900">Global Engineering Excellence</h4>
                              <p className="text-sm text-slate-500 font-medium">Winner: Automotive Testing Tech 2023</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="order-1 md:order-2">
                     <h3 className="text-3xl font-black text-slate-900 mb-10">Research & Academic Alliances</h3>

                     <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
                        <div className="space-y-4">
                           {[
                              {
                                 logo: "https://www.svnit.ac.in/images/logo.png",
                                 name: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
                                 role: "Academic Partner"
                              },
                              {
                                 logo: "https://ktu.edu.in/static/media/logo_header.77120c0967a09b766cdf.png",
                                 name: "APJ Abdul Kalam Technological University (KTU), Kerala",
                                 role: "Research Partner"
                              }
                           ].map((partner, pIdx) => (
                              <div key={pIdx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center group hover:border-brand-primary transition-colors">
                                 <div className="w-20 h-14 mr-6 flex items-center justify-center shrink-0">
                                    <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-full w-auto" />
                                 </div>
                                 <div>
                                    <h4 className="font-extrabold text-slate-900 text-sm">{partner.name}</h4>
                                    <p className="text-[10px] text-brand-primary font-black uppercase tracking-widest mt-1">{partner.role}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* Our Clients Infinite Carousel */}
         <ClientCarousel />

         {/* Leadership Vision - Edge-to-Edge Banner */}
         <section className="bg-gradient-to-br from-brand-primary via-brand-primary to-red-800 text-white relative overflow-hidden py-8">
            {/* Decorative background element - human touch */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
               >
                  <div className="max-w-4xl mx-auto">
                     <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight italic opacity-95">
                        "We actively collaborate with premier engineering institutions to drive innovation and provide specialized <span className="text-brand-secondary underline decoration-brand-secondary/30 underline-offset-8 font-extrabold">PBL (Project Based Learning)</span> for AI integrated engineering programs."
                     </p>

                     <div className="mt-12 flex items-center justify-center gap-4">
                        <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white/60">Leadership Vision</span>
                        <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         <Contact />
      </main>
   );
};

export default Home;

