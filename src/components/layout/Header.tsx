
import React from "react";
import { Button } from "@/components/ui/button";
import { UserCircle, Menu, MapPin, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-estate-primary" />
            <span className="font-bold text-xl">Lux<span className="text-estate-primary">Imob</span></span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="gap-2">
              <LogIn className="h-4 w-4" />
              <span className="hidden md:inline">Login</span>
            </Button>
          </Link>
          <Link to="/cadastro">
            <Button variant="default" className="gap-2 bg-estate-primary hover:bg-estate-secondary">
              <UserCircle className="h-4 w-4" />
              <span className="hidden md:inline">Cadastrar</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
