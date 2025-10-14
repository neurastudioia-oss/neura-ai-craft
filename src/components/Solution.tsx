import { Lightbulb } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-12 w-12 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Nós entregamos o mapa e a bússola.
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Na Neura Studio, cada projeto tem dois pilares:
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              <span className="text-foreground font-semibold">O Motor:</span> Site de alta performance otimizado para converter.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              <span className="text-foreground font-semibold">O Painel:</span> Dashboard personalizado que transforma dados em decisões claras.
            </p>
            
            <a
              href="#packages"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Dashboard Personalizado</h3>
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
