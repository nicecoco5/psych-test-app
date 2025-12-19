
import React from 'react';
import { PersonalityType } from '../types';

interface AICharacterProps {
  personality: PersonalityType;
  size?: 'sm' | 'lg';
}

const AICharacter: React.FC<AICharacterProps> = ({ personality, size = 'lg' }) => {
  const sizeClasses = size === 'lg' ? 'w-48 h-48 sm:w-64 sm:h-64' : 'w-24 h-24';

  if (personality.imagePath) {
    return (
      <div className={`${sizeClasses} bg-white rounded-full border-[1.5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform hover:scale-105 duration-500`}>
        <img src={personality.imagePath} alt={personality.title} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} flex items-center justify-center bg-gray-50 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
      <span className={size === 'lg' ? "text-8xl" : "text-4xl"}>{personality.emoji}</span>
    </div>
  );
};

export default AICharacter;
