import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";

const pricingPlans = [
  {
    name: "Essencial",
    dashboardName: "Painel de Saúde Digital",
    slogan: "Site profissional completo + Dashboard para acompanhar tráfego e primeiras conversões.",
    features: [
      { name: "Site Institucional de até 3 páginas", included: true },
      { name: "Dashboard Personalizado: Painel de Saúde Digital", included: true, highlight: true },
      { name: "Design 100% Responsivo", included: true },
      { name: "SEO On-Page Básico", included: true },
      { name: "Setup Google Analytics e Search Console", included: true },
      { name: "Métricas em Tempo Real: Tráfego e Comportamento", included: true },
      { name: "Suporte Técnico e Manutenção", included: true },
      { name: "Hospedagem e Backups de Segurança", included: true },
      { name: "Tagueamento Avançado de Conversões", included: false },
      { name: "Análise de ROI de Campanhas", included: false },
      { name: "Consultoria Estratégica de Mídia", included: false },
    ],
    cta: "Começar com Clareza",
    popular: false,
  },
  {
    name: "Crescimento",
    dashboardName: "Painel de Conversão e Leads",
    slogan: "Site otimizado para leads + Blog + Dashboard completo de conversões e performance de campanhas.",
    featuresHeader: "Tudo do Plano Essencial, e mais:",
    features: [
      { name: "Site de até 7 páginas + Blog Otimizado", included: true },
      { name: "Dashboard Personalizado: Painel de Conversão e Leads", included: true, highlight: true },
      { name: "Tagueamento Avançado de Eventos de Conversão", included: true },
      { name: "Métricas de Lead: Origem, Custo e Taxa de Conversão", included: true },
      { name: "Agente de Conteúdo com IA (4 artigos iniciais)", included: true },
      { name: "2 Novos Artigos Otimizados por Mês", included: true },
      { name: "Relatório Mensal Simplificado com Insights", included: true },
      { name: "Análise de ROI de Campanhas", included: false },
      { name: "Consultoria Estratégica de Mídia", included: false },
    ],
    cta: "Controlar Meu Crescimento",
    popular: true,
  },
  {
    name: "Performance",
    dashboardName: "Central de Comando de ROI",
    slogan: "Site de alta conversão + Landing Pages + Dashboard avançado com ROI, ROAS e consultoria estratégica.",
    featuresHeader: "Tudo do Plano Crescimento, e mais:",
    features: [
      { name: "Site Completo ou Landing Page de Alta Conversão", included: true },
      { name: "Dashboard Personalizado: Central de Comando de ROI", included: true, highlight: true },
      { name: "Análise Completa de ROI e ROAS por Canal", included: true },
      { name: "Integração com Plataformas de Mídia (Meta, Google Ads)", included: true },
      { name: "Consultoria Estratégica de Mídia (1h30 mensal)", included: true },
      { name: "Relatório Inicial de Oportunidades SEO", included: true },
      { name: "4 Novos Artigos Estratégicos por Mês", included: true },
      { name: "Relatório Mensal Detalhado com Plano de Ação", included: true },
      { name: "Suporte Prioritário e Análise Proativa", included: true },
    ],
    cta: "Escalar com Inteligência",
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
            Site profissional + Dashboard personalizado. Todos os planos incluem as ferramentas que você precisa para crescer com clareza e controle.
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
                {plan.dashboardName && (
                  <div className="mt-2 mb-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {plan.dashboardName}
                    </Badge>
                  </div>
                )}
                <CardDescription className="text-sm leading-relaxed">{plan.slogan}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
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
                      <span className={`text-sm ${!feature.included ? 'text-muted-foreground' : ''} ${feature.highlight ? 'font-semibold text-foreground' : ''}`}>
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
