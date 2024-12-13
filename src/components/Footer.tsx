import { TowerControl } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 text-xl font-bold mb-4">
            <TowerControl className="h-6 w-6" />
            <span>Nelso Formación</span>
          </div>
          <p className="text-gray-300 text-center">
            La academia líder en formación de controladores aéreos
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Nelso Formación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;