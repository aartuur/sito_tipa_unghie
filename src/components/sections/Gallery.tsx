import { Instagram, ZoomIn } from "lucide-react";
import AnimationWrapper from '../ui/AnimationWrapper'; // Import AnimationWrapper

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
      title: "Velvet Burgundy",
      category: "Dark Couture",
    },
    {
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=800&q=80",
      title: "Rose Petal Soft",
      category: "Bridal Chic",
    },
    {
      src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
      title: "Golden Sculpt",
      category: "Luxury 3D",
    },
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      title: "Classic Rouge",
      category: "Iconic Red",
    },
    {
      src: "https://images.unsplash.com/photo-1623930154261-37f8b293c059?auto=format&fit=crop&w=800&q=80",
      title: "Holo Chrome",
      category: "Trend 2025",
    },
    {
      src: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=800&q=80",
      title: "Pearl White",
      category: "Minimal Glam",
    },
  ];

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-black relative">
      {/* Sfondo decorativo sottile */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-900/5 blur-3xl pointer-events-none" />

      <AnimationWrapper> {/* Wrap main content with AnimationWrapper */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* HEADER: Centrato su mobile (items-center), a destra su desktop (md:items-end) */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6">
            {/* TESTO: Centrato su mobile (text-center), a sinistra su desktop (md:text-left) */}
            <div className="text-center md:text-left w-full md:w-auto">
              {/* BADGE: Centrato su mobile (justify-center), a sinistra su desktop */}
              <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-[1px] bg-rose-500"></span>
                Excellence in Details
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mt-4 leading-tight">
                Capolavori <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  in Miniatura
                </span>
              </h2>
            </div>
            {/* BOTTONE INSTAGRAM: Larghezza piena su mobile per centrare flex */}
            <a
              href="#"
              className="group flex items-center gap-3 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto justify-center md:justify-start"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium tracking-wide">
                @lumina.nails.milano
              </span>
            </a>
          </div>

          {/* GRID GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <AnimationWrapper key={idx} delay={idx * 0.1}> {/* Wrap each card with AnimationWrapper and add incremental delay */}
                <div
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer border border-white/5"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Info on Hover */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="self-start mb-3 overflow-hidden">
                      <span className="inline-block px-3 py-1 bg-rose-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {img.category}
                      </span>
                    </div>

                    <div className="overflow-hidden">
                      <h3 className="text-white text-2xl font-serif font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {img.title}
                      </h3>
                    </div>

                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-200 hover:bg-white hover:text-black">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm tracking-wide">
              Guarda altri{" "}
              <span className="text-white font-bold">120+ lavori</span> sul nostro
              profilo social
            </p>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Gallery;
