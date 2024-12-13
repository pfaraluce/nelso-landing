import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Course from "@/components/Course";
import Profile from "@/components/Profile";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Course />
      <Profile />
      <Testimonials />
      <ContactForm />
      <Footer />
      <NewsTicker />
    </div>
  );
};

export default Index;