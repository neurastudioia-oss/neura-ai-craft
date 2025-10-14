import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";

const pricingPlans = [
  {
    name: "Essencial",
    slogan: "Sua Presença Digital Inteligente",
    features: [
      { name: "Site Profissional de Alta Performance" },
      { name: "Dashboard de Saúde Digital" },
      { name: "Plano Mensal de Suporte & Segurança" },
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Crescimento",
    slogan: "Sua Máquina de Geração de Leads",
    features: [
      { name: "Site Profissional com Blog Integrado" },
      { name: "Dashboard de Conversão e Leads" },
      { name: "Plano Mensal de Suporte & Segurança" },
    ],
    cta: "Ativar Crescimento",
    popular: true,
  },
  {
    name: "Performance",
    slogan: "Sua Central de Comando para ROI",
    features: [
      { name: "Site Profissional com Blog Integrado" },
      { name: "Dashboard de ROI e Mídia Paga" },
      { name: "Consultoria Estratégica de Mídia" },
      { name: "Plano Mensal de Suporte & Segurança" },
    ],
    cta: "Escalar Resultados",
    popular: false,
  },
];

const PricingTable = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu Ambiente de Crescimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa qualidade de construção é a mesma para todos. O que muda é a camada de inteligência e serviço para impulsionar seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-primary border-2 shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl mb-3">{plan.name}</CardTitle>
                <p className="text-base font-medium text-foreground">{plan.slogan}</p>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="mt-auto pt-6">
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={scrollToContact}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
