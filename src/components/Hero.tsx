import { motion } from "framer-motion";
import { ChevronDown, GraduationCap, Trophy } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center parallax" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80')" }}>
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <GraduationCap className="w-12 h-12" />
            <Trophy className="w-12 h-12" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            La Academia Líder en Formación de Controladores Aéreos
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-medium">
              ¡16 nuevas plazas conseguidas en ENAIRE 2023!
            </p>
            <p className="text-lg md:text-xl">
              1 de cada 5 plazas Top es de un Alumno Nelso
            </p>
          </div>

          <Button 
            className="glass hover-lift text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            onClick={scrollToContact}
          >
            Solicita tu Plaza
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;