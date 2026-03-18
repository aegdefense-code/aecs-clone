import React from 'react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div>
      <PageHero 
        title="Contact AECS" 
        subtitle="Global Engineering Expertise, Local Presence. Get in touch with our team today."
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
