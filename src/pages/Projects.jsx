import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import { ArrowRight } from 'lucide-react';
import heroFeaImg from '../assets/images/hero-fea.webp';
import runFlatImg from '../assets/images/portfolio/run-flat.jpeg';
import pneumaticFenderImg from '../assets/images/portfolio/pneumatic-fender.jfif';
import polingMachineImg from '../assets/images/machines/tyre-testing/cx111-1.jpg';

const projectsData = [
  {
    id: 'zero-pressure-run-flat',
    title: 'Carbon-Fiber Zero-Pressure Run-Flat Tire System',
    category: 'Defense & Mobility',
    image: runFlatImg,
    challenge: 'Maintain heavy tactical vehicle mobility at 50 km/h following complete catastrophic pneumatic pressure loss.',
    solution: 'Designed an internal dual-stage elastomer and carbon-reinforced composite run-flat insert with nonlinear FEA.',
    results: 'Validated through 85+ km continuous zero-pressure run-flat testing with zero thermal degradation.',
    tags: ['Nonlinear FEA', 'Composites', 'Elastomers', 'Military Mobility'],
  },
  {
    id: 'pneumatic-marine-fenders',
    title: 'ISO 17357-1 High-Absorption Pneumatic Floating Fenders',
    category: 'Marine Engineering',
    image: pneumaticFenderImg,
    challenge: 'Absorb extreme kinetic berthing energy during open-sea Ship-to-Ship (STS) transfers without localized hull deflection.',
    solution: 'Engineered multi-layered synthetic tyre-cord vulcanized rubber bladders with aircraft tyre netting meeting ISO 17357.',
    results: 'Deployed across major deep-water ports and Indian Navy shipyards with 100% operational reliability.',
    tags: ['ISO 17357-1', 'Rubber Engineering', 'STS Transfers', 'Hydrodynamics'],
  },
  {
    id: 'tire-testing-rig-calibration',
    title: 'Automated Endurance & High-Speed Tire Testing Machines',
    category: 'Industrial & Testing',
    image: polingMachineImg,
    challenge: 'Develop automated multi-axis force, moment, and endurance testing capabilities for passenger and truck tires up to 250 km/h.',
    solution: 'Engineered custom fixture interfaces, automated servo-hydraulic controls, and high-frequency DAQ with Poling Group.',
    results: 'Enabled precision rolling resistance and dynamic uniformity compliance testing for Tier-1 tire OEMs across India.',
    tags: ['Poling Group', 'Testing Automation', 'Dynamic Load', 'ISO 10191'],
  },
  {
    id: 'hyperelastic-elastomer-fea',
    title: 'Nonlinear Hyperelastic FEA for Heavy Vehicle Bushings',
    category: 'Simulation',
    image: heroFeaImg,
    challenge: 'Predict fatigue life, cyclic stress softening, and large strain deflection in vulcanized suspension bushings.',
    solution: 'Formulated multi-axial test curve fittings into Ogden and Mooney-Rivlin strain energy functions for full 3D contact simulation.',
    results: 'Correlated virtual FEA model within 4.2% of physical dynamometer test data, cutting prototype tooling iterations from 5 to 1.',
    tags: ['Abaqus FEA', 'Hyperelasticity', 'Fatigue Life', 'Material Characterization'],
  }
];

const categories = ['All', 'Defense & Mobility', 'Marine Engineering', 'Industrial & Testing', 'Simulation'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Engineering Projects & Case Studies"
        subtitle="Real engineering challenges. Analytical solutions. Physical products. Measurable results."
      />

      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeFilter === cat
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="space-y-3 mb-6 text-sm text-slate-600">
                      <div>
                        <strong className="text-slate-900 block text-xs uppercase tracking-wider text-slate-400 mb-0.5">Challenge</strong>
                        <p>{project.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-slate-900 block text-xs uppercase tracking-wider text-slate-400 mb-0.5">AECS Solution</strong>
                        <p>{project.solution}</p>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                        <strong className="text-emerald-900 block text-xs uppercase tracking-wider font-bold mb-0.5">Measurable Result</strong>
                        <p className="text-emerald-800 text-xs font-medium">{project.results}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between text-sm font-bold text-brand-primary hover:text-red-700 transition-colors pt-4 border-t border-slate-200"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Have a Complex Engineering Requirement?" subtitle="Our multidisciplinary engineering team is ready to evaluate your specifications." />
    </div>
  );
};

export default Projects;
