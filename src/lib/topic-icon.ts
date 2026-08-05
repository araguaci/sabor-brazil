import type { Entry, Trilha } from './entries';
import ecosystemJson from '../../data/ecosystem.json';

export type TopicIconName =
  | 'tag'
  | 'scroll'
  | 'landmark'
  | 'banknote'
  | 'chart'
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
  if (/azeite|oliva|adulter/.test(blob)) return 'droplets';
  if (/agrotoxi|veneno|rdc.?24|plant-based|leite.vegetal|carne.vegetal/.test(blob)) return 'scroll';
  if (/stf|moraes|eleitoral|agu|messias|despacho|cnj|sigilo|drogas|seletividade|cpmi|supersalario|penduricalho|teto.constitucional/.test(blob)) return 'gavel';
  if (/carbono|redd|grilagem|esg|greenwashing/.test(blob)) return 'cloud';
  if (/sufotur|cache|cachê|merenda|superfatur/.test(blob)) return 'banknote';
  if (/pao-e-circo|pão.e.circo|emendas|farmacia|farmácia|nordeste|shows/.test(blob)) return 'chart';

  return topicIconForTrilha(entry.trilha);
}

export function topicIconForTrilha(trilha: Trilha): TopicIconName {
  if (trilha === 'rotulagem') return 'tag';
  if (trilha === 'regulatorio') return 'scroll';
  if (trilha === 'superfaturamento') return 'banknote';
  if (trilha === 'correlacao') return 'chart';
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
  superfaturamento: {
    icon: 'banknote',
    titulo: 'Superfaturamento',
    descricao: 'Preço contratado versus referência de mercado, com órgão de controle.',
  },
  correlacao: {
    icon: 'chart',
    titulo: 'Correlação',
    descricao: 'Dado real isolado do salto causal que a narrativa viral acrescenta.',
  },
};

export type EcosystemLink = {
  href: string;
  title: string;
  description: string;
  icon: TopicIconName;
  current?: boolean;
  image?: string;
};

/** Fonte canônica: `data/ecosystem.json` */
export const ecosystemLinks: EcosystemLink[] = ecosystemJson as EcosystemLink[];
