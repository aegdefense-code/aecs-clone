import React from 'react';

const PageHero = ({ 
  title, 
  subtitle, 
  children, 
  backgroundImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop' 
}) => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      {/* High-contrast gradient scrim overlay for maximum text readability across all background images */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/70 to-slate-950/90 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-100 drop-shadow">
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
