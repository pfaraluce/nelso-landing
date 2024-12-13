import { motion } from "framer-motion";
import { Building, Users, Trophy, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre-nosotros" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">¿Qué es Nelso Formación?</h2>
          <p className="text-lg mb-8">
            Nelso es una academia especializada en la preparación de Controladores Aéreos, con un curso intensivo diseñado específicamente para superar con éxito la Convocatoria de Enaire 2024.
          </p>
          <p className="text-lg mb-12">
            Nuestro equipo está formado por Controladores Aéreos en activo y especialistas en formación aeronáutica. Como centro de referencia internacional, nos enfocamos en prepararte para todas las fases del proceso: FEAST, inglés C1 y pruebas psicológicas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-6 rounded-xl hover-lift">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Centro de Referencia</h3>
              <p>Formación especializada en el sector aeronáutico</p>
            </div>
            <div className="glass p-6 rounded-xl hover-lift">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Equipo Experto</h3>
              <p>Controladores Aéreos en activo como instructores</p>
            </div>
          </div>

          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg"
          >
            ¡Quiero prepararme con los mejores!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;