import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import productManufacturingImg from '../../assets/images/services/product-manufacturing.jpg';
import { 
  Settings, CheckCircle, ShieldCheck, Trophy, 
  Star, TrendingUp, AlertTriangle, FileText, ChevronRight,
  Zap, Layers, Package, Microscope, Award, Clock, Wrench, Cpu
} from 'lucide-react';

const ProductManufacturing = () => {
  return (
    <div className="bg-white">
      <PageHero 
        title="Product Manufacturing & Prototyping" 
        subtitle="End-to-End Contract Manufacturing, Rapid Prototyping, and Advanced Material Engineering"
        backgroundImage={productManufacturingImg}
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Request Manufacturing Consultation
        </Link>
      </PageHero>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ISO 9001 Certified Engineering Excellence</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
              American Engineering Consultancy Services (AECS) is a full-service product design, development, and manufacturing company providing end-to-end solutions to inventors, startups, and established enterprises. Our team of experienced engineers and designers is committed to delivering innovative, reliable, and efficient services to help clients achieve lasting success.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify md:text-center">
              As a comprehensive firm, AECS specializes in turnkey solutions covering every stage of the lifecycle — from initial prototyping and material specification to custom tooling, low-rate initial production, and full-scale contract manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex flex-col items-center text-center">
               <ShieldCheck className="w-10 h-10 text-brand-primary mb-4" />
               <h4 className="font-bold text-gray-900 mb-2">Technical Expertise</h4>
               <p className="text-sm text-gray-600">Deep domain knowledge across multiple industrial segments.</p>
            </div>
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex flex-col items-center text-center">
               <Settings className="w-10 h-10 text-brand-primary mb-4" />
               <h4 className="font-bold text-gray-900 mb-2">Structured Processes</h4>
               <p className="text-sm text-gray-600">Phase-gate methodology ensuring quality at every milestone.</p>
            </div>
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex flex-col items-center text-center">
               <Trophy className="w-10 h-10 text-brand-primary mb-4" />
               <h4 className="font-bold text-gray-900 mb-2">Market Readiness</h4>
               <p className="text-sm text-gray-600">Solutions focused on commercial success and compliance.</p>
            </div>
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex flex-col items-center text-center">
               <Star className="w-10 h-10 text-brand-primary mb-4" />
               <h4 className="font-bold text-gray-900 mb-2">ISO 9001 Standards</h4>
               <p className="text-sm text-gray-600">Commitment to international quality management systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Rapid Prototyping Section (Integrated) */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Agile Production & Validation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing & Rapid Prototyping</h2>
            <p className="text-gray-600 leading-relaxed">
              Accelerate time-to-market with AECS custom part manufacturing and agile prototyping services, utilizing additive manufacturing, urethane casting, and precision subtractive CNC machining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-primary" />,
                title: "Functional Prototyping",
                desc: "Rapid turnaround physical prototypes utilizing high-resolution SLA, SLS, and FDM 3D printing for early fit, form, and ergonomics validation."
              },
              {
                icon: <Layers className="w-8 h-8 text-brand-primary" />,
                title: "Urethane Vacuum Casting",
                desc: "Short-run silicone tooling for 10 to 500 units in production-grade polyurethanes, matching final injection-molded mechanical performance."
              },
              {
                icon: <Settings className="w-8 h-8 text-brand-primary" />,
                title: "Custom Part Machining",
                desc: "Multi-axis 3-axis and 5-axis CNC precision milling and turning for tight-tolerance metal brackets, housings, and tooling dies."
              },
              {
                icon: <Package className="w-8 h-8 text-brand-primary" />,
                title: "Tooling & Die Handover",
                desc: "Engineering multi-cavity injection molds and compression rubber dies with integrated cooling channels and automated ejection."
              },
              {
                icon: <Microscope className="w-8 h-8 text-brand-primary" />,
                title: "Inspection & CMM Verification",
                desc: "Comprehensive dimensional verification with Coordinate Measuring Machines (CMM) and optical scanning against ASME Y14.5 GD&T."
              },
              {
                icon: <Award className="w-8 h-8 text-brand-primary" />,
                title: "Pilot & Low-Rate Production",
                desc: "Bridge manufacturing workflows that support pre-production validation runs before committing to full-scale capital expenditures."
              }
            ].map((sol, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="mb-4">{sol.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Rapid Turnaround on Test Prototypes?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our USA–India engineering bridge provides fast CAD-to-part turnarounds with strict mutual non-disclosure agreements (NDAs) to safeguard your IP.
              </p>
            </div>
            <Link to="/contact" className="btn-primary py-3 px-8 text-sm uppercase tracking-wider font-bold whitespace-nowrap shadow-md">
              Start Prototyping
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Materials & Polymer Compounding Section (Integrated) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Material Science Excellence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engineering Materials & Polymer Science</h2>
            <p className="text-gray-600 leading-relaxed">
              Every durable product depends on appropriate material science. We formulate, test, and optimize industrial elastomers, high-performance thermoplastics, and structural composites for harsh operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Rubber & Elastomers */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop" 
                  alt="Industrial Rubber and Elastomer Formulation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Rubber & Elastomers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Specialized formulation for extreme thermal cycles (EPDM), chemical and oil resistance (Viton / FKM, Nitrile), and high-wear abrasion resistance (Polyurethane solid tires and run-flats).
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-brand-primary">Hyperelastic</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">Mooney-Rivlin</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">ASTM D412</span>
                </div>
              </div>
            </div>

            {/* Engineered Plastics */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2940&auto=format&fit=crop" 
                  alt="Precision Plastic Injection Molding" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Engineered Plastics & Polymers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    High-strength injection-grade engineering thermoplastics including PEEK, Delrin (Acetal), Glass-filled Nylon (PA66-GF30), and Polycarbonate optimized for thermal stability and high strength-to-weight ratios.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-brand-primary">DFM Optimized</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">Moldflow Analysis</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">ISO 13485</span>
                </div>
              </div>
            </div>

            {/* Advanced Composites */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2940&auto=format&fit=crop" 
                  alt="Advanced Carbon Fiber Composites" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Structural Composites</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    High-modulus carbon-fiber woven laminates, aramid (Kevlar) ballistic matrix panels, and glass-reinforced resin systems designed for defense mobility, tactical armor, and aerospace weight reduction.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-brand-primary">High Strength-to-Weight</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">Ballistic Defense</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">FEA Anisotropy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Develop & Challenges */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Why Develop */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <TrendingUp className="mr-4 text-brand-primary" /> Why Partner with AECS for Manufacturing?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Direct Factory Economics", desc: "Reduce unit production costs by accessing India-based precision manufacturing with US-aligned quality control." },
                  { title: "De-Risked Tooling Capital", desc: "Rigorous virtual simulation and prototype testing eliminate expensive mold rework and tooling failures." },
                  { title: "Seamless USA–India Bridge", desc: "Direct engineering communication across time zones guarantees responsive execution and transparency." },
                  { title: "Turnkey Quality Compliance", desc: "Full dimensional inspection, material test certificates, and ISO 9001 compliance for every shipped batch." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <AlertTriangle className="mr-4 text-orange-500" /> Overcoming Production Challenges
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Material Incompatibility", desc: "Virtual hyperelastic and rheological modeling ensures polymers perform under real-world dynamic stress." },
                  { title: "Lead-Time Bottlenecks", desc: "Agile prototype cycles and rapid CNC tooling bridge the gap before hard-steel production tooling arrives." },
                  { title: "Tight Tolerance Assembly", desc: "Strict ASME Y14.5 GD&T adherence prevents stack-up errors during high-volume assembly line production." },
                  { title: "Quality Variance Across Batches", desc: "Statistical process control (SPC) and automated testing ensure consistent mechanical properties." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Portfolio Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AECS Global Patent Portfolio</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Extensive innovations across medical, consumer, energy, automotive, and industrial sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Torsional Damper", desc: "Improves engine performance by significantly reducing vibration and acoustic noise." },
              { title: "Three-Piece Golf Ball", desc: "Unique construction delivering enhanced performance, high spin, and superior accuracy." },
              { title: "Bi-Polar Plate for Fuel Cell", desc: "Innovative design that improves energy conversion efficiency and thermal management." },
              { title: "Fuel Cell Dual Seal", desc: "Patented technology ensuring a secure, leak-proof, and reliable seal for fuel cell assemblies." },
              { title: "Polyurethane Solid Tires", desc: "Engineered for extreme durability and long service life in heavy-duty industrial applications." },
              { title: "Tire Quality Prediction", desc: "Uses advanced simulations to forecast performance, durability, and quality metrics." },
              { title: "Personal Protection Systems", desc: "Flexible, lightweight protection focused on user comfort and impact resistance." },
              { title: "Carbon Fiber Tires", desc: "Ultra-lightweight high-performance tires combining extreme strength with agility." },
              { title: "Posture Perfect Backpack", desc: "Ergonomic design promoting better posture by distributing weight evenly across the torso." }
            ].map((patent, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center mb-4">
                   <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center mr-4">
                      <FileText className="w-5 h-5 text-brand-primary" />
                   </div>
                   <h4 className="font-bold text-lg">{patent.title}</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-justify">{patent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stages of Manufacturing & Production</h2>
              <p className="text-gray-600">Our structured four-phase approach ensures precision from raw compound selection to final assembly packaging.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phase 1 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">1</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">DFM & Material Selection</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Design for Manufacturability</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Polymer & Alloy Specification</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Moldflow / Filling Simulation</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Unit Cost Optimization</li>
                    </ul>
                 </div>
              </div>

              {/* Phase 2 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">2</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Prototype Verification</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Additive SLA/SLS Models</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Urethane Casting (10-500 Units)</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Functional Dynamometer Tests</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Environmental Chamber Trials</li>
                    </ul>
                 </div>
              </div>

              {/* Phase 3 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">3</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Production Tooling</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Hardened Steel Injection Molds</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Compression Vulcanization Dies</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Automated Jig & Fixture Setup</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> First Article Inspection (FAI)</li>
                    </ul>
                 </div>
              </div>

              {/* Phase 4 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">4</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Contract Manufacturing</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Full-Scale Production Runs</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Continuous In-Line QA & CMM</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Export Packaging & Logistics</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> ISO 9001 Batch Traceability</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <CtaSection 
        title="Ready to Scale Your Production with AECS?" 
        subtitle="Partner with AECS today for ISO-certified product development, rapid prototyping, and precision contract manufacturing services." 
        buttonText="Discuss Your Manufacturing Needs" 
      />
    </div>
  );
};

export default ProductManufacturing;
