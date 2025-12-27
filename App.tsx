
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
      console.error(err);
      setError(err.message || 'Something went wrong while choosing.');
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
    <div className="min-h-screen relative flex flex-col selection:bg-blue-500/30">
      <Background />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div 
          className="flex items-center gap-3 cursor-pointer group pointer-events-auto" 
          onClick={reset}
        >
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:rotate-12 transition-transform duration-500">
            <i className="fa-solid fa-sparkles text-[#020617] text-xl" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">CHOOSIFY</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 relative z-10">
        {view === 'home' && (
          <div className="w-full max-w-5xl px-6 text-center animate-in fade-in zoom-in-95 duration-700">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
                Decide with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">clarity.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                Choosify blends human preference with AI intelligence to pinpoint your next essential upgrade. Choose a category to start.
              </p>
            </div>
            
            <CategorySelector onSelect={handleCategorySelect} />

            {error && (
              <div className="mt-12 max-w-md mx-auto p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm flex items-center gap-3 animate-bounce">
                <i className="fa-solid fa-circle-exclamation text-lg" />
                <p className="font-semibold">{error}</p>
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
          <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500">
            <div className="relative">
              <div className="w-32 h-32 rounded-[2.5rem] border-[6px] border-white/5 border-t-white animate-[spin_1.5s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fa-solid fa-brain text-white text-3xl animate-pulse" />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white tracking-tight">Thinking deeply...</h2>
              <p className="text-slate-400 font-medium">Matching your unique profile with current trends.</p>
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

      <footer className="w-full p-8 text-center opacity-40">
        <p className="text-[10px] tracking-[0.5em] uppercase text-white font-bold">
          Choosify &copy; 2025 Intelligence Engine
        </p>
      </footer>
    </div>
  );
};

export default App;
