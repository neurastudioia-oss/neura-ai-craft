import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Seu site é apenas um cartão de visitas digital?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Muitos sites são bonitos, mas invisíveis para o Google e ineficazes em gerar negócios. 
          A Neura Studio transforma seu site em seu <span className="text-primary font-semibold">melhor vendedor</span>, 
          trabalhando 24/7 para sua empresa.
        </p>
      </div>
    </section>
  );
};

export default Problem;
