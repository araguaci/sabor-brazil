#!/usr/bin/env node
/**
 * Gera data/catalog.json e public/catalog.json a partir dos .md em data/.
 * Uso: npm run sync
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const DATA_ROOT = path.join(ROOT, 'data');
const TRILHAS = ['rotulagem', 'regulatorio', 'institucional'];
const OUT_DATA = path.join(DATA_ROOT, 'catalog.json');
const OUT_PUBLIC = path.join(ROOT, 'public', 'catalog.json');

function isPublishable(data, fileName) {
  if (fileName.startsWith('_') || fileName.includes('template')) return false;
  const tags = data.tags ?? [];
  if (tags.includes('template') || tags.includes('nao-publicar')) return false;
  const id = String(data.id ?? '');
  if (id.includes('0000')) return false;
  return Boolean(data.id && data.titulo);
}

function loadDir(trilha) {
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
      const slug = id.toLowerCase();
      const {
        body: _b,
        slug: _s,
        filePath: _f,
        ...front
      } = {
        ...data,
        id,
        trilha: data.trilha || trilha,
        titulo: String(data.titulo),
        status: String(data.status ?? 'hipotese'),
        data_entrada: String(data.data_entrada ?? ''),
        tags: data.tags ?? [],
        fontes: data.fontes ?? [],
      };

      return [
        {
          ...front,
          slug,
          path: `data/${trilha}/${fileName}`,
          url: `/entrada/${slug}`,
          body: content.trim(),
        },
      ];
    });
}

function countBy(entries, key) {
  return entries.reduce((acc, e) => {
    const k = String(e[key] ?? '—');
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
}

const entradas = TRILHAS.flatMap(loadDir).sort(
  (a, b) => b.data_entrada.localeCompare(a.data_entrada) || a.id.localeCompare(b.id)
);

const ids = entradas.map((e) => e.id);
const dups = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dups.length) {
  console.error('IDs duplicados:', [...new Set(dups)].join(', '));
  process.exit(1);
}

const catalog = {
  version: 1,
  generated_at: new Date().toISOString(),
  site: 'https://sabor-brazil.vercel.app',
  schema: 'schema/entry-schema.md',
  endpoint: '/catalog.json',
  counts: {
    total: entradas.length,
    por_trilha: countBy(entradas, 'trilha'),
    por_status: countBy(entradas, 'status'),
  },
  entradas,
};

const json = `${JSON.stringify(catalog, null, 2)}\n`;

fs.mkdirSync(path.dirname(OUT_PUBLIC), { recursive: true });
fs.writeFileSync(OUT_DATA, json, 'utf8');
fs.writeFileSync(OUT_PUBLIC, json, 'utf8');

console.log(
  `sync ok — ${entradas.length} entradas → data/catalog.json + public/catalog.json`
);
