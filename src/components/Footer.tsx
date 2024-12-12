import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/nelsoformacion" },
    { icon: Instagram, href: "https://instagram.com/nelsoformacion" },
    { icon: Twitter, href: "https://twitter.com/nelsoformacion" },
    { icon: Linkedin, href: "https://linkedin.com/company/nelsoformacion" },
  ];

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nelso Formación</h3>
            <p className="text-gray-300">
              La academia líder en formación de controladores aéreos
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#caracteristicas" className="text-gray-300 hover:text-white">Características</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Nelso Formación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;