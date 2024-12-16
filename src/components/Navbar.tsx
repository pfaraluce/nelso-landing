import { useState, useEffect } from "react";
import { Menu, X, TowerControl, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = (phoneNumber: string) => {
    // Copy to clipboard
    navigator.clipboard.writeText(phoneNumber).then(() => {
      toast.success("Número copiado al portapapeles");
    });
    // Open phone app
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const textColorClass = isScrolled ? 'text-foreground' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className={`flex items-center space-x-2 text-xl font-bold hover:text-primary transition-colors ${textColorClass}`}>
              <TowerControl className={`h-6 w-6 ${textColorClass}`} />
              <span>Nelso Formación</span>
            </a>
            
            {/* Phone numbers */}
            <div className="hidden md:flex ml-6 space-x-4">
              <button
                onClick={() => handlePhoneClick("610 771 234")}
                className={`flex items-center space-x-1 hover:text-primary transition-colors ${textColorClass}`}
              >
                <Phone className="h-4 w-4" />
                <span>610 771 234</span>
              </button>
              <button
                onClick={() => handlePhoneClick("648 000 132")}
                className={`flex items-center space-x-1 hover:text-primary transition-colors ${textColorClass}`}
              >
                <Phone className="h-4 w-4" />
                <span>648 000 132</span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#sobre-nosotros"
              onClick={(e) => handleAnchorClick(e, 'sobre-nosotros')}
              className={`hover:text-primary transition-colors ${textColorClass}`}
            >
              Sobre nosotros
            </a>
            <a
              href="#curso"
              onClick={(e) => handleAnchorClick(e, 'curso')}
              className={`hover:text-primary transition-colors ${textColorClass}`}
            >
              Curso
            </a>
            <Button 
              asChild
              className="text-white bg-primary hover:bg-primary-light"
            >
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e, 'contacto')}
              >
                Contactar
              </a>
            </Button>
          </div>

          <button
            className={`md:hidden ${textColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        phoneNumbers={[
          { number: "610 771 234", onClick: () => handlePhoneClick("610 771 234") },
          { number: "648 000 132", onClick: () => handlePhoneClick("648 000 132") }
        ]}
      />
    </nav>
  );
};

export default Navbar;