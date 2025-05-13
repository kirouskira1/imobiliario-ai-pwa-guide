
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MapPage from "./pages/MapPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import FavoritosPage from "./pages/FavoritosPage";
import BuscarPage from "./pages/BuscarPage";
import AgendamentosPage from "./pages/AgendamentosPage";
import AgendarPage from "./pages/AgendarPage";
import ChatPage from "./pages/ChatPage";
import ConfiguracoesPage from "./pages/ConfiguracoesPage";
import AjudaPage from "./pages/AjudaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/buscar" element={<BuscarPage />} />
          <Route path="/agendamentos" element={<AgendamentosPage />} />
          <Route path="/agendar" element={<AgendarPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/configuracoes" element={<ConfiguracoesPage />} />
          <Route path="/ajuda" element={<AjudaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
