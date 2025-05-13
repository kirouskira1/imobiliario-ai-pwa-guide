
import React from "react";
import Layout from "../components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const AgendamentosPage = () => {
  // Dados mockados de agendamentos
  const appointments = [
    {
      id: "1",
      propertyTitle: "Apartamento Moderno - Vila Mariana",
      address: "Rua Domingos de Morais, 1500, São Paulo",
      date: "2024-05-25",
      time: "14:00",
      status: "confirmado"
    },
    {
      id: "2",
      propertyTitle: "Cobertura com Vista Panorâmica",
      address: "Rua Oscar Freire, 1200, Jardins, São Paulo",
      date: "2024-05-27",
      time: "10:00",
      status: "pendente"
    }
  ];

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateStr).toLocaleDateString("pt-BR", options);
  };

  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Meus Agendamentos</h1>
        
        {appointments.length > 0 ? (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">{appointment.propertyTitle}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      appointment.status === "confirmado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {appointment.status === "confirmado" ? "Confirmado" : "Pendente"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>{appointment.address}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-estate-primary" />
                    <span>
                      <strong>Data e Hora:</strong> {formatDate(appointment.date)} às {appointment.time}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg bg-slate-50">
            <Calendar className="h-16 w-16 mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Nenhum agendamento</h2>
            <p className="text-muted-foreground">
              Você ainda não tem agendamentos de visitas.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AgendamentosPage;
