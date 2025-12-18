
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PersonalityType } from '../types';

interface AICharacterProps {
  personality: PersonalityType;
  size?: 'sm' | 'lg';
}

const AICharacter: React.FC<AICharacterProps> = ({ personality, size = 'lg' }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const generateImage = async () => {
      if (!personality.characterPrompt) return;
      setLoading(true);
      setError(false);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: personality.characterPrompt }] },
          config: { imageConfig: { aspectRatio: "1:1" } }
        });

        const imagePart = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (isMounted) {
          if (imagePart?.inlineData) {
            setImageUrl(`data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateImage();
    return () => { isMounted = false; };
  }, [personality.id]);

  const sizeClasses = size === 'lg' ? 'w-48 h-48 sm:w-64 sm:h-64' : 'w-24 h-24';

  if (loading) {
    return (
      <div className={`${sizeClasses} flex flex-col items-center justify-center bg-white rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pulse`}>
        <span className="text-3xl animate-bounce">{personality.emoji}</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`${sizeClasses} flex items-center justify-center bg-gray-50 rounded-full border-[1.5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
        <span className="text-4xl">{personality.emoji}</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} bg-white rounded-full border-[1.5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform hover:scale-105 duration-500`}>
      <img src={imageUrl} alt={personality.title} className="w-full h-full object-cover" />
    </div>
  );
};

export default AICharacter;
