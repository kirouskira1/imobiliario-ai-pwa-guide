
import React from "react";
import Layout from "../components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AjudaPage = () => {
  const [openQuestion, setOpenQuestion] = React.useState<string | null>('q1');
  const { toast } = useToast();

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada",
      description: "Sua mensagem foi enviada com sucesso. Retornaremos em breve.",
    });
  };

  const faqItems = [
    {
      id: 'q1',
      question: 'Como agendar uma visita a um imóvel?',
      answer: 'Para agendar uma visita, navegue até a página do imóvel desejado, clique no botão "Agendar Visita" e selecione a data e horário disponíveis que melhor se adequam à sua agenda.'
    },
    {
      id: 'q2',
      question: 'Como faço para salvar imóveis em meus favoritos?',
      answer: 'Na página de cada imóvel, você encontrará um ícone de coração. Basta clicar neste ícone para adicionar o imóvel aos seus favoritos. Você pode acessar todos os seus imóveis favoritos através da opção "Favoritos" no menu principal.'
    },
    {
      id: 'q3',
      question: 'É necessário criar uma conta para agendar visitas?',
      answer: 'Sim, é necessário criar uma conta ou fazer login para agendar visitas. Isso nos permite manter um registro de suas visitas e fornecer um atendimento mais personalizado.'
    },
    {
      id: 'q4',
      question: 'Como posso alterar ou cancelar uma visita agendada?',
      answer: 'Para alterar ou cancelar uma visita, acesse a seção "Meus Agendamentos" no menu principal. Lá você poderá gerenciar todas as suas visitas agendadas.'
    },
  ];

  return (
    <Layout>
      <div className="container max-w-2xl px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Central de Ajuda</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            {faqItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader 
                  className="py-3 px-4 cursor-pointer flex flex-row items-center justify-between"
                  onClick={() => toggleQuestion(item.id)}
                >
                  <h3 className="text-md font-semibold">{item.question}</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    {openQuestion === item.id ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CardHeader>
                
                {openQuestion === item.id && (
                  <CardContent className="pt-0 px-4 pb-4">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-estate-primary hover:bg-estate-secondary w-full"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default AjudaPage;
