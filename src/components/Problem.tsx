import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Seu site trabalha para você ou apenas existe online?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Muitas empresas investem em um site e o tratam como um cartão de visitas digital. Ele existe, mas não gera oportunidades. Você não sabe quem o visita, de onde essas pessoas vêm, ou quais ações elas tomam. Cada real investido em marketing parece um tiro no escuro. A falta de dados claros transforma decisões importantes em apostas arriscadas.
        </p>
      </div>
    </section>
  );
};

export default Problem;
