import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }).max(100),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  phone: z.string().trim().min(8, { message: "Telefone inválido" }).max(20),
  message: z.string().trim().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }).max(1000),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pronto para parar de adivinhar e começar a decidir com clareza?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chega de incertezas. Sua empresa merece uma presença digital que não apenas impressiona, mas que informa e gera resultados que você pode ver. Vamos conversar sobre como a Neura Studio pode construir seu ambiente de crescimento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Conte-nos sobre seu projeto e objetivos..."
              className="min-h-32"
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full md:w-auto">
            Agendar Demonstração Gratuita
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
