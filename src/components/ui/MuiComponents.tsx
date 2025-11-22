import React from 'react';

// Bottone Custom in stile Material UI
export const MUIButton = ({ children, variant = "contained", className = "", onClick, fullWidth }) => {
  const baseStyle = "relative overflow-hidden font-medium tracking-wide transition-all duration-300 rounded-lg uppercase text-sm px-8 py-3 transform active:scale-[0.98]";
  
  const variants = {
    contained: "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5",
    outlined: "border border-rose-400/30 text-rose-300 hover:bg-rose-500/10 hover:border-rose-400",
    text: "text-gray-300 hover:text-white hover:bg-white/5"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

// Card con effetto Glassmorphism
export const MUICard = ({ children, className = "" }) => (
  <div className={`bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl hover:shadow-2xl hover:border-rose-500/20 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

// Chip decorativa
export const MUIChip = ({ label, icon: Icon }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
    {Icon && <Icon className="w-3 h-3" />}
    {label}
  </div>
);