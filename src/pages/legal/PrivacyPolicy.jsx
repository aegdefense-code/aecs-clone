import React from 'react';
import PageHero from '../../components/PageHero';

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHero 
        title="Privacy Policy" 
        subtitle="How We Protect Your Data and Intellectual Property"
        backgroundImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Commitment to Privacy</h2>
            <p className="leading-relaxed">
              At AECS - American Engineering Consultancy Services, ensuring the confidentiality of our clients' intellectual property, CAD models, and business data is our highest priority. This Privacy Policy details how we collect, use, and protect any information you provide when using our website or engaging our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Non-Disclosure Agreements (NDAs)</h2>
            <p className="leading-relaxed mb-4">
              All client engineering projects, product designs, FEA results, and testing data are treated as strictly confidential. We execute comprehensive NDAs with all clients before the transfer of any sensitive files or technical specifications.
            </p>
            <p className="leading-relaxed">
              Internally, data access is siloed and restricted to engineers working directly on your project. Our network utilizes enterprise-grade encryption for all CAD/CAM data transfers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Collection via Website</h2>
            <p className="leading-relaxed mb-4">
              We may collect the following information from visitors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, job title, and corporate affiliation provided in contact forms.</li>
              <li>Contact information including business email address and phone number.</li>
              <li>Demographic and industry-specific analytics (e.g., pages visited, files downloaded) to improve our service offerings.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Sharing</h2>
            <p className="leading-relaxed">
              AECS - American Engineering Consultancy Services does not sell, distribute, or lease your corporate or personal information to third parties unless we have your explicit permission, or are required by law to do so. In cases where manufacturing components are outsourced, specific CAD files may be shared with vetted partners under strict sub-NDAs.
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

export default PrivacyPolicy;
