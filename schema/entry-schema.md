# Schema de Entrada — Sabor Brazil

Toda entrada, em qualquer trilha, é um arquivo Markdown com front-matter YAML + corpo. Espírito alinhado ao lawfare-timeline: campos obrigatórios, fonte auditável, ID sequencial por trilha.

**Leitura conjunta:** [`METHODOLOGY.md`](../METHODOLOGY.md) · tipos TypeScript em `src/lib/entries.ts` · sync em `scripts/sync-catalog.mjs`.

Prefixos: `RT` = Rotulagem · `RG` = Regulatório · `IN` = Institucional · `SF` = Superfaturamento · `CR` = Correlação.

> **Hero images não entram no front-matter.** Capas ficam em `public/artigos/` e no mapa `src/lib/heroes.ts` (`heroForEntryId`).

## Campos obrigatórios (todas as trilhas)

```yaml
---
id: RT-0001
trilha: rotulagem   # rotulagem | regulatorio | institucional | superfaturamento | correlacao
titulo: "…"
resumo_neutro: "Uma frase factual para o card — nunca a tese em disputa"
status: verificado  # verificado | hipotese | contestado_judicialmente | argumento_juridico_fundamentado | fato_processual
data_entrada: 2026-07-30
fontes:
  - titulo: "Nome da fonte"
    url: "https://..."
    tipo: "norma | reportagem | orgao_oficial | decisao_judicial"
tags: [exemplo]
---
```

Corpo Markdown abaixo do `---` (renderizado em `/entrada/[id]`). Links internos: `/entrada/<slug>` (slug = `id` em minúsculas), nunca caminho de arquivo `.md`.

### `resumo_neutro`

Obrigatório. Único texto de preview do card (`EntryCard`), OG description e resumos de IA. Nunca reproduz `argumento_juridico.tese` nem `salto_logico.conclusao_alegada`.

## Trilha 1 — Rotulagem (`RT-*`)

Campos **obrigatórios** além do bloco comum:

```yaml
apresentacao_comercial: "O que parece / como é vendido"
denominacao_oficial: "O que a norma / fiscalização diz que é"
orgao_regulador: "MAPA / ANVISA / ANP / …"
```

## Trilha 2 — Regulatório (`RG-*`)

```yaml
apresentacao_comercial: "…"   # recomendado (Parece)
denominacao_oficial: "…"      # recomendado (o que a decisão/norma é)
orgao_regulador: "…"
divergencia_tecnica:          # fortemente esperado
  estudo_oficial: "…"
  contraponto: "…"
  lacuna_reconhecida: "…"
processo_judicial:            # se houver (status costuma ser contestado_judicialmente)
  numero: "…"
  vara: "…"
  autor: "…"
  pedidos: ["…"]
  status: "em curso"
```

## Trilha 3 — Institucional (`IN-*`)

```yaml
dispositivo_legal: "art. …"
fatos_checaveis:
  - "data / ato / número — sem interpretação"
argumento_juridico:
  autor: "quem sustenta a tese — nunca o projeto"
  tese: "resumo ou citação integral do objeto de análise"
contraponto:
  existe: true                  # ou false / null se lacuna
  resumo: "…"
  fonte: "…"                    # ou 'não localizado até a data desta entrada'
teste_generalizacao: "PASSA | PARCIAL | REPROVA — com justificativa"
```

## Trilha 4 — Superfaturamento (`SF-*`)

```yaml
comparacao_de_preco:
  valor_contratado: "…"
  valor_referencia: "…"
  proporcao: "…"
mecanismo_juridico: "inexigibilidade / pregão / …"
orgaos_de_controle:
  - "TCE / TCM / …"
responsaveis_nomeados: "…"      # quando nomeados nas fontes
```

## Trilha 5 — Correlação (`CR-*`)

```yaml
dado_real:
  afirmacao: "…"
  fonte: "…"
salto_logico:
  conclusao_alegada: "…"
  onde_quebra: "…"
contraponto_estrutural: "…"
```

Status da conclusão viral: tipicamente `hipotese`. Não promover o salto a `verificado`.

## Regra de status

| Status | Uso no projeto |
|---|---|
| `verificado` | Alegações centrais com fonte cruzada (≥2 independentes quando possível) |
| `hipotese` | 1 fonte ou detalhe sem confirmação independente |
| `contestado_judicialmente` | Processo em curso sobre a medida/base técnica |
| `argumento_juridico_fundamentado` | Trilha 3: fatos checáveis + tese de terceiro |
| `fato_processual` | Trilha 3: sem margem interpretativa (previsto; ainda raro) |

Rótulos no site: `src/lib/entries.ts` → `statusLabel` / `statusClass`.

## Regra de quotação

Citações diretas de fontes: no máximo ~15 palavras por citação, uma por fonte; demais conteúdo parafraseado.

**Exceção:** tese contestada / citação viral **objeto de análise** (Trilhas 3 e 5) pode aparecer integral no corpo (blockquote) e em `argumento_juridico.tese` / `salto_logico`, sempre atribuída e marcada como não-posição do projeto.

## Não publicar

- Nome de arquivo começa com `_` ou contém `template`
- Tags `template` ou `nao-publicar`
- Conteúdo só em `data/_fila/` (publicar após converter para `data/<trilha>/`)
- ID contendo `0000` (reservado a templates)

## Fila Cursor

Rascunhos: `data/_fila/`. Após processar → pasta de trilha + `npm run sync` + hero em `heroes.ts`. Ver `data/_fila/README.md`.
