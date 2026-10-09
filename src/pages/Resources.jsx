import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { 
  Download, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Calendar, 
  X, 
  ChevronDown,
  FileText
} from 'lucide-react';

// Authentic Engineering Assets
import heroFeaImg from '../assets/images/hero-fea.webp';
import runFlatImg from '../assets/images/portfolio/run-flat.jpeg';
import pneumaticFenderImg from '../assets/images/portfolio/pneumatic-fender.jfif';
import airlessTireImg from '../assets/images/portfolio/airless-tire.jpeg';
import safetyCageImg from '../assets/images/portfolio/safety-cage.jpg';
import cx111Img from '../assets/images/machines/tyre-testing/cx111-1.jpg';
import productMfgImg from '../assets/images/services/product-manufacturing.jpg';
import feaServiceImg from '../assets/images/services/fea.jfif';
import marineImg from '../assets/images/marine-engineering.jpg';

const aiEngineeringImg = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop';

// Comprehensive Articles Dataset (Abraham Pannikottu Evaluation Directives)
const technicalArticles = [
  {
    id: 'nonlinear-fea-rubber',
    slug: 'nonlinear-fea-rubber-components',
    title: 'Understanding Nonlinear FEA for Rubber Components',
    category: 'FEA & Simulation',
    author: 'Abraham Pannikottu & AECS Simulation Group',
    date: 'March 2026',
    readTime: '7 min read',
    image: heroFeaImg,
    summary: 'A mathematical and empirical guide to calibrating Ogden, Mooney-Rivlin, and Yeoh hyperelastic strain energy potentials against multi-axial experimental stress-strain test curves.',
    tags: ['Nonlinear FEA', 'Hyperelasticity', 'Mooney-Rivlin', 'Abaqus', 'Elastomers'],
    keyTakeaway: 'Linear elasticity approximations (Hooke’s Law) underestimate strain concentrations in elastomers by over 300%. Multi-axial testing (uniaxial tension, planar shear, equibiaxial tension) is non-negotiable for stable strain-energy function fits.',
    sections: [
      {
        heading: 'The Challenge of Hyperelastic Material Modeling',
        text: 'Rubber and elastomeric compounds do not follow Hookean linear stress-strain relationships. They exhibit large elastic deflections (frequently exceeding 400% strain), severe material non-linearity, strain-rate dependency, and nearly incompressible volumetric behavior (Poisson’s ratio approaching 0.4995). Engineers attempting to model engine mounts, suspension bushings, or marine seals with isotropic linear elastic assumptions face severe divergence or catastrophic failure in predictive accuracy.'
      },
      {
        heading: 'Selecting the Appropriate Strain Energy Potential',
        text: 'The strain energy density function W represents the energy stored per unit volume as a function of strain invariants (I1, I2, I3) or principal stretch ratios (λ1, λ2, λ3). Selecting the right model depends on the operating deformation envelope:\n\n• Mooney-Rivlin (2-parameter): Suitable only for moderate strains up to 100%. Highly prone to unphysical stiffening or instability in pure shear if extrapolated.\n• Yeoh (Reduced Polynomial): Highly robust for large deformations up to 300% when only uniaxial test data is available; models the upturn of carbon-black filler networks effectively.\n• Ogden (Higher-Order Principal Stretch): The gold standard for multi-mode deformation. Fits complex non-linear inflection curves with high precision across strains exceeding 400%, provided multi-axial test data is available.'
      },
      {
        heading: 'Experimental Characterization & Physical Correlation',
        text: 'At AECS, virtual hyperelastic simulations are correlated with physical mechanical test coupons. Single uniaxial tensile tests are mathematically insufficient because they leave the second strain invariant unconstrained. We utilize a synchronized tri-mode test matrix: Uniaxial Tension (ASTM D412), Planar Tension/Pure Shear (ASTM D4482), and Equibiaxial Tension (via circular bubble inflation or radial stretching). Curve-fitting routines in Abaqus and ANSYS are evaluated using Drucker stability criteria to ensure positive strain energy derivatives under all stress states.'
      }
    ]
  },
  {
    id: 'hyperelastic-material-models',
    slug: 'hyperelastic-material-models-elastomer-engineering',
    title: 'Hyperelastic Material Models for Elastomer Engineering',
    category: 'Materials Engineering',
    author: 'AECS Materials Science Group',
    date: 'February 2026',
    readTime: '8 min read',
    image: feaServiceImg,
    summary: 'Formulating strain-energy density functions, capturing Mullin’s stress softening, and accounting for viscoelastic hysteresis in dynamic automotive suspension mounts.',
    tags: ['Materials Science', 'Mullin’s Effect', 'Polymer Rheology', 'Viscoelasticity'],
    keyTakeaway: 'Virgin elastomer compound curves exhibit up to 40% higher stiffness than preconditioned working components due to Mullin’s effect. FEA boundary conditions must incorporate preconditioned mechanical states.',
    sections: [
      {
        heading: 'Phenomenological vs. Micromechanical Approaches',
        text: 'Elastomer formulation involves balancing base polymers (NR, EPDM, NBR, HNBR, FKM) with carbon black or silica reinforcing networks, plasticizers, and vulcanization crosslinkers. Understanding material modeling requires choosing between phenomenological models (which fit mathematical polynomial curves to macroscopic test data) and micromechanical network models (like the Arruda-Boyce 8-chain model, which derives strain energy from polymer chain physics).'
      },
      {
        heading: 'Accounting for Hysteresis and Cyclic Softening',
        text: 'In real-world dynamic components such as powertrain isolators and top-mount bushings, rubber components experience continuous cyclic loading. The initial loading cycle breaks weak sulfur and physical entanglements—a phenomenon known as the Mullin’s effect. Unless virtual models incorporate pseudo-elastic damage parameters (such as the Ogden-Roxburgh softening model), FEA simulations will over-predict structural stiffness and natural frequencies.'
      },
      {
        heading: 'Thermal Degradation and Aging Predictions',
        text: 'AECS combines rheological cure curve analysis (MDR 2000) with accelerated Arrhenius thermal aging to predict long-term modulus drift and compression set. Virtual finite element models integrate continuous heat buildup calculated from viscoelastic tan(δ) damping loss factors.'
      }
    ]
  },
  {
    id: 'tire-testing-validation',
    slug: 'tire-testing-protocols-endurance-rolling-resistance',
    title: 'Tire Testing Protocols: Endurance, Rolling Resistance & Force & Moment',
    category: 'Tire & Testing',
    author: 'AECS & Poling Group Technical Team',
    date: 'January 2026',
    readTime: '9 min read',
    image: cx111Img,
    summary: 'A technical exploration of laboratory dynamometers, ISO 28580 deceleration methods, dynamic force and moment rigs, and inline factory uniformity grading (CX111/DB-111).',
    tags: ['Poling Group', 'ISO 28580', 'Force & Moment', 'Tire Uniformity', 'ECE R117'],
    keyTakeaway: 'Inline dynamic tire uniformity inspection (radial/lateral force variation and conicity) is the primary determinant of high-speed vehicle ride refinement and Tier-1 OEM factory sign-off.',
    sections: [
      {
        heading: 'The Three Pillars of Modern Tire Validation',
        text: 'Automotive OEMs mandate strict compliance with global tire performance standards (ISO 28580, SAE J1269, SAE J2452, ECE R117, and FMVSS 139). Laboratory evaluation centers on three critical measurement platforms: dynamic uniformity and balance, rolling resistance energy dissipation, and high-speed multi-axis force and moment (F&M) cornering dynamics.'
      },
      {
        heading: 'Force & Moment (F&M) Testing for Vehicle Dynamics',
        text: 'Flat-trac and curved-drum Force & Moment machines measure cornering stiffness (Cα), self-aligning torque (Mz), camber thrust, and lateral force (Fy) across varying slip angles, inclination angles, and dynamic vertical wheel loads. These datasets feed directly into Pacejka Magic Formula (MF-Tyre/MF-Swift) vehicle simulation models used by chassis engineers for electronic stability control (ESC) tuning.'
      },
      {
        heading: 'Authorized Poling Group Representative in India',
        text: 'AECS is the authorized technical representative for the Poling Group in India, providing turnkey installation, precision load cell calibration, laser geometry runout sensor integration, and maintenance for CX111 Uniformity and DB-111 Balance testing machines across leading Indian tire OEMs.'
      }
    ]
  },
  {
    id: 'run-flat-mobility-systems',
    slug: 'engineering-run-flat-mobility-systems-tactical-vehicles',
    title: 'Engineering Run-Flat Mobility Systems for Tactical Vehicles',
    category: 'Defense & Mobility',
    author: 'AECS Defense Systems Division',
    date: 'December 2025',
    readTime: '8 min read',
    image: runFlatImg,
    summary: 'Structural mechanics and  thermal dissipation architectures, protocol zero-pressure escape testing for 4x4, 6x6, and 8x8 military armored vehicles.',
    tags: ['Defense Mobility', 'Run-Flat Systems', 'Ballistic Mitigation'],
    keyTakeaway: 'When a tactical tire is punctured by ballistic fire, the vehicle’s mobility relies 100% on the internal run-flat insert. Thermal breakdown from continuous friction—not mechanical stress alone—is the primary failure mode prevented by AECS dual-stage inserts.',
    sections: [
      {
        heading: 'The Combat Reality of Catastrophic Tire Failure',
        text: 'In tactical and armored operations, tire deflation caused by ballistic rounds, shrapnel, or roadside overpressure leads to immediate loss of vehicle control unless a mechanical run-flat insert bridges the rim-to-tread envelope. Under zero inflation pressure, vehicle load transfers directly onto the internal insert ring, inducing severe cyclical compression, high interfacial slip, and extreme internal frictional heat buildup.'
      },
      {
        heading: 'AECS Dual-Stage Composite & Elastomer Architecture',
        text: 'AECS engineers segmented, multi-piece run-flat inserts that install quickly onto standard 16.5”, 17”, 18”, and 20” drop-center combat rims. The core utilizes high-toughness, lightweight structural composite rings paired with high-lubricity elastomeric outer damping bands. This architecture reduces unsprung mass by 25% compared to solid rubber alternatives while absorbing harsh curb impacts and terrain shock.'
      }
    ]
  },
  
  {
    id: 'marine-fender-engineering',
    slug: 'marine-fender-engineering-energy-absorption-reaction-force',
    title: 'Marine Fender Engineering: Energy Absorption & Reaction Force Dynamics',
    category: 'Marine Engineering',
    author: 'AECS Marine Systems Division',
    date: 'October 2025',
    readTime: '8 min read',
    image: pneumaticFenderImg,
    summary: 'Mathematical calculation of kinetic berthing energy, deflection limits, hydrodynamic squeeze effects, and ISO 17357-1 / PIANC standards compliance for port and offshore STS fenders.',
    tags: ['Marine Engineering', 'ISO 17357-1', 'Hydrodynamics', 'Port Infrastructure'],
    keyTakeaway: 'The optimal marine fender maximizes kinetic energy absorption (E = ∫ F ds) while maintaining the lowest possible reaction force on ship hull structures and jetty piles.',
    sections: [
      {
        heading: 'The Physics of Vessel Berthing',
        text: 'When a commercial vessel, container ship, or naval tanker approaches a quay wall or performs open-sea Ship-to-Ship (STS) transfer, its kinetic berthing energy must be dissipated without exceeding hull plate allowable stresses or harbor pile bending capacities. Energy absorption E is governed by vessel displacement mass M, berthing velocity V, and eccentricity/block coefficients.'
      },
      {
        heading: 'Pneumatic Floating vs. Solid Molded Apple Fenders',
        text: '• Pneumatic Floating Fenders (ISO 17357-1): Utilize air compression within high-tensile cord-reinforced vulcanized rubber bladders. Because air compression follows Boyle’s Law, reaction forces increase smoothly with low initial shock, making them ideal for rough open-sea STS operations with severe swell.\n• Solid Molded Apple Profile Fenders: Utilize high-shear elastomeric rubber geometries designed for harbor quays, tugboat bows, and berthing jetties, providing high angular compression without delamination.'
      },
      {
        heading: 'AECS Manufacturing and Proof Testing',
        text: 'AECS manufactures certified marine fenders tested for initial internal pressure (50 kPa & 80 kPa), cyclic deflection endurance, and burst overpressure containment with heavy aircraft tire chain netting armor.'
      }
    ]
  },
  {
    id: 'concept-to-manufacturing-process',
    slug: 'product-concept-to-manufacturing-aecs-development-process',
    title: 'From Concept to Manufacturing: The AECS 7-Step NPD Process',
    category: 'Product Development',
    author: 'AECS NPD Engineering Team',
    date: 'September 2025',
    readTime: '10 min read',
    image: productMfgImg,
    summary: 'Inside the structured, evidence-based engineering methodology that transforms initial product requirements into validated, production-ready hardware without costly redesign cycles.',
    tags: ['New Product Development', 'DFM', 'Rapid Prototyping', 'ISO 9001'],
    keyTakeaway: 'Over 70% of product lifecycle costs are locked in during the early architecture and concept CAD phases. Early virtual FEA and DFM reviews eliminate prototype tooling rework.',
    sections: [
      {
        heading: 'The Flaw in Traditional Trial-and-Error NPD',
        text: 'Many hardware startups and inventors jump directly from aesthetic rendering to physical tooling, resulting in mold recuts, failing stress concentrations, and budget overruns. AECS employs an evidence-based 7-step engineering gate process that eliminates risk at each milestone before capital expenditure occurs.'
      },
      {
        heading: 'The AECS 7-Step Engineering Pipeline',
        text: '1. Requirement Specification & Feasibility: Defining operating parameters, load envelopes, and compliance boundaries.\n2. Conceptual Design & 3D CAD: Multi-concept architecture adhering to ASME Y14.5 GD&T.\n3. Virtual Simulation & Optimization: Structural FEA, CFD thermal analysis, and topology optimization.\n4. Materials Selection & Formulation: Characterizing elastomers, composites, and thermoplastics.\n5. Functional Prototyping: High-resolution SLA/SLS 3D printing, silicone tooling, and bridge machining.\n6. Rig Testing & Certification: Validation on physical dynamometers and endurance test benches.\n7. Production Tooling & Manufacturing Handover: Factory injection molds, vulcanization dies, and QA inspection.'
      },
      {
        heading: 'Seamless USA–India Bridge Execution',
        text: 'Clients benefit from senior engineering oversight, USA-based project alignment, and cost-effective, high-bandwidth CAE execution from our technical center in Kochi, India.'
      }
    ]
  },
 {
    id: 'generative-ai-product-engineering',
    slug: 'generative-ai-product-engineering-smart-manufacturing',
    title: 'Introduction: A New Paradigm in Product Engineering',
    category: 'AI & Smart Manufacturing',
    author: 'AEG Advanced Engineering Group',
    date: 'March 2026',
    readTime: '9 min read',
    image: aiEngineeringImg, // ensure this variable is imported or defined
    summary: 'How Generative AI, physics-informed neural networks, prompt engineering, and intelligent PLM workflows are redefining the end-to-end product development lifecycle at AEG.',
    tags: ['Generative AI', 'Smart Manufacturing', 'CAD Automation', 'Digital Twins', 'PLM'],
    keyTakeaway: 'Generative AI transforms product engineering from sequential, manual workflows into an adaptive, closed-loop ecosystem—accelerating iteration cycles, automating geometry generation, and fusing operational telemetry directly into next-gen designs.',
    sections: [
      {
        heading: 'Introduction: A New Paradigm in Product Engineering',
        text: 'Generative AI is reshaping how AEG approaches innovation, problem-solving, and product development. By accelerating data processing, automating iterative tasks, and enabling dynamic creativity, AI is not just augmenting traditional engineering workflows – it is redefining them.\n\nAEG’s transition from conventional processes to AI-augmented systems means product engineering is becoming:\n• Faster – Dramatically reduced development cycles\n• More intelligent – Data-driven decision making at every stage\n• Highly responsive – Real-time adaptation to market needs'
      },
      {
        heading: 'The Expanding Role of Generative AI in Product Development',
        text: 'Product engineering spans the complete lifecycle from ideation to design, development, testing, deployment, and after-market support. With generative AI, each phase is being optimized through automation, data integration, and advanced modeling, creating a closed-loop system where insights continually refine outputs.'
      },
      {
        heading: 'AI-Driven Market Research and Ideation',
        text: 'AI tools powered by machine learning (ML) and natural language processing (NLP) mine data from market reports, customer reviews, technical forums, and social media. These tools enable AEG to:\n• Identify emerging trends and unmet needs\n• Analyze competitor products and pricing strategies\n• Generate new product concepts aligned with market gaps\n\nGenerative AI platforms simulate brainstorming sessions and suggest novel product features based on real-time demand signals.'
      },
      {
        heading: 'Prompt Engineering in New Product Development (NPD)',
        text: 'Prompt engineering is the practice of crafting effective input queries to generative AI systems to achieve accurate, relevant, and high-quality outputs. In product engineering, it serves as the gateway to unlocking AI’s full potential across development stages.\n\nKey Applications at AEG:\n• Accelerated Ideation & Concept Development: Extract targeted ideas through structured prompts\n• Design Automation & Decision Support: Generate CAD-ready geometries from text descriptions\n• Knowledge Retrieval & Documentation: Automate technical writing of specs and test protocols\n• Cross-Functional Collaboration: Create outputs in multiple formats (Gantt charts, BOMs, etc.)\n• Platform Integration: Use tools like GitHub Copilot for code generation\n\nImpact: Prompt engineering is becoming as vital as CAD or FEA skills in modern engineering teams.'
      },
      {
        heading: 'Generative Design, CAD Automation & AI-Enhanced FEA',
        text: 'AEG utilizes AI-powered generative design software (such as nTopology and ANSYS) to create thousands of design permutations based on performance goals, automatically adjust geometry for stress, weight, or manufacturing constraints, and streamline prototyping with integrated CAD/CAE tools.\n\nAI in Finite Element Analysis (FEA):\n• Predict simulation outcomes based on mesh behavior\n• Detect critical stress zones with surrogate models\n• Utilize physics-informed neural networks (PINNs) for faster analysis\n\nDigital Twin Integration:\nDigital twins provide evolving models that update in real-time based on sensor and usage data, trigger alerts for design improvements, and support mission-critical monitoring in aerospace and defense.'
      },
      {
        heading: 'Intelligent Product Lifecycle Management (PLM)',
        text: 'AI accelerates New Product Introduction (NPI) through automated requirement traceability, predictive scheduling algorithms, and bottleneck prediction and mitigation. AEG implements AI-enhanced PLM systems like PTC Windchill to improve productivity and cross-team coordination.'
      },
      {
        heading: 'Virtual Testing, Simulation & Compliance',
        text: 'Using digital twins and advanced simulation, AI enables predictive fault detection, real-time stress testing, and reinforcement learning for performance optimization. Computer vision systems further support automated compliance and regulatory checks.'
      },
      {
        heading: 'Engineering Support, Supply Chain & IoT Integration',
        text: '• Conversational AI: Virtual assistants provide instant technical references, UX feedback, and seamless interdepartmental communication.\n• Supply Chain & Manufacturing: Optimizes demand forecasting, logistics networks, supplier scoring, and risk mitigation strategies.\n• Predictive Maintenance: Edge AI and IoT sensor telemetry enable real-time equipment diagnostics, shift maintenance to a proactive model, and significantly reduce system downtimes.\n• Sentiment Intelligence: Continuous extraction of actionable insights from product reviews and social sentiment loops.'
      },
      {
        heading: 'How Generative AI Transforms the Engineering Mindset',
        text: '• Designing for Precision and Variation: Engineers define boundary constraints while AI produces optimal design variants ready for validation.\n• Real-Time Design Evaluation: Concurrent structural, ergonomic, and sustainability evaluations occur simultaneously.\n• Cost & User Focus: Generative models factor real-time cost metrics, user behavior, and carbon footprint into early iterations.\n• Cross-Platform Data Fusion: Deep integration across ERP, PLM, CRM, and MES systems creates end-to-end data transparency.'
      },
      {
        heading: 'From New Concepts to Evolving Legacy Products',
        text: 'Generative AI extends lifecycle value through over-the-air (OTA) update planning, durability-focused redesigns, and rapid iteration informed by field telemetry.\n\nProven Industry Precedents:\n• Aerospace: AI-designed winglets reducing structural weight and fuel burn by up to 3.5%\n• Footwear & Consumer: Generative honeycomb midsoles delivering optimized impact distribution\n• Automotive: Lightweight composite and structural bracket optimization for next-generation EV platforms'
      },
      {
        heading: 'Conclusion: The Future of AI-Augmented Engineering at AEG',
        text: 'Generative AI represents more than a technological trend – it is fundamentally transforming how products are envisioned, developed, and delivered. At AEG, AI empowers engineering teams with unprecedented iteration velocity, enhanced data integration, and highly adaptive design frameworks, ensuring sustained innovation in a competitive global landscape.'
      }
    ]
  }
];

// Official White Paper Dataset (AEG & NeST Digital ConnectedCare Platform)
const whitePapers = [
  {
    id: 'aeg-connectcare-digital-health-platform',
    title: 'AEG ConnectCare™ Digital Health Platform',
    subtitle: 'A Vendor-Neutral Custom Remote Patient Monitoring Platform for Hospital-to-Home Connected Care',
    authors: 'American Engineering Group (AEG) & NesT DIGITAL',
    date: 'September 2026',
    category: 'Digital Health & Remote Patient Monitoring (RPM)',
    type: 'Official Technical White Paper',
    pages: '12 Pages',
    fileSize: '450 KB PDF',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop',
    contactInfo: 'American Engineering Group (AEG), 934 Grant Street, Akron, OH 44311 • Phone: 330-375-1975 • Email: engineeringaecs@gmai.com',
    description: 'Remote patient monitoring (RPM) has moved beyond a pandemic-era workaround and is increasingly used to support chronic-disease management, hospital-at-home programs, specialty care, and aging in place. Developed jointly by American Engineering Group (AEG) and NeST DIGITAL, this technical white paper introduces the AEG ConnectCare™ platform: an open, vendor-neutral hospital-to-home software architecture designed to seamlessly connect FDA-cleared and clinical-grade health devices, normalize physiologic data through HL7 FHIR standards, interface directly with hospital EHR systems like Epic, and provide unified care-team dashboards without device vendor lock-in.',
    topics: [
      'Vendor-Neutral Device Integration: OMRON, iHealth, Withings, and A&D via Bluetooth, Wi-Fi & APIs',
      'Data Normalization Engine & Standardized Clinical Data Model (HL7 FHIR & HIPAA Compliance)',
      'Hospital & EHR/Epic Integration: Complementing systems of record with unified exception queues',
      'Five-Screen Clinical Dashboard: Population Overview, Patient 360, Exception Queue, Workflow & Analytics',
      'Target Clinical Pathways: Hypertension, COPD/Respiratory, Diabetes, Weight/Heart Failure & Aging in Place',
      'Joint AEG (Akron, OH) & NeST Digital Roles in U.S. Hospital Deployment & Pilot Validation',
      'Cybersecurity & Regulatory Frameworks: NIST CSF 2.0, NIST SP 800-66 & Clinician-in-the-Loop Governance'
    ],
    architectureHighlights: [
      { layer: 'Patient / Home / Hospital', details: 'Connected BP monitors, pulse oximeters, weight scales, thermometers, glucose meters, ECG, and wearables communicating via Bluetooth, Wi-Fi, and APIs.' },
      { layer: 'Device Connector Layer', details: 'Dedicated SDK/API adapters for OMRON, iHealth, Withings, and A&D BLE devices.' },
      { layer: 'Normalization / Data Engine', details: 'Standardizes Patient ID, Device ID, measurements, timestamps, validity flags, and provenance into FHIR/REST schemas.' },
      { layer: 'AEG-NeST Connected Care Platform', details: 'Care-team dashboards, configurable rules engine, predictive analytics, alert queues, and AI layer.' },
      { layer: 'Hospital EHR Integration', details: 'Bidirectional HL7 / FHIR data exchange interfacing directly with Epic and hospital systems of record.' }
    ],
    executiveSummary: 'Remote patient monitoring (RPM) has moved beyond a pandemic workaround and is increasingly used to support chronic-disease management, hospital-at-home programs, specialty care, and aging in place. More than 80% of physicians report improved access through telehealth, six in ten U.S. adults live with a chronic disease, Medicare has established RPM reimbursement pathways, and hospital-at-home programs have federal support. AEG and NeST Digital can use this market foundation to develop AEG–NeST ConnectedCare: a vendor-neutral hospital-to-home platform that connects multiple devices, normalizes their data, applies configurable rules and analytics, and presents clinically relevant information through a single care-team interface.'
  }
];

// Official Video Demonstrations (Live Machinery Evaluation)
const videoDemonstrations = [
  {
    id: 'tire-building-machine-demo',
    title: 'Tire Building Machine Operational Inspection',
    category: 'Equipment Inspection & Certification',
    partner: 'AEG Group Export Certification',
    embedUrl: 'https://www.youtube-nocookie.com/embed/yGunS6lAmIA',
    youtubeUrl: 'https://www.youtube.com/watch?v=yGunS6lAmIA',
    intro: 'Live operational validation and precision alignment audit of a multi-stage tire building machine, ensuring automated sequencing and safety compliance before US export.',
    highlights: ['Operational sequencing audit', 'Laser mechanical alignment', 'US export compliance']
  },
  {
    id: 'tire-curing-press-demo',
    title: 'Tire Curing Press Performance & Thermal Evaluation',
    category: 'Thermal & Hydraulic Testing',
    partner: 'AEG Group Export Certification',
    embedUrl: 'https://www.youtube-nocookie.com/embed/_mgND1-Rhso',
    youtubeUrl: 'https://www.youtube.com/watch?v=_mgND1-Rhso',
    intro: 'Hydraulic pressure holding, thermal uniformity, and structural containment inspection of a heavy industrial tire curing press certified for international deployment.',
    highlights: ['Hydraulic pressure containment', 'Thermal cycle distribution', 'International safety audit']
  }
];

// Engineering FAQs Dataset (Kept for reference or future reactivation)
/*
const engineeringFaqs = [
  {
    q: 'How does AECS protect proprietary Intellectual Property (IP) and confidential CAD drawings?',
    a: 'Confidentiality is fundamental to our business model. Before reviewing any technical specification, CAD file, or drawing, AECS executes bilateral non-disclosure agreements (NDAs). All client files are stored on encrypted, access-controlled engineering networks with multi-factor authentication. All designs, IP rights, tooling files, and patentable innovations developed during client projects remain 100% the property of the client.'
  },
  {
    q: 'How does the USA–India engineering bridge operate on active development projects?',
    a: 'AECS combines executive engineering oversight, client alignment, and technical consulting with a dedicated, high-bandwidth engineering design and CAE simulation center in Kochi, Kerala, India. This hybrid model gives clients continuous cross-timezone development cycles, direct access to senior engineering principals, and substantial cost advantages without communication barriers.'
  },
  {
    q: 'What CAE and CAD software platforms does AECS utilize for simulations?',
    a: 'Our engineering team works seamlessly in industry-standard CAE and CAD suites: Abaqus (Nonlinear FEA, Hyperelasticity, Dynamic Explicit), ANSYS (Mechanical, Fluent CFD, Electronics Cooling), LS-DYNA (Impact & Ballistic Blast), SolidWorks, Autodesk Inventor, PTC Creo, and CATIA V5. We deliver native models, clean neutral STEP/IGES assemblies, and detailed technical validation reports.'
  },
  {
    q: 'How does AECS correlate virtual FEA models to physical hardware testing?',
    a: 'Unlike simulation consultancies that rely purely on theoretical solver outputs, AECS has direct access to industrial testing dynamometers and material characterization rigs. We calibrate hyperelastic Mooney-Rivlin and Ogden strain energy functions using physical tensile and shear test data, and we correlate full assembly stress predictions directly against strain gauge telemetry, ensuring virtual models correlate within tight engineering bounds (typically <5%).'
  },
  {
    q: 'Can AECS manufacture physical prototypes and production tooling in addition to consulting?',
    a: 'Yes. AECS is an end-to-end concept-to-manufacturing partner. We provide rapid additive prototyping (SLA, SLS, metal 3D printing), urethane bridge casting, precision CNC machining, custom vulcanization molds, and production tooling handover, ensuring that designs proven on the computer screen transition directly onto the factory floor.'
  },
  {
    q: 'What support does AECS provide as the authorized Poling Group representative in India?',
    a: 'AECS provides turnkey representation for Poling Group tire testing machines in India, including site surveys, installation oversight, precision calibration against reference tires, operator training, local technical support, spare parts distribution, and PLC controller diagnostics for CX111 Uniformity and DB-111 Balance testing machines.'
  }
];
*/

const Resources = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedWhitePaper, setSelectedWhitePaper] = useState(null);
  
  // Hash anchor navigation handling
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'articles') setActiveTab('articles');
    else if (hash === 'white-papers') setActiveTab('white-papers');
    else if (hash === 'videos') setActiveTab('videos');
    else if (hash === 'downloads') setActiveTab('downloads');
    // else if (hash === 'faqs') setActiveTab('faqs');
    else if (hash === 'all') setActiveTab('all');
  }, [location.hash]);

  // Filtered lists
  const filteredArticles = technicalArticles.filter(art => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = art.title.toLowerCase().includes(q) || 
                          art.category.toLowerCase().includes(q) || 
                          art.summary.toLowerCase().includes(q) ||
                          art.tags.some(t => t.toLowerCase().includes(q));
    return matchesSearch;
  });

  const filteredWhitePapers = whitePapers.filter(wp => {
    const q = searchQuery.toLowerCase();
    return wp.title.toLowerCase().includes(q) || 
           wp.subtitle.toLowerCase().includes(q) ||
           wp.category.toLowerCase().includes(q) || 
           wp.description.toLowerCase().includes(q) ||
           wp.topics.some(t => t.toLowerCase().includes(q));
  });

  const filteredVideos = videoDemonstrations.filter(vid => {
    const q = searchQuery.toLowerCase();
    return vid.title.toLowerCase().includes(q) || 
           vid.category.toLowerCase().includes(q) || 
           vid.partner.toLowerCase().includes(q) || 
           vid.intro.toLowerCase().includes(q) ||
           vid.highlights.some(h => h.toLowerCase().includes(q));
  });

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Technical Resources & Engineering Knowledge Hub | AECS"
        description="Explore authoritative technical articles, FEA simulation white papers, tire testing standards, and downloadable engineering capability brochures from AECS."
        canonical="/resources"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "AECS Technical Resources & Knowledge Hub",
          "description": "Authoritative engineering insights on nonlinear FEA, hyperelastic polymers, tactical mobility run-flats, and tire testing.",
          "publisher": {
            "@type": "Organization",
            "name": "American Engineering Consultancy Services (AECS)"
          }
        }}
      />

      {/* Hero Section */}
      <PageHero 
        title="Technical Resources & Knowledge Hub" 
        subtitle="Authoritative Engineering Research, Finite Element Analysis Guides, Testing Protocols, and Downloadable Technical Manuals"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2938&auto=format&fit=crop"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#articles" onClick={() => setActiveTab('articles')} className="btn-primary py-3.5 px-8 text-sm shadow-xl font-bold uppercase tracking-wider">
            Explore Technical Articles
          </a>
          <a href="#downloads" onClick={() => setActiveTab('downloads')} className="py-3.5 px-8 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-sm backdrop-blur-sm uppercase tracking-wider">
            Download White Papers
          </a>
        </div>
      </PageHero>

      {/* Sticky Interactive Filter Bar */}
      <section className="bg-slate-900 border-b border-slate-800 text-white sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Category Tab Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {[
                { id: 'all', label: 'All Resources' },
                { id: 'articles', label: 'Technical Articles', anchor: '#articles' },
                { id: 'white-papers', label: 'White Papers', anchor: '#white-papers' },
                { id: 'videos', label: 'Videos', anchor: '#videos' },
                { id: 'downloads', label: 'Downloads & Guides', anchor: '#downloads' },
                // { id: 'faqs', label: 'FAQs', anchor: '#faqs' },
              ].map((tab) => (
                <a
                  key={tab.id}
                  href={tab.anchor || '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.id);
                    if (tab.anchor) {
                      window.location.hash = tab.anchor;
                    }
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                    activeTab === tab.id
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </a>
              ))}
            </div>

            {/* Live Search Bar */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FEA, Rubber, Tires, ISO, CFD..."
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Knowledge Hub Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* 1. TECHNICAL ARTICLES SECTION */}
        {(activeTab === 'all' || activeTab === 'articles') && (
          <section id="articles" className="scroll-mt-36">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                  Peer-Reviewed Engineering Research
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Technical Articles & Whitepapers
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl">
                  Deep technical breakdowns on nonlinear material characterization, structural finite element mechanics, and international testing protocols.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Showing {filteredArticles.length} Publications
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800">No technical articles matched your query.</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching for terms like "FEA", "Rubber", "Poling", or "Run-Flat".</p>
                <button onClick={() => setSearchQuery('')} className="mt-4 text-xs font-bold text-brand-primary uppercase tracking-wider hover:underline">
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, idx) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group"
                  >
                    {/* Visual Card Header */}
                    <div className="relative h-52 overflow-hidden bg-slate-950">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      <span className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {article.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                          {article.summary}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {article.tags.slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="w-full py-3 px-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Read Full Technical Article</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2. WHITE PAPERS SECTION */}
        {(activeTab === 'all' || activeTab === 'white-papers' || activeTab === 'downloads') && (
          <section id="white-papers" className="scroll-mt-36">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                  Official Technical Publication
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Featured Engineering White Paper
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
                  Explore our clinical IoT and connected health architecture white paper developed by American Engineering Group (AEG) in partnership with NeST Digital.
                </p>
              </div>
            </div>

            {filteredWhitePapers.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200">
                <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-slate-600">No white papers matched your search query.</p>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                {filteredWhitePapers.map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl text-left text-white"
                  >
                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                          {paper.type}
                        </span>
                        <span className="text-slate-300 font-medium text-xs">{paper.authors}</span>
                      </div>
                      <span className="text-slate-400 text-xs font-medium">{paper.pages} • {paper.fileSize} • {paper.date}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5 leading-snug">
                      {paper.title}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-semibold text-amber-300/90 mb-4">
                      {paper.subtitle}
                    </h4>

                    {/* Introducing Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {paper.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                      <a
                        href="/AEG-ConnectCare-Digital-Health-Platform-White-Paper.pdf"
                        download="AEG-ConnectCare-Digital-Health-Platform-White-Paper.pdf"
                        className="flex-1 py-3 px-6 rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download White Paper PDF ({paper.fileSize})</span>
                      </a>
                      <button
                        onClick={() => setSelectedWhitePaper(paper)}
                        className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <FileText className="w-4 h-4 text-amber-400" />
                        <span>View Executive Summary</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 3. VIDEO DEMONSTRATIONS SECTION */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <section id="videos" className="scroll-mt-36">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                  Verified Machinery In Action
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Engineering Video Demonstrations
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
                  Watch live operational inspection and testing demonstrations of specialized tire manufacturing machinery verified by AECS for international deployment.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Showing {filteredVideos.length} Demonstrations
              </span>
            </div>

            {filteredVideos.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800">No video demonstrations matched your query.</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching for terms like "Tire Building", "Curing Press", or "Testing".</p>
                <button onClick={() => setSearchQuery('')} className="mt-4 text-xs font-bold text-brand-primary uppercase tracking-wider hover:underline">
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredVideos.map((vid) => (
                  <div
                    key={vid.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Embedded YouTube Player: streams from YouTube without downloading or taking disk space */}
                    <div className="relative aspect-video w-full bg-slate-950">
                      <iframe
                        className="w-full h-full"
                        src={vid.embedUrl}
                        title={vid.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">
                            {vid.category}
                          </span>
                          <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                            {vid.partner}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                          {vid.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {vid.intro}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {vid.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                        <a
                          href={vid.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-brand-primary hover:text-red-700 uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Watch on YouTube</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 4. ENGINEERING FAQS SECTION (COMMENTED OUT) */}
        {/* {(activeTab === 'all' || activeTab === 'faqs') && (
          <section id="faqs" className="scroll-mt-36">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
                  Transparent Answers to Complex Questions
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Technical Questions
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Clear, authoritative guidance on working with AECS, data security, software tooling, and project turnaround.
                </p>
              </div>

              <div className="space-y-4">
                {engineeringFaqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden hover:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-primary transition-colors pr-6">
                        {faq.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                    </summary>
                    <div className="mt-4 pt-4 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )} */}

      </div>

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-12 relative my-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-[10px]">
                    {selectedArticle.category}
                  </span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                  {selectedArticle.title}
                </h1>

                <p className="text-xs font-semibold text-slate-500">
                  By {selectedArticle.author}
                </p>
              </div>

              {/* Featured Image */}
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 bg-slate-950">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Engineering Takeaway Box */}
              <div className="p-6 rounded-2xl bg-amber-50 border-l-4 border-amber-500 mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block mb-1">
                  Core Engineering Takeaway
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  {selectedArticle.keyTakeaway}
                </p>
              </div>

              {/* Article Sections Content */}
              <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {selectedArticle.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {sec.heading}
                    </h3>
                    <p className="whitespace-pre-line leading-relaxed">
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tag Pills */}
              <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* In-Modal CTA Block */}
              <div className="mt-10 p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Have a related engineering requirement?</h4>
                  <p className="text-xs text-slate-300 mt-1">Our simulation directors review requirements under mutual NDA.</p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setSelectedArticle(null)}
                  className="btn-primary py-3 px-8 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-xl"
                >
                  Discuss Your Project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHITE PAPER EXECUTIVE SUMMARY & DIRECT DOWNLOAD MODAL */}
      <AnimatePresence>
        {selectedWhitePaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedWhitePaper(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWhitePaper(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1">
                  <span>{selectedWhitePaper.type}</span>
                  <span>•</span>
                  <span>{selectedWhitePaper.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {selectedWhitePaper.title}
                </h3>
                <p className="text-xs font-semibold text-amber-700 mt-1">
                  {selectedWhitePaper.subtitle}
                </p>
                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p><strong>Published By:</strong> {selectedWhitePaper.authors}</p>
                  <p><strong>Headquarters:</strong> {selectedWhitePaper.contactInfo}</p>
                  <p><strong>Document Scope:</strong> {selectedWhitePaper.pages} • {selectedWhitePaper.fileSize} • 19 Peer-Reviewed References</p>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
                    Executive Summary
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedWhitePaper.executiveSummary}
                  </p>
                </div>

                {/* Key Architecture Highlights */}
                {selectedWhitePaper.architectureHighlights && (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
                      Platform Architecture Overview
                    </h4>
                    <div className="space-y-2">
                      {selectedWhitePaper.architectureHighlights.map((arch, aIdx) => (
                        <div key={aIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                          <strong className="text-slate-900 block font-semibold">{arch.layer}</strong>
                          <span className="text-slate-600 text-[11px]">{arch.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons: Direct Download + Close */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <a
                  href="/AEG-ConnectCare-Digital-Health-Platform-White-Paper.pdf"
                  download="AEG-ConnectCare-Digital-Health-Platform-White-Paper.pdf"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-brand-primary text-white hover:bg-red-700 font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete 12-Page PDF ({selectedWhitePaper.fileSize})</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedWhitePaper(null)}
                  className="py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest transition-all text-center"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Global Newsletter & Technical Inquiry CTA */}
      <CtaSection 
        title="Stay Ahead of Mechanical & Materials Engineering" 
        subtitle="Subscribe for technical white papers, FEA case studies, and laboratory testing standards delivered by AECS senior engineers."
        buttonText="Discuss Your Project With an Engineer"
      />
    </div>
  );
};

export default Resources;