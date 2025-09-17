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
import { CheckCircle2, Calculator } from "lucide-react";
import { generateReinforcementText } from "@/ai/flows/generate-reinforcement-text";
import { Skeleton } from '@/components/ui/skeleton';

async function AIGeneratedText() {
  let reinforcementText = "";
  try {
    const userBehaviorData = "User visited the menu page, spent 2 minutes on the 'pizzas' section, and added one item to the cart before abandoning.";
    const result = await generateReinforcementText({ userBehaviorData });
    reinforcementText = result.reinforcementText;
  } catch (error) {
    console.error("Failed to generate reinforcement text:", error);
    reinforcementText = "Você já conhece nossa Calculadora de precificação? Com ela você descobre o preço de venda ideal para não ter prejuízo no iFood.";
  }

  return (
    <p className="text-base font-bold text-primary">
      {reinforcementText}
    </p>
  );
}

function AIGeneratedTextFallback() {
  return (
    <div className="space-y-2 w-full">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <header className="flex justify-center items-center p-4 pt-8">
        <Image src="https://i.imgur.com/UBxesF1.png" alt="Logo Gold Pizzarias" width={300} height={75} priority />
      </header>
      <main className="flex flex-grow w-full items-start justify-center p-4">
        <Card className="w-full max-w-md animate-in fade-in-50 zoom-in-95 duration-500 shadow-xl rounded-2xl">
          <CardHeader className="items-center text-center p-6 pb-2 sm:p-8 sm:pb-4">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle2 className="h-16 w-16 text-accent" />
            </div>
            <CardTitle className="mt-6 text-4xl font-bold text-foreground">Obrigado!</CardTitle>
            <CardDescription className="mt-2 text-base text-muted-foreground">
              Sua mensagem foi recebida com sucesso.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center px-6 py-4 sm:px-8 sm:py-6 min-h-[64px] flex items-center justify-center">
            <Suspense fallback={<AIGeneratedTextFallback />}>
              <AIGeneratedText />
            </Suspense>
          </CardContent>
          <CardFooter className="flex justify-center p-6 pt-2 sm:p-8 sm:pt-4">
            <Button asChild size="lg" className="w-full font-semibold text-black hover:text-white">
              <a href="https://calculadora.goldpizzarias.com.br" target="_blank" rel="noopener noreferrer">
                <Calculator />
                Acessar Calculadora
              </a>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
