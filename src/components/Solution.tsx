import { Lightbulb } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const Solution = () => {
  const { trackEvent } = useAnalytics();

  const handleCTAClick = () => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'solution_cta',
      location: 'solution_section'
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in">
          {/* Text Content */}
          <div>
            <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0 mt-1 sm:mt-0" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Nós entregamos o mapa e a bússola.
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Na Neura Studio, cada projeto combina:
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              <span className="text-foreground font-semibold">Alavancagem:</span> Site otimizado + estratégias de SEO, conversão e presença digital completa.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              <span className="text-foreground font-semibold">Monitoramento:</span> Relatórios e inteligência de dados que mostram exatamente onde investir.
            </p>
            
            <a
              href="https://wa.me/5561999167627?text=Olá! Quero conhecer os planos da Neura Studio."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Ver os Planos
            </a>
          </div>
          
          {/* Dashboard Visual */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg shadow-2xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                {/* Header */}
                <div className="border-b border-border pb-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Inteligência de Dados</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">R$ 47,3K</span>
                    <span className="text-sm text-muted-foreground">ROI este mês</span>
                  </div>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Conversões</p>
                    <p className="text-2xl font-bold">243</p>
                    <p className="text-xs text-primary">↑ 32% vs. mês anterior</p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Taxa de Conversão</p>
                    <p className="text-2xl font-bold">4.8%</p>
                    <p className="text-xs text-primary">↑ 1.2% vs. mês anterior</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Custo por Lead</p>
                    <p className="text-2xl font-bold">R$ 12</p>
                    <p className="text-xs text-primary">↓ R$ 5 vs. mês anterior</p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">ROAS</p>
                    <p className="text-2xl font-bold">5.2x</p>
                    <p className="text-xs text-primary">↑ 0.8x vs. mês anterior</p>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-primary/5 rounded-lg p-4 h-32 flex items-end justify-around gap-2">
                  <div className="bg-primary w-full h-16 rounded-t"></div>
                  <div className="bg-primary/70 w-full h-24 rounded-t"></div>
                  <div className="bg-primary/50 w-full h-20 rounded-t"></div>
                  <div className="bg-primary w-full h-28 rounded-t"></div>
                  <div className="bg-primary/80 w-full h-32 rounded-t"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
              Tempo Real
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
