import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TowerControl } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
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
            <Link to="/" className="hover:text-primary">
              Inicio
            </Link>
            <a
              href="#about"
              onClick={(e) => handleAnchorClick(e, 'about')}
              className="hover:text-primary"
            >
              Sobre nosotros
            </a>
            <a
              href="#features"
              onClick={(e) => handleAnchorClick(e, 'features')}
              className="hover:text-primary"
            >
              Características
            </a>
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Button asChild>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, 'contact')}
              >
                Contacto
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <a
              href="#about"
              onClick={(e) => {
                handleAnchorClick(e, 'about');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-muted"
            >
              Sobre nosotros
            </a>
            <a
              href="#features"
              onClick={(e) => {
                handleAnchorClick(e, 'features');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-muted"
            >
              Características
            </a>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                handleAnchorClick(e, 'contact');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-muted"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;