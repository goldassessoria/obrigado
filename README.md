# Gold Pizzarias - Página de Obrigado

Este projeto é a página de confirmação (Obrigado) da Gold Pizzarias, otimizada para conversão no WhatsApp e com rastreamento completo (Meta Pixel e Google Ads).

## Como subir as alterações (Deploy)

Para salvar suas mudanças e atualizar o site ao vivo, execute os seguintes comandos no terminal:

```bash
# 1. Configurar sua identidade (se for a primeira vez no ambiente)
git config --global user.email "seu-email@exemplo.com"
git config --global user.name "Seu Nome"

# 2. Adicionar as mudanças
git add .

# 3. Criar um comentário sobre o que foi feito
git commit -m "feat: atualiza página de obrigado e pixels"

# 4. Enviar para o repositório principal
git push origin main
```

### 🔑 Autenticação (Username/Password)
Se o Git pedir **Username** e **Password** ao fazer o push:

1. **Username**: Digite seu usuário do GitHub.
2. **Password (Token)**: O GitHub **não aceita sua senha normal** no terminal. Você precisa de um **Personal Access Token (PAT)**:
   - Vá ao seu GitHub > **Settings** (Configurações).
   - No menu lateral esquerdo, clique em **Developer settings**.
   - Clique em **Personal access tokens** > **Tokens (classic)**.
   - Clique em **Generate new token (classic)**.
   - Dê um nome (ex: "Terminal Access") e marque a opção **repo**.
   - Clique em **Generate token** no final da página.
   - **IMPORTANTE**: Copie o código gerado. Ele será usado como sua "senha" no terminal.

O Firebase App Hosting detectará o push na branch `main` e iniciará o build automaticamente.

## Tecnologias
- Next.js 15 (App Router)
- Tailwind CSS
- Shadcn UI
- Genkit (IA para textos de reforço)
- Meta Pixel & Google Ads Integration
