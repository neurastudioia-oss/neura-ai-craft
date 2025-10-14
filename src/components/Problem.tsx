import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Você dirige seu negócio no escuro?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Ter um site é o primeiro passo. Mas sem dados claros, você está apenas adivinhando o que funciona. 
          Campanhas, conteúdos, investimentos... tudo se torna um tiro no escuro. 
          A falta de <span className="text-primary font-semibold">clareza sobre o que gera resultado</span> é o maior obstáculo para o crescimento.
        </p>
      </div>
    </section>
  );
};

export default Problem;
