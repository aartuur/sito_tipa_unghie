import { useState, useEffect } from 'react';
import { Atom, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
      {/* Container principale (La "Pillola") */}
      <div className={`relative w-full max-w-5xl backdrop-blur-md border border-white/10 rounded-3xl shadow-lg transition-all duration-300 ${scrolled ? 'bg-black/80' : 'bg-black/50'}`}>
        
        <div className={`flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Atom className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg tracking-tight">React Bits</span>
          </div>

          {/* Desktop Links (Visibili solo su schermi medi 'md' in su) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#prezzi" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Prezzi</a>
            <a href="#servizi" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Servizi</a>
            <a href="#portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portfolio</a>
          </div>
          {/* Mobile Menu Button (Visibile solo su mobile) */}

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Si apre quando isOpen è true) */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl flex flex-col gap-4 md:hidden animate-fade-in-down">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-center text-gray-300 hover:text-white py-2 border-b border-white/5">
              Home
            </a>
            <a href="#servizi" onClick={() => setIsOpen(false)} className="block text-center text-gray-300 hover:text-white py-2 border-b border-white/5">
              Servizi
            </a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-center text-gray-300 hover:text-white py-2 border-b border-white/5">
              Portfolio
            </a>
            <a href="#prezzi" onClick={() => setIsOpen(false)} className="block text-center text-gray-300 hover:text-white py-2">
              Prezzi
            </a>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;