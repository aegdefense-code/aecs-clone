import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Settings, 
  Cpu, 
  ChevronRight, 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  Search,
  Wrench,
  Award,
  Globe
} from 'lucide-react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';

// Image Imports - Laboratory Testing
import rr1 from '../../assets/images/machines/tyre-testing/rr-1.jpg';
import rr2 from '../../assets/images/machines/tyre-testing/rr-2.jpg';
import rr3 from '../../assets/images/machines/tyre-testing/rr-3.jpg';
import rr4 from '../../assets/images/machines/tyre-testing/rr-4.jpg';
import endurance1 from '../../assets/images/machines/tyre-testing/endurance-1.jpg';
import endurance2 from '../../assets/images/machines/tyre-testing/endurance-2.jpg';
import fm1 from '../../assets/images/machines/tyre-testing/fm-1.jpg';
import fm2 from '../../assets/images/machines/tyre-testing/fm-2.jpg';
import fm3 from '../../assets/images/machines/tyre-testing/fm-3.jpg';
import runflat1 from '../../assets/images/machines/tyre-testing/runflat-1.jpg';
import hsu1 from '../../assets/images/machines/tyre-testing/hsu-1.jpg';
import noise1 from '../../assets/images/machines/tyre-testing/noise-1.jpg';

// Image Imports - Final Finish
import mcx75_1 from '../../assets/images/machines/tyre-testing/mcx75-1.jpg';
import mcx75_2 from '../../assets/images/machines/tyre-testing/mcx75-2.jpg';
import mcx75_3 from '../../assets/images/machines/tyre-testing/mcx75-3.jpg';
import cx111_1 from '../../assets/images/machines/tyre-testing/cx111-1.jpg';
import cx111_2 from '../../assets/images/machines/tyre-testing/cx111-2.jpg';
import cx111_3 from '../../assets/images/machines/tyre-testing/cx111-3.jpg';
import x150_1 from '../../assets/images/machines/tyre-testing/x150-1.jpg';
import x150_2 from '../../assets/images/machines/tyre-testing/x150-2.jpg';
import x150_3 from '../../assets/images/machines/tyre-testing/x150-3.jpg';
import x150_4 from '../../assets/images/machines/tyre-testing/x150-4.jpg';
import db111_1 from '../../assets/images/machines/tyre-testing/db111-1.png';
import uft111_1 from '../../assets/images/machines/tyre-testing/uft111-1.jpg';
import ag2540_1 from '../../assets/images/machines/tyre-testing/ag2540-1.jpg';
import trm92_1 from '../../assets/images/machines/tyre-testing/trm92-1.jpg';
import pgm1 from '../../assets/images/machines/tyre-testing/pgm-1.jpg';

const TyreTesting = () => {
  const labMachines = [
    {
      title: "Rolling Resistance Testing",
      description: "The Rolling Resistance Tester uses the torque method to measure rolling resistance, under controlled laboratory conditions, for new pneumatic tires. Available in single station or multiple station configurations.",
      images: [rr1, rr2, rr3, rr4]
    },
    {
      title: "Tire Endurance Testing",
      description: "The laboratory tire endurance tester can perform High Speed, Durability, Bead, and Camber & Slip Angle testing.",
      images: [endurance1, endurance2]
    },
    {
      title: "Force & Moment Testing",
      description: "The Force & Moment tester can perform High Speed, Durability, Bead, and Camber & Slip Angle, Belt Edge Separation, Tire Side Force, Force & Moment, and Run-Flat testing.",
      images: [fm1, fm2, fm3]
    },
    {
      title: "Run-Flat Tire Testing",
      description: "The ASM-Hasbach Run Flat Tire Tester can perform High Speed and Durability testing at up to four stations. It Optionally measures tire internal, tread and ambient temperatures, rolling radius and circumference, and deflection.",
      images: [runflat1]
    },
    {
      title: "High Speed Uniformity",
      description: "The HSU-L provides industry standard high speed measurements for PC, LT and Racing Tires under laboratory conditions.",
      images: [hsu1]
    },
    {
      title: "Tire Noise Testing",
      description: "To correctly quantify tire noise, which is a necessary data point for all new tires in accordance with the new EC Tire Labeling act, tire manufacturers are turning to specialized “noise testing” laboratory machines.",
      images: [noise1]
    }
  ];

  const finishMachines = [
    {
      title: "MCX75 Tire Uniformity",
      description: "The new Poling Group MCX75 Tire Uniformity Tester builds on the success of the proven CX111 TU, applying the same smarter controls, faster through-put and stronger frame to testing motorcycle tires.",
      images: [mcx75_1, mcx75_2, mcx75_3]
    },
    {
      title: "CX111 Tire Uniformity",
      description: "The CX111 TUs result from years of intensive product improvement, making them the Poling Group's flagship model of tire uniformity testing. The CX111 is truly Smarter. Faster. Stronger.",
      images: [cx111_1, cx111_2, cx111_3]
    },
    {
      title: "X150 Tire Uniformity",
      description: "The largest of our Tire Uniformity testers, the X150 is for large truck and bus tires and is loaded with features and options.",
      images: [x150_1, x150_2, x150_3, x150_4]
    },
    {
      title: "DB-111 Dynamic Balance Testing",
      description: "The Poling Group DB-111 Dynamic Balance Testing machine has the capacity to balance test all tires processed by our CX111 TU machine.",
      images: [db111_1]
    },
    {
      title: "UFT111 Universal Flash Trimmer",
      description: "The patented Poling Group UTF-111 (Universal Flash Trimmer) automates the task of flash grinding traditionally performed by an operator.",
      images: [uft111_1]
    },
    {
      title: "AG2540 Agricultural Tires",
      description: "The AG-2540 provides total indicated runout (TIR) readings for agricultural tires that travel over 50 MPH.",
      images: [ag2540_1]
    },
    {
      title: "TRM-92 Tire Uniformity",
      description: "The TRM-92 is the perfect choice for uniformity testing that does not require a loadwheel.",
      images: [trm92_1]
    },
    {
      title: "PGM Profile Generating Machine",
      description: "Patented worldwide, PGM uses dual precision grinder units, a laser, and a Windows-based controller to reduce radial force, radial runout, and conicity -- without compromising finished tire appearance!",
      images: [pgm1]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Comprehensive Tyre Testing Services"
        subtitle="Ensure safety, reliability, and performance with AECS’s state-of-the-art tyre testing solutions—designed for development, validation, and production excellence."
        backgroundImage="https://images.unsplash.com/photo-1549646864-1e0fc208cddf?q=80&w=2938&auto=format&fit=crop"
      >
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="btn-primary py-4 px-10 text-lg shadow-xl shadow-red-900/20">
            Let's Talk!
          </Link>
        </div>
      </PageHero>

      {/* Page Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-red-50 text-brand-primary text-sm font-bold mb-6 border border-red-100 uppercase tracking-widest text-[10px]">
                Page Overview
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Expert Analysis & <span className="text-brand-primary">Cutting-Edge Technology</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium text-justify">
                AECS provides end-to-end tyre testing services, combining cutting-edge technology, expert analysis, and global standards compliance. Our solutions are ideal for automotive OEMs, commercial tyre manufacturers, and specialty tyre developers, ensuring that every tyre performs optimally under real-world conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                With decades of experience, we deliver accurate, reliable, and repeatable test results, helping clients improve product quality, optimize performance, and reduce time to market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-inner"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-brand-primary pl-4 uppercase tracking-tighter">Key Objectives</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Verify material and structural integrity",
                  "Optimize tread design, grip, and wear",
                  "Identify failure points before production",
                  "Ensure compliance with global standards"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-brand-primary transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary mr-4" />
                    <span className="font-bold text-gray-800 uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role and Importance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Role & Importance of Tyre Testing</h2>
              <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-4xl shadow-xl border border-gray-100">
                 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 italic uppercase tracking-tight">
                    <ShieldCheck className="text-brand-primary" /> Role in Development
                 </h3>
                 <p className="text-gray-600 font-medium mb-8 text-justify">
                    Tyre testing is a critical step in ensuring product reliability and safety. By assessing tyres under controlled conditions, AECS helps clients:
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Verify material and structural integrity",
                      "Optimize tread design, grip, and wear characteristics",
                      "Identify potential failure points before mass production",
                      "Ensure compliance with regulatory and industry standards"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <ChevronRight className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                         <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-white p-10 rounded-4xl shadow-xl border border-gray-100">
                 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 italic uppercase tracking-tight">
                    <BarChart3 className="text-brand-primary" /> Standardized Testing
                 </h3>
                 <p className="text-gray-600 font-medium mb-8 text-justify">
                    Consistent and standardized testing ensures that results are accurate, comparable, and actionable. AECS adheres to international standards, enabling manufacturers to:
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Benchmark performance across tyre lines",
                      "Reduce defects and recalls",
                      "Make data-driven design improvements",
                      "Accelerate product development cycles"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <ChevronRight className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                         <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Poling Group Partnership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[50px] shadow-2xl overflow-hidden text-white">
            <div className="lg:flex">
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center border-r border-white/5">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-1 bg-brand-primary rounded-full mr-4"></div>
                  <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-sm">Authorized Representation</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter italic uppercase text-white">AECS – Poling Group Partnership</h2>
                <p className="text-lg text-gray-400 mb-10 font-bold leading-relaxed text-justify">
                  AECS is proud to collaborate with the Poling Group, a global leader in tyre testing technology. This partnership allows us to provide cutting-edge testing machines, expert technical support, and global standards compliance assurance.
                </p>
                
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-brand-primary/20 rounded-full blur-2xl"></div>
                  <h4 className="text-brand-primary font-black uppercase tracking-widest text-sm mb-4 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2" /> Authorized Dealer Status
                  </h4>
                  <p className="text-gray-300 font-bold leading-relaxed italic text-sm">
                    AECS is an authorized Poling Group representative, ensuring that all clients have access to authentic, high-quality testing equipment and expert guidance.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 p-12 lg:p-20 relative bg-brand-primary/5">
                <h3 className="text-2xl font-black text-brand-primary mb-10 tracking-widest uppercase">What We Deliver</h3>
                <div className="space-y-6">
                  {[
                    "Cutting-edge testing machines",
                    "Expert technical support",
                    "Comprehensive training and certification",
                    "Global standards compliance assurance"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-brand-primary transition-colors duration-300">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="font-extrabold text-white uppercase tracking-tighter text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Catalog - Laboratory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase italic mb-6">Laboratory Testing</h2>
            <div className="w-32 h-2 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-500 font-bold uppercase tracking-tight">Precision R&D & Validation Equipment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {labMachines.map((machine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden group hover:border-brand-primary transition-all duration-300"
              >
                <div className="h-80 relative overflow-hidden bg-gray-50 border-b border-gray-100 p-8 flex items-center justify-center">
                   <img src={machine.images[0]} alt={machine.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-6 right-6 flex flex-col gap-3">
                      {machine.images.slice(1).map((img, i) => (
                        <div key={i} className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-white">
                           <img src={img} alt={`${machine.title} alt ${i}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                   </div>
                </div>
                <div className="p-12">
                   <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{machine.title}</h3>
                   <p className="text-gray-600 font-medium leading-relaxed text-sm text-justify italic">
                      {machine.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Catalog - Final Finish */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold mb-6 border border-brand-primary/20 uppercase tracking-[0.3em]">End-Of-Line Systems</div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic mb-6">Final Finish Testing</h2>
            <div className="w-32 h-2 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-400 font-bold uppercase tracking-widest text-[10px]">Production Excellence & Throughput Optimization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {finishMachines.map((machine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-brand-primary transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative border-b border-white/5 bg-white/5 p-4 flex items-center justify-center">
                   <img src={machine.images[0]} alt={machine.title} className="max-h-full max-w-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-lg font-black uppercase tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{machine.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed text-xs text-justify mb-6">
                    {machine.description}
                  </p>
                  <div className="flex gap-2">
                    {machine.images.slice(1, 4).map((img, i) => (
                      <div key={i} className="w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                        <img src={img} alt={`${machine.title} sm ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AECS Support Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-20">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
               <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tighter uppercase italic">Support & Services Provided</h2>
               <div className="space-y-4">
                {[
                  { title: "Installation and commissioning of tyre testing machines", icon: <Wrench className="w-5 h-5" /> },
                  { title: "On-site training and operator certification", icon: <Award className="w-5 h-5" /> },
                  { title: "Calibration and preventive maintenance", icon: <Settings className="w-5 h-5" /> },
                  { title: "Test protocol development and consultation", icon: <Cpu className="w-5 h-5" /> },
                  { title: "Data analysis and reporting", icon: <Search className="w-5 h-5" /> }
                ].map((s, i) => (
                  <div key={i} className="flex items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-brand-primary hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors mr-6 shrink-0">
                      {s.icon}
                    </div>
                    <span className="text-sm lg:text-base font-black text-gray-900 uppercase tracking-tight">{s.title}</span>
                  </div>
                ))}
               </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-brand-dark rounded-[50px] p-12 lg:p-16 text-white relative shadow-2xl overflow-hidden border border-white/5">
                  <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px]"></div>
                  <h3 className="text-3xl font-black mb-10 tracking-tighter uppercase italic border-b border-white/10 pb-6">Standards & Compliance</h3>
                  <div className="grid grid-cols-1 gap-8">
                    {[
                      { code: "ISO 10191", desc: "Road Vehicle Tyre Testing" },
                      { code: "ASTM F36", desc: "Standard Test Methods" },
                      { code: "ECE R30 & R117", desc: "Regulatory Compliance" },
                      { code: "OEM PROTOCOLS", desc: "Client-specific protocols" }
                    ].map((std, i) => (
                      <div key={i} className="flex items-start gap-6 group">
                        <div className="w-1 h-12 bg-brand-primary rounded-full group-hover:scale-y-125 transition-transform origin-top"></div>
                        <div>
                          <h4 className="text-xl font-black uppercase tracking-widest text-brand-primary leading-none mb-2">{std.code}</h4>
                          <p className="text-gray-400 font-bold uppercase tracking-tight text-xs">{std.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With AECS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">Why Work With AECS</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-500 font-bold uppercase tracking-widest text-[10px]">Precision / Reliability / Support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Decades of Industry Experience", desc: "Trusted by leading tyre manufacturers worldwide for engineering excellence." },
              { title: "Authorized Poling Group Representative", desc: "Direct access to genuine world-class machines and expert guidance." },
              { title: "Comprehensive Solutions", desc: "From elite equipment supply to specialized testing consultations." },
              { title: "Standardized, Repeatable Results", desc: "Ensuring reliable, actionable data across all test protocols." },
              { title: "End-to-End Support", desc: "Dedicated installation, training, maintenance, and expert reporting." },
              { title: "Innovation Partner", desc: "More than an agency—we leverage Poling Group tech for your success." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-4xl shadow-lg border border-gray-100 hover:border-brand-primary hover:-translate-y-2 transition-all group">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-tight">{card.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed text-xs text-justify italic">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="bg-brand-dark py-20 relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto px-4 text-white relative z-10">
            <p className="text-brand-primary font-black uppercase tracking-[0.4em] mb-6 text-xs italic">Innovation Since 2000+</p>
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8">20+ Years / 30+ Awards / Several Patents</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto mb-10"></div>
            <Link to="/contact" className="btn-primary py-5 px-16 text-xl uppercase tracking-widest font-black italic shadow-2xl shadow-red-900/40">
              Get In Touch
            </Link>
         </div>
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[150px]"></div>
         </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default TyreTesting;
