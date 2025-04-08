
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/auth/AuthLayout";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulamos el envío de correo
    setTimeout(() => {
      toast.success("Instrucciones para restablecer tu contraseña enviadas");
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AuthLayout title={isSubmitted ? "Revisa tu correo" : "Recupera tu contraseña"}>
      {!isSubmitted ? (
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <p className="text-center text-sm text-muted-foreground">
            Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
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
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar instrucciones"}
            </Button>
          </form>
          
          <div className="text-center">
            <Link to="/login" className="text-sm text-brand-primary hover:underline">
              Volver a inicio de sesión
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <p className="text-center text-sm text-muted-foreground">
            Hemos enviado instrucciones para restablecer tu contraseña a <strong>{email}</strong>. Revisa tu bandeja de entrada y sigue las instrucciones.
          </p>
          
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
            Volver a intentar
          </Button>
          
          <div className="text-center">
            <Link to="/login" className="text-sm text-brand-primary hover:underline">
              Volver a inicio de sesión
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
