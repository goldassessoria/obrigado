import { Suspense } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  ArrowRight
} from "lucide-react";
import { generateReinforcementText } from "@/ai/flows/generate-reinforcement-text";
import { Skeleton } from '@/components/ui/skeleton';

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real
const WHATSAPP_MESSAGE = "Quero receber minha análise da pizzaria e entender como aumentar meus pedidos no delivery.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
      <p className="text-sm font-bold text-accent italic">
        " {reinforcementText} "
      </p>
    </div>
  );
}

function AIGeneratedTextFallback() {
  return (
    <div className="space-y-2 w-full mt-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background pb-12">
      {/* Header com Logo */}
      <header className="flex justify-center items-center p-6 sm:p-8">
        <Image 
          src="https://i.imgur.com/UBxesF1.png" 
          alt="Logo Gold Pizzarias" 
          width={300} 
          height={75} 
          priority 
        />
      </header>

      <main className="flex flex-col items-center px-4 max-w-4xl mx-auto space-y-8">
        
        {/* Card Principal (Acima da dobra) */}
        <Card className="w-full shadow-2xl border-none rounded-3xl overflow-hidden bg-white">
          <CardHeader className="text-center p-8 pb-4 space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              ✅ Sua análise da pizzaria foi liberada!
            </CardTitle>
            <CardDescription className="text-lg sm:text-xl font-medium text-muted-foreground">
              Agora falta só um passo para receber seu diagnóstico completo:
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8 pt-0 space-y-6">
            <Button asChild size="lg" className="w-full h-20 text-xl font-bold rounded-2xl bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-8 w-8" />
                Confirmar minha análise no WhatsApp
              </a>
            </Button>
            <p className="text-center text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Clique no botão acima e envie a mensagem automática para garantir sua vaga.
            </p>
          </CardContent>
        </Card>

        {/* Seção: Reforço de Valor */}
        <section className="w-full grid gap-6 sm:grid-cols-2">
          <Card className="p-6 rounded-3xl border-none shadow-md">
            <h3 className="text-xl font-bold text-accent mb-4">Em poucos minutos, você vai descobrir:</h3>
            <ul className="space-y-3">
              {[
                "Onde sua pizzaria está perdendo pedidos hoje",
                "O que está travando seu crescimento no delivery",
                "Como aumentar seus pedidos de forma consistente"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-semibold">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full">
                    <TrendingUp className="h-4 w-4 text-accent" />
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
          <Card className="p-6 rounded-3xl border-none shadow-md bg-accent text-accent-foreground">
            <h3 className="text-xl font-bold mb-4">📊 Pizzarias que aplicaram isso:</h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-3 rounded-2xl">
                <p className="text-2xl font-black">+500 pedidos</p>
                <p className="text-xs uppercase tracking-wider opacity-80">em poucos dias</p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl">
                <p className="text-2xl font-black">+R$30 mil</p>
                <p className="text-xs uppercase tracking-wider opacity-80">faturados no delivery</p>
              </div>
              <p className="text-sm font-medium italic opacity-90">
                "Crescimento previsível sem depender só de iFood"
              </p>
            </div>
          </Card>
        </section>

        {/* Pré-frame (Importante) */}
        <div className="w-full bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-3xl">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h3 className="text-xl font-black text-yellow-900 uppercase">⚠️ Importante:</h3>
          </div>
          <p className="text-yellow-800 font-medium leading-relaxed">
            Essa não é uma conversa comum. É uma análise direta da sua pizzaria, onde você já sai com clareza do que precisa ajustar para vender mais.
          </p>
        </div>

        {/* Instrução Simples */}
        <section className="w-full space-y-4">
          <h3 className="text-center text-xl font-bold text-accent">Para aproveitar melhor:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
              <div className="bg-primary p-2 rounded-xl">
                <Instagram className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-bold">Esteja com acesso ao seu Instagram ou pedidos</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
              <div className="bg-primary p-2 rounded-xl">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-bold">Separe alguns minutos sem distrações</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="w-full pt-8">
          <Button asChild size="lg" className="w-full h-16 text-lg font-black rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl transition-all">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Quero garantir minha análise no WhatsApp
            </a>
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-4 font-medium uppercase tracking-widest">
            Gold Pizzarias © 2024
          </p>
        </div>

      </main>
    </div>
  );
}