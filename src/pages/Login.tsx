
import { useState } from "react";
import { Link } from "react-router-dom";
import { Apple, ArrowRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthSocialButton from "@/components/auth/AuthSocialButton";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulamos la autenticación
    setTimeout(() => {
      toast.success("Inicio de sesión exitoso");
      setIsLoading(false);
      // Aquí podríamos redirigir al usuario a su página principal
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`Iniciando sesión con ${provider}`);
    // Aquí implementaríamos la autenticación social real
  };

  return (
    <AuthLayout title={showEmailForm ? "Iniciar sesión" : "Bienvenido a Kuna"}>
      {!showEmailForm ? (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <AuthSocialButton 
            icon="google" 
            onClick={() => handleSocialLogin("Google")}
          >
            Continuar con Google
          </AuthSocialButton>
          
          <AuthSocialButton 
            icon="email" 
            variant="outline"
            onClick={() => setShowEmailForm(true)}
          >
            Continuar con email
          </AuthSocialButton>
          
          <AuthSocialButton 
            icon="apple" 
            variant="outline"
            onClick={() => handleSocialLogin("Apple")}
          >
            Continuar con Apple
          </AuthSocialButton>
          
          <div className="text-center text-sm text-muted-foreground mt-6">
            <span>¿No tienes una cuenta? </span>
            <Link to="/register" className="text-brand-primary font-medium hover:underline">
              Registrarse
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </label>
                <Link to="/forgot-password" className="text-xs text-brand-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              {!isLoading && <LogIn className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <button 
            onClick={() => setShowEmailForm(false)}
            className="text-sm text-center text-brand-primary hover:underline"
          >
            Volver a opciones de inicio
          </button>
        </div>
      )}
      
      <div className="text-xs text-muted-foreground text-center mt-8 max-w-sm">
        Al continuar, aceptas los <a href="#" className="text-brand-primary hover:underline">Términos del Servicio</a> y la <a href="#" className="text-brand-primary hover:underline">Política de Privacidad</a> de Kuna.
      </div>
    </AuthLayout>
  );
};

export default Login;
