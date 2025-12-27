
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden pointer-events-none">
      {/* Primary interactive glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-25 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          left: mousePos.x - 400,
          top: mousePos.y - 400,
        }}
      />
      
      {/* Fixed atmospheric glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-indigo-900" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-emerald-900" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />
    </div>
  );
};

export default Background;
