import { motion } from "framer-motion";
import { Brain, Focus, Users, Shield } from "lucide-react";

const Profile = () => {
  const skills = [
    {
      name: "Agilidad mental",
      description: "Capacidad para resolver tesituras y tomar decisiones en un corto espacio de tiempo.",
      icon: Brain
    },
    {
      name: "Atención concentrada",
      description: "Poseer la habilidad de atender varios temas a la vez, escribir, hablar y pensar en diferentes situaciones de forma simultanea.",
      icon: Focus
    },
    {
      name: "Trabajo en equipo",
      description: "Une los esfuerzos de todos los miembros del equipo, potenciando y aumentando la eficacia de los resultados.",
      icon: Users
    },
    {
      name: "Estabilidad emocional",
      description: "Control sobre las emociones propias y resistencia ante los problemas del día a día.",
      icon: Shield
    }
  ];

  return (
    <section id="perfil" className="section-padding bg-white relative overflow-hidden">
      {/* Radar background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
        <div className="absolute inset-[10%] border-2 border-primary rounded-full animate-ping" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 1s' }}></div>
        <div className="absolute inset-[20%] border-2 border-primary rounded-full animate-ping" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Perfil de un Controlador Aéreo</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <skill.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;