
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, MaximizeIcon, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
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
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
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
        <Button variant="outline" size="sm" className="gap-1 text-estate-primary border-estate-primary hover:bg-estate-primary/5">
          <Calendar className="h-4 w-4" />
          <span>Agendar</span>
        </Button>
        <Link to={`/imovel/${id}`}>
          <Button variant="ghost" size="sm" className="gap-1">
            <span>Ver detalhes</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const FeaturedProperties = () => {
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

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Imóveis em Destaque</h2>
            <p className="text-muted-foreground">Propriedades selecionadas pela nossa equipe</p>
          </div>
          <Link to="/buscar">
            <Button variant="outline" className="gap-2">
              <span>Ver Todos</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
