
import { Award, Star, ScrollText, Instagram } from 'lucide-react';
import { MUIButton, MUICard, MUIChip } from '../ui/MuiComponents';

const ArtistBio = () => {
  return (
    <section id="chi-siamo" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Immagine Artista con Cornice Decorativa */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-purple-600 rounded-[2rem] rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-500"></div>
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
              alt="Master Nail Artist" 
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Nome */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-24">
              <h3 className="text-3xl font-serif text-white font-bold">Elena Visionary</h3>
              <p className="text-rose-400 text-sm tracking-widest uppercase mt-1">Master Artist & Founder</p>
            </div>
          </div>
        </div>

        {/* Contenuto Testuale */}
        <div className="space-y-8">
          <MUIChip label="The Artist" icon={Star} />
          
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Non disegno solo unghie, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
              costruisco architetture.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-purple-500/30 pl-6">
            Con oltre 10 anni di esperienza internazionale tra Milano e Tokyo, ho sviluppato un metodo proprietario che fonde la precisione della manicure russa con l'estro artistico italiano.
            Il mio obiettivo non è coprire, ma rivelare l'eleganza naturale delle tue mani.
          </p>

          {/* Stats / Credentials Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <MUICard className="p-4 flex items-center gap-4 bg-white/5 border-none">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12+</p>
                <p className="text-xs text-gray-500 uppercase">Premi Int.</p>
              </div>
            </MUICard>
            
            <MUICard className="p-4 flex items-center gap-4 bg-white/5 border-none">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <ScrollText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-gray-500 uppercase">Diplomi Master</p>
              </div>
            </MUICard>
          </div>

          <div className="flex gap-4 pt-4">
            <MUIButton variant="contained" onClick={undefined} fullWidth={undefined}>Prenota con Elena</MUIButton>
            <MUIButton variant="text" className="gap-2"  onClick={undefined} fullWidth={undefined}>
              <Instagram className="w-4 h-4" /> Segui i Lavori
            </MUIButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;