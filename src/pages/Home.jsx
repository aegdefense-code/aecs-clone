import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Repeat, Headphones } from 'lucide-react';

// Portfolio Images
import runFlatImg from '../assets/images/portfolio/run-flat.jpeg';
import appleFenderImg from '../assets/images/portfolio/apple-fender.jfif';
import pneumaticFenderImg from '../assets/images/portfolio/pneumatic-fender.jfif';
import airlessTireImg from '../assets/images/portfolio/airless-tire.jpeg';

const Home = () => {
   return (
      <div>
         <Hero />

         {/* Trusted By Carousel (Static representation for preview) */}
         <motion.section
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="py-6 sm:py-10 bg-white border-b border-gray-100 overflow-hidden"
         >
            <div className="w-full text-center">
               <p className="text-[10px] sm:text-sm font-extrabold text-gray-600 uppercase tracking-widest mb-4 sm:mb-6">Trusted By</p>
               <div className="relative overflow-hidden w-full flex items-center h-12 sm:h-20">
                  <motion.div
                     className="flex absolute left-0 w-max gap-8 md:gap-32 pr-16 md:pr-32 items-center"
                     animate={{ x: ["0%", "-50%"] }}
                     transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                  >
                     {/* Original Set */}
                     <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-6 sm:h-10 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg" alt="Ford" className="h-8 sm:h-12 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg" alt="Bosch" className="h-6 sm:h-10 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" alt="Toyota" className="h-8 sm:h-12 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Tata_logo.svg" alt="Tata" className="h-8 sm:h-12 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Mahindra_logo.svg" alt="Mahindra" className="h-6 sm:h-10 object-contain" />

                     {/* Duplicated Set for Infinite Scroll */}
                     <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-6 sm:h-10 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg" alt="Ford" className="h-8 sm:h-12 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg" alt="Bosch" className="h-6 sm:h-10 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" alt="Toyota" className="h-8 sm:h-12 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Tata_logo.svg" alt="Tata" className="h-8 sm:h-12 object-contain" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Mahindra_logo.svg" alt="Mahindra" className="h-6 sm:h-10 object-contain" />
                  </motion.div>
               </div>
            </div>
         </motion.section>

         <About />
         <Services />

         {/* Why Choose AECS? Section */}
         <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="py-12 sm:py-24 bg-white"
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-10 sm:mb-16">
                  <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose AECS?</h2>
                  <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-brand-primary mx-auto rounded-full"></div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8">
                  {[
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
                  ].map((item, idx) => (
                     <div key={idx} className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:bg-white transition-all group">
                        <div className="w-12 h-12 sm:w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-brand-primary mb-4 sm:mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        <h3 className="text-md sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </motion.section>

         {/* Dynamic Portfolio */}
         <motion.section
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="py-24 bg-brand-dark text-white"
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-brand-secondary font-semibold tracking-wide uppercase">Dynamic Portfolio</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Featured Products & Innovations</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group rounded-xl overflow-hidden cursor-pointer relative">
                     <img src={runFlatImg} alt="Non-Pneumatic Tire" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold mb-1">Run Flat</h3>
                        <p className="text-sm text-gray-300">Automotive</p>
                     </div>
                  </div>
                  <div className="group rounded-xl overflow-hidden cursor-pointer relative">
                     <img src={appleFenderImg} alt="Testing Equipment" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold mb-1">Apple Fender</h3>
                        <p className="text-sm text-gray-300">Marine Engineering</p>
                     </div>
                  </div>
                  <div className="group rounded-xl overflow-hidden cursor-pointer relative">
                     <img src={pneumaticFenderImg} alt="Marine Propulsion" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold mb-1">Pneumatic Fender</h3>
                        <p className="text-sm text-gray-300">Marine Engineering</p>
                     </div>
                  </div>
                  <div className="group rounded-xl overflow-hidden cursor-pointer relative">
                     <img src={airlessTireImg} alt="Airless Tire" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold mb-1">Airless Tire</h3>
                        <p className="text-sm text-gray-300">Sustainable Mobility</p>
                     </div>
                  </div>
               </div>
            </div>
         </motion.section>

         {/* Recognition & Partners */}
         <motion.section
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="py-20 bg-gray-50 border-t border-gray-100"
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                  <div className="flex flex-col items-end text-right">
                     <h3 className="text-2xl font-bold text-gray-900 mb-8">Industry Recognition & Accreditations</h3>
                     <div className="space-y-4 w-full flex flex-col items-end">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center group hover:shadow-md transition-all duration-300 max-w-md w-full">
                           <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-orange-600 font-bold text-xs">ISO</span>
                           </div>
                           <div className="text-left">
                              <h4 className="font-bold text-gray-900">ISO 9001:2015 Certified</h4>
                              <p className="text-sm text-gray-500">Quality Management Systems</p>
                           </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center group hover:shadow-md transition-all duration-300 max-w-md w-full">
                           <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-blue-600 font-bold text-xs">AEC</span>
                           </div>
                           <div className="text-left">
                              <h4 className="font-bold text-gray-900">Global Engineering Excellence Award</h4>
                              <p className="text-sm text-gray-500">Category: Automotive Testing Equipment</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Partners & Research</h3>

                     <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center group hover:shadow-md transition-all duration-300">
                              <div className="w-16 h-16 mr-4 flex items-center justify-center shrink-0">
                                 <img
                                    src="https://www.svnit.ac.in/images/logo.png"
                                    alt="NIT Surat Logo"
                                    className="max-h-full w-auto transition-all duration-300"
                                 />
                              </div>
                              <div>
                                 <h4 className="font-bold text-gray-900 text-sm sm:text-base">Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat</h4>
                                 <p className="text-[10px] sm:text-xs text-brand-primary font-medium mt-0.5">Academic Partner</p>
                              </div>
                           </div>

                           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center group hover:shadow-md transition-all duration-300">
                              <div className="w-16 h-16 mr-4 flex items-center justify-center shrink-0">
                                 <img
                                    src="https://ktu.edu.in/static/media/logo_header.77120c0967a09b766cdf.png"
                                    alt="KTU Logo"
                                    className="max-h-full w-auto transition-all duration-300"
                                 />
                              </div>
                              <div>
                                 <h4 className="font-bold text-gray-900 text-sm sm:text-base">APJ Abdul Kalam Technological University (KTU), Kerala</h4>
                                 <p className="text-[10px] sm:text-xs text-brand-primary font-medium mt-0.5">Research Partner</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-red-700 text-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] relative overflow-hidden group h-full flex flex-col justify-center">
                           <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                           <p className="relative z-10 text-xl font-bold leading-relaxed italic">
                              "We collaborate with premier engineering institutions to provide specialized Project Based Learning (PBL) for AI programs and courses."
                           </p>
                           <div className="mt-4 flex justify-end">
                              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </motion.section>

         <Contact />
      </div>
   );
};

export default Home;
