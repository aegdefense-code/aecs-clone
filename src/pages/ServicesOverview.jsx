import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { CheckCircle2 } from 'lucide-react';

// Image imports
import prodManImg from '../assets/images/services/product-manufacturing.jpg';
import npdImg from '../assets/images/services/npd.jfif';
import feaImg from '../assets/images/services/fea.jfif';
import designImg from '../assets/images/services/design.jfif';
import prototypingImg from '../assets/images/services/prototyping.jfif';
import testingImg from '../assets/images/services/testing.jfif';
import tyreTestingImg from '../assets/images/services/tyre-testing.jpeg';

const services = [
  {
    id: 'product-manufacturing',
    title: 'Product Manufacturing',
    tagline: 'Tooling | Precision CNC | Batch Production | Quality Inspection',
    description: 'End-to-end industrial production and component manufacturing, transforming engineering designs into validated serial products with strict quality assurance.',
    capabilities: [
      'Precision CNC machining & multi-axis milling',
      'Custom injection molds, tooling & vulcanization dies',
      'Low-to-high volume serial contract manufacturing',
      'CMM dimensional inspection & ISO 9001 certified QA'
    ],
    image: prodManImg,
    path: '/services/product-manufacturing',
    linkText: 'Explore Product Manufacturing',
    delay: 0.05
  },
  {
    id: 'npd',
    title: 'New Product Development (NPD)',
    tagline: 'Concept → Requirements → Design → Prototype → Validation → Production',
    description: 'Guiding complex electromechanical, mobility, and industrial hardware from early conceptual trade studies to production-ready DFM and commercial tooling.',
    capabilities: [
      'Requirements engineering & feasibility trade studies',
      '3D parametric solid & surface CAD modeling',
      'Tolerance stack-up analysis & kinematic simulation',
      'Design for Manufacturing (DFM) & Assembly (DFA)'
    ],
    image: npdImg,
    path: '/services/npd',
    linkText: 'Explore Product Development',
    delay: 0.1
  },
  {
    id: 'fea',
    title: 'Finite Element Analysis (FEA)',
    tagline: 'Structural Mechanics | Non-Linear Analysis | Fatigue Life | Impact Dynamics',
    description: 'Advanced virtual validation and numerical stress simulation, predicting structural performance, failure modes, and durability before physical prototyping.',
    capabilities: [
      'Linear, nonlinear static & dynamic structural FEA (Abaqus & ANSYS)',
      'Hyperelastic rubber, polymer & elastomer material fitting',
      'High-cycle fatigue life prediction & fracture mechanics',
      'Explicit dynamics, drop testing & transient impact simulation'
    ],
    image: feaImg,
    path: '/services/fea',
    linkText: 'Explore Simulation & FEA',
    delay: 0.15
  },
  {
    id: 'cfd-thermal',
    title: 'CFD & Thermal Analysis',
    tagline: 'Aerodynamics | Conjugate Heat Transfer | Multiphase Flow | Cooling',
    description: 'High-accuracy computational fluid dynamics and thermal simulations to optimize flow behavior, minimize aerodynamic drag, and eliminate thermal hotspots.',
    capabilities: [
      'External aerodynamics, drag minimization & pressure mapping',
      'Conjugate Heat Transfer (CHT) & cooling jacket simulation',
      'Electronics packaging & EV battery pack thermal management',
      'Multiphase, sloshing & free-surface hydrodynamic flow'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    path: '/services/cfd-thermal',
    linkText: 'Explore CFD & Thermal',
    delay: 0.2
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Engineering',
    tagline: 'IoT Telemetry | Physics Models | Predictive Maintenance | Optimization',
    description: 'Connecting real-time machine telemetry and IoT sensor data with high-fidelity physics models to enable live health monitoring and predictive asset intelligence.',
    capabilities: [
      'Reduced-Order Modeling (ROM) for real-time physics computation',
      'Real-time IoT sensor telemetry & supervisory data ingestion',
      'Remaining Useful Life (RUL) & predictive failure alerting',
      'Operational load tracking & dynamic asset life extension'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    path: '/services/digital-twin',
    linkText: 'Explore Digital Twins',
    delay: 0.25
  },
  {
    id: 'design',
    title: 'Mechanical Engineering Design',
    tagline: '3D CAD | GD&T | Kinematic Mechanisms | Reverse Engineering',
    description: 'Robust mechanical system design, precision mechanism engineering, and production-ready CAD deliverables conforming to international drafting standards.',
    capabilities: [
      'Complex parametric 3D solid & Class-A surface design',
      'ASME Y14.5 Geometric Dimensioning & Tolerancing (GD&T)',
      '3D laser scan data processing & reverse engineering',
      'Structural bill of materials (BOM) & fabrication drawings'
    ],
    image: designImg,
    path: '/services/design',
    linkText: 'Explore Mechanical Design',
    delay: 0.3
  },
  {
    id: 'prototyping',
    title: 'Manufacturing & Rapid Prototyping',
    tagline: 'Industrial 3D Printing | CNC Machining | Urethane Casting | Testing Rigs',
    description: 'Rapid physical manifestation of design concepts through industrial additive manufacturing, precision CNC machining, and high-fidelity test mockups.',
    capabilities: [
      'SLA, SLS & DMLS metal additive rapid prototyping',
      'Precision 3-axis & 5-axis CNC prototype machining',
      'Vacuum urethane casting for bridge-to-production parts',
      'Functional bench-test mockups & ergonomic fit-check models'
    ],
    image: prototypingImg,
    path: '/services/prototyping',
    linkText: 'Explore Rapid Prototyping',
    delay: 0.35
  },
  {
    id: 'testing',
    title: 'Testing, Inspection & Certification',
    tagline: 'Physical Validation | Material Testing | ISO/ASTM Compliance | NDT',
    description: 'Comprehensive physical laboratory testing, material characterization, and compliance certification ensuring mission-critical hardware reliability.',
    capabilities: [
      'Tensile, compression, shear & dynamic fatigue testing',
      'Environmental chamber exposure (temperature, humidity, salt spray)',
      'Non-Destructive Testing (NDT), ultrasonic & radiographic inspection',
      'Regulatory compliance certification (ISO, ASTM, SAE, OSHA)'
    ],
    image: testingImg,
    path: '/services/testing',
    linkText: 'Explore Testing & Certification',
    delay: 0.4
  },
  {
    id: 'tyre-testing',
    title: 'Tyre Testing Machines',
    tagline: 'Poling Group Rep | Uniformity | Dynamic Balance | Endurance Rigs',
    description: 'World-class tire testing machinery sales, commissioning, and lifetime calibration as an authorized representative of the global industry-standard Poling Group.',
    capabilities: [
      'High-speed tire uniformity testing machines (TUM)',
      'Dynamic balance, geometry & radial runout inspection',
      'Rolling resistance & high-speed endurance dynamometers',
      'Laboratory controller retrofits, calibration & maintenance support'
    ],
    image: tyreTestingImg,
    path: '/services/tyre-testing',
    linkText: 'Explore Tyre Testing Machines',
    delay: 0.45
  },
  {
    id: 'materials',
    title: 'Advanced Materials & Composites',
    tagline: 'Composites | Elastomers | Rubber | Carbon Fiber | Testing & Validation',
    description: 'Decades of scientific mastery in hyperelastic polymers, custom rubber compounding, and high-strength lightweight carbon fiber architectures.',
    capabilities: [
      'Elastomer compound characterization & strain-energy fitting',
      'Carbon-fiber, fiberglass & honeycomb composite structural engineering',
      'Chemical compatibility, aging & thermal degradation analysis',
      'Custom polymer formulation for extreme operating environments'
    ],
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop',
    path: '/materials',
    linkText: 'Explore Materials & Testing',
    delay: 0.5
  }
];

const ServicesOverview = () => {
  return (
    <div>
      <SEO
        title="Engineering Services | Mechanical Design, FEA, NPD & Testing"
        description="Comprehensive AECS engineering services: New Product Development (NPD), FEA simulation, CFD & thermal analysis, digital twins, rapid prototyping, and materials testing."
        canonical="/services"
      />
      <PageHero
        title="Engineering Services Overview"
        subtitle="Comprehensive engineering, simulation, testing, and manufacturing solutions tailored to global industry standards."
        backgroundImage="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2940&auto=format&fit=crop"
      />

      {/* Services Grid */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="section-padding text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">
              Core Technical Capabilities
            </h2>
            <p className="text-4xl leading-tight font-black tracking-tighter text-gray-900 sm:text-5xl mb-6">
              Engineering & Strategic Services
            </p>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl text-lg text-gray-600 mx-auto font-medium leading-relaxed">
              From concept development and digital physics simulation to high-precision rapid prototyping and serial manufacturing.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: service.delay }}
                className="engineering-tile group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-brand-primary hover:shadow-xl">
                  {/* Service Top Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/15 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-3 leading-snug">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-gray-100 mb-6 flex-grow">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-2">
                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider group/link hover:text-red-700 transition-colors"
                      >
                        <span>{service.linkText}</span>
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
              AECS Engineering Standards • ISO 9001:2015 Registered • Global Technical Delivery
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AECS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-20">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">Why Choose AECS?</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                We combine decades of domain expertise across automotive, marine, defense, and medical sectors with modern CAD, FEA simulation, and advanced materials engineering. We don't just draft plans—we engineer manufacturable reality.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "20+ Years Experience", desc: "Trusted by global OEMs for complex, precision engineering and testing." },
                { title: "ISO 9001:2015", desc: "Certified quality management protocol across all design and production services." },
                { title: "Multi-Domain Expertise", desc: "Automotive, marine, defense, industrial equipment, and medical devices." },
                { title: "End-to-End Delivery", desc: "From conceptual trade studies and simulation all the way to serial manufacturing." }
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

      <CtaSection />
    </div>
  );
};

export default ServicesOverview;
