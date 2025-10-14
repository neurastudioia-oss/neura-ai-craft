import { Gauge, LayoutDashboard, TrendingUp } from "lucide-react";

const methodSteps = [
  {
    icon: Gauge,
    title: "Criamos seu Site de Alta Performance",
    description: "Desenvolvemos um site profissional, otimizado para SEO e conversões, com design responsivo e experiência de usuário impecável.",
  },
  {
    icon: LayoutDashboard,
    title: "Entregamos seu Dashboard Personalizado",
    description: "Nosso diferencial: você recebe um painel de controle visual que unifica todas as métricas importantes do seu negócio em tempo real.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamos seu Crescimento",
    description: "Através do plano mensal, mantemos seu site atualizado, geramos conteúdo estratégico e analisamos os dados para maximizar seus resultados.",
  },
];

const Method = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como Transformamos seu Negócio Digital
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Site profissional + Dashboard inteligente + Acompanhamento contínuo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodSteps.map((step, index) => (
            <div
              key={index}
              className="relative group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Connection Line */}
              {index < methodSteps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-card border border-border rounded-lg p-8 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
