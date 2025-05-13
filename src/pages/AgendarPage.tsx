
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AgendarPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [property, setProperty] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !property) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para agendar uma visita.",
        variant: "destructive",
      });
      return;
    }

    // Simular cadastro de agendamento
    toast({
      title: "Agendamento realizado!",
      description: `Sua visita foi agendada para ${date} às ${time}.`,
    });

    // Reset do formulário
    setDate("");
    setTime("");
    setProperty("");
  };

  return (
    <Layout>
      <div className="container max-w-md px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Agendar Visita</h1>
        
        <Card>
          <CardHeader className="pb-2">
            <h2 className="text-xl font-semibold">Informações da Visita</h2>
            <p className="text-muted-foreground text-sm">
              Preencha os dados abaixo para agendar uma visita ao imóvel
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="property" className="text-sm font-medium">
                  Imóvel
                </label>
                <select 
                  id="property" 
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Selecione um imóvel</option>
                  <option value="1">Apartamento Moderno - Vila Mariana</option>
                  <option value="2">Apartamento Estilo Industrial - Pinheiros</option>
                  <option value="3">Cobertura Duplex - Moema</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Data da Visita
                </label>
                <input 
                  type="date" 
                  id="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-estate-primary hover:bg-estate-secondary"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Visita
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AgendarPage;
