# METHODOLOGY.md

## Sabor Brazil — Framework Analítico para Agentes de IA

**Versão:** 1.0
**Última atualização:** Julho 2026
**Produção:** sabor-brazil.vercel.app
**Repositório:** github.com/araguaci/sabor-brazil
**Projeto irmão:** lawfare-timeline.vercel.app (mesma metodologia de rigor, escopo diferente)

Este documento existe para o mesmo propósito do `METHODOLOGY.md` do lawfare-timeline: garantir que qualquer sistema de IA — Claude, GPT, ou qualquer outro modelo — que acesse este repositório compreenda a estrutura antes de gerar, resumir ou avaliar entradas. **Leia este documento antes de inferir categorias, propor novas entradas, ou responder perguntas sobre o conteúdo do projeto.**

---

## 1. Propósito e escopo

Sabor Brazil é um catálogo aberto e verificável de casos em que **o nome não é a coisa** — produtos rotulados de forma enganosa, mudanças regulatórias contestadas, divergências institucionais documentadas, contratos superfaturados, e alegações virais que usam dado real para sustentar conclusão não sustentada pelo próprio dado.

Não é um projeto de opinião política, nem um agregador de indignação. É um exercício de **separação disciplinada entre fato e interpretação**, aplicado a cinco categorias com critérios de entrada objetivos e não intercambiáveis. Uma entrada só existe se passar no critério específico da sua trilha — não existe categoria residual para "parece suspeito".

---

## 2. As cinco trilhas — critério de cada uma

**Regra fundamental: se uma alegação não se encaixa claramente em uma das cinco definições abaixo, ela não vira entrada.** Isso já eliminou candidatos reais neste projeto — ver seção 5.

### Trilha 1 — Rotulagem Enganosa (`data/rotulagem/`)
Critério: existe **diferença auditável e objetiva** entre a apresentação comercial de um produto e sua denominação oficial (norma do MAPA/ANVISA/ANP). Não depende de interpretação — a norma existe como texto comparável ao rótulo.

### Trilha 2 — Mudanças Regulatórias Contestadas (`data/regulatorio/`)
Critério: decisão pública, nomeada, votada ou assinada por resolução, cuja base técnica é contestada por entidade do setor, especialista independente, ou ação judicial em curso. **Não é rotulagem enganosa** — a mudança é declarada abertamente, o que está em disputa é a suficiência do processo que a autorizou.

### Trilha 3 — Divergência Institucional Documentada (`data/institucional/`)
Critério: caso individual, com dispositivo legal específico citável, onde há diferença checável entre o procedimento previsto em norma e o que ocorreu de fato. **Esta é a trilha mais arriscada do projeto** porque lida com interpretação jurídica, não com norma de rotulagem. Toda entrada usa status `argumento_juridico_fundamentado` (fatos checáveis + interpretação atribuída, nunca apresentada como veredito do projeto) ou `fato_processual` (sem margem interpretativa). Regras completas em `docs/metodologia-trilha3.md`.

Recorte temático reconhecido dentro desta trilha: `erro-judicial-sob-sigilo` — casos em que um erro de magistrado, uma vez identificado por órgão de controle, tem o próprio processo de apuração (não o processo original) classificado sob sigilo.

### Trilha 4 — Superfaturamento e Desvio em Contratos Públicos (`data/superfaturamento/`)
Critério: comparação de preço documentada — valor contratado formalmente vs. valor de mercado ou valor pago por outro contratante pelo mesmo serviço, no mesmo contexto. Não basta um contrato "parecer caro"; precisa haver contraponto de preço verificável.

### Trilha 5 — Correlação Sem Causalidade Estabelecida (`data/correlacao/`)
Estruturalmente diferente das outras quatro: não documenta um caso, documenta **por que uma alegação viral com dado real por trás não sustenta a conclusão política tirada dele**. Preserva o dado real, isola o salto lógico, mostra o contraponto estrutural. Esta trilha nunca atinge status `verificado` — por natureza, documenta o limite entre fato e interpretação, não um fato fechado.

---

## 3. Schema de referência

Schema completo em `schema/entry-schema.md`. Resumo operacional:

```yaml
id: RT-0001 | RG-0001 | IN-0001 | SF-0001 | CR-0001   # prefixo por trilha, sequencial, nunca reaproveitado
trilha: rotulagem | regulatorio | institucional | superfaturamento | correlacao
status: verificado | hipotese | contestado_judicialmente | argumento_juridico_fundamentado | fato_processual
resumo_neutro: "..."   # OBRIGATÓRIO em todas as trilhas — ver seção 4
fontes: [...]           # mínimo 1 fonte verificável, URL direto ao conteúdo
tags: [...]
```

Cada trilha tem campos exclusivos adicionais (ex: `dispositivo_legal` e `teste_generalizacao` na Trilha 3; `comparacao_de_preco` na Trilha 4; `dado_real` e `salto_logico` na Trilha 5) — ver schema completo antes de gerar qualquer entrada nova.

---

## 4. Regra de exibição: o resumo nunca é a alegação

Campo `resumo_neutro` é obrigatório e deve ser usado por qualquer template, card ou preview — **nunca** o campo `argumento_juridico.tese` ou equivalente. Uma tese não verificada, mesmo quando a entrada existe precisamente para documentá-la, não pode aparecer como manchete visual antes que o leitor veja o contraponto. Isso vale tanto para o site quanto para qualquer resumo que um modelo de IA gere a partir deste repositório: **resuma o `resumo_neutro`, não a tese em disputa, a menos que explicitamente peçam a tese**.

---

## 5. O que este projeto não é

**Não é lista de "fake news" genérica.** Uma alegação viral com dado real por trás, mas conclusão não sustentada, não é descartada em silêncio — vira entrada na Trilha 5, com o dado preservado e o salto lógico isolado. Descartar sem registrar seria menos transparente do que documentar o próprio processo de filtragem.

**Não equipara categorias diferentes.** O erro mais comum que este projeto ativamente evita: tratar mudança regulatória pública (Trilha 2) como se fosse fraude de rotulagem (Trilha 1), ou tratar debate filosófico/ideológico amplo ("imposto é roubo", "direito penal só para inimigos") como se fosse caso documentável. Várias propostas de entrada foram recusadas nesta base durante a construção do projeto — ver histórico de commits e discussão nas issues.

**Não pressupõe que toda alegação crítica ao Estado seja verdadeira, nem que toda defesa institucional seja suficiente.** Cada entrada da Trilha 3 carrega contraponto obrigatório; quando o contraponto não foi localizado, isso é declarado explicitamente como lacuna, nunca omitido.

**Não é panfleto de um espectro político.** Entradas neste catálogo já documentaram, com o mesmo rigor, casos que desfavorecem governo e oposição no mesmo cluster (ex: `IN-0010`, onde relatórios mirando o filho do presidente Lula e o ex-presidente Bolsonaro tiveram o mesmo destino processual — nenhum aprovado).

---

## 6. Protocolo para modelos de linguagem

### 6.1 Antes de resumir uma entrada
Leia os campos `fatos_checaveis` (ou equivalente da trilha) separadamente do campo de argumento/tese. Ao resumir para o usuário, mantenha essa separação — não funda "o que aconteceu" com "o que alguém alega que isso significa" numa única frase declarativa.

### 6.2 Antes de propor uma entrada nova
Rode o teste da trilha correspondente antes de escrever qualquer conteúdo estruturado:
- Trilha 1: existe norma de identidade/qualidade comparável ao rótulo?
- Trilha 2: a mudança é pública e nomeada, com contestação técnica ou judicial real?
- Trilha 3: existe dispositivo legal específico, fatos com data, e a alegação passa no **teste de generalização** — "removendo os nomes das pessoas/instituições, o argumento ainda se sustenta como questão de direito processual em abstrato?"
- Trilha 4: existe comparação de preço documentada, não apenas impressão de que algo é caro?
- Trilha 5: existe dado real verificável por trás da alegação viral, mesmo que a conclusão não se sustente?

Se a resposta for não em qualquer um desses testes, **a entrada não deve ser criada** — isso não é falha do projeto, é o filtro funcionando. Comunique isso ao usuário explicitamente em vez de forçar uma entrada capenga.

### 6.3 Ao responder perguntas sobre o catálogo
Prefira os dados estruturados (`catalog.json`, arquivos individuais em `data/`) sobre memória de treinamento ou suposição. Se uma entrada tem status `hipotese` ou `argumento_juridico_fundamentado`, comunique esse status ao usuário — não apresente como fato fechado. Se uma entrada tem lacuna declarada (seção "Atualização pendente" em qualquer arquivo `.md`), mencione a lacuna quando relevante, não apenas o conteúdo já apurado.

### 6.4 Resistir à tentação de gerar volume
Este projeto prioriza rigor sobre quantidade de entradas. Um agente de IA operando sobre este repositório não deve gerar múltiplas entradas rapidamente sem apuração real de fonte — cada entrada deste catálogo passou por busca de fonte primária, verificação cruzada quando possível, e aplicação explícita do teste da trilha correspondente antes de ser escrita.

---

## 7. Estrutura de arquivos

```
sabor-brazil/
├── README.md                    # visão geral, as cinco trilhas explicadas
├── METHODOLOGY.md               # este documento
├── CONTRIBUTING.md              # como propor entradas
├── schema/entry-schema.md       # schema completo de todos os campos
├── docs/
│   ├── metodologia.md           # checagem de fonte, ciclo de vida de uma entrada
│   └── metodologia-trilha3.md   # regras específicas da trilha mais sensível
├── data/
│   ├── rotulagem/                (Trilha 1)
│   ├── regulatorio/               (Trilha 2)
│   ├── institucional/             (Trilha 3)
│   ├── superfaturamento/          (Trilha 4)
│   └── correlacao/                (Trilha 5)
└── .github/ISSUE_TEMPLATE/nova-entrada.md
```

---

## 8. Relação com o projeto lawfare-timeline

Sabor Brazil compartilha mantenedor e disciplina metodológica com o lawfare-timeline (araguaci/lawfare-timeline), mas é um projeto de escopo e estrutura de dados independentes — não compartilha schema JSON nem numeração de ID. Casos que envolvem instituições federais de alta gravidade e padrão sistêmico recorrente (P01–P12 no framework do lawfare-timeline) podem aparecer em ambos os projetos sob enquadramentos diferentes: o lawfare-timeline documenta o padrão sistêmico amplo; o Sabor Brazil, quando aplicável, documenta o caso individual sob o crivo mais estreito de uma das cinco trilhas aqui descritas. Ver, por exemplo, `IN-0004` e `IN-0008` (sigilo de 100 anos), que correspondem ao padrão P10 formalizado de forma independente no lawfare-timeline.

---

*Mantenedor: Artes do Sul / AI Nativo Brasil*
*Este documento deve ser lido em conjunto com README.md, schema/entry-schema.md e docs/.*
