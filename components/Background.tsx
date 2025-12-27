
import React, { useEffect, useState, useRef } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Fix: Provide an initial value to useRef to satisfy TypeScript requirement of 1 argument.
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden pointer-events-none">
      {/* Dynamic gradient blobs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />
      <div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 bg-purple-600 animate-pulse"
        style={{
          transform: `translate(${-mousePos.x * 0.05}px, ${-mousePos.y * 0.05}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-10 bg-emerald-600"
        style={{
          transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );
};

export default Background;
