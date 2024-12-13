import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TowerControl } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold hover:text-primary transition-colors">
            <TowerControl className="h-6 w-6" />
            <span>Nelso Formación</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#sobre-nosotros"
              onClick={(e) => handleAnchorClick(e, 'sobre-nosotros')}
              className="hover:text-primary"
            >
              Sobre nosotros
            </a>
            <a
              href="#curso"
              onClick={(e) => handleAnchorClick(e, 'curso')}
              className="hover:text-primary"
            >
              Curso
            </a>
            <Button asChild>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e, 'contacto')}
              >
                Contactar
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
            <a
              href="#sobre-nosotros"
              onClick={(e) => {
                handleAnchorClick(e, 'sobre-nosotros');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-muted"
            >
              Sobre nosotros
            </a>
            <a
              href="#curso"
              onClick={(e) => {
                handleAnchorClick(e, 'curso');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-muted"
            >
              Curso
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                handleAnchorClick(e, 'contacto');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-muted"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;