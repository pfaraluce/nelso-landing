import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center mt-24 md:mt-0">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/b84d5575-b9a7-4007-b07f-aec3b751951e.webp')",
          willChange: 'transform',
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
          <span className="inline-block bg-primary px-4 py-2 rounded-full text-white font-semibold">
            ¡Nueva Convocatoria ENAIRE 2024!
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            <span className="block md:hidden">150 Plazas Controlador Aéreo</span>
            <span className="hidden md:block">150 Plazas para Controladores Aéreos</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mx-auto">
            <span className="block md:hidden">¡Prepárate con los expertos! Incluye prueba de inglés C1 y simulación ATC.</span>
            <span className="hidden md:block">¡El doble de oportunidades que el año pasado! Prepárate con los expertos para la nueva convocatoria que incluye prueba de inglés C1 y simulación ATC.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg"
            >
              ¡Quiero prepararme con los mejores!
            </Button>
            <Button
              onClick={() => document.getElementById('curso')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg"
            >
              Conoce nuestro curso
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Prueba de Inglés C1</h3>
              <p>Nueva prueba específica en la Fase 1</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Domina las Pruebas Clave</h3>
              <p>Preparación intensiva FEAST + Nueva Simulación ATC</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Preparación Psicológica</h3>
              <p>Gabinete experto en competencias ATC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
