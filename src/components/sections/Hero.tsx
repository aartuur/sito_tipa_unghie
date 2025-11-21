import React from 'react';
import DarkVeil from "../bits/DarkVeil/FuturisticBackground"; 
import Navbar from '../ui/Navbar';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white">
      
      {/* 1. SFONDO */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      {/* 2. NAVBAR */}
      <Navbar />

      {/* 3. CONTENUTO CENTRALE */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pt-20">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-gray-300" />
          <span className="text-[10px] sm:text-xs font-medium text-gray-300 tracking-wide uppercase">
            New Background
          </span>
        </div>

        {/* Titolo Responsive 
            - text-4xl su mobile
            - text-5xl su tablet (sm)
            - text-7xl su desktop (md)
        */}
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1] drop-shadow-2xl">
          Sito per <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            puttana negra
          </span>
        </h1>

        {/* Pulsanti Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto px-4 sm:px-0 mt-2">
          
          {/* Bottone Primario: width full su mobile, auto su desktop */}
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all duration-300 transform active:scale-95 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Get Started
          </button>
          
          {/* Bottone Secondario */}
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm">
            Learn More
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;