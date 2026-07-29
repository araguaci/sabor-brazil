# Schema de Entrada — Sabor Brazil

Toda entrada, em qualquer trilha, é um arquivo Markdown com o front-matter abaixo. Mantém o mesmo espírito do schema do lawfare-timeline (`_data/lawfare.json`): campos obrigatórios, fonte auditável, ID sequencial por trilha.

## Campos obrigatórios

```yaml
---
id: RT-0001                 # RT = Rotulagem, RG = Regulatório. Sequencial, nunca reaproveitado.
trilha: rotulagem            # "rotulagem" | "regulatorio"
titulo: "Preparado alimentício sabor queijo prato"
apresentacao_comercial: "Embalagem, propaganda e prateleira sugerem queijo prato tradicional"
denominacao_oficial: "Preparado alimentício à base de queijo, com substituição parcial de gordura láctea por gordura vegetal"
orgao_regulador: "MAPA / ANVISA"
status: verificado           # "verificado" | "hipotese" | "contestado_judicialmente"
data_entrada: 2026-07-29
fontes:
  - titulo: "Nome da fonte"
    url: "https://..."
    tipo: "norma | reportagem | orgao_oficial | decisao_judicial"
tags: [laticinios, rotulagem-enganosa]
---
```

## Campos exclusivos da trilha Regulatório

```yaml
processo_judicial:
  numero: "não divulgado / número do processo se público"
  vara: "4ª Vara Federal de Uberlândia (MG)"
  autor: "Ministério Público Federal"
  pedidos: ["suspensão da medida", "perícia técnica independente"]
  status: "em curso"
divergencia_tecnica:
  estudo_oficial: "resumo do que o estudo oficial testou e concluiu"
  contraponto: "resumo da crítica técnica independente"
  lacuna_reconhecida: "o que o próprio estudo oficial admite não ter testado"
```

## Campos exclusivos da trilha Institucional (Trilha 3)

```yaml
dispositivo_legal: "art. 318 do CPP, ou súmula/regimento específico citado"
fatos_checaveis:
  - "datas de protocolo, número de pedidos, prazos decorridos — sem margem interpretativa"
argumento_juridico:
  autor: "quem fez o argumento (petição de defesa, parecer, doutrina) — nunca atribuído ao projeto"
  tese: "resumo da tese jurídica defendida"
contraponto:
  existe: true
  resumo: "posição do outro lado do processo, do tribunal, ou doutrina divergente"
  fonte: "URL ou referência, se localizada; caso contrário, 'não localizado até a data desta entrada'"
teste_generalizacao: "confirmação de que o argumento se sustenta como questão de direito processual em abstrato, sem depender de ataque a pessoa/instituição específica"
```

## Regra de status

- `verificado`: toda alegação da entrada tem fonte primária ou secundária cruzada com pelo menos duas fontes independentes.
- `hipotese`: alegação plausível, mas sem fonte técnica independente que sustente o detalhe específico (ex: sintoma atribuído a um modelo de carro específico sem nota técnica do fabricante). Precisa ser marcada visualmente na entrada, nunca misturada ao texto como fato.
- `contestado_judicialmente`: existe processo em curso questionando a base técnica ou legal da medida. Não implica que a medida seja ilegal — apenas que a suficiência dela está sob exame formal.
- `argumento_juridico_fundamentado` (Trilha 3): a alegação cita dispositivo legal específico e é checável quanto aos fatos (datas, prazos, número de pedidos), mas a conclusão jurídica é interpretação de uma das partes, não fato estabelecido pelo projeto.
- `fato_processual` (Trilha 3): elemento sem margem interpretativa — data de publicação de decisão, número de processo, texto de um ato oficial.

## Regra de quotação

Citações diretas de fontes seguem o mesmo limite do resto do trabalho editorial do autor: no máximo ~15 palavras por citação direta, uma citação por fonte, o resto sempre parafraseado.
