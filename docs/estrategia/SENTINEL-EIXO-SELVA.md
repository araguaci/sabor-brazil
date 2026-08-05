# Eixo SELVA — Sentinel (investigativo verificável)

Documento de estratégia **deste repositório** (Sabor Brazil) e do eixo SELVA. Cópia de referência `SENTINEL-EIXO-SELVA.md` (não sobrescrito pela pipeline de specs).

## Objetivo

Manter alinhados os produtos de **jornalismo investigativo com fonte auditável** — mesma disciplina: hipótese ≠ fato, norma/denominação oficial quando aplicável, deploy público rastreável.

## Fonte canônica do eco-grid

[`data/ecosystem.json`](../../data/ecosystem.json) → `src/lib/topic-icon.ts` (`ecosystemLinks`) → `.eco-grid` em `BaseLayout.astro`.

**Regra:** alterar o footer só editando o JSON. Este documento deve espelhar o JSON; se divergir, **prevalece o JSON**.

## Ecossistema completo (`ecosystem.json`)

| # | Título | URL | Ícone | Current | Descrição |
|---|---|---|---|---|---|
| 1 | **Sabor Brazil** | [sabor-brazil.vercel.app](https://sabor-brazil.vercel.app/) | `tag` | sim | Catálogo aberto onde o nome não é a coisa — rotulagem, regulatório, institucional, superfaturamento e correlação. |
| 2 | **Série Demográfica** | [serie-demografica.vercel.app](https://serie-demografica.vercel.app/) | `chart` | — | Observatório de mortalidade 2014–2025 — SIM/DATASUS, Registro Civil, dengue, gripe, câncer e miocardite. |
| 3 | **Vítimas do Estado** | [vitimas-do-estado.vercel.app](https://vitimas-do-estado.vercel.app/) | `scale` | — | Registro open-source de falha estatal com dano irreversível — JSON versionado, taxonomia e painel público. |
| 4 | **Lawfare Timeline** | [lawfare-timeline.vercel.app](https://lawfare-timeline.vercel.app/) | `scroll` | — | Linha do tempo investigativa de lawfare com fonte auditável. |
| 5 | **República Sequestrada** | [republica-sequestrada-hub.vercel.app](https://republica-sequestrada-hub.vercel.app/) | `landmark` | — | A extração não muda de lado. Muda de nome. |
| 6 | Observatório Civil BR | [observatorio-civil-br.vercel.app](https://observatorio-civil-br.vercel.app/) | `search` | — | Monitoramento cívico de casos, padrões e documentos públicos. |
| 7 | GoSurf | [gosurf.site](https://gosurf.site) | `globe` | — | Análises, dossiês e insights sobre Brasil, geopolítica, crime organizado, lawfare e economia. |
| 8 | Geoengenharia | [geoengenharia.vercel.app](https://geoengenharia.vercel.app/) | `cloud` | — | Patentes, linha do tempo e análises sobre modificação climática, vigilância e full-spectrum dominance. |
| 9 | O Dragão e a Onça | [odragaoeaonca.vercel.app](https://odragaoeaonca.vercel.app/) | `dragon` | — | Série Brasil × China: dossiês, timelines e X Articles sobre soberania, minerais e capítulos estaduais. |
| 10 | Abuso Supremo | [abusosupremo.vercel.app](https://abusosupremo.vercel.app/) | `shield` | — | Censura no Brasil (2019–2025): documentação e cronologia do regime de restrições. |

Campos opcionais no JSON: `image` (capa local, ex. Sabor Brazil → `/artigos/sabor-brazil-projeto-hero.png`).

## Núcleo SELVA (estratégia)

Itens **1–5** do JSON formam o núcleo do eixo Sentinel/SELVA (investigativo verificável). Itens **6–10** são ecossistema ampliado (mesma disciplina de publicação, escopos distintos).

| Pasta / repo | Produto | Deploy |
|---|---|---|
| `sabor-brazil` (este) | Sabor Brazil | [sabor-brazil.vercel.app](https://sabor-brazil.vercel.app) |
| `serie-demografica` | Série Demográfica | [serie-demografica.vercel.app](https://serie-demografica.vercel.app) |
| `state-victims` → GitHub `vitimas-do-estado` | Vítimas do Estado | [vitimas-do-estado.vercel.app](https://vitimas-do-estado.vercel.app) |
| *(externo)* | Lawfare Timeline | [lawfare-timeline.vercel.app](https://lawfare-timeline.vercel.app) |
| `republica-sequestrada-hub` | República Sequestrada | [republica-sequestrada-hub.vercel.app](https://republica-sequestrada-hub.vercel.app) |

## Metadados deste projeto

| Campo | Valor |
|---|---|
| Sentinel Status | 🟢 Produção · Tier A · Health **88%** |
| Catálogo | **41** entradas (`npm run sync` → `data/catalog.json`) |
| Eco-grid | 10 hubs em [`data/ecosystem.json`](../../data/ecosystem.json) |
| SLA issues | [`docs/sla-contribuir.md`](../sla-contribuir.md) |
| X Articles | [`docs/x-articles.md`](../x-articles.md) |
| Metodologia agentes | [`METHODOLOGY.md`](../../METHODOLOGY.md) |

No monorepo: `OVERRIDES` em `docs/central-artefatos/update_projetos.py` (`evolucao: 88`, rank `86`, tags `investigativo`, `selva`, `anvisa`).

## Rotina recomendada (Sabor Brazil)

1. Manter bloco **🛡️ Sentinel Status** no [`README.md`](../../README.md).
2. Entrada nova → schema em `data/<trilha>/` → hero em `heroes.ts` → `npm run sync`.
3. Rascunhos: `data/_fila/` → comando Cursor `processar fila`.
4. Alterar ecossistema do footer: editar [`data/ecosystem.json`](../../data/ecosystem.json) e **atualizar a tabela deste arquivo**.
5. Após mudanças de Health/SLA: alinhar README + este arquivo + override no monorepo.

## Próximas ações

- [x] Critérios de fonte primária + SLA `/contribuir`
- [x] Mapa X Articles ↔ entradas
- [x] Ecossistema no README + `ecosystem.json` + eco-grid
- [x] Tabela deste doc sincronizada com `ecosystem.json` (10 itens)
- [ ] Publicar X Articles do backlog (RG-0007, IN-0014, CR-0003, SF-0004)
- [ ] Espelhar seção SELVA / eco nos outros repos do núcleo quando divergirem

## Links internos

| Artefato | Caminho |
|---|---|
| Ecossistema (README) | [`README.md#ecossistema-selva`](../../README.md) |
| Eco JSON | [`data/ecosystem.json`](../../data/ecosystem.json) |
| Sobre (site) | `/sobre` |
| Monorepo (se checkout irmão) | `../docs/estrategia/SENTINEL-EIXO-SELVA.md` |

---

*Última revisão: 2026-08-05 — sincronizado com `data/ecosystem.json`*
