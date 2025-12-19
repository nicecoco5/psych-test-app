
import React from 'react';
import { Question, Option } from '../types';
import ProgressBar from './ProgressBar';

interface QuestionScreenProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onSelect: (option: Option) => void;
  onPrev: () => void;
}

const COLORS = ['bg-orange-100', 'bg-sky-100', 'bg-purple-100', 'bg-rose-100'];

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question, currentStep, totalSteps, onSelect, onPrev
}) => {
  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right duration-700">
      <ProgressBar current={currentStep} total={totalSteps} />
      <div className="flex-grow flex flex-col justify-center">
        <div className="bg-white/90 border-[1.5px] border-black p-8 rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-black leading-snug">{question.question}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(option)}
              className={`${COLORS[idx % COLORS.length]} border-[1.5px] border-black p-5 text-left text-xl font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] button-bounce whitespace-pre-wrap`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      {currentStep > 1 && (
        <button onClick={onPrev} className="mt-8 text-gray-400 font-black text-sm hover:text-gray-600 transition-colors">
          ← 뒤로가기
        </button>
      )}
    </div>
  );
};

export default QuestionScreen;
