/** Capas de artigo X vinculadas a entradas / projeto. Arquivos em public/artigos/. */

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
};

export const PROJECT_HERO: HeroRef = {
  src: '/artigos/sabor-brazil-projeto-hero.png',
  alt: 'Sabor Brazil — nada é o que parece',
};

export function heroForEntryId(id: string): HeroRef | undefined {
  return ENTRY_HEROES[id.toUpperCase()];
}
