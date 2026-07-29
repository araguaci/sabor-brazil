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

**Regra de ouro do projeto:** se uma entrada não se encaixa claramente em nenhuma das duas definições acima, ela não entra. Não existe uma terceira categoria "parece suspeito".

---

## Estrutura do repositório

```
sabor-brazil/
├── README.md
├── CONTRIBUTING.md
├── schema/
│   └── entry-schema.md       # campos obrigatórios de cada entrada
├── data/
│   ├── rotulagem/            # trilha 1 — um arquivo .md por produto/categoria
│   └── regulatorio/          # trilha 2 — um arquivo .md por caso
├── docs/
│   └── metodologia.md        # como uma fonte vira uma entrada verificada
└── .github/
    └── ISSUE_TEMPLATE/
        └── nova-entrada.md   # template para sugestão da comunidade
```

## Como uma entrada é aceita

1. Fonte primária ou secundária de qualidade (norma, órgão regulador, associação, decisão judicial, ou reportagem que cite essas fontes).
2. Denominação oficial ou processo regulatório documentado — não boato, não captura de tela sem verificação.
3. Classificação numa das duas trilhas, nunca ambas, nunca nenhuma.
4. Toda alegação técnica não verificada por fonte independente é marcada explicitamente como hipótese — segue o mesmo padrão de honestidade epistêmica do lawfare-timeline.

Ver [`docs/metodologia.md`](docs/metodologia.md) e [`schema/entry-schema.md`](schema/entry-schema.md) para o detalhe de cada campo.

## Licença e uso

Conteúdo sob licença aberta para reuso com atribuição. Curadoria e critério de aceite de entradas são mantidos pela equipe do projeto para preservar o rigor — issues e pull requests da comunidade são bem-vindos, mas passam por checagem de fonte antes do merge.
# sabor-brazil
