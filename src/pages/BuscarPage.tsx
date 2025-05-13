
import React from "react";
import Layout from "../components/layout/Layout";
import { Search } from "lucide-react";

const BuscarPage = () => {
  return (
    <Layout>
      <div className="container max-w-6xl px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Buscar Imóveis</h1>
        
        <div className="p-8 text-center border rounded-lg bg-slate-50">
          <Search className="h-16 w-16 mx-auto text-slate-300 mb-4" />
          <h2 className="text-xl font-medium mb-2">Busca Avançada</h2>
          <p className="text-muted-foreground mb-4">
            Esta funcionalidade será implementada em breve.
          </p>
          <p className="text-sm text-muted-foreground">
            Você poderá buscar imóveis por localização, preço, número de quartos e outras características.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BuscarPage;
