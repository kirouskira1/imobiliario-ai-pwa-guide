
import React from "react";
import Layout from "../components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PropertyDetails from "../components/property/PropertyDetails";
import { useToast } from "@/hooks/use-toast";

const FavoritosPage = () => {
  const { toast } = useToast();
  const [selectedProperty, setSelectedProperty] = React.useState<any>(null);
  const [showPropertyDetails, setShowPropertyDetails] = React.useState(false);
  
  // Dados mockados de imóveis favoritados
  const favoriteProperties = [
    {
      id: "4",
      title: "Cobertura com Vista Panorâmica",
      address: "Rua Oscar Freire, 1200, Jardins, São Paulo",
      price: 1850000,
      bedrooms: 3,
      bathrooms: 3,
      area: 200,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
      propertyType: "Cobertura",
      favorite: true
    },
    {
      id: "5",
      title: "Casa em Condomínio Fechado",
      address: "Alameda Campinas, 500, Alphaville, Barueri",
      price: 2350000,
      bedrooms: 4,
      bathrooms: 3,
      area: 320,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2070",
      propertyType: "Casa",
      favorite: true
    }
  ];

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setShowPropertyDetails(true);
  };

  const handleRemoveFavorite = (id: string) => {
    toast({
      title: "Imóvel removido dos favoritos",
      description: "Este imóvel foi removido da sua lista de favoritos."
    });
  };

  const handleScheduleVisit = () => {
    setShowPropertyDetails(false);
  };

  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-8 mx-auto animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Meus Favoritos</h1>
          <Link to="/mapa">
            <Button variant="outline" className="gap-2">
              <MapPin className="h-4 w-4" />
              Explorar Mapa
            </Button>
          </Link>
        </div>
        
        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div 
                  className="relative h-48 cursor-pointer" 
                  onClick={() => handlePropertyClick(property)}
                >
                  <img 
                    src={property.imageUrl} 
                    alt={property.title}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback para uma imagem genérica se a imagem falhar
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="bg-white hover:bg-red-50 h-8 w-8 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFavorite(property.id);
                      }}
                      aria-label="Remover dos favoritos"
                    >
                      <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <h3 
                    className="text-lg font-bold cursor-pointer"
                    onClick={() => handlePropertyClick(property)}
                  >
                    {property.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>{property.address}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-estate-primary font-semibold">
                      {property.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-estate-primary hover:bg-estate-secondary"
                      onClick={() => handlePropertyClick(property)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg bg-slate-50">
            <Heart className="h-16 w-16 mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Nenhum favorito ainda</h2>
            <p className="text-muted-foreground mb-6">
              Você ainda não adicionou nenhum imóvel aos seus favoritos.
            </p>
            <Link to="/mapa">
              <Button className="bg-estate-primary hover:bg-estate-secondary gap-2">
                <Home className="h-4 w-4" />
                Explorar Imóveis
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Dialog de detalhes da propriedade */}
      <Dialog open={showPropertyDetails} onOpenChange={setShowPropertyDetails}>
        <DialogContent className="sm:max-w-3xl" aria-describedby="property-details-dialog">
          <div id="property-details-dialog" className="sr-only">Detalhes completos do imóvel selecionado</div>
          {selectedProperty && (
            <PropertyDetails 
              property={selectedProperty} 
              onScheduleVisit={handleScheduleVisit}
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default FavoritosPage;
