
import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, Filter } from "lucide-react";

// Componente temporário para o mapa
// No futuro, será integrado com Google Maps ou Mapbox
const PropertyMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

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
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-10 w-10 text-estate-primary animate-spin" />
            <p className="text-lg font-medium">Carregando mapa...</p>
          </div>
        </div>
      )}
      
      {/* Container do mapa */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full bg-slate-200" 
        style={{ 
          backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-46.638,-23.5503,12,0/1280x720?access_token=pk.placeholder')", 
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      >
        {/* Este é um placeholder. Será substituído pela API do Google Maps ou Mapbox */}
      </div>
      
      {/* Botão de filtro - fixo no canto */}
      <div className="absolute top-4 right-4 z-20">
        <Button className="bg-white text-estate-dark hover:bg-slate-50 shadow-lg flex gap-2">
          <Filter className="h-4 w-4" />
          <span>Filtros</span>
        </Button>
      </div>
      
      {/* Cards de imóveis - fixos para demonstração */}
      <div className="absolute bottom-4 left-4 right-4 z-20 overflow-x-auto scrollbar-none">
        <div className="flex gap-4 pb-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="min-w-[260px] max-w-[260px] bg-white shadow-lg">
              <div className="p-3">
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 text-estate-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium line-clamp-1">Apartamento {index + 1}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      Rua Exemplo, {100 + index} - São Paulo
                    </p>
                    <p className="text-estate-primary font-semibold mt-1">
                      {(800000 + index * 100000).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
