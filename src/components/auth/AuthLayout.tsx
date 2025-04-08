
import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FAFAFA]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img 
              src="/kuna-logo.svg" 
              alt="Kuna Logo" 
              className="w-16 h-16 mx-auto mb-6"
            />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 mt-4 mb-6">{title}</h1>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
          {children}
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-brand-primary">
            ← Volver a la página de inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
