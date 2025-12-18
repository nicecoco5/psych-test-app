
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-center mb-4">
        <span className="pop-font text-lg px-4 py-1.5 bg-sky-200 rounded-full border-[1.5px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-gray-800">
          진행 {current}/{total}
        </span>
      </div>
      <div className="h-4 w-full bg-white/50 border-[1.5px] border-black rounded-full relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 transition-all duration-700 ease-out border-r-[1.5px] border-black" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
