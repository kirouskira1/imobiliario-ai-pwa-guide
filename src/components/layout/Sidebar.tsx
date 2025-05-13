
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Map, 
  Search, 
  Calendar, 
  MessageCircle, 
  Heart, 
  Settings, 
  HelpCircle,
  ChevronDown,
  ChevronRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

interface SidebarGroupProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarItem = ({ icon, label, to, active }: SidebarItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-estate-light",
      active ? "bg-estate-light text-estate-primary font-medium" : "text-estate-dark"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const SidebarGroup = ({ icon, label, children, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <Button 
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 font-medium text-estate-dark hover:bg-estate-light"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
      
      {isOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside 
        className={cn(
          "fixed top-0 left-0 w-64 h-full bg-white border-r border-slate-100 shadow-lg z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 transform pt-16",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 lg:hidden" 
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar menu</span>
        </Button>
        
        <div className="px-3 py-4">
          <nav className="space-y-6">
            <div className="space-y-1">
              <SidebarItem 
                icon={<Home className="h-5 w-5" />} 
                label="Início" 
                to="/" 
                active={currentPath === "/"} 
              />
              <SidebarItem 
                icon={<Map className="h-5 w-5" />} 
                label="Mapa" 
                to="/mapa"
                active={currentPath === "/mapa"} 
              />
              <SidebarItem 
                icon={<Search className="h-5 w-5" />} 
                label="Buscar" 
                to="/buscar"
                active={currentPath === "/buscar"} 
              />
              <SidebarItem 
                icon={<Heart className="h-5 w-5" />} 
                label="Favoritos" 
                to="/favoritos"
                active={currentPath === "/favoritos"} 
              />
            </div>
            
            <SidebarGroup 
              icon={<Calendar className="h-5 w-5" />} 
              label="Agendamentos"
              defaultOpen={currentPath.includes("/agendamento")}
            >
              <SidebarItem 
                icon={<Calendar className="h-4 w-4" />} 
                label="Meus Agendamentos" 
                to="/agendamentos" 
                active={currentPath === "/agendamentos"} 
              />
              <SidebarItem 
                icon={<Calendar className="h-4 w-4" />} 
                label="Agendar Visita" 
                to="/agendar" 
                active={currentPath === "/agendar"} 
              />
            </div>
            
            <div className="space-y-1">
              <SidebarItem 
                icon={<MessageCircle className="h-5 w-5" />} 
                label="Chat" 
                to="/chat"
                active={currentPath === "/chat"} 
              />
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <SidebarItem 
                icon={<Settings className="h-5 w-5" />} 
                label="Configurações" 
                to="/configuracoes"
                active={currentPath === "/configuracoes"} 
              />
              <SidebarItem 
                icon={<HelpCircle className="h-5 w-5" />} 
                label="Ajuda" 
                to="/ajuda"
                active={currentPath === "/ajuda"} 
              />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
