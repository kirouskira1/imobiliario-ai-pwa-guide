
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
    imageUrl?: string; // Tornar opcional para compatibilidade
  };
  onScheduleVisit: () => void;
}

const PropertyDetails = ({ property, onScheduleVisit }: PropertyDetailsProps) => {
  const { title, address, price, bedrooms, bathrooms, area, imageUrl } = property;

  // Lista de imagens de backup caso a propriedade não tenha uma imagem
  const fallbackImages = [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
  ];

  // Use a imagem da propriedade ou selecione uma das imagens de backup
  const propertyImage = imageUrl || `${fallbackImages[Number(property.id) % fallbackImages.length]}?auto=format&fit=crop&w=800&q=80`;

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
      </DialogHeader>
      
      <div className="mt-4 space-y-4">
        {/* Imagem do imóvel */}
        <div className="h-64 bg-slate-200 rounded-md overflow-hidden relative">
          <img
            src={propertyImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback para uma imagem genérica se a imagem falhar
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80";
            }}
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
