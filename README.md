# Gold Pizzarias - Página de Obrigado

Este projeto é a página de confirmação (Obrigado) da Gold Pizzarias, otimizada para conversão no WhatsApp e com rastreamento completo (Meta Pixel e Google Ads).

## Como subir as alterações (Deploy)

Para salvar suas mudanças e atualizar o site ao vivo, execute os seguintes comandos no terminal:

```bash
# 1. Adicionar as mudanças
git add .

# 2. Criar um comentário sobre o que foi feito
git commit -m "feat: atualiza copy e pixels de rastreamento"

# 3. Enviar para o repositório principal
git push origin main
```

O Firebase App Hosting detectará o push na branch `main` e iniciará o build automaticamente.

## Tecnologias
- Next.js 15 (App Router)
- Tailwind CSS
- Shadcn UI
- Genkit (IA para textos de reforço)
- Meta Pixel & Google Ads Integration
