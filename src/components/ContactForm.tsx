import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pronto para parar de adivinhar e começar a decidir com clareza?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Vamos construir seu ambiente de crescimento com clareza total sobre seus resultados.
          </p>

          <Button 
            size="lg"
            asChild
            className="text-lg px-10 py-7 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://wa.me/5561999167627?text=Olá! Quero falar sobre meu projeto e conhecer as soluções da Neura Studio."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Especialista no WhatsApp
              <Send className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
