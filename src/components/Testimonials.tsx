import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana García",
    role: "Controladora Aérea en ENAIRE",
    text: "Gracias a Nelso conseguí mi plaza en la última convocatoria. La preparación es excelente y el apoyo constante.",
    rating: 5
  },
  {
    name: "Carlos Martínez",
    role: "Estudiante Top 5 ENAIRE 2023",
    text: "El método de estudio y la calidad del profesorado marcan la diferencia. Totalmente recomendable.",
    rating: 5
  },
  {
    name: "Laura Sánchez",
    role: "Controladora Aérea en ENAIRE",
    text: "El mejor centro de preparación. Los profesores son controladores en activo y eso se nota en la formación.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-4xl font-bold">Lo que dicen nuestros alumnos</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;