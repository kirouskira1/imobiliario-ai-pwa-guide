
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCircle, Menu, MapPin, LogIn, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Simular login bem-sucedido
    setIsLoggedIn(true);
    setLoginOpen(false);
    
    toast({
      title: "Login realizado com sucesso!",
      description: "Bem-vindo de volta ao LuxImob.",
    });
    
    // Limpar campos
    setEmail("");
    setPassword("");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Simular cadastro bem-sucedido
    setIsLoggedIn(true);
    setRegisterOpen(false);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Bem-vindo ao LuxImob.",
    });
    
    // Limpar campos
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  
  const openRegisterDialog = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };
  
  const openLoginDialog = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="lg:hidden hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-estate-primary" />
            <span className="font-bold text-xl">
              Lux<span className="text-estate-primary">Imob</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <Link to="/perfil">
              <Button 
                variant="ghost" 
                className="gap-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Meu Perfil</span>
              </Button>
            </Link>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="gap-2 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setLoginOpen(true)}
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden md:inline">Login</span>
              </Button>
              <Button 
                variant="default" 
                className="gap-2 bg-estate-primary hover:bg-estate-secondary transition-all duration-300 rounded-lg border-2 border-estate-primary hover:border-estate-secondary hover:shadow-md"
                onClick={() => setRegisterOpen(true)}
              >
                <UserCircle className="h-4 w-4" />
                <span className="hidden md:inline">Cadastrar</span>
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Faça Login</DialogTitle>
            <DialogDescription>
              Acesse sua conta para gerenciar seus agendamentos.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <DialogFooter className="mt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => openRegisterDialog()}
              >
                Criar Conta
              </Button>
              <Button 
                type="submit" 
                className="bg-estate-primary hover:bg-estate-secondary"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Registro Dialog */}
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Criar Conta</DialogTitle>
            <DialogDescription>
              Cadastre-se para agendar visitas e favoritar imóveis.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRegister} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="register-name">Nome</Label>
              <Input 
                id="register-name" 
                placeholder="Seu nome completo" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input 
                id="register-email" 
                type="email" 
                placeholder="seu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-phone">Telefone</Label>
              <Input 
                id="register-phone" 
                placeholder="(00) 00000-0000" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password">Senha</Label>
              <Input 
                id="register-password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <DialogFooter className="mt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => openLoginDialog()}
              >
                Já tenho conta
              </Button>
              <Button 
                type="submit" 
                className="bg-estate-primary hover:bg-estate-secondary"
              >
                <UserCircle className="h-4 w-4 mr-2" />
                Cadastrar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
