






import { useState } from 'react';



import { Sparkles, ArrowRight, CheckCircle2, LayoutGrid, List } from 'lucide-react';



import { MUIChip, MUICard, MUIButton } from '../ui/MuiComponents';







interface PriceItem {



  name: string;



  price: string;



  desc?: string; // Optional for table view



  details?: string[]; // Optional for table view, required for card view



}







interface PricingData {



  hands: PriceItem[];



  art: PriceItem[];



  feet: PriceItem[];



}







const PriceList = () => {



  const [activeTab, setActiveTab] = useState<keyof PricingData>('hands');



  const [viewMode, setViewMode] = useState<'table' | 'card'>('table'); // Default to table view







  const tabs = [



    { id: 'hands', label: 'Manicure & Gel' },



    { id: 'art', label: 'Nail Art & Design' },



    { id: 'feet', label: 'Pedicure SPA' },



  ];







  // Data for the simple table view (original descriptions)



  const tablePricingData: PricingData = {



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







  // Data for the advanced card view (with detailed features)



  const cardPricingData: PricingData = {



    hands: [



      { 



        name: "Dry Manicure (Russa)", 



        price: "€35", 



        details: [



          "Pulizia profonda cuticole", 



          "Forma e lucidatura unghie", 



          "Senza applicazione smalto",



          "Tecnica non invasiva"



        ] 



      },



      { 



        name: "Semipermanente Rinforzato", 



        price: "€45", 



        details: [



          "Base rubber strutturante", 



          "Colore premium a scelta", 



          "Top coat effetto vetro",



          "Durata 3-4 settimane"



        ] 



      },



      { 



        name: "Ricostruzione Gel (Nuovo Set)", 



        price: "€70", 



        details: [



          "Allungamento con cartina", 



          "Forma e lunghezza personalizzabili", 



          "Gel di alta qualità",



          "Include un colore base"



        ] 



      },



      { 



        name: "Refill Gel (Entro 3 sett.)", 



        price: "€50", 



        details: [



          "Ripristino architettura unghia", 



          "Accorciamento e rimodellamento", 



          "Cambio colore incluso",



          "Mantenimento struttura esistente"



        ] 



      },



      { 



        name: "Refill Correttivo", 



        price: "€60", 



        details: [



          "Correzione unghie 'all'ingiù'", 



          "Riparazione unghie storte", 



          "Rifacimento architettura",



          "Include un colore base"



        ] 



      },



    ],



    art: [



      { 



        name: "Baby Boomer / French", 



        price: "+ €10", 



        details: [



          "Sfumatura classica bianco/rosa", 



          "French dipinta a mano", 



          "Stile elegante e senza tempo",



          "Perfetto per ogni occasione"



        ] 



      },



      { 



        name: "Swarovski Elements", 



        price: "€0.50/pz", 



        details: [



          "Applicazione cristalli originali", 



          "Varie dimensioni e colori", 



          "Fissaggio duraturo",



          "Punto luce brillante"



        ] 



      },



      { 



        name: "Nail Art Semplice (2 dita)", 



        price: "€5", 



        details: [



          "Linee minimaliste", 



          "Foil e glitter selezionati", 



          "Design geometrici semplici",



          "Perfetto per un tocco di stile"



        ] 



      },



      { 



        name: "Nail Art Complessa (per dito)", 



        price: "da €5", 



        details: [



          "Micropittura artistica", 



          "Effetti acquerello", 



          "Applicazioni 3D complesse",



          "Personaggi e soggetti personalizzati"



        ] 



      },



    ],



    feet: [



      { 



        name: "Pedicure Estetico Dry", 



        price: "€40", 



        details: [



          "Lavorazione unghie e cuticole", 



          "Applicazione semipermanente", 



          "Piedi curati e colorati",



          "Tecnica dry non invasiva"



        ] 



      },



      { 



        name: "Pedicure Curativo SPA", 



        price: "€60", 



        details: [



          "Trattamento callosità e duroni", 



          "Scrub enzimatico rinfrescante", 



          "Maschera e massaggio rilassante",



          "Risultati morbidi e idratati"



        ] 



      },



      { 



        name: "Ricostruzione Alluce", 



        price: "€10", 



        details: [



          "Ricostruzione angolo mancante", 



          "Correzione traumi ungueali", 



          "Utilizzo di acrigel resistente",



          "Aspetto naturale e curato"



        ] 



      },



    ]



  };







  const currentPricingData = viewMode === 'table' ? tablePricingData : cardPricingData;







  return (



    <section id="prezzi" className="py-24 bg-[#0a0a0a] relative">



      <div className="max-w-7xl mx-auto px-6 animate-fade-in-up"> {/* Changed max-w-4xl to max-w-7xl for more space */}



        



        {/* Header Sezione */}



        <div className="text-center mb-12 relative"> {/* Added relative for view toggle positioning */}



          <div className="mb-4 inline-block"><MUIChip label="Listino 2024" icon={Sparkles} /></div>



          



          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-4">Menu Servizi & Prezzi</h2>



          <p className="text-gray-400 mt-2">Trasparenza e qualità in ogni dettaglio. Scegli il trattamento perfetto per te.</p>







          {/* View Toggle Button */}



          <div className="absolute top-0 right-0 md:static md:mt-4 flex justify-center gap-2">



            <button



              onClick={() => setViewMode('table')}



              className={`p-2 rounded-full transition-colors ${viewMode === 'table' ? 'bg-rose-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}



              title="Visualizza come Tabella"



            >



              <List className="w-5 h-5" />



            </button>



            <button



              onClick={() => setViewMode('card')}



              className={`p-2 rounded-full transition-colors ${viewMode === 'card' ? 'bg-rose-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}



              title="Visualizza come Card"



            >



              <LayoutGrid className="w-5 h-5" />



            </button>



          </div>



        </div>







        {/* MOBILE TABS */}



        <div className="flex overflow-hidden flex-nowrap overflow-x-auto gap-3 pb-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 md:justify-center md:pb-0 scrollbar-hide snap-x">



          {tabs.map((tab) => (



            <button



              key={tab.id}



              onClick={() => setActiveTab(tab.id as keyof PricingData)}



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







        {/* Conditional Pricing List Content */}



        {viewMode === 'table' ? (



          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/5 shadow-2xl animate-fade-in min-h-[400px]">



            <div className="space-y-8">



              {currentPricingData[activeTab]?.map((item, idx) => (



                <div key={idx} className="group relative">



                  <div className="flex justify-between items-baseline mb-2 relative z-10">



                    <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-rose-300 transition-colors pr-4">



                      {item.name}



                    </h4>



                    <div className="flex-grow mx-4 border-b border-white/10 border-dotted h-1 opacity-50 hidden sm:block"></div>



                    <span className="text-lg md:text-xl font-bold text-rose-400 whitespace-nowrap">{item.price}</span>



                  </div>



                  <p className="text-sm text-gray-500 max-w-lg leading-relaxed">{item.desc}</p>



                </div>



              ))}



            </div>



          </div>



        ) : (



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">



            {currentPricingData[activeTab]?.map((item, idx) => (



              <MUICard key={idx} className="p-8 relative group overflow-hidden cursor-pointer flex flex-col h-full">



                {/* Shine Effect */}



                <div className="absolute -inset-x-20 top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shine z-0" />



                



                <div className="relative z-10 flex flex-col h-full">



                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors pr-4">



                    {item.name}



                  </h3>



                  



                  <ul className="text-gray-400 text-sm space-y-2 mb-6 flex-grow">



                    {item.details?.map((detail, dIdx) => ( // Use optional chaining for details



                      <li key={dIdx} className="flex items-center gap-2">



                        <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" /> {detail}



                      </li>



                    ))}



                  </ul>



                  



                  <div className="mt-auto pt-4 border-t border-white/5">



                    <span className="text-xl font-serif text-rose-300 font-bold block mb-4">{item.price}</span>



                    <MUIButton variant="contained" className="w-full">



                      Prenota Ora



                      <ArrowRight className="w-4 h-4 ml-2" />



                    </MUIButton>



                  </div>



                </div>



              </MUICard>



            ))}



          </div>



        )}



        



        <div className="mt-12 pt-8 border-t border-white/10 text-center">



            <p className="text-gray-400 text-sm mb-4">I prezzi possono subire variazioni in base alla lunghezza e complessità del lavoro.</p>



            <MUIButton variant="text" className="inline-flex items-center text-white hover:text-rose-400 transition-colors font-medium text-sm uppercase tracking-widest gap-2 group">



              Scarica Listino PDF 



              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />



            </MUIButton>



        </div>







      </div>



    </section>



  );



};







export default PriceList;




