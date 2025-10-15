import { MessageCircle } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const WhatsAppButton = () => {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'floating_button',
      location: 'fixed_bottom_right'
    });
  };

  return (
    <a
      href="https://wa.me/5561999167627?text=Olá! Gostaria de conversar sobre os serviços da Neura Studio."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
