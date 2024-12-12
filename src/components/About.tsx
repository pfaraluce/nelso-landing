import { motion } from "framer-motion";
import { Building, Users, Trophy, GraduationCap } from "lucide-react";

const About = () => {
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
            Nelso es una prestigiosa Academia para convertirte en Controlador Aéreo, ofrece el Curso intensivo diseñado para superar con éxito la Convocatoria de Enaire.
          </p>
          <p className="text-lg mb-12">
            Somos un equipo de Controladores expertos en Tráfico Aéreo y especialistas en la Formación de Controladores Aéreos, nuestro centro de Aeroformación es referente internacional en la Formación y está especializado en la preparación para superar las oposiciones a Controlador Aéreo y acceso a la formación inicial de controladores Aéreos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;