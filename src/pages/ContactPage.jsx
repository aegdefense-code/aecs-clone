import React from 'react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Discuss Your Engineering Challenge | AECS Inquiry & Review"
        description="Submit your product concept, CAD models, simulation requirements, or manufacturing inquiry for evaluation by AECS engineering leadership."
        canonical="/contact"
      />
      <PageHero 
        title="Discuss Your Engineering Challenge" 
        subtitle="Global Engineering Expertise, Local Presence. Submit your requirements for senior technical review."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
      />
      
      {/* Reusing existing Contact form component */}
      <div className="-mt-16 relative z-10 mb-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
