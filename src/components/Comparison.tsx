import { Check, X } from "lucide-react";

const Comparison = () => {
  const others = [
    { feature: "Site responsivo", has: true },
    { feature: "Design bonito", has: true },
    { feature: "Estratégia de conversão", has: false },
    { feature: "SEO otimizado", has: false },
    { feature: "Blog e conteúdo estratégico", has: false },
    { feature: "Relatórios de performance", has: false },
    { feature: "Inteligência de dados", has: false },
    { feature: "Monitoramento contínuo", has: false },
  ];

  const neura = [
    { feature: "Site responsivo", has: true },
    { feature: "Design bonito", has: true },
    { feature: "Estratégia de conversão", has: true },
    { feature: "SEO otimizado", has: true },
    { feature: "Blog e conteúdo estratégico", has: true },
    { feature: "Relatórios de performance", has: true },
    { feature: "Inteligência de dados", has: true },
    { feature: "Monitoramento contínuo", has: true },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Por que somos diferentes?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Enquanto outros apenas criam sites, nós destravamos crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Outras Empresas */}
          <div className="bg-secondary/30 rounded-lg p-4 sm:p-6 border border-border">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
              Outras Empresas
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {others.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.has ? (
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm sm:text-base ${!item.has && "text-muted-foreground/60 line-through"}`}>
                    {item.feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Neura Studio */}
          <div className="bg-primary/5 rounded-lg p-4 sm:p-6 border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
              COMPLETO
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center text-primary">
              Neura Studio
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {neura.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium">
                    {item.feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#packages"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Planos Completos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
