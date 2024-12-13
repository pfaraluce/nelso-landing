import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const NewsTicker = () => {
  const messages = [
    "¡Nueva convocatoria! 150 plazas ENAIRE 2024",
    "Salarios desde 48.000€ hasta 150.000€ anuales",
    "16 aprobados en la última convocatoria",
    "Preparación integral: FEAST + Inglés C1 + Pruebas psicológicas"
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white py-2 z-50">
      <div className="flex items-center justify-center">
        <AlertCircle className="w-5 h-5 mr-2" />
        <div className="overflow-hidden whitespace-nowrap w-full">
          <motion.div
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="inline-block whitespace-nowrap"
          >
            {messages.map((message, index) => (
              <span key={index} className="mx-8">{message}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;