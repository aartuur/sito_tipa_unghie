
import { MUIButton } from '../ui/MuiComponents';

const MarketingStrip = () => (
  <div className="bg-gradient-to-r from-rose-900 to-purple-900 py-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-center md:text-left">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Sconto del 20% sul Primo Appuntamento</h3>
        <p className="text-rose-200">Iscriviti alla nostra newsletter VIP per ricevere offerte esclusive.</p>
      </div>
      <div className="flex w-full md:w-auto gap-2">
        <input 
          type="email" 
          placeholder="La tua email..." 
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50 w-full md:w-64"
        />
        <MUIButton variant="text" className="bg-white text-rose-900 hover:bg-gray-200"  onClick={undefined} fullWidth={undefined}>
          Iscriviti
        </MUIButton>
      </div>
    </div>
  </div>
);

export default MarketingStrip;