
import React from "react";
import { Bot, Map, Calendar } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
      <div className="p-3 bg-estate-primary/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Como Funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Facilitamos sua busca pelo imóvel ideal com tecnologia de ponta
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Map className="h-6 w-6 text-estate-primary" />}
            title="Busca Geolocalizada"
            description="Encontre imóveis próximos aos locais que são importantes para você, como trabalho, escola ou família."
          />
          <FeatureCard 
            icon={<Bot className="h-6 w-6 text-estate-primary" />}
            title="Assistente Virtual"
            description="Nosso chatbot com IA está disponível 24/7 para responder suas dúvidas e ajudar na sua busca."
          />
          <FeatureCard 
            icon={<Calendar className="h-6 w-6 text-estate-primary" />}
            title="Agendamento Fácil"
            description="Agende visitas aos imóveis diretamente pelo aplicativo, escolhendo o dia e horário que for melhor para você."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
