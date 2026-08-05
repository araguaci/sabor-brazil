# Contribuindo com o Sabor Brazil

Obrigado pelo interesse em contribuir. Este projeto vive de rigor, não de volume — uma entrada bem checada vale mais que dez achismos.

Antes de propor: leia [`METHODOLOGY.md`](METHODOLOGY.md) e [`schema/entry-schema.md`](schema/entry-schema.md).

## Como sugerir uma entrada

1. Preferencialmente use o formulário do site em `/contribuir` (abre uma issue automaticamente).
2. Ou abra uma issue usando o template "Nova entrada".
3. Preencha a trilha (`rotulagem` | `regulatorio` | `institucional` | `superfaturamento` | `correlacao`) e a fonte.
4. A curadoria confirma a classificação e o status antes de aceitar.

## SLA de triagem

Política completa: [`docs/sla-contribuir.md`](docs/sla-contribuir.md).

| Etapa | Prazo |
|---|---|
| Ack (label / confirmação) | ≤ 48 h |
| Triagem (aceita / pede fonte / fora de escopo) | ≤ 7 dias |
| Publicação após triagem OK | ≤ 21 dias |

Sem URL de fonte auditável, a sugestão não sobe a `verificado` — no máximo `hipotese`, ou é arquivada.

## Fontes primárias (preferência)

Por trilha, a curadoria privilegia:

| Trilha | Primária típica |
|---|---|
| Rotulagem | Norma MAPA / ANVISA / ANP + rótulo ou fiscalização |
| Regulatório | Texto da lei/resolução + contestação nomeada |
| Institucional | Dispositivo legal + ato/processo datado |
| Superfaturamento | Contrato / empenho + referência de preço + órgão de controle |
| Correlação | Dado oficial ou relatório citado + alegação viral atribuída |

Reportagem serve quando cita essas fontes; sem lastro → hipótese ou rejeição.

## Fila para o Cursor (`data/_fila/`)

Rascunhos podem ir em `data/_fila/`. Comando no chat: `processar fila data/_fila`. Detalhes em `data/_fila/README.md`.

## Como enviar uma entrada pronta (Pull Request)

1. Crie o arquivo `.md` na pasta correta (`data/rotulagem/`, `data/regulatorio/`, `data/institucional/`, `data/superfaturamento/` ou `data/correlacao/`).
2. Siga exatamente o schema em [`schema/entry-schema.md`](schema/entry-schema.md).
3. Todo campo de fonte precisa de URL funcional. Sem URL, o status não pode ser `verificado`.
4. Um PR que confunde as trilhas, ou que apresenta interpretação como fato, será devolvido com pedido de ajuste antes do merge.

## Código de conduta

Debate técnico é bem-vindo. Ataque pessoal, discurso de ódio ou uso do projeto para promover teoria sem lastro documental não são.
