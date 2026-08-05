# X Articles ↔ entradas do catálogo

Mapa canônico: qual texto longo em `artigos/*-xarticle.md` corresponde a qual entrada (ou ao projeto).

**Regra:** todo X Article sobre um caso deve linkar `/entrada/<slug>` e **não** promover tese/salto a fato. Heroes de entrada (`public/artigos/*-hero.png`) ≠ X Article.

## Publicados

| Arquivo | Entrada / tema | Trilha |
|---|---|---|
| [`sabor-brazil-projeto-xarticle.md`](../artigos/sabor-brazil-projeto-xarticle.md) | Projeto (visão geral das 5 trilhas) | — |
| [`combustivel-e32-xarticle.md`](../artigos/combustivel-e32-xarticle.md) | [RG-0001](https://sabor-brazil.vercel.app/entrada/rg-0001) | Regulatório |
| [`loteria-vs-jogo-de-azar-xarticle.md`](../artigos/loteria-vs-jogo-de-azar-xarticle.md) | [RG-0002](https://sabor-brazil.vercel.app/entrada/rg-0002) | Regulatório |
| [`apostas-bets-bolsa-familia-xarticle.md`](../artigos/apostas-bets-bolsa-familia-xarticle.md) | [RG-0003](https://sabor-brazil.vercel.app/entrada/rg-0003) | Regulatório |

## Cobertura por trilha

| Trilha | Entradas (catálogo) | Com X Article | Observação |
|---|---|---|---|
| Rotulagem | RT-* | 0 | Coberto pela narrativa do artigo-projeto; peça longa opcional |
| Regulatório | RG-* | RG-0001…0003 | Prioridade: RG-0007 (penduricalhos) |
| Institucional | IN-* | 0 | Prioridade: IN-0011, IN-0014 |
| Superfaturamento | SF-* | 0 | Prioridade: SF-0001 ou SF-0004 |
| Correlação | CR-* | 0 | Prioridade: CR-0003 |

## Backlog (ordem sugerida)

1. **RG-0007** — Resolução CNJ/CNMP 14/2026 (liga a IN-0011)
2. **IN-0014** — Sabor imprensa / Guia Secom
3. **CR-0003** — STF × Família Real (modelo da Trilha 5)
4. **SF-0004** — Frota Lexus TST (modelo da Trilha 4)

Atualizar esta tabela ao publicar um novo `*-xarticle.md`. Não é obrigatório um X Article por entrada — só quando houver ângulo editorial claro.

## Checklist ao criar X Article

- [ ] Link para `/entrada/<id>` no primeiro terço do texto
- [ ] Hero 5:2 (share) + registro se for capa de entrada em `heroes.ts`
- [ ] Citações longas só se forem o *objeto* de análise (tese/salto), sempre atribuídas
- [ ] Linha na tabela “Publicados” deste arquivo + tabela do `README.md`
