# Schema de Entrada — Sabor Brazil

Toda entrada, em qualquer trilha, é um arquivo Markdown com front-matter YAML. Espírito alinhado ao lawfare-timeline: campos obrigatórios, fonte auditável, ID sequencial por trilha.

Prefixos: `RT` = Rotulagem · `RG` = Regulatório · `IN` = Institucional · `SF` = Superfaturamento · `CR` = Correlação.

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

### `resumo_neutro`

Obrigatório. Usado exclusivamente como preview/card. Nunca reproduz `argumento_juridico.tese` nem `salto_logico.conclusao_alegada`.

## Campos comuns (Trilhas 1–2, opcionais em outras)

```yaml
apresentacao_comercial: "O que parece / como é vendido"
denominacao_oficial: "O que a norma / fonte oficial diz"
orgao_regulador: "MAPA / ANVISA / …"
```

## Trilha 2 — Regulatório

```yaml
processo_judicial:          # se houver
  numero: "…"
  vara: "…"
  autor: "…"
  pedidos: ["…"]
  status: "em curso"
divergencia_tecnica:
  estudo_oficial: "…"
  contraponto: "…"
  lacuna_reconhecida: "…"
```

## Trilha 3 — Institucional

```yaml
dispositivo_legal: "art. …"
fatos_checaveis:
  - "data / ato / número — sem interpretação"
argumento_juridico:
  autor: "quem sustenta a tese — nunca o projeto"
  tese: "resumo da tese"
contraponto:
  existe: true
  resumo: "…"
  fonte: "…"
teste_generalizacao: "PASSA | PARCIAL | REPROVA — com justificativa"
```

## Trilha 4 — Superfaturamento

```yaml
comparacao_de_preco:
  valor_contratado: "…"
  valor_referencia: "…"
  proporcao: "…"
mecanismo_juridico: "inexigibilidade / pregão / …"
orgaos_de_controle:
  - "TCE / TCM / …"
responsaveis_nomeados: "…"
```

## Trilha 5 — Correlação

```yaml
dado_real:
  afirmacao: "…"
  fonte: "…"
salto_logico:
  conclusao_alegada: "…"
  onde_quebra: "…"
contraponto_estrutural: "…"
```

## Regra de status

- `verificado`: alegações centrais com fonte cruzada (≥2 independentes quando possível).
- `hipotese`: sem confirmação independente suficiente; marcar visualmente, não misturar como fato.
- `contestado_judicialmente`: processo em curso sobre a suficiência/legalidade da medida.
- `argumento_juridico_fundamentado` (Trilha 3): fatos checáveis + conclusão jurídica de uma das partes.
- `fato_processual` (Trilha 3): sem margem interpretativa (data, número, texto oficial).

## Regra de quotação

Citações diretas de fontes: no máximo ~15 palavras por citação direta, uma por fonte; demais conteúdo parafraseado. **Exceção:** a tese contestada / citação viral objeto de análise na Trilha 3 ou 5 pode aparecer integral no corpo (blockquote) e em `argumento_juridico.tese` / `salto_logico`, sempre atribuída e marcada como não-posição do projeto.

## Não publicar

- Arquivo cujo nome começa com `_` ou contém `template`
- Tags `template` ou `nao-publicar`
- Conteúdo em `data/_fila/` (só após conversão para pasta de trilha)
