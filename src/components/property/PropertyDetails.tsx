
import React from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bed, Bath, Square, Calendar, MapPin } from "lucide-react";

interface PropertyDetailsProps {
  property: {
    id: string;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  onScheduleVisit: () => void;
}

const PropertyDetails = ({ property, onScheduleVisit }: PropertyDetailsProps) => {
  const { title, address, price, bedrooms, bathrooms, area } = property;

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
      </DialogHeader>
      
      <div className="mt-4 space-y-4">
        {/* Imagem do imóvel (mockada) */}
        <div className="h-64 bg-slate-200 rounded-md overflow-hidden relative">
          <img
            src={`https://source.unsplash.com/featured/800x600/?apartment,house,${property.id}`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-estate-primary text-white py-1 px-3 rounded-full font-bold">
            {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
        </div>
        
        {/* Localização */}
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address}</span>
        </div>
        
        {/* Características */}
        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg">
            <Bed className="h-5 w-5 text-estate-primary mb-1" />
            <p className="text-sm font-medium">{bedrooms} quartos</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg">
            <Bath className="h-5 w-5 text-estate-primary mb-1" />
            <p className="text-sm font-medium">{bathrooms} banheiros</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg">
            <Square className="h-5 w-5 text-estate-primary mb-1" />
            <p className="text-sm font-medium">{area} m²</p>
          </div>
        </div>
        
        {/* Descrição */}
        <div>
          <h3 className="font-medium mb-2">Descrição</h3>
          <p className="text-sm text-muted-foreground">
            Excelente imóvel localizado em área nobre, com acabamento de alto padrão. 
            Próximo a comércios, transporte público e áreas de lazer. 
            Condomínio com infraestrutura completa incluindo academia, piscina e segurança 24h.
          </p>
        </div>
      </div>
      
      <DialogFooter className="mt-6">
        <Button 
          onClick={onScheduleVisit} 
          className="bg-estate-primary hover:bg-estate-secondary transition-all duration-300 gap-2"
        >
          <Calendar className="h-4 w-4" />
          Agendar Visita
        </Button>
      </DialogFooter>
    </>
  );
};

export default PropertyDetails;
