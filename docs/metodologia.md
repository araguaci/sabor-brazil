# Metodologia — Sabor Brazil

## Princípio central

Uma entrada existe porque há uma **diferença auditável** — entre apresentação e denominação (Trilha 1), decisão regulatória e base técnica (Trilha 2), procedimento previsto e fato processual (Trilha 3), preço contratado e referência (Trilha 4), ou dado real e salto causal viral (Trilha 5). Não existe entrada por achismo ou viralização sem checagem.

Framework para agentes: [`METHODOLOGY.md`](../METHODOLOGY.md) na raiz.

## Passos para checagem de uma entrada nova

1. **Identificar a fonte da alegação.** Rede social, vídeo, print? Ponto de partida, nunca de chegada.
2. **Buscar a norma, o processo, a comparação de preço ou o dado bruto correspondente** conforme a trilha.
3. **Cruzar com pelo menos duas fontes independentes** sempre que possível. Fonte única → status `hipotese`, não `verificado`.
4. **Separar fato de interpretação.** O que o documento diz vs. o que alguém conclui que isso significa.
5. **Marcar lacunas explicitamente** (“Atualização pendente”, `lacuna_reconhecida`).

## Erros a evitar

- Equiparar mudança regulatória pública (Trilha 2) a fraude de rotulagem (Trilha 1).
- Promover crítica de terceira mão a fato verificado.
- Atribuir causa não comprovada.
- Estender alegação genérica a caso específico sem fonte.
- Usar a tese em disputa como `resumo_neutro` / manchete do card.
- Forçar entrada que falhou no teste da trilha (ver `METHODOLOGY.md` §7.2).

## Ciclo de vida de uma entrada

```
sugestão (issue /contribuir ou data/_fila)
  → checagem de fonte
  → .md no schema em data/<trilha>/
  → hero + heroes.ts (quando couber)
  → npm run sync
  → revisão de status
  → merge / deploy
```

Entradas podem mudar de status ao longo do tempo (`hipotese` → `verificado`; `contestado_judicialmente` atualizado quando a Justiça decide).
