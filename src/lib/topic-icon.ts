import type { Entry, Trilha } from './entries';

export type TopicIconName =
  | 'tag'
  | 'scroll'
  | 'landmark'
  | 'beef'
  | 'candy'
  | 'milk'
  | 'coffee'
  | 'cup'
  | 'droplets'
  | 'wallet'
  | 'fuel'
  | 'dices'
  | 'ticket'
  | 'scale'
  | 'gavel'
  | 'search'
  | 'plus'
  | 'globe'
  | 'cloud'
  | 'dragon'
  | 'shield';

/** Ícone por assunto (tags/id), com fallback da trilha. */
export function topicIconForEntry(entry: Entry): TopicIconName {
  const blob = `${entry.id} ${(entry.tags ?? []).join(' ')} ${entry.titulo}`.toLowerCase();

  if (/chocolate|cacau/.test(blob)) return 'candy';
  if (/doce|soro/.test(blob) && /leite|soro|doce/.test(blob)) return 'candy';
  if (/calabresa|embutido|carne|carnes/.test(blob)) return 'beef';
  if (/cafe|café|cafake/.test(blob)) return 'coffee';
  if (/nectar|néctar|refresco|suco/.test(blob)) return 'cup';
  if (/manteiga|creme-vegetal|gordura|oleo|óleo/.test(blob)) return 'droplets';
  if (/inss|aposentadoria|desconto|associativ/.test(blob)) return 'wallet';
  if (/queijo|iogurte|laticinio|laticínio|leite|condensad|composto-lacteo|bebida-lactea|mistura-lactea/.test(blob))
    return 'milk';
  if (/combustivel|combustível|etanol|gasolina|e32|cnpe/.test(blob)) return 'fuel';
  if (/bets|aposta|bolsa-familia|bolsa.familia/.test(blob)) return 'ticket';
  if (/loteria|jogo-de-azar|cassino|monopolio|monopólio/.test(blob)) return 'dices';
  if (/stf|moraes|eleitoral|agu|messias|despacho/.test(blob)) return 'gavel';

  return topicIconForTrilha(entry.trilha);
}

export function topicIconForTrilha(trilha: Trilha): TopicIconName {
  if (trilha === 'rotulagem') return 'tag';
  if (trilha === 'regulatorio') return 'scroll';
  return 'landmark';
}

export const trilhaMeta: Record<
  Trilha,
  { icon: TopicIconName; titulo: string; descricao: string }
> = {
  rotulagem: {
    icon: 'tag',
    titulo: 'Rotulagem',
    descricao: 'Apresentação comercial versus denominação oficial (MAPA, ANVISA).',
  },
  regulatorio: {
    icon: 'scroll',
    titulo: 'Regulatório',
    descricao: 'Decisões públicas cuja base técnica é contestada ou judicializada.',
  },
  institucional: {
    icon: 'landmark',
    titulo: 'Institucional',
    descricao: 'Caso concreto: procedimento previsto versus o que ocorreu de fato.',
  },
};

export const ecosystemLinks = [
  {
    href: 'https://sabor-brazil.vercel.app/',
    title: 'Sabor Brazil',
    description: 'Catálogo aberto onde o nome não é a coisa — rotulagem, regulatório e institucional.',
    icon: 'tag' as TopicIconName,
    current: true,
    image: '/artigos/sabor-brazil-projeto-hero.png',
  },
  {
    href: 'https://republica-sequestrada-hub.vercel.app/',
    title: 'República Sequestrada',
    description: 'A extração não muda de lado. Muda de nome.',
    icon: 'scale' as TopicIconName,
    current: false,
  },
  {
    href: 'https://lawfare-timeline.vercel.app/',
    title: 'Lawfare Timeline',
    description: 'Linha do tempo investigativa de lawfare com fonte auditável.',
    icon: 'scroll' as TopicIconName,
    current: false,
  },
  {
    href: 'https://observatorio-civil-br.vercel.app/',
    title: 'Observatório Civil BR',
    description: 'Monitoramento cívico de casos, padrões e documentos públicos.',
    icon: 'search' as TopicIconName,
    current: false,
  },
  {
    href: 'https://gosurf.site',
    title: 'GoSurf',
    description:
      'Publicação de análises, dossiês investigativos e insights sobre Brasil, geopolítica, crime organizado, lawfare e economia.',
    icon: 'globe' as TopicIconName,
    current: false,
  },
  {
    href: 'https://geoengenharia.vercel.app/',
    title: 'Geoengenharia',
    description:
      'Patentes, linha do tempo e análises sobre modificação climática, vigilância e full-spectrum dominance.',
    icon: 'cloud' as TopicIconName,
    current: false,
  },
  {
    href: 'https://odragaoeaonca.vercel.app/',
    title: 'O Dragão e a Onça',
    description:
      'Série Brasil × China: dossiês, timelines e X Articles sobre soberania, minerais e capítulos estaduais.',
    icon: 'dragon' as TopicIconName,
    current: false,
  },
  {
    href: 'https://abusosupremo.vercel.app/',
    title: 'Abuso Supremo',
    description: 'Censura no Brasil (2019–2025): documentação e cronologia do regime de restrições.',
    icon: 'shield' as TopicIconName,
    current: false,
  },
] as const;
