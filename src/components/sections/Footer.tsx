import { Gem, MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-center md:text-left">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 animate-fade-in-up">
      <div className="space-y-4">
        <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-xl text-white">
          <Gem className="text-rose-500 w-6 h-6" />

          <span>LUMINA</span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">
          Il punto di riferimento per la bellezza delle tue mani. Tecnologia
          avanzata, arte e passione in un unico luogo.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Orari</h4>

        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex justify-between">
            <span>Lun - Ven:</span>{" "}
            <span className="text-white">09:00 - 20:00</span>
          </li>

          <li className="flex justify-between">
            <span>Sabato:</span>{" "}
            <span className="text-white">09:00 - 18:00</span>
          </li>

          <li className="flex justify-between">
            <span>Domenica:</span> <span className="text-rose-500">Chiuso</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Contatti</h4>

        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="flex items-center justify-center md:justify-start gap-3">
            <MapPin className="w-4 h-4 text-rose-500" />
            Via della Spiga, 12 - Milano
          </li>

          <li className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="w-4 h-4 text-rose-500" />
            +39 02 123 4567
          </li>

          <li className="flex items-center justify-center md:justify-start gap-3">
            <Instagram className="w-4 h-4 text-rose-500" />
            @lumina.nails.milano
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Gallery</h4>

        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-800 rounded-md overflow-hidden hover:opacity-80 cursor-pointer"
            >
              <img
                src={`https://images.unsplash.com/photo-${
                  i % 2 === 0
                    ? "1604654894610-df63bc536371"
                    : "1632345031435-8727f6897d53"
                }?q=80&w=100&auto=format&fit=crop`}
                className="w-full h-full object-cover"
                alt="Instagram"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs uppercase tracking-wider">
      © 2024 Lumina Nail Lounge. All rights reserved. Design by Nexus.
    </div>
  </footer>
);

export default Footer;
