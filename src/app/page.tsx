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
  Instagram,
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
      {/* Header com Logo */}
      <header className="flex justify-center items-center p-8 sm:p-12">
        <Image 
          src="https://i.imgur.com/UBxesF1.png" 
          alt="Logo Gold Pizzarias" 
          width={300} 
          height={75} 
          priority 
        />
      </header>

      <main className="flex flex-col items-center px-4 max-w-4xl mx-auto space-y-10">
        
        {/* Card Principal */}
        <Card className="w-full shadow-[0_0_40px_rgba(255,215,0,0.1)] border-primary/20 rounded-[2.5rem] overflow-hidden bg-card">
          <CardHeader className="text-center p-10 pb-4 space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              ✅ Sua análise da pizzaria foi liberada!
            </CardTitle>
            <CardDescription className="text-lg sm:text-xl font-medium text-muted-foreground">
              Agora falta só um passo para receber seu diagnóstico completo:
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-10 pt-0 space-y-6">
            <Button asChild size="lg" className="w-full h-20 text-xl font-bold rounded-2xl bg-[#25D366] hover:bg-[#1eb956] text-black shadow-lg transition-all hover:scale-[1.02] active:scale-95 border-none">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="mr-3 h-8 w-8" />
                Confirmar minha análise no WhatsApp
              </a>
            </Button>
            <p className="text-center text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              Clique no botão acima e envie a mensagem automática para garantir sua vaga.
            </p>

            {/* Frase da Calculadora em Amarelo Dourado e Negrito */}
            <p className="text-center text-primary font-bold mt-6 px-4">
              Você já conhece nossa Calculadora de precificação? Com ela você descobre o preço de venda ideal para não ter prejuízo no iFood.
            </p>
          </CardContent>
        </Card>

        {/* Seção: Reforço de Valor */}
        <section className="w-full grid gap-8 sm:grid-cols-2">
          <Card className="p-8 rounded-[2rem] border-white/5 bg-white/5 shadow-inner">
            <h3 className="text-xl font-bold text-primary mb-6">Em poucos minutos, você vai descobrir:</h3>
            <ul className="space-y-4">
              {[
                "Onde sua pizzaria está perdendo pedidos hoje",
                "O que está travando seu crescimento no delivery",
                "Como aumentar seus pedidos de forma consistente"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm font-semibold text-white/90">
                  <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Suspense fallback={<AIGeneratedTextFallback />}>
              <AIGeneratedText />
            </Suspense>
          </Card>

          {/* Prova Social - Atualizada */}
          <Card className="p-8 rounded-[2rem] border-none shadow-xl bg-primary text-black">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Pizzarias que aplicaram isso:
            </h3>
            <div className="space-y-5">
              <div className="bg-black/10 p-5 rounded-2xl border border-black/5">
                <p className="text-2xl font-black leading-tight">Vendas Sem Taxas</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80 mt-1">CRESCIMENTO EM 70% NO CARDÁPIO PRÓPRIO</p>
              </div>
              <div className="bg-black/10 p-5 rounded-2xl border border-black/5">
                <p className="text-2xl font-black leading-tight">Vendas diretas</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80 mt-1">foco total em lucro real</p>
              </div>
              <p className="text-sm font-bold italic leading-tight">
                "Crescimento previsível sem depender apenas de iFood"
              </p>
            </div>
          </Card>
        </section>

        {/* Pré-frame */}
        <div className="w-full bg-white/5 border-l-4 border-primary p-8 rounded-r-3xl">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-7 w-7 text-primary" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">⚠️ Importante:</h3>
          </div>
          <p className="text-muted-foreground font-medium leading-relaxed text-lg">
            Essa não é uma conversa comum. É uma análise direta da sua pizzaria, onde você já sai com clareza do que precisa ajustar para vender mais.
          </p>
        </div>

        {/* Instrução Simples */}
        <section className="w-full space-y-6">
          <h3 className="text-center text-xl font-bold text-primary">Para aproveitar melhor:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 shadow-sm">
              <div className="bg-primary/20 p-3 rounded-xl">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-bold text-white">Esteja com acesso ao seu Instagram ou pedidos</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 shadow-sm">
              <div className="bg-primary/20 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-bold text-white">Separe alguns minutos sem distrações</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="w-full pt-10 text-center">
          <Button asChild size="lg" className="w-full h-20 text-xl font-black rounded-2xl bg-primary hover:bg-primary/90 text-black shadow-[0_10px_30px_rgba(255,215,0,0.2)] transition-all">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Calculator className="mr-3 h-8 w-8" />
              Quero garantir minha análise no WhatsApp
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-6 font-medium uppercase tracking-[0.2em]">
            Gold Pizzarias © 2024
          </p>
        </div>

      </main>
    </div>
  );
}
