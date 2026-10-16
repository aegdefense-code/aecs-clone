import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/logo (1).jpg';
import logoBlack from '../assets/logo-white.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Desktop dropdown states
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showResources, setShowResources] = useState(false);

  // Mobile dropdown states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 40) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isSolid = !isHome || hasScrolled;

  const serviceLinks = [
    { name: 'Product Manufacturing', path: '/services/product-manufacturing' },
    { name: 'New Product Development (NPD)', path: '/services/npd' },
    { name: 'Finite Element Analysis (FEA)', path: '/services/fea' },
    { name: 'CFD & Thermal Analysis', path: '/services/cfd-thermal' },
    { name: 'Digital Twin Engineering', path: '/services/digital-twin' },
    { name: 'Mechanical Engineering Design', path: '/services/design' },
    { name: 'Manufacturing & Rapid Prototyping', path: '/services/prototyping' },
    { name: 'Testing, Inspection & Certification', path: '/services/testing' },
    { name: 'Tyre Testing Machines', path: '/services/tyre-testing' },
    { name: 'Advanced Materials & Composites', path: '/materials' },
  ];

  const industryLinks = [
    { name: 'Automotive & Tires', path: '/industries/automotive' },
    { name: 'Defense & Mobility', path: '/industries/defense-mobility' },
    { name: 'Marine Engineering', path: '/industries/marine' },
    { name: 'Medical Devices', path: '/industries/medical' },
    { name: 'Consumer & Sports', path: '/industries/consumer-sports' },
    { name: 'Industrial Equipment', path: '/industries/industrial-equipment' },
  ];

  const resourceLinks = [
    { name: 'Technical Articles', path: '/resources#articles' },
    { name: 'Engineering Case Studies', path: '/projects' },
    { name: 'White Papers & Guides', path: '/resources#white-papers' },
    { name: 'Videos', path: '/resources#videos' },
    { name: 'All Resources & Knowledge Hub', path: '/resources' },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setShowServices(false);
    setShowIndustries(false);
    setShowResources(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <header id="navbar" className={`navbar fixed w-full z-50 transition-all duration-300 ${isSolid ? 'scrolled bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-3 sm:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Brand Identity */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="logo-link flex items-center group" onClick={closeAllMenus}>
              <div className={`flex items-center justify-center relative rounded-xl transition-all duration-300 ${!isSolid ? 'bg-white px-2 py-1 shadow-sm' : ''}`}>
                {/* Visible when navbar is dark */}
                <img 
                  src={logoWhite} 
                  alt="AECS Logo" 
                  className={`logo logo-dark-bg h-12 sm:h-14 w-auto object-contain transition-opacity duration-300 ${!isSolid ? 'block' : 'hidden'}`} 
                />
                {/* Visible when navbar is light/scrolled */}
                <img 
                  src={logoBlack} 
                  alt="AECS Logo" 
                  className={`logo logo-light-bg h-12 sm:h-14 w-auto object-contain transition-opacity duration-300 ${isSolid ? 'block' : 'hidden'}`} 
                />
              </div>
              <div className="ml-3 hidden sm:flex flex-col">
                <span className={`text-base font-black tracking-tight leading-none ${isSolid ? 'text-slate-900' : 'text-white'}`}>
                  AECS
                </span>
                <span className={`text-[10px] font-semibold tracking-wide uppercase mt-1 hidden md:block ${isSolid ? 'text-slate-500' : 'text-white/80'}`}>
                  American Engineering <br />Consultancy Services
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {/* Home */}
            <Link
              to="/"
              className={`whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group/dropdown"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <Link
                to="/services"
                className={`flex items-center whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`ml-1.5 shrink-0 transition-transform duration-200 ${showServices ? 'rotate-180 text-brand-primary' : ''}`} />
              </Link>

              {showServices && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="rounded-xl shadow-xl bg-white ring-1 ring-black/5 py-2 overflow-hidden animate-in fade-in slide-in-from-top-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2.5 text-xs xl:text-sm text-slate-700 hover:bg-brand-primary hover:text-white transition-colors"
                        onClick={() => setShowServices(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative group/dropdown"
              onMouseEnter={() => setShowIndustries(true)}
              onMouseLeave={() => setShowIndustries(false)}
            >
              <Link
                to="/industries"
                className={`flex items-center whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
              >
                <span>Industries</span>
                <ChevronDown size={14} className={`ml-1.5 shrink-0 transition-transform duration-200 ${showIndustries ? 'rotate-180 text-brand-primary' : ''}`} />
              </Link>

              {showIndustries && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="rounded-xl shadow-xl bg-white ring-1 ring-black/5 py-2 overflow-hidden animate-in fade-in slide-in-from-top-1">
                    {industryLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2.5 text-xs xl:text-sm text-slate-700 hover:bg-brand-primary hover:text-white transition-colors"
                        onClick={() => setShowIndustries(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <Link
              to="/projects"
              className={`whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
            >
              Projects
            </Link>

            {/* Products */}
            <Link
              to="/products"
              className={`whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
            >
              Products
            </Link>

            {/* Technical Resources Dropdown */}
            <div
              className="relative group/dropdown"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <Link
                to="/resources"
                className={`flex items-center whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
              >
                <span>Technical Resources</span>
                <ChevronDown size={14} className={`ml-1.5 shrink-0 transition-transform duration-200 ${showResources ? 'rotate-180 text-brand-primary' : ''}`} />
              </Link>

              {showResources && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="rounded-xl shadow-xl bg-white ring-1 ring-black/5 py-2 overflow-hidden animate-in fade-in slide-in-from-top-1">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2.5 text-xs xl:text-sm text-slate-700 hover:bg-brand-primary hover:text-white transition-colors"
                        onClick={() => setShowResources(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`whitespace-nowrap px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${isSolid ? 'text-slate-700 hover:text-brand-primary' : 'text-white hover:text-amber-400'}`}
            >
              About
            </Link>

            {/* Persistent Top-Right Primary CTA Button */}
            <div className="pl-1 xl:pl-2">
              <Link
                to="/contact"
                className="btn-primary py-2.5 px-4 xl:px-5 shadow-sm text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap rounded-xl"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Mobile Actions: Compact CTA + Hamburger Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              to="/contact"
              className="btn-primary py-1.5 px-3 text-xs font-bold rounded-lg shadow-sm"
              onClick={closeAllMenus}
            >
              Discuss
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isSolid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-2xl absolute w-full top-full left-0 max-h-[85vh] overflow-y-auto border-t border-slate-100"
          >
            <div className="px-5 py-6 space-y-1">
              {/* Home */}
              <Link
                to="/"
                className="block px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              {/* Services Accordion */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-1 border-l-2 border-brand-primary/20 ml-4 mt-1 space-y-1"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                          onClick={closeAllMenus}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Accordion */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                >
                  <span>Industries</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-1 border-l-2 border-brand-primary/20 ml-4 mt-1 space-y-1"
                    >
                      {industryLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                          onClick={closeAllMenus}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Projects */}
              <Link
                to="/projects"
                className="block px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                onClick={closeAllMenus}
              >
                Projects
              </Link>

              {/* Products */}
              <Link
                to="/products"
                className="block px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                onClick={closeAllMenus}
              >
                Products
              </Link>

              {/* Technical Resources Accordion */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                >
                  <span>Technical Resources</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-1 border-l-2 border-brand-primary/20 ml-4 mt-1 space-y-1"
                    >
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                          onClick={closeAllMenus}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <Link
                to="/about"
                className="block px-4 py-3 text-sm font-black text-slate-800 uppercase tracking-wider hover:text-brand-primary transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Action Buttons */}
              <div className="pt-4 pb-2 space-y-2">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center py-3.5 rounded-xl text-base font-bold shadow-md block"
                  onClick={closeAllMenus}
                >
                  Discuss Your Project
                </Link>
                <Link
                  to="/contact"
                  className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 block border border-slate-200 transition-colors"
                  onClick={closeAllMenus}
                >
                  Send Us Your Engineering Requirement
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
