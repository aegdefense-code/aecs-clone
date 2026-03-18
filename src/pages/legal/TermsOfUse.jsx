import React from 'react';
import PageHero from '../../components/PageHero';

const TermsOfUse = () => {
  return (
    <div>
      <PageHero 
        title="Terms of Use" 
        subtitle="Conditions for Accessing the AECS - American Engineering Consultancy Services Website"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using aecs-india.com, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Knowledge Base & Resources</h2>
            <p className="leading-relaxed mb-4">
              The articles, technical data, and case studies provided in our Resources section are for informational purposes only. While we strive to ensure absolute technical accuracy, AECS assumes no responsibility for errors, omissions, or the consequences of using this generalized data for applied engineering situations.
            </p>
            <p className="leading-relaxed font-semibold italic text-brand-primary">
              Always consult an AECS engineer for project-specific load calculations, structural requirements, or testing procedures prior to manufacturing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prohibited Conduct</h2>
            <p className="leading-relaxed mb-4">
              You agree not to use this website to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scrape, mine, or extract data, images, or client lists via automated bots.</li>
              <li>Reverse engineer the website structure or attempt to breach server security.</li>
              <li>Use the AECS brand name or Poling Group trademarks without explicit, documented consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Modifications to Service</h2>
            <p className="leading-relaxed">
              AECS - American Engineering Consultancy Services reserves the right to modify, suspend, or discontinue, temporarily or permanently, the website (or any part thereof) with or without notice at any time. You agree that AECS shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
