
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-r from-estate-primary to-estate-secondary">
      <div className="absolute inset-0 bg-estate-dark/20"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Encontre o Imóvel<br />dos Seus Sonhos
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Utilizamos inteligência artificial para encontrar a propriedade ideal para você. Comece sua jornada agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/mapa">
              <Button className="text-md px-6 py-6 bg-white text-estate-primary hover:bg-estate-light font-medium gap-2">
                <MapPin className="h-5 w-5" />
                Explorar Mapa
              </Button>
            </Link>
            <Link to="/buscar">
              <Button variant="outline" className="text-md px-6 py-6 bg-transparent border-white text-white hover:bg-white/10 hover:border-white font-medium gap-2">
                <Search className="h-5 w-5" />
                Buscar Imóveis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
