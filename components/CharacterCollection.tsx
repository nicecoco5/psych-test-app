
import React, { useState } from 'react';
import { PERSONALITY_TYPES } from '../constants';
import AICharacter from './AICharacter';

interface CharacterCollectionProps {
  onBack: () => void;
}

const CharacterCollection: React.FC<CharacterCollectionProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'PERSONALITY' | 'GROWTH'>('PERSONALITY');
  const filteredTypes = PERSONALITY_TYPES.filter(t => t.testId === activeTab);

  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom duration-700 h-full">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="bg-white border border-black px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-bold">← 뒤로가기</button>
        <h2 className="pop-font text-2xl text-gray-800">캐릭터 도감</h2>
      </div>

      <div className="flex gap-2 mb-10">
        {['PERSONALITY', 'GROWTH'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 py-3 rounded-2xl border-[1.5px] border-black font-bold transition-all ${activeTab === tab ? 'bg-purple-400 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white text-gray-400'}`}
          >
            {tab === 'PERSONALITY' ? '성격 유형' : '성장 컬러'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-10">
        {filteredTypes.map(type => (
          <div key={type.id} className="flex flex-col items-center gap-4">
            <AICharacter personality={type} size="sm" />
            <div className="text-center">
              <p className="font-black text-sm text-gray-700">{type.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCollection;
