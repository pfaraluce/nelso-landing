import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580241010133-41c5b3e51ff9?q=80&w=2074&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Control y Seguridad Aérea para un Futuro más Seguro
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Formación especializada para controladores aéreos y profesionales de la aviación
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary-light text-white px-8 py-3 text-lg"
          >
            <Link to="/contact">Contactar</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
          >
            <Link to="/courses">Ver Cursos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;