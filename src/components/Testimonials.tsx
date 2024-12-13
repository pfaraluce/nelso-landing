import { motion } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from "react";

const testimonials = [
  {
    name: "Teresa",
    role: "Alumna de Nelso Formación",
    text: "El nivel de la academia es altísimo y se nota que les encanta formarnos para llegar a las pruebas con el mejor nivel. Sin duda es el sitio para prepararte para ser controlador aéreo.",
    isDark: true
  },
  {
    name: "Paula",
    role: "Alumna de Nelso Formación",
    text: "Estoy encantada con el curso. Gracias a todo el equipo de profesionales que hay detrás, por la ayuda recibida y personalizada, me parece una magnífica herramienta para llegar al 100% a las pruebas de acceso a controlador aéreo.",
    isDark: false
  },
  {
    name: "Eduardo",
    role: "Alumno de Nelso Formación",
    text: "Sin duda, de todas las opciones que hay, Nelso es el único sitio en el que prepararse si quieres aprobar la oposición!",
    isDark: true
  },
  {
    name: "Bea",
    role: "Alumna de Nelso Formación",
    text: "Estoy muy contenta con mi formación, es muy completa y amena y los formadores tanto de FEAST como de psicología e inglés muy profesionales y comprometidos con sus alumnos. Hay un gran ambiente!",
    isDark: false
  },
  {
    name: "Àngels",
    role: "Alumna de Nelso Formación",
    text: "El curso de preparación de NELSO proporciona grandes recursos y consejos por parte de profesionales que ayudan a entender cómo afrontar los ejercicios para las pruebas de forma más segura y amena.",
    isDark: true
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-4xl font-bold">Lo que dicen nuestros alumnos</h2>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <div className={`h-full ${testimonial.isDark ? 'glass-dark' : 'glass'} p-6 rounded-xl`}>
                  <Quote className={`w-8 h-8 ${testimonial.isDark ? 'text-white' : 'text-primary'} mb-4`} />
                  <p className={`${testimonial.isDark ? 'text-white' : 'text-gray-600'} mb-6 italic`}>"{testimonial.text}"</p>
                  <div>
                    <p className={`font-bold ${testimonial.isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</p>
                    <p className={`text-sm ${testimonial.isDark ? 'text-gray-300' : 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;