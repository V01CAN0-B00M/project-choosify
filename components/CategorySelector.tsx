
import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface CategorySelectorProps {
  onSelect: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto p-4">
      {(Object.keys(CATEGORIES) as Category[]).map((cat) => {
        const config = CATEGORIES[cat];
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="group relative flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] overflow-hidden"
          >
            {/* Background Hover Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${config.color}`} />
            
            {/* Large Decorative Symbol/Logo Background */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-500">
              <i className={`fa-solid ${config.icon} text-9xl rotate-12`} />
            </div>

            {/* Central Icon/Logo */}
            <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${config.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <i className={`fa-solid ${config.icon} text-3xl text-white shadow-sm`} />
            </div>
            
            <h3 className="relative z-10 text-2xl font-bold text-white mb-2">{cat}</h3>
            <p className="relative z-10 text-slate-400 text-center text-sm px-4">
              {cat === 'Phone' ? (
                <>Let us help you find your next smartphone.</>
              ) : (
                <>Let us help you find your next {cat.toLowerCase()}.</>
              )}
            </p>

            {/* Subtle glow for the Phone section specifically */}
            {cat === 'Phone' && (
              <div className="absolute top-0 right-0 p-2">
                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategorySelector;
