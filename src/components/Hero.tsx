import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Precarga la imagen de fondo
    const img = new Image();
    img.src = '/lovable-uploads/b84d5575-b9a7-4007-b07f-aec3b751951e.webp';
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center mt-24 md:mt-0">
      {/* Placeholder mientras carga la imagen */}
      <div
        className={`absolute inset-0 z-0 bg-gray-200 transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Imagen de fondo optimizada */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: "url('/lovable-uploads/b84d5575-b9a7-4007-b07f-aec3b751951e.webp')",
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6 px-4"
        >
          <span className="inline-block bg-primary px-3 py-1.5 rounded-full text-white text-sm font-medium">
            ¡Nueva Convocatoria ENAIRE 2024!
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            150 Plazas Controlador Aéreo
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl max-w-2xl mx-auto opacity-90">
            ¡Prepárate con los expertos! Incluye prueba de inglés C1 y simulación ATC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-6 py-6 text-lg"
            >
              ¡Reserva tu plaza!
            </Button>
            <Button
              onClick={() => document.getElementById('curso')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white px-6 py-6 text-lg"
            >
              Conoce nuestro curso
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-1">Prueba de Inglés C1</h3>
              <p className="text-sm opacity-90">Nueva prueba específica en la Fase 1</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-1">Domina las Pruebas Clave</h3>
              <p className="text-sm opacity-90">FEAST + Nueva Simulación ATC</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-1">Preparación Psicológica</h3>
              <p className="text-sm opacity-90">Gabinete experto en competencias ATC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;