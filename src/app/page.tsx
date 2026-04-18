import { Suspense } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  CheckCircle2, 
  MessageCircle, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  BarChart2,
  ArrowRight,
  Calculator
} from "lucide-react";
import { generateReinforcementText } from "@/ai/flows/generate-reinforcement-text";
import { Skeleton } from '@/components/ui/skeleton';

const WHATSAPP_LINK = "https://w.app/goldassessoria";

async function AIGeneratedText() {
  let reinforcementText = "";
  try {
    const userBehaviorData = "Lead de pizzaria interessado em aumentar pedidos e faturamento via WhatsApp.";
    const result = await generateReinforcementText({ userBehaviorData });
    reinforcementText = result.reinforcementText;
  } catch (error) {
    reinforcementText = "Descubra como transformar seu delivery em uma máquina de vendas previsível.";
  }

  return (
    <div className="bg-primary/10 p-4 rounded-xl border border-primary/20 mt-4">
      <p className="text-sm font-bold text-primary italic text-center">
        " {reinforcementText} "
      </p>
    </div>
  );
}

function AIGeneratedTextFallback() {
  return (
    <div className="space-y-2 w-full mt-4">
      <Skeleton className="h-4 w-full bg-white/5" />
      <Skeleton className="h-4 w-3/4 mx-auto bg-white/5" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background pb-12">
      {/* Header com Logo - Responsivo */}
      <header className="flex justify-center items-center p-6 sm:p-12">
        <div className="relative w-[220px] sm:w-[300px] h-[55px] sm:h-[75px]">
          <Image 
            src="https://i.imgur.com/UBxesF1.png" 
            alt="Logo Gold Pizzarias" 
            fill
            style={{ objectFit: 'contain' }}
            priority 
          />
        </div>
      </header>

      <main className="flex flex-col items-center px-4 max-w-4xl mx-auto space-y-6 sm:space-y-10">
        
        {/* Card Principal - Responsivo */}
        <Card className="w-full shadow-[0_0_40px_rgba(255,215,0,0.1)] border-primary/20 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-card">
          <CardHeader className="text-center p-6 sm:p-10 pb-4 space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              ✅ Sua análise da pizzaria foi liberada!
            </CardTitle>
            <CardDescription className="text-base sm:text-xl font-medium text-muted-foreground">
              Agora falta só um passo para receber seu diagnóstico completo:
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6 sm:p-10 pt-0 space-y-6">
            <Button asChild size="lg" className="w-full h-16 sm:h-20 text-lg sm:text-xl font-bold rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1eb956] text-black shadow-lg transition-all hover:scale-[1.02] active:scale-95 border-none">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
                Confirmar no WhatsApp
              </a>
            </Button>
            <p className="text-center text-xs sm:text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              Clique no botão e envie a mensagem automática.
            </p>
          </CardContent>
        </Card>

        {/* Seção: Reforço de Valor e Prova Social */}
        <section className="w-full grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {/* O que vai descobrir */}
          <Card className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-white/5 bg-white/5 shadow-inner">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Em poucos minutos, você vai descobrir:</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Onde sua pizzaria está perdendo pedidos hoje",
                "O que está travando seu crescimento no delivery",
                "Como aumentar seus pedidos de forma consistente"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-white/90">
                  <div className="mt-0.5 bg-primary/20 p-1 rounded-full shrink-0">
                    <TrendingUp className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Suspense fallback={<AIGeneratedTextFallback />}>
              <AIGeneratedText />
            </Suspense>
          </Card>

          {/* Prova Social */}
          <Card className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-none shadow-xl bg-primary text-black flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                Casos Reais:
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/10 p-4 rounded-xl border border-black/5">
                  <p className="text-lg sm:text-2xl font-black leading-tight">Vendas Sem Taxas</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-80 mt-1">CRESCIMENTO EM 70% NO CARDÁPIO PRÓPRIO</p>
                </div>
                <div className="bg-black/10 p-4 rounded-xl border border-black/5">
                  <p className="text-lg sm:text-2xl font-black leading-tight">Novos clientes</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-80 mt-1">AUMENTO NA BASE DE CLIENTES</p>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold italic leading-tight mt-4">
              "Crescimento previsível sem depender apenas de iFood"
            </p>
          </Card>
        </section>

        {/* Pré-frame - Responsivo */}
        <div className="w-full bg-white/5 border-l-4 border-primary p-6 sm:p-8 rounded-r-2xl sm:rounded-r-3xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">⚠️ Importante:</h3>
          </div>
          <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-lg">
            Essa não é uma conversa comum. É uma análise direta da sua pizzaria para você vender mais.
          </p>
        </div>

        {/* Instrução Simples */}
        <section className="w-full space-y-4 sm:space-y-6">
          <h3 className="text-center text-lg sm:text-xl font-bold text-primary">Para aproveitar melhor:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 sm:gap-4 bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg">
                <BarChart2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">Tenha acesso a quantidade de pedidos mensais</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-lg">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">Separe alguns minutos sem distrações</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="w-full pt-6 sm:pt-10 text-center">
          <Button asChild size="lg" className="w-full h-16 sm:h-20 text-lg sm:text-xl font-black rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 text-black shadow-[0_10px_30px_rgba(255,215,0,0.2)] transition-all">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Calculator className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
              Garantir minha análise agora
            </a>
          </Button>
          <p className="text-[10px] text-muted-foreground mt-6 font-medium uppercase tracking-[0.2em]">
            Gold Pizzarias © 2024
          </p>
        </div>

      </main>
    </div>
  );
}
