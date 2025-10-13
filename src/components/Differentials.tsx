import { Target, Brain, TrendingUp } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Foco em Conversão",
    description: "Não criamos apenas layouts. Mapeamos e tagueamos cada ação importante para você saber exatamente o que gera resultado.",
  },
  {
    icon: Brain,
    title: "IA para Conteúdo e SEO",
    description: "Nossos agentes de IA analisam seu mercado e criam conteúdo otimizado para que você seja encontrado por quem realmente importa.",
  },
  {
    icon: TrendingUp,
    title: "Parceria Estratégica",
    description: "Vamos além da entrega do site. Oferecemos a estratégia para que sua presença online gere lucro de verdade.",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Inteligência que vai além do design
          </h2>
          <p className="text-xl text-muted-foreground">
            O que nos torna diferentes no mercado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {differentials.map((diff, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <diff.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{diff.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
