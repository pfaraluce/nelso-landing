import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-primary text-white">
        <a
          href="#sobre-nosotros"
          onClick={(e) => handleAnchorClick(e, 'sobre-nosotros')}
          className="block px-3 py-2 rounded-md hover:bg-primary-light transition-colors"
        >
          Sobre nosotros
        </a>
        <a
          href="#curso"
          onClick={(e) => handleAnchorClick(e, 'curso')}
          className="block px-3 py-2 rounded-md hover:bg-primary-light transition-colors"
        >
          Curso
        </a>
        <a
          href="#contacto"
          onClick={(e) => handleAnchorClick(e, 'contacto')}
          className="block px-3 py-2 rounded-md hover:bg-primary-light transition-colors"
        >
          Contactar
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;