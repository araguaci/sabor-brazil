import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Trilha = 'rotulagem' | 'regulatorio' | 'institucional';

export type Fonte = {
  titulo: string;
  url: string;
  tipo: string;
};

export type Entry = {
  id: string;
  trilha: Trilha;
  titulo: string;
  status: string;
  data_entrada: string;
  tags: string[];
  apresentacao_comercial?: string;
  denominacao_oficial?: string;
  orgao_regulador?: string;
  fontes: Fonte[];
  processo_judicial?: Record<string, unknown>;
  divergencia_tecnica?: Record<string, unknown>;
  dispositivo_legal?: string;
  fatos_checaveis?: string[];
  argumento_juridico?: { autor?: string; tese?: string };
  contraponto?: { existe?: boolean | null; resumo?: string; fonte?: string };
  teste_generalizacao?: string;
  body: string;
  slug: string;
  filePath: string;
};

const DATA_ROOT = path.join(process.cwd(), 'data');
const TRILHAS: Trilha[] = ['rotulagem', 'regulatorio', 'institucional'];

function isPublishable(data: Record<string, unknown>, fileName: string): boolean {
  if (fileName.startsWith('_') || fileName.includes('template')) return false;
  const tags = (data.tags as string[] | undefined) ?? [];
  if (tags.includes('template') || tags.includes('nao-publicar')) return false;
  const id = String(data.id ?? '');
  if (id.endsWith('-0000') || id.includes('0000')) return false;
  return Boolean(data.id && data.titulo);
}

function loadDir(trilha: Trilha): Entry[] {
  const dir = path.join(DATA_ROOT, trilha);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .flatMap((fileName) => {
      const filePath = path.join(dir, fileName);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);
      if (!isPublishable(data, fileName)) return [];

      const id = String(data.id);
      return [
        {
          ...(data as Omit<Entry, 'body' | 'slug' | 'filePath' | 'trilha'>),
          id,
          trilha: (data.trilha as Trilha) || trilha,
          titulo: String(data.titulo),
          status: String(data.status ?? 'hipotese'),
          data_entrada: String(data.data_entrada ?? ''),
          tags: (data.tags as string[]) ?? [],
          fontes: (data.fontes as Fonte[]) ?? [],
          body: content.trim(),
          slug: id.toLowerCase(),
          filePath,
        } satisfies Entry,
      ];
    });
}

export function getAllEntries(): Entry[] {
  return TRILHAS.flatMap(loadDir).sort((a, b) =>
    b.data_entrada.localeCompare(a.data_entrada) || a.id.localeCompare(b.id)
  );
}

export function getEntriesByTrilha(trilha: Trilha): Entry[] {
  return getAllEntries().filter((e) => e.trilha === trilha);
}

export function getEntryById(id: string): Entry | undefined {
  const needle = id.toLowerCase();
  return getAllEntries().find((e) => e.id.toLowerCase() === needle || e.slug === needle);
}

export function trilhaLabel(trilha: Trilha): string {
  const map: Record<Trilha, string> = {
    rotulagem: 'Rotulagem',
    regulatorio: 'Regulatório',
    institucional: 'Institucional',
  };
  return map[trilha];
}

export function statusLabel(status: string): string {
  const map: Record<string, string> = {
    verificado: 'Verificado',
    hipotese: 'Hipótese',
    contestado_judicialmente: 'Contestado judicialmente',
    argumento_juridico_fundamentado: 'Argumento jurídico',
    fato_processual: 'Fato processual',
  };
  return map[status] ?? status;
}

export function statusClass(status: string): string {
  if (status === 'verificado' || status === 'fato_processual') return 'ok';
  if (status === 'contestado_judicialmente') return 'warn';
  if (status === 'hipotese') return 'hyp';
  return 'legal';
}
