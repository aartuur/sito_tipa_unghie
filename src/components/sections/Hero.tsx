import React from "react";
import DarkVeil from "../bits/DarkVeil/FuturisticBackground";
import Navbar from "../ui/Navbar";
import {
  Sparkles,
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";
import CurvedLoop from "../bits/CurvedLoop/CurvedLoop";
const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white selection:bg-white/20">
      {/* 1. SFONDO & ATMOSFERA */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
        {/* Overlay Gradiente per profondità */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 pointer-events-none" />
      </div>

      {/* Glow Effect - Spostato in alto (top-[35%]) per seguire il testo */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* 2. NAVBAR */}
      <Navbar />

      {/* 3. CONTENUTO CENTRALE */}
      {/* MODIFICHE LAYOUT:
          - 'justify-start': Allinea il contenuto verso l'alto (invece di center)
          - 'pt-32 sm:pt-44': Aggiunge molto padding sopra per staccarlo dalla navbar (circa 176px su desktop)
      */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 text-center pt-32 sm:pt-44">
        {/* Badge Animato */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
          <span className="text-[11px] sm:text-xs font-medium text-gray-200 tracking-wider uppercase">
            V 2.0 Ora Disponibile
          </span>
        </div>

        {/* Titolo Principale */}
        <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] drop-shadow-2xl">
          Sito per la <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
            Tua Visione Digitale
          </span>
        </h1>

        {/* Sottotitolo */}
        <p className="max-w-2xl text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
          Trasforma le tue idee in esperienze digitali immersive. Design
          futuristico, performance estreme e layout reattivi pronti all'uso.
        </p>

        {/* Pulsanti con Icone */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
          <button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all duration-300 transform active:scale-95 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Inizia Subito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 backdrop-blur-sm">
            Documentazione
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center gap-4 text-left opacity-80 hover:opacity-100 transition-opacity">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${10 + i}`}
                  alt="User"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-3 h-3 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 mt-1">
              <strong className="text-white">500+</strong> Creator felici
            </span>
          </div>
        </div>
      </div>

      {/* 4. FOOTER STATS STRIP (Resta ancorato in basso per bilanciare la pagina) */}
      {/* <CurvedLoop
        marqueeText="Beauty ✦ Nails ✦ Niggas ✦ Bomboclat ✦ AllahAkbar ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      /> */}
    </div>
  );
};

export default Hero;
