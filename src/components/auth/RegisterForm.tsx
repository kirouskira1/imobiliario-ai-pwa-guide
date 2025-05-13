
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de registro
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md shadow-lg animate-fade-in">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Crie sua conta</CardTitle>
        <CardDescription>
          Cadastre-se para encontrar o imóvel dos seus sonhos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="Seu nome completo"
                className="pl-9"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="pl-9"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-9"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirme a Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="pl-9"
                required
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Concordo com os{" "}
              <a href="#" className="text-estate-primary hover:underline">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a href="#" className="text-estate-primary hover:underline">
                Política de Privacidade
              </a>
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-estate-primary hover:bg-estate-secondary"
            disabled={loading}
          >
            {loading ? (
              <>
                <UserPlus className="mr-2 h-4 w-4 animate-spin" />
                Cadastrando...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Cadastrar
              </>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-estate-primary hover:underline inline-flex items-center">
            <ArrowLeft className="mr-1 h-3 w-3" />
            Faça Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
