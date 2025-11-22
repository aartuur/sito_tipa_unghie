
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { MUIButton, MUIChip } from '../ui/MuiComponents';
import Navbar from '../ui/Navbar';
import AnimationWrapper from '../ui/AnimationWrapper'; // Import AnimationWrapper

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-sans text-white selection:bg-rose-500/20">
      {/* 1. SFONDO & ATMOSFERA */}
      <div className="absolute inset-0 z-0">
        {/* Glow Effect */}
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-rose-900/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* 2. NAVBAR */}
      <Navbar />

      {/* 3. CONTENUTO CENTRALE A GRIGLIA */}
      <AnimationWrapper> {/* Wrap main content with AnimationWrapper */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-screen px-6 pt-32 pb-16">
          
          {/* COLONNA SINISTRA: Testo e CTA */}
          <div className="text-center lg:text-left">
            <MUIChip label="Your Vision, Inked" icon={Sparkles} />
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight mt-6 mb-8">
              Digital Tattoo Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
                & Fine Art
              </span>
            </h1>

            <p className="max-w-lg mx-auto lg:mx-0 text-gray-400 text-lg sm:text-xl leading-relaxed mb-10">
              From concept to skin. We create bespoke tattoo designs that are as unique as you are. Explore our portfolio and book your consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MUIButton variant="contained">
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </MUIButton>
              <MUIButton variant="outlined">
                View Portfolio
              </MUIButton>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-left opacity-80">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative">
                    <img src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 mt-1">
                  <strong className="text-white">500+</strong> Happy Clients
                </span>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: Immagine */}
          <div className="relative group"> {/* Removed hidden lg:block */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-purple-600 rounded-[2rem] -rotate-3 opacity-30 group-hover:-rotate-6 transition-transform duration-500"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Art" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
              /> {/* Adjusted height for responsiveness */}
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default Hero;
