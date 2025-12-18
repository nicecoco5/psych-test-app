
import React from 'react';

interface MainScreenProps {
  onStart: (testType: 'PERSONALITY' | 'GROWTH') => void;
  onOpenCollection: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ onStart, onOpenCollection }) => {
  return (
    <div className="flex flex-col items-center text-center py-4 animate-in fade-in duration-1000">
      <div className="relative mb-14">
        <div className="absolute -top-16 -left-12 px-6 py-2 bg-white rounded-full border-[1.5px] border-black -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0">
           <span className="pop-font text-orange-400 text-2xl tracking-widest">즐거움!</span>
        </div>
        
        <h1 className="pop-font text-6xl sm:text-7xl leading-tight text-gray-800 relative z-10 drop-shadow-sm">
          꿈꾸는<br/>
          <span className="text-purple-500 bg-white px-6 py-2 rounded-full border-[1.5px] border-black inline-block mt-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">나의 세계</span>
        </h1>
        
        <div className="absolute -bottom-10 -right-8 px-5 py-2 bg-sky-200 rounded-full border-[1.5px] border-black rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="pop-font text-xl text-sky-700">성장!</span>
        </div>
      </div>
      
      <div className="relative mb-12 group cursor-pointer" onClick={onOpenCollection}>
        <div className="w-64 h-64 bg-white p-2 rounded-full border-[1.5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform group-hover:rotate-6 duration-500">
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400" 
            alt="Joyful Abstract" 
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm group-hover:bg-yellow-200 transition-colors">Character Gallery</div>
      </div>
      
      <p className="text-xl font-medium mb-10 leading-relaxed text-gray-600 max-w-xs mx-auto italic">
        "상상력과 창의력으로 만나는<br/>나만의 진정한 색깔"
      </p>
      
      <div className="flex flex-col gap-6 w-full px-4">
        <button 
          onClick={() => onStart('PERSONALITY')}
          className="pop-font text-2xl px-10 py-5 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] button-bounce transition-all text-gray-800 tracking-wider"
        >
          숨겨진 성격 찾기 ✨
        </button>

        <button 
          onClick={() => onStart('GROWTH')}
          className="pop-font text-2xl px-10 py-5 bg-gradient-to-r from-sky-300 to-emerald-300 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] button-bounce transition-all text-gray-800 tracking-wider"
        >
          성장 컬러 진단 🎨
        </button>
        
        <button 
          onClick={onOpenCollection}
          className="pop-font text-lg text-gray-400 hover:text-gray-600 transition-colors"
        >
          캐릭터 도감 구경하기 📚
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
