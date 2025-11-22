import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MUIChip } from '../ui/MuiComponents';
// Assicurati che il percorso di importazione sia corretto in base alla tua struttura
// Se non hai MUIChip separato, puoi rimuovere l'import e usare un div semplice o copiare il componente qui

const PriceList = () => {
  // Definiamo il tipo per activeTab per sicurezza (opzionale in JS puro ma buona pratica)
  const [activeTab, setActiveTab] = useState('hands');

  const tabs = [
    { id: 'hands', label: 'Manicure & Gel' },
    { id: 'art', label: 'Nail Art & Design' },
    { id: 'feet', label: 'Pedicure SPA' },
  ];

  const pricingData = {
    hands: [
      { name: "Dry Manicure (Russa)", price: "€35", desc: "Pulizia profonda cuticole, forma e lucidatura senza smalto." },
      { name: "Semipermanente Rinforzato", price: "€45", desc: "Base rubber strutturante, colore premium, top coat glass." },
      { name: "Ricostruzione Gel (Nuovo Set)", price: "€70", desc: "Allungamento con cartina, forma a scelta (Mandorla/Square)." },
      { name: "Refill Gel (Entro 3 sett.)", price: "€50", desc: "Ripristino architettura, accorciamento e cambio colore." },
      { name: "Refill Correttivo", price: "€60", desc: "Correzione unghie che vanno verso il basso o storte." },
    ],
    art: [
      { name: "Baby Boomer / French", price: "+ €10", desc: "Sfumatura classica o French dipinta a mano in superficie." },
      { name: "Swarovski Elements", price: "€0.50/pz", desc: "Applicazione cristalli originali Swarovski." },
      { name: "Nail Art Semplice (2 dita)", price: "€5", desc: "Linee minimal, foil, glitter sfuso." },
      { name: "Nail Art Complessa (per dito)", price: "da €5", desc: "Micropittura, acquerello, effetti 3D, personaggi." },
    ],
    feet: [
      { name: "Pedicure Estetico Dry", price: "€40", desc: "Solo lavorazione unghie e cuticole con semipermanente." },
      { name: "Pedicure Curativo SPA", price: "€60", desc: "Trattamento callosità, scrub enzimatico, maschera e massaggio." },
      { name: "Ricostruzione Alluce", price: "€10", desc: "Ricostruzione angolo mancante o traumi con acrigel." },
    ]
  };

  return (
    <section id="prezzi" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto px-6 translate-y-[-16em] ">
        
        {/* Header Sezione */}
        <div className="text-center mb-12">
          {/* Se non hai MUIChip, commenta questa riga o sostituiscila con uno span */}
          <div className="mb-4 inline-block"><MUIChip label="Listino 2024" icon={Sparkles} /></div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Menu Servizi</h2>
          <p className="text-gray-400 mt-2">Trasparenza e qualità in ogni dettaglio.</p>
        </div>

        {/* FIX MOBILE TABS:
           - flex-nowrap: Impedisce ai bottoni di andare a capo
           - overflow-x-auto: Abilita lo scroll orizzontale se non c'è spazio
           - justify-start: Allinea a sinistra su mobile per scroll naturale
           - md:justify-center: Centra su desktop
           - -mx-6 px-6: Estende l'area scrollabile fino ai bordi dello schermo su mobile
           - no-scrollbar: Nasconde la barra di scorrimento (estetica)
        */}
        <div className="flex overflow-hidden flex-nowrap overflow-x-auto gap-3 pb-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 md:justify-center md:pb-0 scrollbar-hide snap-x">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap flex-shrink-0 snap-center
                px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white border-transparent shadow-lg shadow-rose-500/25 scale-105' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing List Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/5 shadow-2xl animate-fade-in min-h-[400px]">
          <div className="space-y-8">
            {pricingData[activeTab]?.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="flex justify-between items-baseline mb-2 relative z-10">
                  <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-rose-300 transition-colors pr-4">
                    {item.name}
                  </h4>
                  {/* Linea punteggiata decorativa tra nome e prezzo */}
                  <div className="flex-grow mx-4 border-b border-white/10 border-dotted h-1 opacity-50 hidden sm:block"></div>
                  <span className="text-lg md:text-xl font-bold text-rose-400 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 max-w-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm mb-4">I prezzi possono subire variazioni in base alla lunghezza e complessità del lavoro.</p>
            <button className="inline-flex items-center text-white hover:text-rose-400 transition-colors font-medium text-sm uppercase tracking-widest gap-2 group">
              Scarica Listino PDF 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PriceList;