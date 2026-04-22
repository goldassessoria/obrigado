'use client';

import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
}

export function WhatsAppButton({ href, variant = 'primary' }: WhatsAppButtonProps) {
  const handleClick = () => {
    // Meta Pixel: Contact event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
    // Google Analytics: whatsapp_click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: variant,
      });
    }
  };

  if (variant === 'primary') {
    return (
      <Button
        asChild
        size="lg"
        className="w-full h-14 sm:h-20 text-base sm:text-xl font-bold rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1eb956] text-black shadow-lg transition-all hover:scale-[1.01] active:scale-95 border-none"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center justify-center"
        >
          <MessageCircle className="mr-2 h-5 w-5 sm:h-8 sm:w-8" />
          Confirmar no WhatsApp
        </a>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="lg"
      className="w-full h-14 sm:h-20 text-base sm:text-xl font-black rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 text-black shadow-[0_10px_30px_rgba(255,215,0,0.2)]"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center"
      >
        <Calculator className="mr-2 h-5 w-5 sm:h-8 sm:w-8" />
        Garantir minha análise agora
      </a>
    </Button>
  );
}
