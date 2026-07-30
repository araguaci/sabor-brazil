# Schema de entrada — sabor-brazil

> **Status:** proposta. Este arquivo ainda não existe no repositório (`schema/entry-schema.md`
> não foi commitado — o repo tem apenas `README.md`). Enviar como PR junto com as primeiras
> entradas, para que schema e dados nasçam versionados juntos.

Cada entrada é um `.md` com front matter YAML + corpo em prosa. Um arquivo por produto
(trilha 1) ou por caso regulatório (trilha 2). Nunca misturar as duas trilhas num arquivo.

## Campos obrigatórios (ambas as trilhas)

```yaml
titulo: string                     # nome do caso, curto
trilha: rotulagem | regulatorio
data_evento: YYYY-MM-DD            # data do fato mais recente relevante (ação/decisão/apreensão)
orgao_responsavel: [string]        # ANVISA, MAPA, ANP, CNPE, Senado, etc.
evidencia: ev-confirmed | ev-contested | ev-alleged | ev-inference
fontes: [url]                      # mínimo 2 fontes independentes se data_evento < 90 dias
descricao: string                  # factual, sem análise — o que aconteceu, documentado
lacuna_investigativa: string       # o que ainda não está verificado; "nenhuma" se não houver
```

## Campos por trilha

### Trilha 1 — Rotulagem Enganosa
```yaml
denominacao_comercial: string      # o que a embalagem/rótulo sugere
denominacao_oficial: string        # o que a norma de identidade e qualidade exige/permite
norma_aplicavel: string            # RDC, RIISPOA, PIQ, IN etc.
```

### Trilha 2 — Mudanças Regulatórias Contestadas
```yaml
decisao: string                    # ato normativo/legislativo específico (lei, RDC, PL, resolução)
base_tecnica_contestada: string    # o que o estudo oficial testou vs. o que a decisão exige
contestacao_por: [string]          # quem contesta (associação, MPF, cientistas, setor)
status_judicial: string            # "não judicializado" | número de processo/ADI/ACP + status
```

## Campo opcional (ambas as trilhas)

```yaml
analise: string                    # SEMPRE separado de descricao, SEMPRE ev-inference
                                    # nunca apresentar como fato o que é leitura estrutural
```

## Regras de aceite (herdadas do README, explicitadas)

1. Classificação única — se a entrada tem elementos de rotulagem *e* de disputa regulatória
   (ex.: um PL que também redefine denominação de venda), classificar pelo critério dominante
   e citar a outra dimensão em `descricao`, nunca duplicar em duas trilhas.
2. `ev-alleged` exige nota explícita de `lacuna_investigativa` — nunca publicar alegação de
   parte interessada como se fosse `ev-confirmed`.
3. Preço, valor de mercado ou dano quantificado só entra com fonte técnica/laboratorial —
   não estimativas de imprensa não atribuídas.
4. Sem terceira categoria. Um caso que não se encaixa em nenhuma denominação objetiva
   (comercial≠oficial) nem em nenhuma decisão regulatória nomeada fica de fora.
