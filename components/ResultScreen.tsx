
import React, { useState } from 'react';
import { PersonalityType } from '../types';
import AICharacter from './AICharacter';

interface ResultScreenProps {
  result: PersonalityType;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  const [showGrowth, setShowGrowth] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: result.title,
          text: result.oneLiner,
          url: window.location.href,
        });
      } catch (err) { }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: result.title,
          description: result.oneLiner,
          imageUrl: result.imagePath || 'https://placehold.co/600x400/png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      handleShare(); // Fallback to general share if Kakao is not ready
    }
  };

  return (
    <div className="animate-in fade-in duration-1000 flex flex-col gap-12 pb-24">
      <section className="relative py-14 flex flex-col items-center text-center rounded-[3rem] border-[1.5px] border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="mb-8"><AICharacter personality={result} size="lg" /></div>
        <div className="border-[1.5px] border-black px-10 py-3 mb-4 inline-block rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: result.themeColor }}>
          <h1 className="pop-font text-5xl text-gray-800">{result.title}</h1>
        </div>
        <p className="font-black text-gray-700 italic text-2xl px-6">"{result.oneLiner}"</p>
      </section>

      <section className="grid grid-cols-1 gap-10">
        <div className="border-[1.5px] border-black p-8 bg-white/60 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
          <p className="text-xl font-medium leading-relaxed text-gray-600">{result.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <button onClick={handleKakaoShare} className="w-full bg-[#FEE500] text-[#191919] pop-font text-2xl py-5 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] button-bounce">카카오톡으로 공유하기 💬</button>
          <button onClick={handleShare} className="w-full bg-pink-400 text-white pop-font text-2xl py-5 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] button-bounce">링크 복사하기 ✨</button>
          <button onClick={onRestart} className="w-full bg-white text-gray-800 pop-font text-2xl py-5 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] button-bounce">다시 하기</button>
        </div>
      </section>
      {copied && <p className="text-center text-emerald-500 font-bold">링크가 복사되었습니다!</p>}
    </div>
  );
};

export default ResultScreen;
