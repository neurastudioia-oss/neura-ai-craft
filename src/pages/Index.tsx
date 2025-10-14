import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Method from "@/components/Method";
import Differentials from "@/components/Differentials";
import PricingTable from "@/components/PricingTable";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Method />
      <div id="differentials">
        <Differentials />
      </div>
      <div id="packages">
        <PricingTable />
      </div>
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
