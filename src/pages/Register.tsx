
import { useState } from "react";
import { Link } from "react-router-dom";
import { Apple, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthSocialButton from "@/components/auth/AuthSocialButton";
import { toast } from "sonner";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulamos el registro
    setTimeout(() => {
      toast.success("Registro exitoso");
      setIsLoading(false);
      // Aquí podríamos redirigir al usuario a su página principal
    }, 1500);
  };

  const handleSocialRegister = (provider: string) => {
    toast.info(`Registrándose con ${provider}`);
    // Aquí implementaríamos la autenticación social real
  };

  return (
    <AuthLayout title={showEmailForm ? "Crear tu cuenta" : "Únete a Kuna"}>
      {!showEmailForm ? (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <AuthSocialButton 
            icon="google" 
            onClick={() => handleSocialRegister("Google")}
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
            onClick={() => handleSocialRegister("Apple")}
          >
            Continuar con Apple
          </AuthSocialButton>
          
          <div className="text-center text-sm text-muted-foreground mt-6">
            <span>¿Ya tienes una cuenta? </span>
            <Link to="/login" className="text-brand-primary font-medium hover:underline">
              Iniciar sesión
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                required
              />
            </div>
          
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
              <label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </label>
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
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
              {!isLoading && <User className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <button 
            onClick={() => setShowEmailForm(false)}
            className="text-sm text-center text-brand-primary hover:underline"
          >
            Volver a opciones de registro
          </button>
        </div>
      )}
      
      <div className="text-xs text-muted-foreground text-center mt-8 max-w-sm">
        Al continuar, aceptas los <a href="#" className="text-brand-primary hover:underline">Términos del Servicio</a> y la <a href="#" className="text-brand-primary hover:underline">Política de Privacidad</a> de Kuna.
      </div>
    </AuthLayout>
  );
};

export default Register;
