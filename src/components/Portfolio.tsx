import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import catedralImage from "@/assets/catedral-transportes.png";
import cleoImage from "@/assets/cleo-cabelereiros.png";

const Portfolio = () => {
  const projects = [
    {
      name: "Catedral Transportes",
      url: "https://www.catedraltransportes.com.br/",
      image: catedralImage,
      description: "Site institucional para empresa de logística e transporte de veículos",
      results: "Média de 10 leads qualificados por dia",
      tags: ["SEO", "Conversão", "Design Responsivo", "Consultoria em Mídia"]
    },
    {
      name: "Cléo Cabeleireiros",
      url: "https://www.cleocabelereiros.com.br/",
      image: cleoImage,
      description: "Site profissional para salão de beleza especializado em cabelo, unhas e bem-estar",
      results: "Aumento de 300% nos agendamentos via WhatsApp",
      tags: ["SEO Local", "UX", "Integração WhatsApp", "Consultoria em Mídia"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos que transformam negócios
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça alguns sites que criamos e os resultados que geraram
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Screenshot do site ${project.name}`}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Visitar site ${project.name}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-primary mb-1">Resultado:</div>
                  <div className="text-lg font-medium">{project.results}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
