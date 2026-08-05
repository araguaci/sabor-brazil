/** Capas de artigo X / entrada. Arquivos em public/artigos/. */

export type HeroRef = {
  src: string;
  alt: string;
};

const ENTRY_HEROES: Record<string, HeroRef> = {
  'RG-0001': {
    src: '/artigos/rg-0001-combustivel-e32-hero.png',
    alt: 'Capa E32 — a mistura é pública, o teste está no tribunal',
  },
  'RG-0002': {
    src: '/artigos/rg-0002-loteria-jogo-azar-hero.png',
    alt: 'Capa loteria — cassino proibido, loteria liberada: a lei admite a exceção',
  },
  'RG-0003': {
    src: '/artigos/rg-0003-bets-bolsa-familia-hero.png',
    alt: 'Capa bets — o Estado mediu o dano e o STF freou o freio',
  },
  'RG-0004': {
    src: '/artigos/rg-0004-pacote-veneno-hero.png',
    alt: 'Capa — Lei 14.785/2023 Pacote do Veneno, registro no MAPA',
  },
  'RG-0005': {
    src: '/artigos/rg-0005-rdc24-hero.png',
    alt: 'Capa — RDC 24/2010 advertência sanitária judicializada',
  },
  'RG-0006': {
    src: '/artigos/rg-0006-leite-carne-vegetal-hero.png',
    alt: 'Capa — PL 10.556/2018 denominação leite e carne vegetal',
  },
  'RG-0007': {
    src: '/artigos/rg-0007-penduricalhos-hero.png',
    alt: 'Capa — Resolução CNJ/CNMP 14/2026 sobre penduricalhos',
  },
  'RT-0001': {
    src: '/artigos/rt-0001-tipo-calabresa-hero.png',
    alt: 'Capa — linguiça tipo calabresa vs linguiça calabresa',
  },
  'RT-0002': {
    src: '/artigos/rt-0002-sabor-chocolate-hero.png',
    alt: 'Capa — sabor chocolate vs chocolate',
  },
  'RT-0003': {
    src: '/artigos/rt-0003-mistura-lactea-hero.png',
    alt: 'Capa — mistura láctea condensada vs leite condensado',
  },
  'RT-0004': {
    src: '/artigos/rt-0004-sabor-queijo-hero.png',
    alt: 'Capa — preparado sabor queijo vs queijo',
  },
  'RT-0005': {
    src: '/artigos/rt-0005-bebida-lactea-hero.png',
    alt: 'Capa — bebida láctea vs iogurte',
  },
  'RT-0006': {
    src: '/artigos/rt-0006-composto-lacteo-hero.png',
    alt: 'Capa — composto lácteo vs leite em pó',
  },
  'RT-0007': {
    src: '/artigos/rt-0007-doce-soro-hero.png',
    alt: 'Capa — doce de soro sabor doce de leite',
  },
  'RT-0008': {
    src: '/artigos/rt-0008-desconto-inss-hero.png',
    alt: 'Capa — desconto associativo em benefício do INSS',
  },
  'RT-0009': {
    src: '/artigos/rt-0009-sabor-cafe-hero.png',
    alt: 'Capa — pó sabor café vs café',
  },
  'RT-0010': {
    src: '/artigos/rt-0010-nectar-refresco-hero.png',
    alt: 'Capa — néctar/refresco vs suco',
  },
  'RT-0011': {
    src: '/artigos/rt-0011-sabor-manteiga-hero.png',
    alt: 'Capa — creme vegetal sabor manteiga vs manteiga',
  },
  'RT-0012': {
    src: '/artigos/rt-0012-azeite-adulterado-hero.png',
    alt: 'Capa — azeite extravirgem adulterado com outros óleos',
  },
  'RT-0013': {
    src: '/artigos/rt-0013-sal-doce-leite-hero.png',
    alt: 'Capa — sal Marfim e doce de leite São Benedito suspensos',
  },
  'IN-0001': {
    src: '/artigos/in-0001-video-ia-hero.png',
    alt: 'Capa — despacho sobre vídeo de IA e a tese dos três recordes',
  },
  'IN-0002': {
    src: '/artigos/in-0002-agu-inss-hero.png',
    alt: 'Capa — controvérsia sobre atuação da AGU na apuração do INSS',
  },
  'IN-0003': {
    src: '/artigos/in-0003-inquerito-fake-news-hero.png',
    alt: 'Capa — acúmulo de funções no Inquérito das Fake News',
  },
  'IN-0004': {
    src: '/artigos/in-0004-sigilo-vorcaro-hero.png',
    alt: 'Capa — sigilo de 100 anos sobre visitas a Vorcaro na PF',
  },
  'IN-0005': {
    src: '/artigos/in-0005-waico-china-hero.png',
    alt: 'Capa — adesão do Brasil à WAICO e enquadramento oficial',
  },
  'IN-0006': {
    src: '/artigos/in-0006-mineracao-taboca-hero.png',
    alt: 'Capa — Mineração Taboca, minerais críticos e mediação do MPF',
  },
  'IN-0007': {
    src: '/artigos/in-0007-ferrovia-para-hero.png',
    alt: 'Capa — Ferrovia do Pará e consulta prévia',
  },
  'IN-0008': {
    src: '/artigos/in-0008-sigilo-cascata-hero.png',
    alt: 'Capa — sigilo em cascata no CNJ',
  },
  'IN-0009': {
    src: '/artigos/in-0009-seletividade-drogas-hero.png',
    alt: 'Capa — seletividade penal na Lei de Drogas',
  },
  'IN-0010': {
    src: '/artigos/in-0010-cpmi-inss-hero.png',
    alt: 'Capa — CPMI do INSS termina sem relatório aprovado',
  },
  'IN-0011': {
    src: '/artigos/in-0011-supersalarios-hero.png',
    alt: 'Capa — supersalários e teto constitucional no Judiciário',
  },
  'IN-0012': {
    src: '/artigos/in-0012-carbono-oculto-hero.png',
    alt: 'Capa — Operação Carbono Oculto, créditos ESG sobre terra pública',
  },
  'IN-0013': {
    src: '/artigos/in-0013-viviane-barci-hero.png',
    alt: 'Capa — escritório familiar e crescimento de casos nos tribunais superiores',
  },
  'IN-0014': {
    src: '/artigos/in-0014-sabor-imprensa-hero.png',
    alt: 'Capa — sabor imprensa: guia Secom e influenciadores pagos',
  },

  'SF-0001': {
    src: '/artigos/sf-0001-sufotur-caches-hero.png',
    alt: 'Capa — superfaturamento de cachês na Sufotur (Bahia)',
  },
  'SF-0002': {
    src: '/artigos/sf-0002-ananindeua-merenda-hero.png',
    alt: 'Capa — merenda escolar superfaturada em Ananindeua',
  },
  'SF-0003': {
    src: '/artigos/sf-0003-piritiba-merenda-hero.png',
    alt: 'Capa — merenda escolar superfaturada em Piritiba',
  },
  'SF-0004': {
    src: '/artigos/sf-0004-tst-lexus-hero.png',
    alt: 'Capa — frota Lexus do TST, opção mais cara do estudo técnico',
  },
  'CR-0001': {
    src: '/artigos/cr-0001-pao-e-circo-hero.png',
    alt: 'Capa — correlação pobreza e shows públicos no Nordeste',
  },
  'CR-0002': {
    src: '/artigos/cr-0002-emendas-farmacia-hero.png',
    alt: 'Capa — emendas em recorde vs. cortes no Farmácia Popular',
  },
  'CR-0003': {
    src: '/artigos/cr-0003-stf-familia-real-hero.png',
    alt: 'Capa — orçamento do STF vs. Família Real britânica, comparador errado',
  },
};

export const PROJECT_HERO: HeroRef = {
  src: '/artigos/sabor-brazil-projeto-hero.png',
  alt: 'Sabor Brazil — nada é o que parece',
};

export function heroForEntryId(id: string): HeroRef | undefined {
  return ENTRY_HEROES[id.toUpperCase()];
}
