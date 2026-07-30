# 🇧🇷 Sabor Brazil

> Um catálogo aberto e verificável de produtos e políticas onde o nome não é a coisa.

**SELVA.** Sabor Brazil documenta, com fonte e denominação oficial cruzadas, os casos em que o que está no rótulo — ou na bomba — não é o que o nome sugere. O projeto nasceu do trabalho investigativo do [lawfare-timeline](https://lawfare-timeline.vercel.app) e segue a mesma disciplina: toda entrada tem fonte, toda fonte é auditável, e hipótese nunca vira fato sem prova.

**Site:** [sabor-brazil.vercel.app](https://sabor-brazil.vercel.app) · **Catálogo JSON:** [`/catalog.json`](https://sabor-brazil.vercel.app/catalog.json)

### Estado atual (jul/2026)

| | |
|---|---|
| Entradas publicadas | **29** |
| Rotulagem | 11 |
| Regulatório | 3 |
| Institucional | 10 |
| Superfaturamento | 3 |
| Correlação | 2 |

Cada entrada da listagem e da página `/entrada/[id]` pode carregar **hero image** (capa editorial) ao lado do título; o mapeamento fica em `src/lib/heroes.ts` e os arquivos em `public/artigos/`.

---

## As trilhas

Este projeto **não mistura** categorias que parecem semelhantes mas são analiticamente distintas.

### 🏷️ Trilha 1 — Rotulagem Enganosa (`data/rotulagem/`)

Produtos que se apresentam visualmente como uma coisa, mas cuja **denominação oficial** — a que a norma de identidade e qualidade da ANVISA/MAPA exige, geralmente em letra miúda — revela outra composição. Critério objetivo: diferença auditável entre apresentação comercial e denominação regulatória.

Exemplos: "preparado alimentício sabor queijo prato", "embutido tipo calabresa", desconto associativo no extrato do INSS (RT-0008).

### ⚖️ Trilha 2 — Mudanças Regulatórias Contestadas (`data/regulatorio/`)

Decisões públicas nomeadas cuja base técnica é contestada ou já judicializada — **não** fraude de rótulo. Exemplos: E32 (RG-0001), loteria × jogo de azar (RG-0002), bets × Bolsa Família (RG-0003).

### 📑 Trilha 3 — Divergência Institucional Documentada (`data/institucional/`)

Caso concreto: procedimento previsto em norma versus o que ocorreu de fato. Status típico: `argumento_juridico_fundamentado`. Ver [`docs/metodologia-trilha3.md`](docs/metodologia-trilha3.md).

Recortes atuais incluem vídeo de IA / despacho (IN-0001), AGU × INSS (IN-0002), acúmulo de funções no Inquérito 4781 (IN-0003), sigilos (IN-0004, IN-0008), soberania Brasil–China (IN-0005–0007), seletividade penal (IN-0009) e CPMI do INSS sem relatório (IN-0010 / padrão P06-B).

### 💰 Trilha 4 — Superfaturamento (`data/superfaturamento/`)

Comparação de preço documentada: valor contratado × referência, com proporção, mecanismo jurídico e órgão de controle. Exemplos: Sufotur/Bahia (SF-0001), merenda Ananindeua (SF-0002), merenda Piritiba com decisão do TCM-BA (SF-0003).

### 📊 Trilha 5 — Correlação (`data/correlacao/`)

Dado real isolado do salto causal da narrativa viral. Status típico da conclusão: `hipotese`. Exemplos: “pão e circo” no Nordeste (CR-0001), emendas × Farmácia Popular (CR-0002).

**Regra de ouro:** se não cabe numa das cinco definições, não entra.

---

## Artigos X (X Articles)

Textos longos em markdown para publicação no X Premium (`x.com/compose/article`), com hero share card. Fonte canônica em `artigos/`; capas também em `public/artigos/` para o site.

| Arquivo | Entrada / tema | Ângulo |
|---|---|---|
| [`sabor-brazil-projeto-xarticle.md`](artigos/sabor-brazil-projeto-xarticle.md) | Projeto | O catálogo onde o nome não é a coisa — apresentação das trilhas |
| [`combustivel-e32-xarticle.md`](artigos/combustivel-e32-xarticle.md) | [RG-0001](https://sabor-brazil.vercel.app/entrada/rg-0001) | E32: a mistura é pública; a disputa é se o teste bastou |
| [`loteria-vs-jogo-de-azar-xarticle.md`](artigos/loteria-vs-jogo-de-azar-xarticle.md) | [RG-0002](https://sabor-brazil.vercel.app/entrada/rg-0002) | Cassino × loteria: a lei admite a exceção no próprio texto |
| [`apostas-bets-bolsa-familia-xarticle.md`](artigos/apostas-bets-bolsa-familia-xarticle.md) | [RG-0003](https://sabor-brazil.vercel.app/entrada/rg-0003) | Bets legalizadas, dano medido pelo BC, freio parcial no STF |

Heroes de capa do catálogo (IN/SF/CR/RG) não são artigos X por si — são imagens de entrada; só os quatro `.md` acima estão formatados como X Article.

---

## Estrutura do repositório

```
sabor-brazil/
├── README.md
├── CONTRIBUTING.md
├── schema/
│   └── entry-schema.md
├── data/
│   ├── rotulagem/             # trilha 1
│   ├── regulatorio/           # trilha 2
│   ├── institucional/         # trilha 3
│   ├── superfaturamento/      # trilha 4
│   ├── correlacao/            # trilha 5
│   └── catalog.json           # gerado por npm run sync
├── artigos/                   # X Articles + heroes fonte
├── public/artigos/            # heroes servidos pelo site
├── docs/
│   ├── metodologia.md
│   └── metodologia-trilha3.md
├── src/                       # site Astro
└── .github/ISSUE_TEMPLATE/
```

## Site (Astro)

```bash
npm install
cp .env.example .env   # GITHUB_TOKEN e GITHUB_REPO
npm run dev            # http://localhost:4321
npm run sync           # regenera data/catalog.json + public/catalog.json
```

- Home lista as cinco trilhas; cada uma tem `/trilha/[nome]`.
- Entrada: `/entrada/[id]` (ex.: `/entrada/in-0010`) — campos específicos por trilha (Parece/É, comparação de preço, dado real × salto lógico).
- `/contribuir` → `POST /api/sugerir` abre issue `nova-entrada` no GitHub.
- Deploy: Vercel (`@astrojs/vercel`). `predev` / `prebuild` já rodam o sync.

## Como uma entrada é aceita

1. Fonte primária ou secundária de qualidade (norma, órgão, decisão judicial, ou reportagem que cite essas fontes).
2. Denominação oficial, processo regulatório, comparação de preço ou fato processual documentado — não boato.
3. Classificação em **uma** das cinco trilhas.
4. Alegação sem fonte independente = hipótese explícita.

Ver [`docs/metodologia.md`](docs/metodologia.md) e [`schema/entry-schema.md`](schema/entry-schema.md).

## Licença e uso

Conteúdo sob licença aberta para reuso com atribuição. Curadoria e critério de aceite são mantidos pela equipe — issues e PRs da comunidade passam por checagem de fonte antes do merge.
