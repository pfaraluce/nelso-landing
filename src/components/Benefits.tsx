import { motion } from "framer-motion";
import { Euro, Clock, Laptop, MapPin, Briefcase } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Euro,
      title: "Excelente Remuneración",
      description: "Salarios que oscilan entre 48.000€ y 150.000€ anuales",
      highlight: "20 minutos"
    },
    {
      icon: Briefcase,
      title: "Máxima estabilidad laboral",
      description: "Trabajo fijo con horarios flexibles"
    },
    {
      icon: Clock,
      title: "Oportunidades",
      description: "150 Plazas convocadas por ENAIRE en Diciembre de 2024. ¡Récord histórico de plazas!"
    },
    {
      icon: Laptop,
      title: "Tecnología",
      description: "Trabaja con las tecnologías más punteras: radares, sistemas de comunicación..."
    },
    {
      icon: MapPin,
      title: "Variedad de destinos",
      description: "En torres y centros de control españoles"
    }
  ];

  return (
    <section id="ventajas" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">¿Quieres cambiar tu vida y obtener una plaza fija?</h2>
        <h3 className="text-2xl text-center mb-16">Te damos 5 ventajas por las que opositar a Controlador Aéreo</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass p-6 rounded-xl relative overflow-hidden"
            >
              {benefit.highlight && (
                <div className="absolute top-0 left-0 bg-primary text-white px-4 py-1 rounded-br-lg">
                  {benefit.highlight}
                </div>
              )}
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;