import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Trophy, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Formación Especializada",
      description: "Preparación integral para las oposiciones de ENAIRE"
    },
    {
      icon: Trophy,
      title: "Resultados Probados",
      description: "16 nuevas plazas conseguidas en ENAIRE 2023"
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Controladores aéreos en activo como instructores"
    },
    {
      icon: Target,
      title: "Enfoque Personalizado",
      description: "Grupos reducidos y atención individualizada"
    },
    {
      icon: BookOpen,
      title: "Programa Completo",
      description: "FEAST, inglés y pruebas psicológicas"
    }
  ];

  return (
    <section id="caracteristicas" className="section-padding bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">¿Por Qué Elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover-lift"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;