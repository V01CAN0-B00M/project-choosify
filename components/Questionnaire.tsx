
import React, { useState } from 'react';
import { Category, UserAnswers } from '../types';
import { CATEGORIES } from '../constants';

interface QuestionnaireProps {
  category: Category;
  onComplete: (answers: UserAnswers) => void;
  onBack: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ category, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const config = CATEGORIES[category];
  const questions = config.questions;
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Header & Progress */}
      <div className="mb-8">
        <button 
          onClick={handlePrevious}
          className="text-slate-400 hover:text-white mb-6 transition-colors flex items-center gap-2 group"
        >
          <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        
        <div className="flex items-center gap-4 mb-2">
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${config.color}`}>
            <i className={`fa-solid ${config.icon} text-white`} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Choosify {category}s</h2>
            <p className="text-slate-400 text-sm">Preference {currentStep + 1} of {questions.length}</p>
          </div>
        </div>

        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
          <div 
            className={`h-full bg-gradient-to-r ${config.color} transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Body */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-2xl font-semibold text-white mb-8">
          {questions[currentStep].text}
        </h3>

        <div className="space-y-4">
          {questions[currentStep].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className="w-full group text-left p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200 flex items-center justify-between"
            >
              <span className="text-slate-200 text-lg group-hover:text-white">{option.label}</span>
              <div className={`w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors`}>
                <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
