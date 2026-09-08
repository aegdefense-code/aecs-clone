import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import {
  Layers, Activity, Maximize, Droplets, ShieldCheck,
  Settings, Zap, BarChart3, Search, AlertCircle,
  FileText, Scale, Gavel, Cpu, CheckCircle2
} from 'lucide-react';
import SEO from '../../components/SEO';

const FiniteElementAnalysis = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Finite Element Analysis (FEA) Simulation"
        description="Predictive physics and advanced simulation services: structural durability, fatigue lifecycle prediction, dynamic impact, and thermal FEA analysis."
        canonical="/services/fea"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Finite Element Analysis (FEA) Simulation",
          "provider": {
            "@type": "Organization",
            "name": "American Engineering Consultancy Services"
          },
          "description": "Predictive physics, structural durability, CFD, and advanced finite element simulation services."
        }}
      />
      <PageHero
        title="Finite Element Analysis (FEA)"
        subtitle="Predictive Physics and Advanced Simulation Services for Enhanced Reliability"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Contact Us
        </Link>
      </PageHero>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Simulation-Driven Product Optimization</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                At AECS, a leading Finite Element Analysis (FEA) company, we understand the critical role optimization plays in enhancing product design and development. To support this, we offer a comprehensive range of specialized FEA services and consulting, including advanced FEA simulation, analysis, and optimization solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Our consultants bring over 20 years of industry experience, delivering accurate and reliable results for clients across multiple industries. We provide end-to-end services for composite, plastic, and rubber materials, utilizing the latest simulation techniques and industry-leading software such as ABAQUS.
              </p>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 italic text-gray-700">
                "Our mission is to enhance the design efficiency, longevity, and reliability of your products through precise and insightful analysis."
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop"
                alt="Advanced Engineering Simulation"
                className="rounded-2xl shadow-2xl border-8 border-white"
              />
              <div
                className="absolute -bottom-6 -left-6 text-white p-6 rounded-xl shadow-xl hidden md:block"
                style={{ background: 'radial-gradient(ellipse at center, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)' }}
              >
                <span className="text-3xl font-bold block">20+</span>
                <span className="text-sm uppercase tracking-wider">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Improve Product Performance & Durability</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our FEA consulting engineers possess deep expertise in simulating real-world operating conditions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Stress Analysis", desc: "Linear and nonlinear structural evaluations to identify critical point failures." },
              { title: "Nonlinear Dynamics", desc: "Complex physics simulation for high-impact and time-dependent events." },
              { title: "ASME Pressure Vessel", desc: "Compliance-focused analysis ensuring safety and regulatory adherence." },
              { title: "Nonlinear Contact", desc: "Accurate modeling of frictional and geometric contact between assemblies." },
              { title: "Plastic Thread Design", desc: "Optimizing fastening systems for polymer components to prevent stripping." },
              { title: "Material Plasticity", desc: "Predicting permanent deformation and energy absorption in critical parts." },
              { title: "Hyperelasticity", desc: "Specialized modeling for rubber, silicone, and other large-strain materials." },
              { title: "Buckling & Post-Buckling", desc: "Stability analysis for thin-walled structures under compressive loads." }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-primary transition-all">
                <h4 className="font-bold text-brand-primary mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEA Work & Optimization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Finite Element Analysis Work</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Looking to minimize costs and improve your existing designs? For expert finite element analysis services, look no further. Our experienced engineers provide high-quality design and analysis services including FEA, CFD, and Mold-flow analysis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Zap />, title: "Optimization Studies", desc: "Refining designs for max performance." },
                  { icon: <BarChart3 />, title: "Trade-off Studies", desc: "Balancing weight, cost, and strength." },
                  { icon: <Activity />, title: "Sensitivity Studies", desc: "Identifying critical design variables." },
                  { icon: <Settings />, title: "Mold-flow Analysis", desc: "Optimizing the injection molding process." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="text-brand-primary mr-3 mt-1">{React.cloneElement(item.icon, { className: 'w-5 h-5' })}</div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-dark p-8 md:p-12 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <AlertCircle className="mr-3 text-orange-500" /> Root Cause Analysis
              </h3>
              <p className="text-gray-400 mb-8">
                In case of engineering failures, we provide in-depth root cause analysis using FEA, CFD, and testing services. Our expertise extends to critical legal and corporate support:
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <Search />, text: "Product Recall Engineering Investigations" },
                  { icon: <Scale />, text: "Expert Witness Technical Testimony" },
                  { icon: <Gavel />, text: "Litigation Technical Support" },
                  { icon: <FileText />, text: "Patent Infringement Engineering Work" }
                ].map((li, idx) => (
                  <li key={idx} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                    <div className="p-2 bg-white/5 rounded-lg text-brand-primary">
                      {React.cloneElement(li.icon, { className: 'w-5 h-5' })}
                    </div>
                    <span className="font-medium">{li.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABAQUS Capabilities */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md">
            <Cpu className="w-10 h-10 text-brand-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Nonlinear Simulation with ABAQUS</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
            Thanks to our mastery of ABAQUS software, we have the capabilities to handle even the most complex nonlinear situations—from viscoplasticity and creep to complex frictional contact mechanics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Nonlinear Stress Analysis",
              "Viscoplasticity & Creep",
              "Nonlinear Buckling",
              "Frictional Contact Mechanics",
              "Geometrical Nonlinearity",
              "Advanced Material Modeling"
            ].map((cap, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-blue-100 flex items-center shadow-sm">
                <div className="w-4 h-4 rounded-full bg-brand-primary mr-4 flex-shrink-0" />
                <span className="font-bold text-gray-800">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Capability Summary */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-red-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">AECS'S FEA Capability Summary</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Turning product designs into a reality for over two decades. Our team can handle any complex engineering challenge and accurately simulate real-world operating conditions before physical testing.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> 20+ Years Expertise
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> ABAQUS Mastery
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Global Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection title="Maximize Performance. Minimize Failure." subtitle="Contact our FEA consulting team today to discuss your simulation requirements." />
    </div>
  );
};

export default FiniteElementAnalysis;

