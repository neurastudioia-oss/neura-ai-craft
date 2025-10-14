import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-4 sm:mb-6">
          <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">
          Seu site trabalha para você ou apenas existe online?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
          Muitas empresas têm um site que existe, mas não gera oportunidades. Sem dados claros, cada real investido em marketing é um tiro no escuro.
        </p>
      </div>
    </section>
  );
};

export default Problem;
