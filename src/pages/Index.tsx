import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Calendar, Book, Users, BookOpen, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Solicitud enviada con éxito!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full p-6 z-20">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Nelso Formación</h1>
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-white hover:text-white/80"
              onClick={() => scrollToSection('caracteristicas')}
            >
              Características
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-white/80"
              onClick={() => scrollToSection('apply')}
            >
              Solicitar Info
            </Button>
            <Button 
              variant="ghost"
              className="text-white hover:text-white/80"
              onClick={() => window.location.href = '/blog'}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black"
              onClick={() => window.open('https://aula.nelsoformacion.es', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Aula Virtual
            </Button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center parallax" 
               style={{ backgroundImage: "url('/lovable-uploads/f7c8d160-04c6-4ef8-a88d-4f5dfd77f8f4.png')" }}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <GraduationCap className="w-12 h-12" />
              <Trophy className="w-12 h-12" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              La Academia Líder en Formación de Controladores Aéreos
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium">
                ¡16 nuevas plazas conseguidas en ENAIRE 2023!
              </p>
              <p className="text-lg md:text-xl">
                1 de cada 5 plazas Top es de un Alumno Nelso
              </p>
            </div>

            <Button 
              className="glass hover-lift text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('apply')}
            >
              Solicita tu Plaza
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Horario Flexible",
                description: "Programas de formación adaptados a tus necesidades"
              },
              {
                icon: Book,
                title: "Instructores Expertos",
                description: "Aprende de controladores aéreos con experiencia"
              },
              {
                icon: Users,
                title: "Grupos Reducidos",
                description: "Atención personalizada en clases de tamaño limitado"
              }
            ].map((feature, index) => (
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

      {/* Application Form Section */}
      <section id="apply" className="section-padding bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Solicita Información</h2>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass"
                  placeholder="Tu correo electrónico"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Teléfono</label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass"
                placeholder="Tu número de teléfono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Mensaje</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass"
                placeholder="Cuéntanos sobre tu experiencia y objetivos"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full glass hover-lift">
              <Send className="w-4 h-4 mr-2" />
              Enviar Solicitud
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Nelso Formación. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
