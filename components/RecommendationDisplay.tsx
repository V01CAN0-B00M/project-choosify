
import React from 'react';
import { Category, Recommendation } from '../types';
import { CATEGORIES } from '../constants';

interface RecommendationDisplayProps {
  category: Category;
  recommendation: Recommendation;
  onReset: () => void;
}

const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({ category, recommendation, onReset }) => {
  const config = CATEGORIES[category];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 animate-in zoom-in-95 duration-700">
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
        {/* Banner Section */}
        <div className={`bg-gradient-to-br ${config.color} p-10 text-center relative overflow-hidden`}>
          {/* Subtle icon pattern in background */}
          <i className={`fa-solid ${config.icon} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] opacity-10 pointer-events-none`} />
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4">
              Your Perfect Match
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
              {recommendation.productName}
            </h2>
            <p className="text-xl text-white/90 italic font-medium">
              "{recommendation.tagline}"
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          {/* Summary */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">The Verdict</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              {recommendation.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Why it fits you</h3>
              <ul className="space-y-4">
                {recommendation.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 bg-gradient-to-br ${config.color}`} />
                    <span className="text-slate-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Specs</h3>
              <div className="space-y-4">
                {recommendation.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-emerald-500 text-sm" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(recommendation.productName)}`, '_blank')}
              className={`flex-1 py-4 rounded-xl bg-white text-slate-950 font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2`}
            >
              Learn More
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
            </button>
            <button 
              onClick={onReset}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationDisplay;
