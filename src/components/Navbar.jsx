import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  // Separate states for dropdown visibility
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  
  const location = useLocation();

  // Highlight active path logic to avoid hardcoded bg on service pages
  const isHome = location.pathname === '/';

  const handleScroll = useCallback(() => {
    // Threshold set to 80px for a smoother transition on most devices
    const offset = window.scrollY;
    if (offset > 80) {
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
    { name: 'Mechanical Engineering Design', path: '/services/design' },
    { name: 'Manufacturing & Rapid Prototyping', path: '/services/prototyping' },
    { name: 'Testing, Inspection & Certification', path: '/services/testing' },
    { name: 'Tyre Testing Machines', path: '/services/tyre-testing' },
  ];

  const industryLinks = [
    { name: 'Automotive & Tires', path: '/industries/automotive' },
    { name: 'Marine Engineering', path: '/industries/marine' },
    { name: 'Medical Devices', path: '/industries/medical' },
    { name: 'Consumer & Sports', path: '/industries/consumer-sports' },
  ];

  const materialLinks = [
    { name: 'Rubber', path: '/materials/rubber' },
    { name: 'Plastic', path: '/materials/plastic' },
    { name: 'Composite', path: '/materials/composite' },
  ];

  // Helper to close all menus on navigation
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setShowServices(false);
    setShowIndustries(false);
    setShowMaterials(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group" onClick={closeAllMenus}>
              <div className="flex items-center justify-center">
                <img src={logo} alt="AECS Logo" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
              <span className={`ml-4 text-sm md:text-xl font-bold tracking-tight hidden sm:block ${isSolid ? 'text-slate-900' : 'text-white'}`}>
                American Engineering Consultancy Services
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-brand-primary py-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}>
              Home
            </Link>

            {/* Services Mega-Dropdown behavior */}
            <div
              className="relative group/dropdown"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <Link to="/services" className={`flex items-center text-sm font-medium transition-colors hover:text-brand-primary py-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}>
                Services <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
              </Link>

              {showServices && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="rounded-lg shadow-xl bg-white ring-1 ring-black/5 py-3 overflow-hidden animate-in fade-in slide-in-from-top-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-all"
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
              <Link to="/industries" className={`flex items-center text-sm font-medium transition-colors hover:text-brand-primary py-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}>
                Industries <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${showIndustries ? 'rotate-180' : ''}`} />
              </Link>

              {showIndustries && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="rounded-lg shadow-xl bg-white ring-1 ring-black/5 py-3 animate-in fade-in slide-in-from-top-1">
                    {industryLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Materials Section */}
            <div
              className="relative group/dropdown"
              onMouseEnter={() => setShowMaterials(true)}
              onMouseLeave={() => setShowMaterials(false)}
            >
              <Link to="/materials" className={`flex items-center text-sm font-medium transition-colors hover:text-brand-primary py-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}>
                Materials <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${showMaterials ? 'rotate-180' : ''}`} />
              </Link>

              {showMaterials && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div className="rounded-lg shadow-xl bg-white ring-1 ring-black/5 py-3 animate-in fade-in slide-in-from-top-1">
                    {materialLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/resources" className={`text-sm font-medium transition-colors hover:text-brand-primary py-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}>
              Resources
            </Link>

            <Link to="/about" className={`text-sm font-medium transition-colors hover:text-brand-primary py-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}>
              About Us
            </Link>

            <Link to="/contact" className="btn-primary py-2.5 px-6 shadow-sm text-sm font-semibold tracking-wide">
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            {/* TODO: Optimize hit area for mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isSolid ? 'text-gray-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl absolute w-full top-full left-0 max-h-[85vh] overflow-y-auto border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-5 py-6 space-y-2">
            <Link to="/" className="block px-3 py-3 text-lg font-semibold text-slate-800 hover:text-brand-primary hover:bg-slate-50 rounded-lg" onClick={closeAllMenus}>Home</Link>

            {/* Mobile Navigation Groups */}
            <div className="pt-4 pb-2">
              <span className="px-3 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 block">Our Services</span>
              <div className="space-y-1 mt-3 pl-1 border-l-2 border-brand-primary/10">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 pb-2">
              <span className="px-3 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 block">Key Industries</span>
              <div className="grid grid-cols-1 gap-1">
                {industryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-3 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 rounded-lg"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 pb-4 border-t border-slate-100 flex flex-col gap-4">
              <Link to="/resources" className="px-3 text-base font-semibold text-slate-700" onClick={closeAllMenus}>Knowledge Hub</Link>
              <Link to="/about" className="px-3 text-base font-semibold text-slate-700" onClick={closeAllMenus}>Our Story</Link>
              <Link to="/contact" className="btn-primary w-full text-center py-4 rounded-xl text-lg font-bold" onClick={closeAllMenus}>Start a Project</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

