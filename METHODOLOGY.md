# METHODOLOGY.md

## Sabor Brazil — Framework Analítico para Agentes de IA

**Versão:** 1.1  
**Última atualização:** 30 de julho de 2026  
**Produção:** https://sabor-brazil.vercel.app  
**Catálogo JSON:** https://sabor-brazil.vercel.app/catalog.json  
**Repositório:** https://github.com/araguaci/sabor-brazil  
**Projeto irmão:** https://lawfare-timeline.vercel.app (mesma disciplina de rigor, escopo diferente)

Este documento existe para o mesmo propósito do `METHODOLOGY.md` do lawfare-timeline: garantir que qualquer sistema de IA — Claude, GPT, Cursor, ou qualquer outro modelo — que acesse este repositório compreenda a estrutura **antes** de gerar, resumir ou avaliar entradas. **Leia este documento antes de inferir categorias, propor novas entradas, ou responder perguntas sobre o conteúdo do projeto.**

### Snapshot do repositório (fonte: `data/catalog.json`)

| Métrica | Valor |
|---|---|
| Entradas publicadas | **34** |
| Rotulagem (`RT-*`) | 13 |
| Regulatório (`RG-*`) | 6 |
| Institucional (`IN-*`) | 10 |
| Superfaturamento (`SF-*`) | 3 |
| Correlação (`CR-*`) | 2 |
| Status `verificado` | 18 |
| Status `argumento_juridico_fundamentado` | 10 |
| Status `contestado_judicialmente` | 3 |
| Status `hipotese` | 3 |
| Status `fato_processual` | 0 (previsto no schema; ainda sem entrada) |
| X Articles (`.md` em `artigos/`) | 4 |
| Heroes de entrada | mapeadas em `src/lib/heroes.ts` → `public/artigos/` |

Se o snapshot acima divergir do `catalog.json` gerado por `npm run sync`, **prevalece o JSON**.

---

## 1. Propósito e escopo

Sabor Brazil é um catálogo aberto e verificável de casos em que **o nome não é a coisa** — produtos rotulados de forma enganosa, mudanças regulatórias contestadas, divergências institucionais documentadas, contratos superfaturados, e alegações virais que usam dado real para sustentar conclusão não sustentada pelo próprio dado.

Não é um projeto de opinião política, nem um agregador de indignação. É um exercício de **separação disciplinada entre fato e interpretação**, aplicado a cinco categorias com critérios de entrada objetivos e não intercambiáveis. Uma entrada só existe se passar no critério específico da sua trilha — não existe categoria residual para "parece suspeito".

---

## 2. As cinco trilhas — critério de cada uma

**Regra fundamental: se uma alegação não se encaixa claramente em uma das cinco definições abaixo, ela não vira entrada.**

### Trilha 1 — Rotulagem Enganosa (`data/rotulagem/`, IDs `RT-*`)
Critério: existe **diferença auditável e objetiva** entre a apresentação comercial de um produto e sua denominação oficial (norma do MAPA/ANVISA/ANP) — ou entre o que o rótulo/extrato sugere e o padrão técnico exigido para aquela denominação. Não depende de interpretação — a norma existe como texto comparável ao rótulo.

Campos típicos: `apresentacao_comercial`, `denominacao_oficial`, `orgao_regulador`, `resumo_neutro`.

### Trilha 2 — Mudanças Regulatórias Contestadas (`data/regulatorio/`, IDs `RG-*`)
Critério: decisão pública, nomeada, votada ou assinada por resolução/lei/PL avançado, cuja base técnica é contestada por entidade do setor, especialista independente, ou ação judicial em curso. **Não é rotulagem enganosa** — a mudança é declarada abertamente; o que está em disputa é a suficiência do processo ou o desenho da norma.

Campos típicos: `divergencia_tecnica`, opcionalmente `processo_judicial`. Status frequente: `verificado` (fatos da norma + contestação técnica) ou `contestado_judicialmente` (processo em curso).

### Trilha 3 — Divergência Institucional Documentada (`data/institucional/`, IDs `IN-*`)
Critério: caso individual, com dispositivo legal específico citável, onde há diferença checável entre o procedimento previsto em norma e o que ocorreu de fato. **Trilha mais arriscada** — interpretação jurídica. Status: `argumento_juridico_fundamentado` ou `fato_processual`. Regras: `docs/metodologia-trilha3.md`.

Campos obrigatórios da trilha: `dispositivo_legal`, `fatos_checaveis`, `argumento_juridico` (autor + tese), `contraponto`, `teste_generalizacao`.

Recortes temáticos reconhecidos (tags, não trilhas novas):
- `erro-judicial-sob-sigilo` — referência: `IN-0008`
- `p06-b` / prescrição parlamentar (CPI/CPMI sem relatório aprovado) — referência: `IN-0010`

### Trilha 4 — Superfaturamento (`data/superfaturamento/`, IDs `SF-*`)
Critério: **comparação de preço documentada** — valor contratado vs. valor de referência (mercado, município vizinho, tribunal de contas), com proporção calculável, mecanismo jurídico e órgão de controle nomeado. Não basta “parecer caro”.

Campos típicos: `comparacao_de_preco` (`valor_contratado`, `valor_referencia`, `proporcao`), `mecanismo_juridico`, `orgaos_de_controle`, `responsaveis_nomeados`.

### Trilha 5 — Correlação (`data/correlacao/`, IDs `CR-*`)
Não documenta um “caso fechado”: documenta **por que uma alegação viral com dado real não sustenta a conclusão** tirada dele. Preserva o dado, isola o salto lógico, registra contraponto estrutural.

Campos típicos: `dado_real`, `salto_logico`, `contraponto_estrutural`.  
**Status da conclusão:** tipicamente `hipotese`. Esta trilha **não** promove a conclusão viral a `verificado`.

---

## 3. Schema, status e IDs

Schema completo: `schema/entry-schema.md`.

```yaml
id: RT-0001 | RG-0001 | IN-0001 | SF-0001 | CR-0001  # prefixo por trilha, sequencial, nunca reaproveitado
trilha: rotulagem | regulatorio | institucional | superfaturamento | correlacao
status: verificado | hipotese | contestado_judicialmente | argumento_juridico_fundamentado | fato_processual
resumo_neutro: "..."   # OBRIGATÓRIO — ver seção 4
fontes: [{ titulo, url, tipo }]
tags: [...]
```

### Significado dos status (como o site rotula)

| Status | Uso |
|---|---|
| `verificado` | Alegações centrais com fonte cruzada (≥2 independentes quando possível) |
| `hipotese` | Plausível, mas 1 fonte ou detalhe sem confirmação independente |
| `contestado_judicialmente` | Processo em curso questionando a medida/base técnica |
| `argumento_juridico_fundamentado` | Trilha 3: fatos checáveis + tese atribuída a terceiro, não veredito do projeto |
| `fato_processual` | Trilha 3: elemento sem margem interpretativa (data, número, texto oficial) |

**Publicação:** só pastas de trilha entram no sync (`scripts/sync-catalog.mjs`). Arquivos com `_` no nome, `template` no nome, ou tags `template` / `nao-publicar` **não publicam**.

---

## 4. Regra de exibição: o resumo nunca é a alegação

Campo `resumo_neutro` é obrigatório e deve ser usado por qualquer card, preview, OG description ou resumo de IA — **nunca** `argumento_juridico.tese`, `salto_logico.conclusao_alegada`, nem a frase viral.  
Implementação no site: `EntryCard` e home usam `resumo_neutro`.

---

## 5. Artefatos do projeto (objetos reais)

| Artefato | Onde | Função |
|---|---|---|
| Entradas Markdown | `data/<trilha>/*.md` | Fonte canônica de cada caso |
| Catálogo gerado | `data/catalog.json` + `public/catalog.json` | API estática; `npm run sync` |
| Site Astro | `src/` | Listagem, `/trilha/[nome]`, `/entrada/[id]`, `/contribuir` |
| Heroes | `src/lib/heroes.ts` → `public/artigos/*.png` | Capa ao lado do título + card |
| X Articles | `artigos/*-xarticle.md` | Texto longo para X Premium (+ hero share) |
| Fila do Cursor | `data/_fila/` | Rascunhos a processar; ver `data/_fila/README.md` |
| Processados | `data/_fila/processados/` | Rascunhos já convertidos (não republicar) |
| Schema | `schema/entry-schema.md` | Campos obrigatórios/exclusivos |
| Metodologia detalhada | `docs/metodologia.md`, `docs/metodologia-trilha3.md` | Checagem de fonte + Trilha 3 |
| Issues | `.github/ISSUE_TEMPLATE/nova-entrada.md` | Sugestão comunitária |

### X Articles publicados (jul/2026)

1. `artigos/sabor-brazil-projeto-xarticle.md` — apresentação do projeto  
2. `artigos/combustivel-e32-xarticle.md` — RG-0001  
3. `artigos/loteria-vs-jogo-de-azar-xarticle.md` — RG-0002  
4. `artigos/apostas-bets-bolsa-familia-xarticle.md` — RG-0003  

Heroes de capa de entrada **não** são X Articles; só os `*-xarticle.md` acima.

---

## 6. O que este projeto não é

**Não é lista de "fake news" genérica.** Alegação viral com dado real e salto inválido → Trilha 5, não silêncio.

**Não equipara categorias diferentes.** Trilha 2 ≠ Trilha 1; debate ideológico amplo sem dispositivo/caso ≠ Trilha 3.

**Não presupõe que toda crítica ao Estado seja verdadeira, nem que toda defesa institucional baste.** Trilha 3 exige contraponto (ou lacuna explícita).

**Não é panfleto de um espectro.** Ex.: `IN-0010` — relatórios mirando lados opostos, nenhum aprovado.

---

## 7. Protocolo para modelos de linguagem / Cursor

### 7.1 Antes de resumir uma entrada
Separe fatos (`fatos_checaveis`, `comparacao_de_preco`, `dado_real`, corpo factual) de tese/salto. Ao resumir, **não funda** os dois numa frase declarativa única. Comunique o `status`.

### 7.2 Antes de propor uma entrada nova
- Trilha 1: norma de identidade/qualidade comparável ao rótulo?  
- Trilha 2: mudança pública/nomeada + contestação técnica ou judicial real?  
- Trilha 3: dispositivo + fatos datados + **teste de generalização**?  
- Trilha 4: comparação de preço documentada?  
- Trilha 5: dado real verificável sob a alegação viral?  

Se não: **não criar**. Diga isso ao usuário.

### 7.3 Ao responder sobre o catálogo
Prefira `catalog.json` e os `.md` em `data/` à memória de treinamento. Mencione lacunas (“Atualização pendente”) quando relevantes.

### 7.4 Resistir a volume sem fonte
Não gerar lote de entradas sem URL verificável. Preferir rigor a contagem.

### 7.5 Processar fila (`data/_fila/`)
Quando o usuário pedir **“processar fila”**:
1. Ler rascunhos em `data/_fila/*.md` (ignorar `README.md`, `entry-schema.md`, pasta `processados/`)
2. Converter para o schema do projeto na pasta da trilha correta, com próximo ID livre
3. Ajustar links internos para `/entrada/[id]`
4. Gerar hero + registrar em `src/lib/heroes.ts` + copiar para `public/artigos/` e `artigos/`
5. `npm run sync`
6. Mover rascunhos processados para `data/_fila/processados/`

### 7.6 Nova entrada pontual
Arquivo já no destino (`data/institucional/IN-00XX-….md`) + pedido “nova entrada @arquivo”: sync, links, hero, `heroes.ts`.

---

## 8. Estrutura de arquivos

```
sabor-brazil/
├── README.md
├── METHODOLOGY.md              # este documento
├── CONTRIBUTING.md
├── schema/entry-schema.md
├── docs/
│   ├── metodologia.md
│   └── metodologia-trilha3.md
├── data/
│   ├── rotulagem/              # RT-*
│   ├── regulatorio/            # RG-*
│   ├── institucional/          # IN-*
│   ├── superfaturamento/       # SF-*
│   ├── correlacao/             # CR-*
│   ├── catalog.json            # gerado
│   └── _fila/                  # fila Cursor (+ processados/)
├── artigos/                    # X Articles + heroes fonte
├── public/artigos/             # heroes do site
├── public/catalog.json
├── src/                        # Astro (entries, heroes, pages)
└── .github/ISSUE_TEMPLATE/nova-entrada.md
```

---

## 9. Relação com o lawfare-timeline

Mesmo mantenedor e disciplina; schema e IDs **independentes**. Padrões P01–P12 do lawfare-timeline podem ecoar aqui sob uma das cinco trilhas (ex.: sigilo centenário / cascata → `IN-0004`, `IN-0008`; P06-B → `IN-0010`). O lawfare-timeline documenta o padrão sistêmico; o Sabor Brazil documenta o caso individual sob o crivo estreito da trilha.

---

*Mantenedor: Artes do Sul / AI Nativo Brasil*  
*Ler em conjunto com `README.md`, `schema/entry-schema.md` e `docs/`.*  
*Versão 1.1 — alinhada ao catálogo de 34 entradas, cinco trilhas, heroes, X Articles e fila `_fila`.*
