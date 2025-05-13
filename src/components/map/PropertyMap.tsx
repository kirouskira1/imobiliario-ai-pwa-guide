
import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, Filter, MessageCircle, Home, Bed, Bath, Square } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Componente para o mapa de propriedades
const PropertyMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Simulação de carregamento do mapa
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)]">
      {/* Overlay de carregamento */}
      {loading && (
        <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 animate-pulse">
            <Loader2 className="h-10 w-10 text-estate-primary animate-spin" />
            <p className="text-lg font-medium">Carregando mapa...</p>
          </div>
        </div>
      )}
      
      {/* Container do mapa (placeholder) */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full bg-slate-100 flex items-center justify-center flex-col"
      >
        <div className="text-lg text-estate-dark/70 mb-8 font-medium">Mapa interativo em breve aqui</div>
        
        {/* Cards de exemplo de imóveis que teriam pins no mapa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl px-4">
          {[1, 2].map((index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <div className="h-48 bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Home className="w-12 h-12 text-slate-400" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  Apartamento Moderno - {index === 1 ? 'Vila Mariana' : 'Pinheiros'}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>Rua {index === 1 ? 'Domingos de Morais' : 'Fradique Coutinho'}, São Paulo</span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1 text-estate-neutral" />
                    <span className="text-sm">{index === 1 ? '3' : '2'} quartos</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1 text-estate-neutral" />
                    <span className="text-sm">{index === 1 ? '2' : '1'} banheiros</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1 text-estate-neutral" />
                    <span className="text-sm">{index === 1 ? '78' : '65'} m²</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-estate-primary">
                    {index === 1 ? 'R$ 850.000' : 'R$ 720.000'}
                  </div>
                  <Button className="rounded-lg border-2 border-estate-primary transition-all duration-300 hover:bg-estate-secondary hover:border-estate-secondary hover:shadow-md">
                    Agendar Visita
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Botão de filtro - design refinado */}
      <div className="absolute top-4 right-4 z-20">
        <Button 
          className="bg-white text-estate-dark hover:bg-slate-50 hover:shadow-md transition-all duration-300 rounded-lg border border-slate-200 font-medium"
        >
          <Filter className="h-4 w-4 mr-2" />
          <span>Filtros</span>
        </Button>
      </div>
      
      {/* Ícone flutuante do assistente */}
      <div className="absolute bottom-6 right-6 z-30">
        <Button 
          onClick={() => setChatOpen(true)}
          className="h-14 w-14 rounded-full bg-estate-primary hover:bg-estate-secondary shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
      
      {/* Popup do assistente */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Assistente LuxImob</DialogTitle>
          </DialogHeader>
          <div className="p-4 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-estate-primary" />
            <p className="text-lg font-medium">Em breve, nosso assistente IA vai te ajudar aqui!</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyMap;
