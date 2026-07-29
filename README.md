# 🇧🇷 Sabor Brazil

> Um catálogo aberto e verificável de produtos e políticas onde o nome não é a coisa.

**SELVA.** Sabor Brazil documenta, com fonte e denominação oficial cruzadas, os casos em que o que está no rótulo — ou na bomba — não é o que o nome sugere. O projeto nasceu do trabalho investigativo do [lawfare-timeline](https://lawfare-timeline.vercel.app) e segue a mesma disciplina: toda entrada tem fonte, toda fonte é auditável, e hipótese nunca vira fato sem prova.

---

## As duas trilhas

Este projeto **não mistura** duas categorias que parecem semelhantes mas são juridicamente e analiticamente distintas. Misturá-las enfraquece o argumento das duas.

### 🏷️ Trilha 1 — Rotulagem Enganosa (`data/rotulagem/`)

Produtos que se apresentam visualmente como uma coisa, mas cuja **denominação oficial** — a que a norma de identidade e qualidade da ANVISA/MAPA exige, geralmente em letra miúda — revela outra composição. Aqui o critério de entrada é objetivo: existe uma diferença auditável entre a apresentação comercial e a denominação regulatória do próprio produto.

Exemplos: "preparado alimentício sabor queijo prato" (não é queijo prato), "embutido tipo calabresa" (não é linguiça calabresa), "álcool molhado" vendido como etanol hidratado dentro da norma (é adulteração, ANP tem especificação de cor e teor para isso).

### ⚖️ Trilha 2 — Mudanças Regulatórias Contestadas (`data/regulatorio/`)

Decisões públicas, nomeadas, votadas ou assinadas por resolução — que **não** são fraude de rotulagem, mas cuja base técnica é contestada por entidades do setor, especialistas independentes, ou já judicializada. Aqui o critério de entrada também é objetivo: existe uma divergência técnica documentável entre o que o estudo oficial testou e o que a decisão exige, ou uma ação judicial em curso questionando a suficiência do processo.

Exemplo inaugural: o aumento do teor de etanol na gasolina comum de 30% para 32% (E32, CNPE 2026) — não é rotulagem enganosa (a mudança é pública e nomeada), mas está sob Ação Civil Pública do MPF questionando a suficiência dos estudos de durabilidade. Ver [`data/regulatorio/combustivel-e32.md`](data/regulatorio/combustivel-e32.md).

### 📑 Trilha 3 — Divergência Institucional Documentada (`data/institucional/`)

Casos individuais, com ID e fonte primária, onde há uma **diferença checável** entre o procedimento previsto em norma (CF/88, CPP, CLT, regimentos internos, prazos legais) e o que ocorreu de fato num processo, decisão ou ato concreto. **Esta trilha não faz afirmação genérica sobre instituições** ("a Justiça brasileira é X", "a imprensa é Y") — cada entrada é um caso específico, com número de processo ou ato quando disponível, e status de confiança explícito, porque aqui a maior parte do conteúdo é argumento jurídico ou interpretação, não fato bruto como uma norma de rotulagem.

Diferença crucial em relação às Trilhas 1 e 2: nas outras trilhas, o padrão de comparação é objetivo e não-controverso (a norma do MAPA existe, a resolução do CNPE existe). Aqui, o "procedimento previsto" às vezes admite mais de uma leitura jurídica válida — por isso toda entrada desta trilha carrega o status `argumento_juridico_fundamentado` como categoria própria, distinta de `verificado`: significa que a alegação cita dispositivo legal específico e é checável quanto aos fatos (datas, número de pedidos, prazos decorridos), mas a conclusão jurídica em si é uma interpretação, não um fato como "o produto tem X% de gordura vegetal".

Ver [`docs/metodologia-trilha3.md`](docs/metodologia-trilha3.md) para o detalhe de como uma entrada desta trilha é aceita sem virar peça de advocacy.

**Regra de ouro do projeto:** se uma entrada não se encaixa claramente em nenhuma das três definições acima, ela não entra. Não existe uma quarta categoria "parece suspeito".

---

## Estrutura do repositório

```
sabor-brazil/
├── README.md
├── CONTRIBUTING.md
├── schema/
│   └── entry-schema.md       # campos obrigatórios de cada entrada
├── data/
│   ├── rotulagem/             # trilha 1 — um arquivo .md por produto/categoria
│   ├── regulatorio/           # trilha 2 — um arquivo .md por caso
│   └── institucional/         # trilha 3 — um arquivo .md por caso, com ID e status jurídico
├── docs/
│   ├── metodologia.md          # como uma fonte vira uma entrada verificada
│   └── metodologia-trilha3.md  # regras específicas para não virar peça de advocacy
├── src/                        # site Astro (catálogo + formulário)
└── .github/
    └── ISSUE_TEMPLATE/
        └── nova-entrada.md   # template para sugestão da comunidade
```

## Site (Astro)

```bash
npm install
cp .env.example .env   # preencha GITHUB_TOKEN e GITHUB_REPO
npm run dev            # http://localhost:4321
```

O formulário em `/contribuir` chama `POST /api/sugerir`, que abre uma GitHub Issue com a label `nova-entrada`. Em produção (Vercel), configure as mesmas variáveis de ambiente. Deploy: conecte o repo à Vercel (adapter `@astrojs/vercel` já no projeto).

### Catálogo em JSON (compartilhamento)

```bash
npm run sync   # regenera data/catalog.json e public/catalog.json
```

`predev` / `prebuild` já rodam o sync. Em produção: [`/catalog.json`](https://sabor-brazil.vercel.app/catalog.json). No repo: [`data/catalog.json`](data/catalog.json).

## Como uma entrada é aceita

1. Fonte primária ou secundária de qualidade (norma, órgão regulador, associação, decisão judicial, ou reportagem que cite essas fontes).
2. Denominação oficial ou processo regulatório documentado — não boato, não captura de tela sem verificação.
3. Classificação numa das duas trilhas, nunca ambas, nunca nenhuma.
4. Toda alegação técnica não verificada por fonte independente é marcada explicitamente como hipótese — segue o mesmo padrão de honestidade epistêmica do lawfare-timeline.

Ver [`docs/metodologia.md`](docs/metodologia.md) e [`schema/entry-schema.md`](schema/entry-schema.md) para o detalhe de cada campo.

## Licença e uso

Conteúdo sob licença aberta para reuso com atribuição. Curadoria e critério de aceite de entradas são mantidos pela equipe do projeto para preservar o rigor — issues e pull requests da comunidade são bem-vindos, mas passam por checagem de fonte antes do merge.
