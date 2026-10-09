import React from 'react';

const PageHero = ({ 
  title, 
  subtitle, 
  children, 
  backgroundImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop' 
}) => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20 lg:pt-40 lg:pb-28"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-200">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
