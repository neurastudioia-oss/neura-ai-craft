import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-32 text-center animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-sm font-medium text-primary">✨ Desenvolvimento Web + Ecossistema Digital</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-foreground">Desenvolvemos</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Sites que Geram Resultados.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Criamos seu site profissional e entregamos um ecossistema completo de soluções para alavancar sua presença digital: SEO, análise de dados, estratégias de conversão e monitoramento contínuo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            asChild
            className="text-lg px-12 py-8 shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.5)] transition-all duration-500 hover:scale-105 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
          >
            <a href="https://wa.me/5561999167627?text=Olá! Quero alavancar minha presença digital com a Neura Studio." target="_blank" rel="noopener noreferrer">
              Quero Alavancar Meu Negócio
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Desenvolvimento profissional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>SEO e performance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Análise e monitoramento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
