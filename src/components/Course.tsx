import { motion } from "framer-motion";
import { Plane, Book } from "lucide-react";
import { Button } from "./ui/button";

const Course = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="curso" className="section-padding bg-muted relative overflow-hidden">
      {/* Add decorative circular background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(128, 0, 32, 0.15) 0%, rgba(128, 0, 32, 0) 70%)',
          filter: 'blur(40px)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
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
                <Plane className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Formación Completa</h3>
                <p>Preparación integral para todas las fases del proceso</p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <Book className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Modalidades Flexibles</h3>
                <p>Cursos online y presenciales adaptados a ti</p>
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