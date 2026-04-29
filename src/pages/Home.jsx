import React, { useMemo } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Repeat, Headphones } from 'lucide-react';

// Portfolio Assets
import runFlatImg from '../assets/images/portfolio/run-flat.jpeg';
import appleFenderImg from '../assets/images/portfolio/apple-fender.jfif';
import pneumaticFenderImg from '../assets/images/portfolio/pneumatic-fender.jfif';
import airlessTireImg from '../assets/images/portfolio/airless-tire.jpeg';

const Home = () => {
   // Partner logos for the ticker
   const partnerLogos = [
      { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", height: "h-6 sm:h-10" },
      { name: "Ford", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg", height: "h-8 sm:h-12" },
      { name: "Bosch", url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg", height: "h-6 sm:h-10" },
      { name: "Toyota", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", height: "h-8 sm:h-12" },
      { name: "Tata", url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Tata_logo.svg", height: "h-8 sm:h-12" },
      { name: "Mahindra", url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mahindra_logo.svg", height: "h-6 sm:h-10" },
   ];

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

   return (
      <main className="overflow-x-hidden">
         <Hero />

         {/* Trust Indicators: Partner Ticker
         <section className="py-8 sm:py-12 bg-white border-b border-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 mb-6 sm:mb-8 text-center">
               <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Globally Recognized Partners</span>
            </div>

            <div className="flex items-center h-16 sm:h-24">
               <motion.div
                  className="flex absolute left-0 w-max gap-12 md:gap-32 px-8 md:px-32 items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
               >
                  {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                     <img
                        key={`${logo.name}-${idx}`}
                        src={logo.url}
                        alt={`${logo.name} logo`}
                        className={`${logo.height} grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 object-contain`}
                     />
                  ))}
               </motion.div>
            </div>
         </section> */}


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
               <div className="mb-20">
                  <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Industrial Portfolio</span>
                  <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight leading-tight">Featured Products & Engineering Innovations</h2>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { img: runFlatImg, title: "Run Flat", cat: "Automotive" },
                     { img: appleFenderImg, title: "Apple Fender", cat: "Marine Engineering" },
                     { img: pneumaticFenderImg, title: "Pneumatic Fender", cat: "Marine Engineering" },
                     { img: airlessTireImg, title: "Airless Tire", cat: "Sustainable Mobility" }
                  ].map((project, pIdx) => (
                     <motion.div
                        key={pIdx}
                        whileHover={{ y: -10 }}
                        className="group rounded-3xl overflow-hidden cursor-pointer relative aspect-[3/4]"
                     >
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                           <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2 block">{project.cat}</span>
                           <h3 className="text-2xl font-bold">{project.title}</h3>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

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

