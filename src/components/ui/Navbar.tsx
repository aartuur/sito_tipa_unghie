import { useState } from 'react';
import { Atom, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Container principale (La "Pillola") */}
      <div className="relative w-full max-w-5xl bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg">
        
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Atom className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg tracking-tight">React Bits</span>
          </div>

          {/* Desktop Links (Visibili solo su schermi medi 'md' in su) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Docs</a>
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
            <a href="#" className="block text-center text-gray-300 hover:text-white py-2 border-b border-white/5">
              Home
            </a>
            <a href="#" className="block text-center text-gray-300 hover:text-white py-2">
              Docs
            </a>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;