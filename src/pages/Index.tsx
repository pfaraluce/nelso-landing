import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Calendar, Book, Users } from "lucide-react";
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
    toast.success("Application submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center parallax" 
               style={{ backgroundImage: "url('/lovable-uploads/f7c8d160-04c6-4ef8-a88d-4f5dfd77f8f4.png')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Elite ATC Training</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Transform your aviation career with professional air traffic control training
            </p>
            <Button 
              className="glass hover-lift text-lg px-8 py-6"
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Comprehensive training programs adapted to your needs"
              },
              {
                icon: Book,
                title: "Expert Instruction",
                description: "Learn from experienced air traffic controllers"
              },
              {
                icon: Users,
                title: "Small Groups",
                description: "Personalized attention in limited-size classes"
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
          <h2 className="text-4xl font-bold text-center mb-16">Apply Now</h2>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass"
                  placeholder="Your full name"
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
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass"
                placeholder="Your phone number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass"
                placeholder="Tell us about your background and goals"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full glass hover-lift">
              <Send className="w-4 h-4 mr-2" />
              Submit Application
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Elite ATC Training. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;