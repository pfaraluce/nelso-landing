import { motion } from "framer-motion";

const Profile = () => {
  const skills = [
    {
      name: "Agilidad mental",
      description: "Capacidad para resolver tesituras y tomar decisiones en un corto espacio de tiempo.",
      percentage: 100
    },
    {
      name: "Atención concentrada",
      description: "Poseer la habilidad de atender varios temas a la vez, escribir, hablar y pensar en diferentes situaciones de forma simultanea.",
      percentage: 100
    },
    {
      name: "Trabajo en equipo",
      description: "Une los esfuerzos de todos los miembros del equipo, potenciando y aumentando la eficacia de los resultados.",
      percentage: 100
    },
    {
      name: "Estabilidad emocional",
      description: "Control sobre las emociones propias y resistencia ante los problemas del día a día.",
      percentage: 100
    }
  ];

  return (
    <section id="perfil" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Perfil de un Controlador Aéreo</h2>
          
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="mb-4">{skill.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;