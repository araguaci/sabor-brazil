# Metodologia — Trilha 3 (Divergência Institucional Documentada)

Esta trilha é a mais arriscada do projeto, porque lida com interpretação jurídica, não com norma de rotulagem ou resolução técnica. As regras abaixo existem para impedir que o projeto vire peça de advocacy travestida de catálogo.

## O que diferencia esta trilha das outras duas

Nas Trilhas 1 e 2, o padrão contra o qual comparamos é publicamente não-controverso: a denominação oficial do MAPA existe como texto; a resolução do CNPE existe como texto. Aqui, "o procedimento previsto" muitas vezes admite mais de uma leitura jurídica válida — dois juristas de boa-fé podem discordar sobre se um prazo do CPP foi ou não respeitado, ou se uma decisão monocrática excedeu ou não a competência regimental. Por isso:

## Regras obrigatórias

1. **Toda entrada precisa citar o dispositivo legal específico** (artigo de lei, súmula, regimento interno) que fundamenta a alegação de divergência — nunca "a Constituição foi violada" sem apontar o artigo.
2. **Toda entrada separa fato de interpretação explicitamente**, em campos distintos:
   - `fatos_checaveis`: datas, número de pedidos, prazos decorridos, texto de decisões — coisas que existem independente de interpretação.
   - `argumento_juridico`: a conclusão de que houve divergência — sempre atribuída a quem a fez (petição de defesa, parecer, doutrina), nunca apresentada como veredito do projeto.
3. **Toda entrada apresenta o contraponto** quando ele existe publicamente — a posição do outro lado do processo, do tribunal, ou de doutrina divergente. Se o contraponto não foi localizado, isso é dito explicitamente ("contraponto não localizado até a data desta entrada"), nunca omitido silenciosamente.
4. **Nenhuma entrada individual sustenta uma afirmação genérica sobre a instituição como um todo.** Um caso de mora processual documentado não vira "o Judiciário não segue o CPP" — vira "neste processo específico, esta petição argumentou X com base no artigo Y".
5. **Status obrigatório**: `argumento_juridico_fundamentado` (cita dispositivo específico e fatos checáveis, mas a conclusão é interpretação jurídica) ou `fato_processual` (decisão publicada, prazo em dias corridos, número de processo — sem margem interpretativa, ex: "a decisão foi publicada em tal data").

## O teste antes de publicar uma entrada

Pergunta de controle: **se eu removesse o nome das pessoas e das instituições envolvidas, o argumento ainda se sustentaria como uma questão de direito processual em abstrato?** Se a resposta é não — se a entrada só faz sentido como ataque a uma pessoa ou instituição específica, e não como um ponto de direito verificável — ela não entra nesta trilha.

## Regra de exibição — o card nunca é a alegação

Todo template de listagem (home, página da trilha) deve puxar o campo `resumo_neutro`, nunca `argumento_juridico.tese`, como texto de preview. Uma tese não verificada, ou mesmo uma tese que reprovou no teste de generalização, não pode aparecer como a "manchete" visual de uma entrada — isso reproduz com destaque exatamente o que a curadoria classificou como problemático, antes que o leitor veja o contraponto. Antes de fazer merge de qualquer entrada nesta trilha, confirmar visualmente (preview local ou staging) que o card mostra o resumo neutro, não a tese em disputa.

## Exemplo de entrada aceitável vs. não aceitável

**Aceitável**: "Neste processo, a defesa argumentou que a prisão preventiva deveria ter sido convertida em domiciliar no primeiro pedido após o diagnóstico médico, com base no art. 318 do CPP, e que isso não ocorreu até o quinto pedido — fato checável pelas datas de protocolo. A conclusão de que houve mora processual é o argumento da petição, não um fato estabelecido pelo projeto."

**Não aceitável**: "O Judiciário brasileiro ignora sistematicamente o CPP quando conveniente" (afirmação genérica, sem processo específico, sem dispositivo citado, sem contraponto).
