
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MapPin, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-secondary2 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 brand-gradient-text">
              Kuna
            </h3>
            <p className="text-brand-secondary1/90 mb-4">
              Conectamos viajeros curiosos con expertos locales para explorar la Colombia auténtica de forma segura y significativa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-secondary1/70 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-brand-secondary1/70 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-brand-secondary1/70 hover:text-white">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-brand-secondary1/70 hover:text-white">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explora</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-brand-secondary1/70 hover:text-white">
                  Destinos
                </Link>
              </li>
              <li>
                <Link to="/locals" className="text-brand-secondary1/70 hover:text-white">
                  Locales
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-brand-secondary1/70 hover:text-white">
                  Experiencias
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-brand-secondary1/70 hover:text-white">
                  Comunidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-brand-secondary1/70 hover:text-white">
                  Nuestra Misión
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-brand-secondary1/70 hover:text-white">
                  Ayuda y Soporte
                </Link>
              </li>
              <li>
                <a href="#" className="text-brand-secondary1/70 hover:text-white">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-secondary1/70 hover:text-white">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-accent mr-2 mt-0.5" />
                <span className="text-brand-secondary1/90">
                  Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-accent mr-2" />
                <span className="text-brand-secondary1/90">
                  info@kuna.com
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-brand-accent mr-2" />
                <span className="text-brand-secondary1/90">
                  +57 (1) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-secondary1/20 mt-10 pt-6">
          <p className="text-brand-secondary1/50 text-center text-sm">
            © {new Date().getFullYear()} Kuna. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
