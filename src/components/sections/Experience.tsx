import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MUIChip } from '../ui/MuiComponents';

const Experience = () => (
  <section className="py-24 bg-[#050505] relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-rose-900/10 blur-[100px] rounded-full"></div>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 md:order-1">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop" alt="Tools" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-12" />
          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop" alt="Polish" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
        </div>
        {/* Floating Stat Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-rose-500/30 p-6 rounded-2xl shadow-2xl text-center">
          <p className="text-4xl font-bold text-white mb-1">10k+</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Clienti Soddisfatti</p>
        </div>
      </div>

      <div className="order-1 md:order-2 space-y-6">
        <MUIChip label="Filosofia & Igiene" icon={ShieldCheck} />
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          La Sicurezza è il <br/> Vero Lusso
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          In Lumina, non scendiamo a compromessi. Ogni strumento metallico viene sottoposto a un ciclo di <strong>sterilizzazione in autoclave di grado medico</strong>. 
          Usiamo lime monouso per ogni cliente e prodotti certificati privi di acidi aggressivi.
        </p>
        <ul className="space-y-4 pt-4">
          {[
            "Autoclave di Classe B (Standard Ospedaliero)",
            "Kit Lima Monouso Sigillato",
            "Ambiente Sanificato con Ozono",
            "Garanzia di 7 giorni sul trattamento"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;