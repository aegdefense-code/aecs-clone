import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import { CheckCircle2, Award, Globe, Microscope, ShieldCheck } from 'lucide-react';

const AboutAecs = () => {
  const timeline = [
    {
      year: '1999',
      title: 'Foundation in Rubber Research',
      desc: 'Strategic partnership established with the Rubber Board in association with ASM, marking the beginning of structured involvement in rubber research and development.',
    },
    {
      year: '2004',
      title: 'ARDL Research Program',
      desc: 'Dedicated research initiative launched; rubber trees planted under the Rubber Board\'s guidance. Three scientists from ARDL (Akron Rubber Development Laboratory) joined, introducing global best practices.',
    },
    {
      year: '2010s',
      title: 'Tyre Testing Expansion',
      desc: 'Advanced tyre testing machines supplied by Poling Group were introduced, enabling accurate assessment of durability, endurance, uniformity, force and moment, and other critical performance parameters.',
    },
    {
      year: '2017',
      title: 'AECS Formally Established',
      desc: 'After nearly two decades of research experience, AECS was formally incorporated as an independent organization and achieved ISO accreditation, reinforcing its commitment to international quality standards.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        title="About AECS"
        subtitle="Pioneering Engineering Solutions in Kochi — Delivering precision-driven design, consultancy, and testing services across India and global markets."
      />

      {/* Quick Stats Bar */}
      <section className="py-10 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Years of Research', icon: <Microscope className="w-6 h-6 mx-auto mb-2 text-brand-secondary" /> },
              { value: '2017', label: 'Formally Incorporated', icon: <Award className="w-6 h-6 mx-auto mb-2 text-brand-secondary" /> },
              { value: 'ISO', label: 'Accredited Quality', icon: <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-brand-secondary" /> },
              { value: 'Global', label: 'Poling Group Agent', icon: <Globe className="w-6 h-6 mx-auto mb-2 text-brand-secondary" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {stat.icon}
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Pioneering Engineering Solutions in Kochi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>American Engineering Consultancy Services LLP is a leading engineering design and consultancy firm based in Kochi, delivering precision-driven solutions to clients across India and international markets.</p>
                <p>Our work spans multiple sectors — automotive, medical devices, marine, consumer products, and advanced industrial applications — supported by a multidisciplinary team that combines technical expertise with a research-led approach.</p>
                <p>We invite collaboration. Reach out via email or call <span className="font-bold text-gray-900">+91 99615 85261</span>.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'CAD & FEA Design', icon: '⚙️' },
                  { label: 'Tyre Testing Equipment', icon: '🔬' },
                  { label: 'Industrial Fenders', icon: '🚢' },
                  { label: 'ISO Certified Processes', icon: '✅' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-all">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Our Journey</span>
            <h2 className="text-3xl font-bold text-gray-900">Research-Driven Commitment</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-red-100 hidden sm:block"></div>
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-primary text-white rounded-xl flex items-center justify-center font-bold text-xs text-center leading-none shadow-md ring-4 ring-white z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-12">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Today</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unmatched Experience and Technical Expertise</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>Today, AECS acts as the <strong className="text-gray-900">authorized agent for Poling Group in India</strong>, representing advanced tyre testing machines for manufacturers and research organizations across the country.</p>
              <p>In parallel, AECS is actively involved in government contract projects, including the design and execution of industrial fenders, delivering solutions that meet stringent regulatory and performance requirements.</p>
              <p>AECS also provides specialized CAD-based design and engineering services for the tyre industry and other industrial sectors — combining a rich research heritage with certified processes and global partnerships.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Rubber & Tyre Engineering', 'Government Contract Projects', 'CAD Design Services'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-gray-50 border-t border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Leadership</span>
            <h2 className="text-3xl font-bold text-gray-900">Guided by Expertise</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-red-50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="w-24 h-24 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-md">AP</div>
              <h3 className="text-lg font-bold text-gray-900 text-center">Abraham Pannikottu</h3>
              <p className="text-brand-primary font-semibold text-center text-sm mt-1">Founder & Director</p>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>With over two decades of global engineering experience, Abraham spearheads the technical direction of AECS. His expertise spans advanced FEA, automotive systems design, and international engineering consulting.</p>
              <p>Under his leadership, AECS has evolved from a specialized regional firm into an authorized international partner capable of delivering comprehensive product manufacturing and advanced testing solutions worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Partners</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Academic Partners & Research</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Providing specialized Project Based Learning (PBL) for AI programs in collaboration with premier institutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className="h-28 flex items-center justify-center mb-5">
                <img src="https://www.svnit.ac.in/images/logo.png" alt="NIT Surat Logo" className="max-h-full w-auto" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat</h3>
              <p className="text-gray-400 text-xs italic">Deemed University — Ministry of Education, Govt. of India</p>
              <span className="mt-3 inline-block text-xs font-bold text-brand-primary uppercase tracking-widest">Academic Partner</span>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className="h-28 flex items-center justify-center mb-5">
                <img src="https://ktu.edu.in/static/media/logo_header.77120c0967a09b766cdf.png" alt="KTU Logo" className="max-h-full w-auto" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">APJ Abdul Kalam Technological University (KTU), Kerala</h3>
              <p className="text-gray-400 text-xs italic">Kerala Technological University</p>
              <span className="mt-3 inline-block text-xs font-bold text-brand-primary uppercase tracking-widest">Research Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Accreditations & Memberships</h2>
            <p className="text-gray-500 text-sm mt-2">Committed to global standards and verified by leading industry bodies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {['ISO 9001', 'ASME Certified', 'Poling Partner', 'Global Engineering'].map((label, i) => (
              <div key={i} className="p-5 bg-white shadow-sm rounded-xl flex items-center justify-center h-24 border border-gray-100">
                <span className="font-bold text-sm text-gray-500 text-center">{label}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">ISO 9001 Certificate</h3>
                <p className="text-sm text-gray-500">AECS holds active ISO 9001 certification.</p>
              </div>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 w-full md:w-auto text-center">View Certificate</a>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutAecs;
