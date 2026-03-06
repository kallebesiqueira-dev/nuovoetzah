# nuovoetzah

Repositorio publico do EtzahWeb.

## Estrutura
- docs/ - site estatico (GitHub Pages)
- backend/ - API Node.js

## Como rodar localmente (backend)
1) Copie backend/.env.example para backend/.env e ajuste as variaveis.
2) Instale dependencias: npm install
3) Inicie: npm start

## Notificacoes (WhatsApp + Email)
Defina estas variaveis no Render para receber leads:
- EMAIL_HOST (ex.: smtp.gmail.com)
- EMAIL_PORT (ex.: 465)
- EMAIL_SECURE (true/false)
- EMAIL_USER
- EMAIL_PASS (senha de app do Gmail)
- EMAIL_FROM (opcional)
- EMAIL_TO
- EMAIL_SUBJECT (opcional)
- EMAIL_AUTOREPLY_SUBJECT (opcional)
- EMAIL_AUTOREPLY_TEXT (opcional)
- WHATSAPP_TOKEN
- WHATSAPP_PHONE_ID
- WHATSAPP_ADMIN_NUMBER (numero que recebe notificacao)
- WHATSAPP_API_BASE (opcional)
- WHATSAPP_AUTOREPLY_TEXT (opcional)

## Deploy
- GitHub Pages a partir de /docs

## Licenca
Este projeto e proprietario (All Rights Reserved).
Uso, copia, modificacao e redistribuicao sem autorizacao previa por escrito nao sao permitidos.
Consulte [LICENSE](LICENSE).
