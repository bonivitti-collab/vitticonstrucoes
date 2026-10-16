# Diretrizes Operacionais e de Segurança — Vitti Construções

## 1. Segurança e Privacidade no Frontend
- **Zero debug em produção:** Nunca exponha modais internos, tabelas de leads locais (localStorage), botões de cópia de e-mails de clientes ou download de CSV no frontend público.
- **Captura de leads segura:** Formulários públicos (como a Lista VIP Verta) devem enviar dados apenas para o serviço configurado (Web3Forms) e exibir apenas feedback de sucesso/erro genérico ao visitante.

## 2. Central de Configurações Corporativas (`lib/config.ts`)
- Todas as informações institucionais devem ser consumidas a partir de `lib/config.ts`:
  - E-mail oficial: `contato@vitticonstrucoes.com.br`
  - WhatsApp: `5522998434956` / `(22) 99843-4956`
  - Domínio principal: `https://vitticonstrucoes.com.br`
  - CNPJ: `67.936.883/0001-17`
- Nunca insira e-mails ou números hardcoded diretamente nos componentes sem passar pelo `CONFIG`.

## 3. Preservação de Arquivos de Verificação e SEO
- **Google Search Console:** O arquivo `public/google68473e1b5b93bbda.html` NUNCA deve ser apagado ou renomeado. Ele garante a propriedade verificada do domínio.
- **Vercel cleanUrls:** No `vercel.json`, mantenha `"cleanUrls": false` para evitar que arquivos `.html` de verificação sofram redirecionamento 308.
- **Assets PWA e SEO:** Mantenha os ícones PWA de fundo preto sólido (`pwa-512x512.png`, `pwa-192x192.png`, `apple-touch-icon.png`), o `manifest.webmanifest`, o `sitemap.xml` e a imagem de compartilhamento `og-image.jpg` íntegros.

## 4. Fluxo de Deploy e Validação
- Antes de qualquer deploy, valide a tipagem e o bundle: `npm run build`.
- Envie as alterações ao GitHub na branch `main`.
- Promova para produção na Vercel: `npx vercel --prod --yes`.
