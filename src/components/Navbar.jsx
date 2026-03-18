import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const location = useLocation();

  // If we're not on the home page, we want the navbar to always have a solid background
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarSolid = !isHomePage || scrolled;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About AECS', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Generative AI', path: '/ai' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Product Manufacturing', path: '/services/product-manufacturing' },
    { name: 'New Product Development (NPD)', path: '/services/npd' },
    { name: 'Finite Element Analysis (FEA)', path: '/services/fea' },
    { name: 'Mechanical Engineering Design', path: '/services/design' },
    { name: 'Manufacturing & Rapid Prototyping', path: '/services/prototyping' },
    { name: 'Testing, Inspection & Certification', path: '/services/testing' },
    { name: 'Tyre Testing Machines-Marketing, Sales & Servicing', path: '/services/tyre-testing' },
  ];

  const industryLinks = [
    { name: 'Automotive & Tires', path: '/industries/automotive' },
    { name: 'Marine Engineering', path: '/industries/marine' },
    { name: 'Medical Devices', path: '/industries/medical' },
    { name: 'Consumer & Sports', path: '/industries/consumer' },
  ];

  const materialLinks = [
    { name: 'Rubber', path: '/materials/rubber' },
    { name: 'Plastic', path: '/materials/plastic' },
    { name: 'Composite', path: '/materials/composite' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarSolid ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="flex items-center justify-center">
                <img src={logo} alt="AECS Logo" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
              <span className={`ml-4 text-sm md:text-xl font-bold tracking-tight hidden sm:block ${navbarSolid ? 'text-gray-900' : 'text-gray-100'}`}>
                American Engineering Consultancy Services
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-brand-primary py-2 ${navbarSolid ? 'text-gray-700' : 'text-white'}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to="/services" className={`flex items-center text-sm font-medium transition-colors hover:text-brand-primary py-2 ${navbarSolid ? 'text-gray-700' : 'text-white'}`}>
                Services <ChevronDown size={16} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 pt-1">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-colors"
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
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <Link to="/industries" className={`flex items-center text-sm font-medium transition-colors hover:text-brand-primary py-2 ${navbarSolid ? 'text-gray-700' : 'text-white'}`}>
                Industries <ChevronDown size={16} className={`ml-1 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {industriesOpen && (
                <div className="absolute top-full left-0 w-56 pt-1">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-2">
                    {industryLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Materials Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMaterialsOpen(true)}
              onMouseLeave={() => setMaterialsOpen(false)}
            >
              <Link to="/materials" className={`flex items-center text-sm font-medium transition-colors hover:text-brand-primary py-2 ${navbarSolid ? 'text-gray-700' : 'text-white'}`}>
                Materials <ChevronDown size={16} className={`ml-1 transition-transform ${materialsOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {materialsOpen && (
                <div className="absolute top-full left-0 w-48 pt-1">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-2">
                    {materialLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/resources" className={`text-sm font-medium transition-colors hover:text-brand-primary py-2 ${navbarSolid ? 'text-gray-700' : 'text-white'}`}>
              Resources
            </Link>

            <Link to="/about" className={`text-sm font-medium transition-colors hover:text-brand-primary py-2 ${navbarSolid ? 'text-gray-700' : 'text-white'}`}>
              About Us
            </Link>

            <Link to="/contact" className="btn-primary py-2 px-4 shadow-sm text-sm">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${navbarSolid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full top-full left-0 max-h-[80vh] overflow-y-auto border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-brand-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>

            {/* Mobile Services Links */}
            <div className="pl-3 py-2">
              <Link to="/services" className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block w-full hover:text-brand-primary" onClick={() => setIsOpen(false)}>Services</Link>
              <div className="space-y-1 pl-2 border-l-2 border-brand-primary/20">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-white hover:bg-brand-primary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Industries Links */}
            <div className="pl-3 py-2">
              <Link to="/industries" className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block w-full hover:text-brand-primary" onClick={() => setIsOpen(false)}>Industries</Link>
              <div className="space-y-1 pl-2 border-l-2 border-brand-primary/20">
                {industryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-white hover:bg-brand-primary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile Materials Links */}
            <div className="pl-3 py-2">
              <Link to="/materials" className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block w-full hover:text-brand-primary" onClick={() => setIsOpen(false)}>Materials</Link>
              <div className="space-y-1 pl-2 border-l-2 border-brand-primary/20">
                {materialLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-white hover:bg-brand-primary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-brand-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Resources</Link>

            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-brand-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-brand-primary hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Get in Touch</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
