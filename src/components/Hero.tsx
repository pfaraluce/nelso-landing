import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/b84d5575-b9a7-4007-b07f-aec3b751951e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-primary px-4 py-2 rounded-full text-white font-semibold mb-4">
            ¡Nueva Convocatoria ENAIRE 2024!
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            150 Plazas para Controladores Aéreos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            ¡El doble de oportunidades que el año pasado! Prepárate con los expertos para la nueva convocatoria que incluye prueba de inglés C1 y simulación ATC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg"
            >
              ¡Quiero preparar la convocatoria!
            </Button>
            <Button
              onClick={() => document.getElementById('curso')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg"
            >
              Conoce nuestro curso
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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