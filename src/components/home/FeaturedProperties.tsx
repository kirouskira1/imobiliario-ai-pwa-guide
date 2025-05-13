
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, MaximizeIcon, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import PropertyDetails from "../property/PropertyDetails";
import { useToast } from "@/hooks/use-toast";

interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  propertyType: string;
  onClick: () => void;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  propertyType,
  onClick,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group animate-fade-in">
      <div className="relative overflow-hidden h-48 cursor-pointer" onClick={onClick}>
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-estate-primary hover:bg-estate-primary">
          {propertyType}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold line-clamp-1 cursor-pointer" onClick={onClick}>{title}</h3>
          <p className="text-estate-primary font-semibold">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms} quartos</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms} banheiros</span>
          </div>
          <div className="flex items-center">
            <MaximizeIcon className="h-4 w-4 mr-1" />
            <span>{area} m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-1 text-estate-primary border-estate-primary hover:bg-estate-primary/5"
          onClick={onClick}
        >
          <Calendar className="h-4 w-4" />
          <span>Agendar</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-1"
          onClick={onClick}
        >
          <span>Ver detalhes</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const { toast } = useToast();

  const properties = [
    {
      id: "1",
      title: "Apartamento de Luxo em Alphaville",
      address: "Alameda Rio Negro, 500 - Alphaville, Barueri",
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070",
      propertyType: "Apartamento",
    },
    {
      id: "2",
      title: "Casa em Condomínio Fechado",
      address: "Rua dos Pinheiros, 1000 - Jardim Europa, São Paulo",
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2070",
      propertyType: "Casa",
    },
    {
      id: "3",
      title: "Studio Moderno no Centro",
      address: "Av. Paulista, 1500 - Bela Vista, São Paulo",
      price: 650000,
      bedrooms: 1,
      bathrooms: 1,
      area: 55,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980",
      propertyType: "Studio",
    },
  ];

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setShowPropertyDetails(true);
  };

  const handleScheduleVisit = () => {
    setShowPropertyDetails(false);
    setShowScheduleDialog(true);
  };

  const handleConfirmSchedule = () => {
    if (!scheduleDate || !scheduleTime) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, selecione data e horário para agendar a visita.",
        variant: "destructive",
      });
      return;
    }

    // Simular cadastro de agendamento
    toast({
      title: "Agendamento confirmado!",
      description: `Sua visita ao imóvel ${selectedProperty?.title} está agendada para ${scheduleDate} às ${scheduleTime}.`,
    });

    setShowScheduleDialog(false);
    setScheduleDate("");
    setScheduleTime("");
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Imóveis em Destaque</h2>
            <p className="text-muted-foreground">Propriedades selecionadas pela nossa equipe</p>
          </div>
          <Link to="/mapa">
            <Button variant="outline" className="gap-2">
              <span>Ver Todos</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              {...property} 
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      </div>

      {/* Dialog de detalhes da propriedade */}
      <Dialog open={showPropertyDetails} onOpenChange={setShowPropertyDetails}>
        <DialogContent className="sm:max-w-3xl">
          {selectedProperty && (
            <PropertyDetails 
              property={selectedProperty} 
              onScheduleVisit={handleScheduleVisit}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog de agendamento de visita */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-md">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Agendar Visita</h2>
            <p className="text-muted-foreground">Escolha a data e horário para visitar o imóvel</p>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Data
                </label>
                <input 
                  type="date" 
                  id="date" 
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium">
                  Horário
                </label>
                <select 
                  id="time" 
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Selecione um horário</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>
                Cancelar
              </Button>
              <Button 
                onClick={handleConfirmSchedule}
                className="bg-estate-primary hover:bg-estate-secondary"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Confirmar Agendamento
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedProperties;
