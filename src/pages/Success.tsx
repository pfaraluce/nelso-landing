import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  const navigate = useNavigate();

  // Redirigir a la página principal después de 5 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-lg mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-24 h-24 text-primary mx-auto" />
        </motion.div>

        <h1 className="text-4xl font-bold text-gray-900">¡Mensaje Enviado!</h1>
        
        <p className="text-lg text-gray-600">
          Gracias por contactar con nosotros. Nos pondremos en contacto contigo lo antes posible.
        </p>

        <div className="pt-4">
          <Button
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary-light text-white"
          >
            Volver al inicio
          </Button>
        </div>

        <p className="text-sm text-gray-500">
          Serás redirigido automáticamente en 5 segundos...
        </p>
      </motion.div>
    </div>
  );
};

export default Success;