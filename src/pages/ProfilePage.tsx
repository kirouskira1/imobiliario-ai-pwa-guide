
import React from "react";
import Layout from "../components/layout/Layout";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, MapPin, Calendar, Edit, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Dados mockados do usuário
  const userData = {
    name: "Ana Silva",
    email: "ana.silva@email.com",
    phone: "(11) 98765-4321",
    appointments: [
      {
        id: "1",
        propertyTitle: "Apartamento Moderno - Vila Mariana",
        date: "20/06/2024",
        time: "15:00",
        status: "confirmed"
      },
      {
        id: "2",
        propertyTitle: "Cobertura Duplex - Moema",
        date: "25/06/2024",
        time: "10:00",
        status: "pending"
      }
    ]
  };

  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você saiu da sua conta com sucesso."
    });
    navigate("/");
  };

  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Meu Perfil</h1>
        
        {/* Dados pessoais */}
        <Card className="mb-8 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">Dados Pessoais</CardTitle>
              <CardDescription>Suas informações de contato</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nome</p>
                <p className="font-medium">{userData.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{userData.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-medium">{userData.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Agendamentos */}
        <Card className="mb-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Meus Agendamentos</CardTitle>
            <CardDescription>Histórico de visitas agendadas</CardDescription>
          </CardHeader>
          <CardContent>
            {userData.appointments.length > 0 ? (
              <div className="space-y-4">
                {userData.appointments.map((appointment) => (
                  <div 
                    key={appointment.id} 
                    className="p-4 border rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{appointment.propertyTitle}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{appointment.date} às {appointment.time}</span>
                      </div>
                    </div>
                    <div>
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Você ainda não tem agendamentos.</p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => navigate("/mapa")}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Explorar Imóveis
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Botão de logout */}
        <div className="flex justify-end">
          <Button 
            variant="ghost" 
            className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Sair da Conta
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
