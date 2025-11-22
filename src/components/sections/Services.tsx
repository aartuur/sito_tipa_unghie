import { Palette, Sparkles, Gem, Heart, ArrowRight } from "lucide-react";
import { MUICard } from "../ui/MuiComponents";
import AnimationWrapper from '../ui/AnimationWrapper'; // Import AnimationWrapper

const Services = () => {
  const services = [
    {
      title: "Gel Reconstruction",
      price: "da €50",
      icon: Palette,
      desc: "Allungamento sculturale con formine e gel di alta viscosità.",
    },
    {
      title: "Nail Art Design",
      price: "da €15",
      icon: Sparkles,
      desc: "Decorazioni a mano libera, cristalli Swarovski e micropittura.",
    },
    {
      title: "Semipermanente HD",
      price: "da €35",
      icon: Gem,
      desc: "Rinforzo della lamina naturale con base rubber e colore premium.",
    },
    {
      title: "Spa Manicure",
      price: "da €40",
      icon: Heart,
      desc: "Trattamento rigenerante con scrub, maschera e massaggio.",
    },
  ];

  return (
    <section id="servizi" className="py-24 bg-[#0a0a0a] relative">
      <AnimationWrapper> {/* Wrap main content with AnimationWrapper */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-bold tracking-widest text-sm uppercase">
              Il Nostro Menu
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-3 mb-6">
              Trattamenti Esclusivi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <MUICard
                key={idx}
                className="p-8 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 shadow-lg">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-lg font-serif text-rose-300 font-bold">
                    {service.price}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </MUICard>
            ))}
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Services;
