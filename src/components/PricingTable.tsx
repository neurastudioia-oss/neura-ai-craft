import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const pricingPlans = [
  {
    name: "Essencial",
    slogan: "Ideal para começar com uma presença digital profissional e sólida.",
    setupPrice: "1.500",
    monthlyPrice: "R$ 150/mês",
    monthlyOptional: true,
    features: [
      { name: "Site Institucional de até 3 páginas", included: true },
      { name: "Design 100% Responsivo", included: true },
      { name: "SEO On-Page Básico", included: true },
      { name: "Setup Google Analytics e Search Console", included: true },
      { name: "Suporte Técnico e Manutenção", included: true },
      { name: "Hospedagem e Backups de Segurança", included: true },
      { name: "Tagueamento de Conversões", included: false },
      { name: "Agente de Conteúdo", included: false },
      { name: "Consultoria de Mídia", included: false },
    ],
    cta: "Peça um Orçamento",
    popular: false,
  },
  {
    name: "Crescimento",
    slogan: "A solução completa para transformar seu site em uma máquina de gerar leads.",
    setupPrice: "1.500",
    monthlyPrice: "R$ 450/mês",
    monthlyOptional: false,
    featuresHeader: "Tudo do Plano Essencial, e mais:",
    features: [
      { name: "Site de até 7 páginas + Blog", included: true },
      { name: "Tagueamento de Eventos de Conversão", included: true },
      { name: "Agente de Conteúdo (4 artigos iniciais)", included: true },
      { name: "2 Novos Artigos por Mês (Plano Mensal)", included: true },
      { name: "Relatório Mensal Simplificado", included: true },
      { name: "Consultoria de Mídia", included: false },
    ],
    cta: "Comece a Crescer",
    popular: true,
  },
  {
    name: "Performance",
    slogan: "Para empresas prontas para escalar com estratégia de dados e mídia paga.",
    setupPrice: "1.500",
    monthlyPrice: "R$ 850/mês",
    monthlyOptional: false,
    featuresHeader: "Tudo do Plano Crescimento, e mais:",
    features: [
      { name: "Site Completo ou Landing Page de Alta Conversão", included: true },
      { name: "Consultoria Estratégica de Mídia (1h30)", included: true },
      { name: "Relatório Inicial de Oportunidades SEO", included: true },
      { name: "4 Novos Artigos por Mês (Plano Mensal)", included: true },
      { name: "Relatório Mensal Detalhado com Insights", included: true },
    ],
    cta: "Agende uma Estratégia",
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
            Planos transparentes para impulsionar seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha a solução ideal para sua empresa, desde a presença inicial até a performance total em marketing digital.
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
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{plan.slogan}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                {/* Pricing */}
                <div className="mb-6 space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Investimento Inicial
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">A partir de</div>
                    <div className="text-3xl font-bold text-primary">R$ {plan.setupPrice}</div>
                    <div className="text-xs text-muted-foreground mt-1">Pagamento Único</div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Plano Mensal
                    </div>
                    <div className="text-2xl font-bold">{plan.monthlyPrice}</div>
                    {plan.monthlyOptional && (
                      <div className="text-xs text-muted-foreground">(Opcional)</div>
                    )}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Features */}
                <div className="space-y-3">
                  {plan.featuresHeader && (
                    <p className="text-sm font-medium mb-3">{plan.featuresHeader}</p>
                  )}
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <Minus className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${!feature.included ? 'text-muted-foreground' : ''}`}>
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
