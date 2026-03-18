import React from 'react';
import PageHero from '../../components/PageHero';

const MerchantPolicies = () => {
  return (
    <div>
      <PageHero 
        title="Merchant Policies" 
        subtitle="AECS - American Engineering Consultancy Services Corporate Guidelines and Service Terms"
        backgroundImage="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2938&auto=format&fit=crop"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Provisions</h2>
            <p className="leading-relaxed">
              American Engineering Consultancy Services (AECS) LLP is committed to providing industry-leading engineering, design, and manufacturing services. These merchant policies outline the acceptable practices, commercial guidelines, and expectations when engaging with AECS for consulting, prototyping, or hardware procurement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. B2B Transactions & Invoicing</h2>
            <p className="leading-relaxed">
              All transactions are conducted strictly on a Business-to-Business (B2B) basis. Payment terms are established per the individual Statement of Work (SOW) or Master Services Agreement (MSA). Standard payment terms involve milestone-based invoicing with a NET-30 schedule unless otherwise specified and mutually agreed upon in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refunds & Cancellations</h2>
            <p className="leading-relaxed mb-4">
              Due to the bespoke nature of engineering consultancy, CAD modeling, FEA analysis, and custom rapid prototyping, we do not offer standard refunds on hours already billed or physical materials already committed to a project.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project cancellations must be submitted in writing.</li>
              <li>Clients will be billed for all work completed up to the date of cancellation.</li>
              <li>For physical goods (e.g., Poling Group testing machines), warranties and return policies follow the manufacturer's specific terms provided at the time of sale.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Shipping & Delivery</h2>
            <p className="leading-relaxed">
              For physical prototypes and machinery, AECS coordinates EXW (Ex Works) or FOB (Free On Board) from our Kochi, India facility or direct from our international manufacturing partners. Shipping timelines are estimates and are contingent upon global supply chain variables and customs clearance.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()} <br />
              If you have any questions regarding these policies, please contact <a href="mailto:info@aecs-india.com" className="text-brand-primary hover:underline">info@aecs-india.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantPolicies;
