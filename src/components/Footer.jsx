import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col h-full">
            <div className="flex-1">
              <Link to="/" className="flex items-center gap-4 mb-8 group">
                <div className="flex items-center justify-center">
                  <img src={logo} alt="AECS Logo" className="w-20 h-auto object-contain bg-white rounded-lg p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl tracking-tighter text-white leading-none">AECS</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Global Engineering</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                American Engineering Consultancy Services LLP provides robust engineering and design solutions globally, specializing in new product development and high-end automotive testing equipment.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0077B5] hover:bg-gray-100 transition-all shadow-sm">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E4405F] hover:bg-gray-100 transition-all shadow-sm">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF0000] hover:bg-gray-100 transition-all shadow-sm">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#000000] hover:bg-gray-100 transition-all shadow-sm">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Core Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Finite Element Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">New Product Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mechanical Engineering Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Tire Testing Equipment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About AECS</Link></li>
              <li><a href="/about#leadership" className="text-gray-400 hover:text-white text-sm transition-colors">Leadership</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Legal & Policies</h3>
            <ul className="space-y-3">
              <li><Link to="/policies/merchant" className="text-gray-400 hover:text-white text-sm transition-colors">Merchant Policies</Link></li>
              <li><Link to="/policies/legal" className="text-gray-400 hover:text-white text-sm transition-colors">Legal Notice</Link></li>
              <li><Link to="/policies/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policies/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} American Engineering Consultancy Services LLP. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Inspired design and architecture by AECS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
