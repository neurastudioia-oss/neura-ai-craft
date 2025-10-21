import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";
import logo from "@/assets/neura-studio-logo.png";

const Footer = () => {
  const { trackEvent } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackEvent('contact', {
      event_category: 'engagement',
      event_label: 'footer_phone',
      location: 'footer'
    });
  };

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div>
            <img 
              src={logo} 
              alt="Neura Studio Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Neura Studio</h3>
            <p className="text-sm sm:text-base text-background/80 leading-relaxed">
              Websites inteligentes que geram resultados reais através da 
              combinação de design e inteligência artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm sm:text-base text-background/80">
              <li>
                <a href="#packages" className="hover:text-background transition-colors">
                  Nossos Pacotes
                </a>
              </li>
              <li>
                <a href="#differentials" className="hover:text-background transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-3 text-sm sm:text-base text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/5561999167627" target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="hover:text-background transition-colors">
                  (61) 99916-7627
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@neurastudio.com" className="hover:text-background transition-colors">
                  contato@neurastudio.com
                </a>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Neura Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
