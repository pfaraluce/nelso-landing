import { motion } from "framer-motion";
import { Plane, Book, Brain, Database } from "lucide-react";
import { Button } from "./ui/button";

const Course = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="curso" className="section-padding bg-muted relative overflow-hidden">
      {/* Radar background effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 border-2 border-primary rounded-full"
          style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }}
        />
        <div 
          className="absolute inset-[10%] border-2 border-primary rounded-full"
          style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 1s' }}
        />
        <div 
          className="absolute inset-[20%] border-2 border-primary rounded-full"
          style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 2s' }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">¿Cómo es el Curso de Controlador Aéreo de Nelso?</h2>
          
          <div className="space-y-8">
            <p className="text-lg">
              Te preparamos con nuestro curso Online y Presencial para superar las Oposiciones de Controlador Aéreo de Enaire con un curso especializado en superar el Feast, la prueba de Inglés y las pruebas Psicológicas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-xl">
                <Database className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Banco de Preguntas</h3>
                <p>Acceso a un extenso banco de preguntas teóricas y prácticas para dominar todos los aspectos del examen</p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <Brain className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Preparación Integral</h3>
                <p>Teoría, FEAST, inglés y pruebas psicológicas con expertos en cada área</p>
              </div>
            </div>

            <p className="text-lg">
              Cuando apruebes te orientaremos para hacer los cursos de Controlador de Torre, Controlador de Aproximación y Controlador de Ruta como alumnos de Nelso.
            </p>

            <div className="text-center mt-12">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg"
              >
                Solicita tu Plaza
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Course;