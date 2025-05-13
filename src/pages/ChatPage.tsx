
import React from "react";
import Layout from "../components/layout/Layout";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const ChatPage = () => {
  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Chat de Atendimento</h1>
        
        <Card className="p-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto text-slate-300 mb-4" />
          <h2 className="text-xl font-medium mb-2">Chat em breve</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Em breve, nosso assistente virtual estará disponível para responder suas dúvidas e ajudar na busca pelo imóvel ideal para você.
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default ChatPage;
