# SLA — triagem de sugestões (`/contribuir` e issues)

Política operacional da curadoria. Não é compromisso legal; é o ritmo interno do projeto.

## Canais

| Canal | Destino |
|---|---|
| Formulário do site `/contribuir` | Issue GitHub via `POST /api/sugerir` |
| Issue manual | Template [`.github/ISSUE_TEMPLATE/nova-entrada.md`](../.github/ISSUE_TEMPLATE/nova-entrada.md) |
| Rascunho técnico | `data/_fila/` → comando Cursor `processar fila` |

## Prazos (dias corridos)

| Etapa | Prazo | O que acontece |
|---|---|---|
| **Ack** | ≤ **48 h** | Issue rotulada (`nova-entrada` + trilha se possível); confirmação de recebimento se houver e-mail |
| **Triagem** | ≤ **7 dias** | Classificação na trilha correta **ou** pedido de complemento (fonte/norma) **ou** fechamento motivado |
| **Publicação** | ≤ **21 dias** após triagem OK | `.md` no schema + `npm run sync` + hero quando couber; ou fila Cursor se a checagem exigir mais apuração |
| **Arquivo** | imediato na triagem | Sem fonte auditável e sem caminho claro para hipótese → fecha com comentário apontando `METHODOLOGY.md` |

Se a fila editorial estiver carregada, o prazo de publicação pode estender — a triagem em 7 dias **não** estende sem aviso na issue.

## Critério de aceite (resumo)

1. Fonte com URL (norma, órgão, decisão, reportagem que cite primária).
2. Cabe em **uma** das cinco trilhas.
3. `resumo_neutro` possível sem repetir a tese em disputa.
4. Trilha 3: dispositivo + fatos + contraponto (ou lacuna explícita) + teste de generalização.

Detalhe: [`metodologia.md`](metodologia.md), [`schema/entry-schema.md`](../schema/entry-schema.md).

## Labels sugeridas

- `nova-entrada` — entrada bruta
- `trilha:rotulagem` | `trilha:regulatorio` | `trilha:institucional` | `trilha:superfaturamento` | `trilha:correlacao`
- `precisa-fonte` — aguardando complemento
- `pronta-para-sync` — markdown ok, falta sync/deploy
- `fora-de-escopo` — fechada

## O que não entra no SLA

- Pedidos de opinião política sem caso documentável
- Revisões de entradas já publicadas por desacordo ideológico (abrir issue separada com fato novo)
- Geração automática de X Article (ver [`x-articles.md`](x-articles.md))
