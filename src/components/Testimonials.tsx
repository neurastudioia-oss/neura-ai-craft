import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados que falam por si
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
              <p className="text-lg mb-4 leading-relaxed">
                "Desde que a Neura Studio construiu nosso site e implementou a estratégia de conversão, 
                recebemos uma média de 10 leads qualificados por dia. O retorno sobre investimento 
                superou todas as nossas expectativas."
              </p>
              <div className="font-semibold">— Catedral Transportes</div>
              <div className="text-sm text-muted-foreground">Logística e Transporte de Veículos</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
              <p className="text-lg mb-4 leading-relaxed">
                "Finalmente temos um site que converte! A equipe não apenas criou um design incrível, 
                mas nos mostrou exatamente como acompanhar resultados. Recomendo de olhos fechados."
              </p>
              <div className="font-semibold">— João Oliveira</div>
              <div className="text-sm text-muted-foreground">Diretor, Marketing Pro</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
