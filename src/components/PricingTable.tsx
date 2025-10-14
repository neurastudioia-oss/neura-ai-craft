import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";

const pricingPlans = [
  {
    name: "Essencial",
    dashboardName: "Painel de Saúde Digital",
    slogan: "Sua Fundação Digital Inteligente",
    description: "A presença online profissional que sua empresa merece, com clareza total sobre seus dados.",
    features: [
      { 
        name: "Site Profissional de Alta Performance", 
        included: true, 
        description: "Uma base sólida com design moderno e otimizado, pronta para crescer com seu negócio."
      },
      { 
        name: "Dashboard: Painel de Saúde Digital", 
        included: true, 
        highlight: true,
        description: "Acompanhe em tempo real o tráfego e a origem dos seus visitantes."
      },
      { 
        name: "Plano Mensal de Suporte & Segurança", 
        included: true,
        description: "Hospedagem, backups e manutenção para sua total tranquilidade."
      },
    ],
    cta: "Construir minha Base",
    popular: false,
  },
  {
    name: "Crescimento",
    dashboardName: "Painel de Conversão e Leads",
    slogan: "Seu Ambiente de Geração de Leads",
    description: "A ferramenta completa para transformar seu site em uma máquina de resultados mensuráveis.",
    features: [
      { 
        name: "Site Profissional de Alta Performance", 
        included: true,
        description: "Configurado com tagueamento avançado de metas para rastrear cada conversão."
      },
      { 
        name: "Dashboard: Painel de Conversão e Leads", 
        included: true, 
        highlight: true,
        description: "Saiba exatamente quantos leads seu site gera e o que impulsiona seus resultados."
      },
      { 
        name: "Agente de Conteúdo Estratégico", 
        included: true,
        description: "Nós criamos e publicamos 2 novos artigos de blog por mês para atrair seu público-alvo."
      },
    ],
    cta: "Acelerar meus Resultados",
    popular: true,
  },
  {
    name: "Performance",
    dashboardName: "Central de Comando de ROI",
    slogan: "Sua Central de Comando para ROI",
    description: "A parceria estratégica definitiva para escalar seu negócio com marketing orientado a dados.",
    features: [
      { 
        name: "Site Profissional de Alta Performance", 
        included: true,
        description: "Integrado às suas plataformas de mídia para uma análise de funil completa."
      },
      { 
        name: "Dashboard: Central de Comando de ROI", 
        included: true, 
        highlight: true,
        description: "Painel unificado com dados de Google Ads e Meta Ads para otimizar seu investimento."
      },
      { 
        name: "Consultoria e Análise Proativa", 
        included: true,
        description: "Inteligência de dados e estratégia contínua para maximizar seu Retorno sobre o Investimento."
      },
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
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-foreground">{plan.slogan}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="space-y-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={`text-sm font-semibold ${feature.highlight ? 'text-primary' : 'text-foreground'}`}>
                          {feature.name}
                        </span>
                      </div>
                      {feature.description && (
                        <p className="text-sm text-muted-foreground ml-8">
                          {feature.description}
                        </p>
                      )}
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
