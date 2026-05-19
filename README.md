# EtzahWeb

Site institucional da **EtzahWeb** — agência de desenvolvimento web premium com foco em conversão, design e performance.

🌐 **[www.etzahweb.com](https://www.etzahweb.com)**

---

![Hero EtzahWeb](docs/img/hero-preview.png)

---

## Tecnologias

- HTML5 / CSS3 / JavaScript (vanilla)
- Internacionalização nativa: `it` · `pt` · `en`
- Deploy via **GitHub Pages** a partir da pasta `/docs`
- Formulário de contato via **FormSubmit** (sem backend)

## Estrutura

```
docs/
├── index.html       # página principal
├── style.css        # todos os estilos
├── main.js          # interatividade e animações
├── i18n.js          # traduções (it/pt/en)
├── privacy.html     # política de privacidade
├── terms.html       # termos de uso
└── img/             # imagens e assets
```

## Rodar localmente

Abra qualquer servidor estático dentro da pasta `docs/`, por exemplo:

```bash
npx serve docs
```

Ou publique direto no GitHub Pages apontando para `/docs`.

## Formulário de contato

O formulário envia mensagens via FormSubmit para a caixa de entrada da EtzahWeb.
Se o FormSubmit exigir revalidação, ela deve ser feita diretamente no serviço.

## Licença

Este projeto é proprietário — **All Rights Reserved**.
Uso, cópia, modificação e redistribuição sem autorização prévia por escrito não são permitidos.
Consulte [LICENSE](LICENSE).
