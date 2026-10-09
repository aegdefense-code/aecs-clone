import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import SEO from '../../components/SEO';
import { 
  Cpu, 
  Activity, 
  Radio, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  RefreshCw, 
  CheckCircle2 
} from 'lucide-react';

const DigitalTwin = () => {
  const capabilities = [
    {
      title: "Physics-Informed Digital Twins",
      desc: "Coupling Reduced-Order Models (ROMs) and fast FEA surrogates with real-time field data to mirror operational stress states without computational lag.",
      icon: <Cpu className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "IoT Sensor & CAN-Bus Telemetry Ingestion",
      desc: "Real-time synchronization of strain gauge arrays, accelerometers, temperature probes, and vehicle CAN telemetry directly into physics simulation models.",
      icon: <Radio className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Predictive Fatigue & Remaining Useful Life (RUL)",
      desc: "Continuous rainflow cycle counting and cumulative damage law application to predict exact component retirement intervals before physical failure occurs.",
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Virtual Commissioning & Hardware-in-the-Loop",
      desc: "Emulating machine dynamics, hydraulic servo-valves, and drive responses before physical assembly to debug PLC automation code in zero-risk virtual environments.",
      icon: <RefreshCw className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Tire Dynamic & Rolling Digital Twins",
      desc: "Digital representations of tire tread wear, heat generation under high-speed endurance cycles, and road contact force variations across diverse pavements.",
      icon: <Activity className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Asset Health Monitoring & Anomaly Detection",
      desc: "Edge-based and cloud-synchronized dashboards comparing live sensor measurements against theoretical physics baselines to detect subtle degradation.",
      icon: <BarChart3 className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Digital Twin Engineering & Predictive Modeling | AECS"
        description="AECS Digital Twin engineering: connecting real-time sensor telemetry and IoT with physics simulation models for predictive maintenance, fatigue forecasting, and virtual commissioning."
        canonical="/services/digital-twin"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Twin Engineering Services",
          "provider": {
            "@type": "Organization",
            "name": "American Engineering Consultancy Services (AECS)"
          },
          "description": "Integration of IoT sensor data, reduced-order physics modeling, and real-time asset health monitoring."
        }}
      />

      <PageHero
        title="Digital Twin Engineering Services"
        subtitle="Connecting Real-Time Sensor Telemetry with High-Fidelity Physics Models for Predictive Asset Intelligence"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary py-3.5 px-8 text-base shadow-xl">
            Discuss Your Digital Twin Project
          </Link>
          <Link to="/services/fea" className="py-3.5 px-6 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base backdrop-blur-sm">
            Explore FEA & Simulation
          </Link>
        </div>
      </PageHero>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Industry 4.0 & Digital Engineering</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Bridge the Gap Between As-Designed CAD and As-Operating Physical Assets
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Traditional engineering simulation evaluates static assumptions under predetermined boundary conditions. AECS Digital Twin Engineering takes simulation a step further: creating dynamic, software-coupled models that continuously reflect the real-time operational state of your physical equipment.
              </p>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                By fusing sensor arrays with reduced-order FEA and CFD models, we provide engineering teams and asset managers with actionable foresight: predicting remaining component life, diagnosing anomalous vibration spectra, and optimizing service intervals.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-brand-primary rounded-r-xl text-sm font-medium text-slate-700">
                “A digital twin is not merely a 3D visual render—it is an active physics model fed by live sensor telemetry that predicts failure modes before they manifest physically.”
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-xl font-bold mb-4 text-white">Digital Twin Architecture</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-amber-400 mb-1">1. Physical Layer (Data Capture)</h4>
                    <p className="text-xs text-slate-300">Strain gauges, accelerometers, temperature probes, CAN-bus logs, and load cells embedded on assets.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-400 mb-1">2. Modeling Layer (Fast Surrogate Physics)</h4>
                    <p className="text-xs text-slate-300">Reduced Order Models (ROMs) and neural network approximations calibrated against nonlinear Abaqus/ANSYS FEA.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-400 mb-1">3. Decision Layer (Predictive Analytics)</h4>
                    <p className="text-xs text-slate-300">Live dashboard displays, remaining useful life (RUL) projections, threshold alarms, and automated maintenance triggers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Digital Twin Applications Across Sectors</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">From heavy testing equipment to tactical vehicle drivelines and marine structures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <CtaSection
        title="Implement Digital Twin Predictive Intelligence"
        subtitle="Talk to an AECS digital engineering specialist to evaluate telemetry integration and physics model surrogates for your critical assets."
        buttonText="Discuss Your Digital Twin Requirements"
        buttonLink="/contact"
      />
    </div>
  );
};

export default DigitalTwin;
