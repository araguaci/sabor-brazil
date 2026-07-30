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
  'CR-0001': {
    src: '/artigos/cr-0001-pao-e-circo-hero.png',
    alt: 'Capa — correlação pobreza e shows públicos no Nordeste',
  },
  'CR-0002': {
    src: '/artigos/cr-0002-emendas-farmacia-hero.png',
    alt: 'Capa — emendas em recorde vs. cortes no Farmácia Popular',
  },
};

export const PROJECT_HERO: HeroRef = {
  src: '/artigos/sabor-brazil-projeto-hero.png',
  alt: 'Sabor Brazil — nada é o que parece',
};

export function heroForEntryId(id: string): HeroRef | undefined {
  return ENTRY_HEROES[id.toUpperCase()];
}
