
import React, { useState } from 'react';
import Background from './components/Background';
import CategorySelector from './components/CategorySelector';
import Questionnaire from './components/Questionnaire';
import RecommendationDisplay from './components/RecommendationDisplay';
import { Category, Recommendation, UserAnswers } from './types';
import { getRecommendation } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'questions' | 'loading' | 'result'>('home');
  const [category, setCategory] = useState<Category | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    setView('questions');
    setError(null);
  };

  const handleQuestionsComplete = async (answers: UserAnswers) => {
    if (!category) return;
    setView('loading');
    setError(null);
    try {
      const result = await getRecommendation(category, answers);
      setRecommendation(result);
      setView('result');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      setView('home');
    }
  };

  const reset = () => {
    setView('home');
    setCategory(null);
    setRecommendation(null);
    setError(null);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center py-12">
      <Background />

      {/* Header (Floating) */}
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
        <div 
          className="flex items-center gap-2 pointer-events-auto cursor-pointer group" 
          onClick={reset}
        >
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <i className="fa-solid fa-wand-magic-sparkles text-slate-950 text-xl" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">CHOOSIFY</span>
        </div>
        
        {/* Right side spacer to keep centering logic if needed, or simply empty */}
        <div className="w-10" />
      </header>

      <main className="w-full z-10">
        {view === 'home' && (
          <div className="text-center space-y-12">
            <div className="max-w-2xl mx-auto px-4 animate-in fade-in slide-in-from-top-4 duration-1000">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                Decide with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">confidence.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
                Choosify uses advanced AI to analyze your needs across categories and find the single best match for your lifestyle.
              </p>
            </div>
            <CategorySelector onSelect={handleCategorySelect} />
            {error && (
              <div className="max-w-md mx-auto p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                <i className="fa-solid fa-triangle-exclamation mr-2" />
                {error}
              </div>
            )}
          </div>
        )}

        {view === 'questions' && category && (
          <Questionnaire 
            category={category} 
            onComplete={handleQuestionsComplete} 
            onBack={reset} 
          />
        )}

        {view === 'loading' && (
          <div className="flex flex-col items-center gap-6 animate-pulse">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl border-4 border-t-white border-white/10 animate-spin" />
              <i className="fa-solid fa-brain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl animate-bounce" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Analyzing your choices...</h2>
              <p className="text-slate-400">Choosify is generating a personalized profile.</p>
            </div>
          </div>
        )}

        {view === 'result' && recommendation && category && (
          <RecommendationDisplay 
            category={category} 
            recommendation={recommendation} 
            onReset={reset} 
          />
        )}
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-0 left-0 w-full p-8 text-center pointer-events-none opacity-30">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white font-medium">
          Choosify &copy; 2025 Intelligence System
        </p>
      </footer>
    </div>
  );
};

export default App;
