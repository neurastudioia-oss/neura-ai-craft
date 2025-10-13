import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essencial",
    description: "Ideal para começar com uma presença digital profissional e sólida",
    features: [
      "Site Institucional de até 3 páginas",
      "Design 100% Responsivo",
      "SEO On-Page Básico",
      "Setup Google Analytics e Search Console",
      "Suporte Técnico e Manutenção",
      "Hospedagem e Backups de Segurança",
    ],
    popular: false,
  },
  {
    name: "Crescimento",
    description: "A solução completa para transformar seu site em uma máquina de gerar leads",
    features: [
      "Tudo do Plano Essencial",
      "Site de até 7 páginas + Blog",
      "Tagueamento de Eventos de Conversão",
      "Agente de Conteúdo (4 artigos iniciais)",
      "2 Novos Artigos por Mês (Plano Mensal)",
      "Relatório Mensal Simplificado",
    ],
    popular: true,
  },
  {
    name: "Performance",
    description: "Para empresas prontas para escalar com estratégia de dados e mídia paga",
    features: [
      "Tudo do Plano Crescimento",
      "Site Completo ou Landing Page de Alta Conversão",
      "Consultoria Estratégica de Mídia (1h30)",
      "Relatório Inicial de Oportunidades SEO",
      "4 Novos Artigos por Mês (Plano Mensal)",
      "Relatório Mensal Detalhado com Insights",
    ],
    popular: false,
  },
];

const Packages = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pacotes desenhados para cada fase do seu negócio
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha a solução ideal para sua empresa crescer online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? 'border-primary border-2 shadow-xl' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                >
                  Quero este!
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
