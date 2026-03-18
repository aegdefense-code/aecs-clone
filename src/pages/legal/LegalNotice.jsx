import React from 'react';
import PageHero from '../../components/PageHero';

const LegalNotice = () => {
  return (
    <div>
      <PageHero 
        title="Legal Notice" 
        subtitle="Corporate, Trademark, and Legal Disclaimers"
        backgroundImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2938&auto=format&fit=crop"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Corporate Identity</h2>
            <p className="leading-relaxed mb-4">
              The website <strong>aecs-india.com</strong> is operated by American Engineering Consultancy Services (AECS) LLP. We are an independent engineering consultancy firm headquartered in Kochi, Kerala, India.
            </p>
            <p className="leading-relaxed font-semibold">
              Registered Office:<br/>
              CC NO/54,2593-6 (2nd FLOOR, STP Rd,<br/>
              Kadavanthra P.O, Bose Nagar, Elamkulam,<br/>
              Kochi, Kerala 682020, India
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property & Trademarks</h2>
            <p className="leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, icons, images, CAD renderings, and digital downloads, is the property of AECS LLP or its content suppliers and protected by international copyright laws.
            </p>
            <p className="leading-relaxed">
              "Poling Group", "Akron Special Machinery", and other partner brands referenced on this site belong to their respective corporate entities. AECS operates as an authorized partner/distributor where indicated, but we do not claim ownership of their core trademarks.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Liability</h2>
            <p className="leading-relaxed mb-4">
              The materials on this website are provided "as is" and without warranties of any kind, either express or implied. AECS does not warrant that the functions contained in the materials will be uninterrupted or error-free.
            </p>
            <p className="leading-relaxed">
              Furthermore, any engineering specifications, load calculations, or CAD visuals displayed on the website are for illustrative and marketing purposes only and should not be used as final technical guidelines for real-world construction or manufacturing without a signed SOW and formal engineering review.
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

export default LegalNotice;
