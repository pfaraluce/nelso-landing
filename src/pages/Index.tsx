import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Course from "@/components/Course";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Course />
      <Profile />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;