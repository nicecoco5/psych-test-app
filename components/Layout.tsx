
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md organic-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col min-h-[650px]">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/50 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl z-0"></div>
        <main className="flex-grow flex flex-col p-6 sm:p-10 z-10 relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
