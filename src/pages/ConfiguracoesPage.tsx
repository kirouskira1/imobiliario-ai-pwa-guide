
import React from "react";
import Layout from "../components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConfiguracoesPage = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas preferências foram atualizadas com sucesso.",
    });
  };

  return (
    <Layout>
      <div className="container max-w-lg px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Configurações</h1>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold">Notificações</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="email-notif" className="text-sm">
                    Receber notificações por email
                  </label>
                  <input 
                    type="checkbox" 
                    id="email-notif" 
                    defaultChecked={true} 
                    className="rounded border-gray-300 text-estate-primary"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="push-notif" className="text-sm">
                    Receber notificações push
                  </label>
                  <input 
                    type="checkbox" 
                    id="push-notif" 
                    defaultChecked={true} 
                    className="rounded border-gray-300 text-estate-primary"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="marketing-notif" className="text-sm">
                    Receber comunicados de marketing
                  </label>
                  <input 
                    type="checkbox" 
                    id="marketing-notif" 
                    defaultChecked={false} 
                    className="rounded border-gray-300 text-estate-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold">Preferências</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="theme" className="text-sm font-medium">
                    Tema
                  </label>
                  <select 
                    id="theme" 
                    defaultValue="system"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="light">Claro</option>
                    <option value="dark">Escuro</option>
                    <option value="system">Sistema</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="currency" className="text-sm font-medium">
                    Moeda
                  </label>
                  <select 
                    id="currency" 
                    defaultValue="BRL"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="BRL">Real (BRL)</option>
                    <option value="USD">Dólar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-4">
            <Button 
              onClick={handleSave}
              className="bg-estate-primary hover:bg-estate-secondary"
            >
              <Settings className="h-4 w-4 mr-2" />
              Salvar Configurações
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConfiguracoesPage;
