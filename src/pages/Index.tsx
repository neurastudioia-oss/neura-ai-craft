import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Packages from "@/components/Packages";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <div id="packages">
        <Packages />
      </div>
      <div id="differentials">
        <Differentials />
      </div>
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
