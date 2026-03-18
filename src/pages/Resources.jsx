import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';

const articles = [
  { id: 1, topic: 'FEA', title: 'Topological Optimization in Automotive Chassis Design', date: 'March 10, 2026', readTime: '5 min read' },
  { id: 2, topic: 'NPD', title: 'The 7-Step Method to Hardware Go-To-Market', date: 'Feb 22, 2026', readTime: '8 min read' },
  { id: 3, topic: 'Manufacturing', title: 'Comparing 3D Printed Resins vs. Urethane Casting', date: 'Jan 15, 2026', readTime: '6 min read' },
  { id: 4, topic: 'Materials', title: 'Advances in Non-Pneumatic Tire Elastomers', date: 'Nov 05, 2025', readTime: '10 min read' },
  { id: 5, topic: 'AI', title: 'How Generative AI is Changing Mechanical Engineering Load Calculations', date: 'Oct 18, 2025', readTime: '4 min read' },
  { id: 6, topic: 'Testing', title: 'Poling Group TU-Series: Maximizing Inline Uniformity', date: 'Sep 30, 2025', readTime: '7 min read' },
];

const topics = ['All', 'FEA', 'NPD', 'Manufacturing', 'Materials', 'AI', 'Testing'];

const Resources = () => {
  const [filter, setFilter] = useState('All');

  const filteredArticles = filter === 'All' ? articles : articles.filter(a => a.topic === filter);

  return (
    <div>
      <PageHero 
        title="Engineering Resources" 
        subtitle="Technical Articles, Case Studies, and Industry Insights from AECS Experts"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Filters */}
           <div className="flex flex-wrap gap-3 mb-12 justify-center">
             {topics.map(topic => (
               <button
                 key={topic}
                 onClick={() => setFilter(topic)}
                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === topic ? 'bg-brand-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
               >
                 {topic}
               </button>
             ))}
           </div>

           {/* Articles Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredArticles.map(article => (
               <div key={article.id} className="bg-white border text-left border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col group cursor-pointer">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop&sig=${article.id}`} alt="Article placeholder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-brand-secondary text-white text-xs font-bold px-3 py-1 rounded">
                      {article.topic}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                     <p className="text-xs text-gray-500 mb-2">{article.date} • {article.readTime}</p>
                     <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                       {article.title}
                     </h3>
                     <div className="mt-4 mt-auto">
                        <span className="btn-outline w-full inline-flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                           Read Article
                        </span>
                     </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <CtaSection title="Subscribe to our Technical Newsletter" subtitle="Get the latest CAD, FEA, and Manufacturing insights delivered directly to your inbox." buttonText="Join Newsletter" />
    </div>
  );
};

export default Resources;
