import React from 'react';
import { ShieldCheck, Globe2, Award, Wrench, Building2 } from 'lucide-react';

const ProofBar = () => {
  const credentials = [
    {
      icon: <Award className="w-5 h-5 text-amber-500 shrink-0" />,
      text: "20+ Years Engineering Experience",
      sub: "Spearheaded by Abraham Pannikottu"
    },
    {
      icon: <Globe2 className="w-5 h-5 text-blue-500 shrink-0" />,
      text: "USA–India Engineering Bridge",
      sub: "AEG Akron (USA) + AECS (India)"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />,
      text: "ISO 9001:2015 Quality System",
      sub: "Certified Processes & Traceability"
    },
    {
      icon: <Wrench className="w-5 h-5 text-red-500 shrink-0" />,
      text: "Poling Group Authorized Partner",
      sub: "Exclusive India Representative"
    },
    {
      icon: <Building2 className="w-5 h-5 text-indigo-500 shrink-0" />,
      text: "Government & Industrial Programs",
      sub: "Defense, Marine & Tier-1 OEMs"
    }
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 text-white py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {credentials.map((cred, idx) => (
            <div key={idx} className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-4' : ''}`}>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0">
                {cred.icon}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white leading-snug">{cred.text}</p>
                <p className="text-[11px] text-slate-400 font-medium">{cred.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
