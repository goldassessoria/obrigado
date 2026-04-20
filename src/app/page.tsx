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

const WHATSAPP_BASE_NUMBER = "5511951683569";

async function AIGeneratedText({ name, pizzeria }: { name: string, pizzeria: string }) {
  let reinforcementText = "";
  try {
    const userBehaviorData = `O dono da pizzaria ${pizzeria}, chamado ${name}, quer aumentar pedidos via WhatsApp.`;
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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; pizzeria?: string }>;
}) {
  const { name = "Empreendedor", pizzeria = "Sua Pizzaria" } = await searchParams;
  
  const message = `Olá, meu nome é ${name} da pizzaria ${pizzeria}. Quero confirmar minha análise!`;
  const whatsappLink = `https://wa.me/${WHATSAPP_BASE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col min-h-screen w-full bg-background pb-12">
      {/* Header com Logo - Responsivo Mobile-First */}
      <header className="flex justify-center items-center p-6 sm:p-12">
        <div className="relative w-[180px] h-[45px] sm:w-[300px] sm:h-[75px]">
          <Image 
            src="https://i.imgur.com/UBxesF1.png" 
            alt="Logo Gold Pizzarias" 
            fill
            style={{ objectFit: 'contain' }}
            priority 
          />
        </div>
      </header>

      <main className="flex flex-col items-center px-4 w-full max-w-4xl mx-auto space-y-6 sm:space-y-10">
        
        {/* Card Principal */}
        <Card className="w-full shadow-[0_0_40px_rgba(255,215,0,0.1)] border-primary/20 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-card">
          <CardHeader className="text-center p-5 sm:p-10 pb-4 space-y-4">
            <div className="flex justify-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <CheckCircle2 className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-xl sm:text-4xl font-extrabold text-white leading-tight">
              ✅ Sua análise da pizzaria foi liberada!
            </CardTitle>
            <CardDescription className="text-sm sm:text-xl font-medium text-muted-foreground">
              Agora falta só um passo para receber seu diagnóstico completo:
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-5 sm:p-10 pt-0 space-y-6">
            <Button asChild size="lg" className="w-full h-14 sm:h-20 text-base sm:text-xl font-bold rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1eb956] text-black shadow-lg transition-all hover:scale-[1.01] active:scale-95 border-none">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5 sm:h-8 sm:w-8" />
                Confirmar no WhatsApp
              </a>
            </Button>
            <p className="text-center text-[10px] sm:text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
              Clique no botão e envie a mensagem automática.
            </p>
          </CardContent>
        </Card>

        {/* Seção: Reforço de Valor - Grid Mobile-First */}
        <section className="w-full grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {/* O que vai descobrir */}
          <Card className="p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] border-white/5 bg-white/5 shadow-inner">
            <h3 className="text-base sm:text-xl font-bold text-primary mb-4 sm:mb-6">Em poucos minutos, você vai descobrir:</h3>
            <ul className="space-y-3">
              {[
                "Onde sua pizzaria está perdendo pedidos",
                "O que está travando seu crescimento",
                "Como aumentar pedidos de forma consistente"
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
              <AIGeneratedText name={name} pizzeria={pizzeria} />
            </Suspense>
          </Card>

          {/* Resultados Qualitativos */}
          <Card className="p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] border-none shadow-xl bg-primary text-black flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                Resultados Reais:
              </h3>
              <div className="space-y-3">
                <div className="bg-black/10 p-3 sm:p-4 rounded-xl border border-black/5">
                  <p className="text-lg sm:text-2xl font-black leading-tight">Vendas Sem Taxas</p>
                  <p className="text-[9px] sm:text-xs uppercase tracking-widest font-bold opacity-80 mt-1">CRESCIMENTO NO CARDÁPIO PRÓPRIO</p>
                </div>
                <div className="bg-black/10 p-3 sm:p-4 rounded-xl border border-black/5">
                  <p className="text-lg sm:text-2xl font-black leading-tight">Novos clientes</p>
                  <p className="text-[9px] sm:text-xs uppercase tracking-widest font-bold opacity-80 mt-1">AUMENTO NA BASE E LUCRO REAL</p>
                </div>
              </div>
            </div>
            <p className="text-[10px] sm:text-xs font-bold italic leading-tight mt-4 opacity-80 text-right">
              "Crescimento previsível fora do iFood"
            </p>
          </Card>
        </section>

        {/* Importante / Alerta */}
        <div className="w-full bg-white/5 border-l-4 border-primary p-5 sm:p-8 rounded-r-xl sm:rounded-r-3xl">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
            <h3 className="text-base sm:text-xl font-black text-white uppercase">⚠️ Importante:</h3>
          </div>
          <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-lg">
            Essa é uma análise estratégica da sua pizzaria para você vender mais.
          </p>
        </div>

        {/* Instruções Finais */}
        <section className="w-full space-y-4">
          <h3 className="text-center text-base sm:text-xl font-bold text-primary">Para aproveitar melhor:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="bg-primary/20 p-2 rounded-lg">
                <BarChart2 className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-white">Sua quantidade de pedidos mensais em mãos</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-white">Separe alguns minutos sem distrações</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="w-full pt-4 sm:pt-10 text-center">
          <Button asChild size="lg" className="w-full h-14 sm:h-20 text-base sm:text-xl font-black rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 text-black shadow-[0_10px_30px_rgba(255,215,0,0.2)]">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Calculator className="mr-2 h-5 w-5 sm:h-8 sm:w-8" />
              Garantir minha análise agora
            </a>
          </Button>
          <p className="text-[9px] text-muted-foreground mt-8 font-medium uppercase tracking-[0.2em]">
            Gold Pizzarias © 2026
          </p>
        </div>

      </main>
    </div>
  );
}
