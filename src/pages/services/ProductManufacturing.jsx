import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { 
  Settings, Wrench, CheckCircle, Package, Lightbulb, 
  Search, BarChart4, FastForward, ShieldCheck, Trophy, 
  Star, TrendingUp, AlertTriangle, FileText, ChevronRight
} from 'lucide-react';

const ProductManufacturing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      <PageHero 
        title="Product Manufacturing" 
        subtitle="End-to-End Product Development Solutions from Concept to Launch"
        backgroundImage="https://images.unsplash.com/photo-1565439399859-450ebf9b9772?q=80&w=2940&auto=format&fit=crop"
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Contact Us
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
              As a comprehensive firm, AECS specializes in turnkey solutions covering every stage of the lifecycle — from ideation and concept development to prototyping, manufacturing, and product launch. With AECS’s technical expertise, structured processes, and client-focused approach, we ensure a smooth, efficient, and transparent development journey.
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Product Design and Development Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Transforming inventive ideas into tangible, market-ready products with our array of technical offerings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Lightbulb />, title: "Ideation", desc: "Developing creative ideas based on your business goals and detailed market research." },
              { icon: <Search />, title: "Concept Testing", desc: "Thorough research to evaluate the feasibility and potential of your product concept." },
              { icon: <Settings />, title: "Industrial Design", desc: "Creating designs that meet specific product requirements and market demands." },
              { icon: <BarChart4 />, title: "Market Research", desc: "Extensive research to identify target markets and analyze potential competitors." },
              { icon: <Package />, title: "Prototyping", desc: "Using state-of-the-art technology to create prototypes for testing and validation." },
              { icon: <FastForward />, title: "Rapid Development", desc: "Efficient processes used to develop and launch your product quickly." },
              { icon: <Wrench />, title: "Custom Solutions", desc: "Tailored development to meet your unique product needs and technical specs." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-md"
              >
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Develop & Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Why Develop */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <TrendingUp className="mr-4 text-brand-primary" /> Why Develop New Products?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Increased Revenue", desc: "Launching new products can lead to significant increases in revenue and overall profits." },
                  { title: "Competitive Advantage", desc: "Innovative products give your business a sharp competitive edge in evolving markets." },
                  { title: "Business Growth", desc: "Help your business expand into new market segments and diversify your portfolio." },
                  { title: "Customer Satisfaction", desc: "Meet the changing needs and demands of your customers with modern solutions." }
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
                <AlertTriangle className="mr-4 text-orange-500" /> Development Challenges
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Cost Management", desc: "Development can be expensive. AECS manages this with clear, cost-effective strategies." },
                  { title: "Time-to-Market", desc: "Time-consuming processes can cause delays. We use streamlined agile workflows." },
                  { title: "Fierce Competition", desc: "Market entry is tough. We focus on unique value propositions to bypass competition." },
                  { title: "Concept Validation", desc: "Evaluating feasibility is complex. Our expert testing ensures concept viability." }
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
              { title: "Dual Damper", desc: "Enhanced shock absorption and vibration reduction for high-stability vehicle systems." },
              { title: "Carbon Fiber Tires", desc: "Ultra-lightweight high-performance tires combining extreme strength with agility." },
              { title: "Posture Perfect Backpack", desc: "Ergonomic design promoting better posture by distributing weight evenly across the torso." },
              { title: "Carbon Fiber Knee Brace", desc: "Lightweight support providing maximum protection for athletes and medical recovery." }
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

      {/* Patent Services */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-red-100 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                 <h2 className="text-3xl font-bold text-gray-900 mb-6 font-primary text-center md:text-left">Protect Your Intellectual Property</h2>
                 <p className="text-lg text-gray-600 mb-8 text-justify md:text-left">
                   Securing a patent can be complex. AECS’s team of engineers and IP professionals supports clients throughout the journey, helping to protect and maximize innovation value.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {["Patent Search & Analysis", "Application Drafting & Filing", "Patent Prosecution", "IP Portfolio Expansion"].map((item, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                 </div>
                 <Link to="/contact" className="btn-primary py-3 px-10 text-lg inline-block text-center w-full md:w-auto">Get IP Support Today</Link>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                 <div className="w-48 h-48 rounded-full bg-red-100 flex items-center justify-center">
                    <ShieldCheck className="w-24 h-24 text-brand-primary" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stages of Product Development</h2>
              <p className="text-gray-600">Our rigorous four-phase approach ensures precision from the first sketch to the final assembly line.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phase 1 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">1</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Product Feasibility</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Patent Research</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Market Research</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Technical Feasibility</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Manufacturability</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Competitive Analysis</li>
                    </ul>
                 </div>
              </div>

              {/* Phase 2 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">2</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Concept Development</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Industrial Design</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Brainstorming</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Material Specs</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Proof of Principle</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Business Planning</li>
                    </ul>
                 </div>
              </div>

              {/* Phase 3 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">3</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Prototype Development</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Detailed CAD Drawings</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Engineering Analysis</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Material Selection</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Functional Prototyping</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Test & Evaluation</li>
                    </ul>
                 </div>
              </div>

              {/* Phase 4 */}
              <div className="relative group">
                 <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-brand-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">4</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Commercialization</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Mass Manufacturing</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Cost Evaluation</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Pre-production Approval</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Continuous Quality Control</li>
                       <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-brand-primary" /> Final Assembly Setup</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <CtaSection title="Transform Your Invention into a Global Brand" subtitle="Contact us today for ISO-certified product development and manufacturing services." />
    </div>
  );
};

export default ProductManufacturing;
