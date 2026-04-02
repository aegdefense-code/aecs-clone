import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { ShieldCheck, Zap, Factory, Microscope, CheckCircle2, Globe } from 'lucide-react';

// Image Imports
import tbm1 from '../../assets/images/machines/testing-inspection/Tyre Building Machine-1.jpg';
import tbm2 from '../../assets/images/machines/testing-inspection/Tyre Building Machine-2.jpg';
import tcp1 from '../../assets/images/machines/testing-inspection/Tyre Curing Press-1.jpg';
import tcp2 from '../../assets/images/machines/testing-inspection/Tyre Curing Press-2.png';

const TestingCertification = () => {
  const materials = [
    { title: "Rubber & Elastomers", description: "Comprehensive evaluation of elasticity, tensile strength, and aging properties." },
    { title: "Composites", description: "Advanced testing for structural integrity and fiber-matrix interaction." },
    { title: "Plastics", description: "Durability and thermal performance testing for industrial and consumer applications." }
  ];

  const caseStudies = [
    {
      title: "Tire Building Machine",
      client: "AEG Group",
      description: "Conducted inspection and certification to ensure compliance with operational, safety, and quality standards. Successfully exported to the United States after evaluation.",
      image: tbm1
    },
    {
      title: "Tire Curing Press",
      client: "AEG Group",
      description: "Thorough evaluation for performance, structural integrity, and operational efficiency. Ensured compliance with international standards for export to the US.",
      image: tcp1
    }
  ];

  return (
    <div className="bg-white">
      <PageHero
        title="Testing, Inspection & Certification"
        subtitle="Ensuring Safety, Reliability, and Global Compliance"
        backgroundImage={tcp2}
      >
        <Link to="/contact" className="btn-primary py-3 px-8 text-lg shadow-lg">
          Contact Us
        </Link>
      </PageHero>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Strategic Quality Partner</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trust American Engineering Consultancy Services LLP (AECS) for comprehensive product testing, inspection, and certification services that ensure safety and compliance with global standards. We deliver insights on durability, strength, and performance to help you achieve product reliability and market-readiness.
              </p>
              <p className="text-gray-600 mb-8">
                AECS is a complete product development and engineering services company. We are a trusted testing partner to leading global brands across the automotive, medical, consumer, aerospace, and industrial sectors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-brand-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Risk Reduction</h4>
                    <p className="text-gray-600 text-sm">Minimizing operational and market risks through rigorous validation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Consumer Trust</h4>
                    <p className="text-gray-600 text-sm">Enhancing brand value with certified quality assurance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop" alt="Testing Lab" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-medium uppercase tracking-wider mb-2 text-brand-secondary">Advanced Lab</p>
                    <h3 className="text-2xl font-bold">Cutting-edge facilities and expertise in both destructive and non-destructive testing techniques.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Testing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Materials Testing & Inspection Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            AECS specializes in both destructive and non-destructive testing methods to evaluate material properties, strength, durability, and corrosion resistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <Microscope className="w-12 h-12 text-brand-primary mb-6 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{material.title}</h3>
                <p className="text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Facility Highlight */}
      <section className="py-20 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2 text-brand-primary" />
                Mechanical Testing Laboratory
              </div>
              <h2 className="text-4xl font-bold mb-6 italic tracking-tight uppercase">Real-World Condition Evaluation</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                Our mechanical testing laboratory is equipped with a <span className="text-white font-black">carbon fiber zero-pressure tire building machine</span>, enabling advanced evaluation of rubber and composite systems under real-world operating conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="font-bold text-gray-300 group-hover:text-white transition-colors">Advanced Performance Insights</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="font-bold text-gray-300 group-hover:text-white transition-colors">Fatigue Life Analysis</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="font-bold text-gray-300 group-hover:text-white transition-colors">Structural Integrity Validation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={tbm2} alt="Tire Building Machine" className="rounded-3xl shadow-2xl border-4 border-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Inspected & Certified Machines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inspected & Certified Machines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Providing rigorous inspection and certification services for specialized industrial equipment exported globally.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-primary/20 transition-all flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[250px]" />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="text-sm font-bold text-brand-primary mb-2 uppercase tracking-tight">{study.client} Partner</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-brand-primary font-bold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    International Certification Complete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Elevate Your Quality Assurance"
        subtitle="Reach out today to leverage our trusted testing solutions for your next project."
      />
    </div>
  );
};

export default TestingCertification;
