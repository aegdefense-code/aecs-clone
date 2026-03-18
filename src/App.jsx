import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesOverview from './pages/ServicesOverview';
import AboutAecs from './pages/AboutAecs';
import ContactPage from './pages/ContactPage';

// Service Pages
import ProductManufacturing from './pages/services/ProductManufacturing';
import NewProductDevelopment from './pages/services/NewProductDevelopment';
import FiniteElementAnalysis from './pages/services/FiniteElementAnalysis';
import MechanicalDesign from './pages/services/MechanicalDesign';
import RapidPrototyping from './pages/services/RapidPrototyping';
import TestingCertification from './pages/services/TestingCertification';
import TyreTesting from './pages/services/TyreTesting';
import EngineeringMaterials from './pages/materials/EngineeringMaterials';
import Rubber from './pages/materials/Rubber';
import Plastic from './pages/materials/Plastic';
import Composite from './pages/materials/Composite';

// Remaining Pages
import Industries from './pages/Industries';
import GenerativeAI from './pages/GenerativeAI';
import Resources from './pages/Resources';

// Industry Pages
import Automotive from './pages/industries/Automotive';
import Marine from './pages/industries/Marine';
import Medical from './pages/industries/Medical';
import ConsumerSports from './pages/industries/ConsumerSports';

// Legal Pages
import MerchantPolicies from './pages/legal/MerchantPolicies';
import LegalNotice from './pages/legal/LegalNotice';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesOverview />} />
            
            {/* Service Routes */}
            <Route path="/services/product-manufacturing" element={<ProductManufacturing />} />
            <Route path="/services/npd" element={<NewProductDevelopment />} />
            <Route path="/services/fea" element={<FiniteElementAnalysis />} />
            <Route path="/services/design" element={<MechanicalDesign />} />
            <Route path="/services/prototyping" element={<RapidPrototyping />} />
            <Route path="/services/testing" element={<TestingCertification />} />
            <Route path="/services/tyre-testing" element={<TyreTesting />} />
            
            {/* Materials */}
            <Route path="/materials" element={<EngineeringMaterials />} />
            <Route path="/materials/rubber" element={<Rubber />} />
            <Route path="/materials/plastic" element={<Plastic />} />
            <Route path="/materials/composite" element={<Composite />} />
            
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/marine" element={<Marine />} />
            <Route path="/industries/medical" element={<Medical />} />
            <Route path="/industries/consumer-sports" element={<ConsumerSports />} />
            <Route path="/ai" element={<GenerativeAI />} />
            <Route path="/resources" element={<Resources />} />
            
            <Route path="/about" element={<AboutAecs />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legal Pages */}
            <Route path="/policies/merchant" element={<MerchantPolicies />} />
            <Route path="/policies/legal" element={<LegalNotice />} />
            <Route path="/policies/privacy" element={<PrivacyPolicy />} />
            <Route path="/policies/terms" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
