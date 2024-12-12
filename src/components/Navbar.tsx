import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute top-0 left-0 w-full p-6 z-20">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Nelso Formación</h1>
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            className="text-white hover:text-white/80"
            onClick={() => scrollToSection('caracteristicas')}
          >
            Características
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:text-white/80"
            onClick={() => scrollToSection('contacto')}
          >
            Solicitar Info
          </Button>
          <Button 
            variant="ghost"
            className="text-white hover:text-white/80"
            onClick={() => window.location.href = '/blog'}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Blog
          </Button>
          <Button 
            variant="outline" 
            className="text-white border-2 border-white hover:bg-white hover:text-black font-medium"
            onClick={() => window.open('https://aula.nelsoformacion.es', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Aula Virtual
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;