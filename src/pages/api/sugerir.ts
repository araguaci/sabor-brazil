export const prerender = false;

import type { APIRoute } from 'astro';

type Body = {
  parece?: string;
  realmente?: string;
  onde?: string;
  fonte?: string;
  trilha?: string;
  email?: string;
};

const ALLOWED_TRILHAS = new Set([
  'rotulagem',
  'regulatorio',
  'institucional',
  'superfaturamento',
  'correlacao',
]);

function clean(value: unknown, max: number): string {
  return String(value ?? '')
    .trim()
    .replace(/\r\n/g, '\n')
    .slice(0, max);
}

export const POST: APIRoute = async ({ request }) => {
  const token = import.meta.env.GITHUB_TOKEN;
  const repo = import.meta.env.GITHUB_REPO;

  if (!token || !repo) {
    return new Response(
      JSON.stringify({
        error:
          'API não configurada. Defina GITHUB_TOKEN e GITHUB_REPO no ambiente (veja .env.example).',
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parece = clean(body.parece, 200);
  const realmente = clean(body.realmente, 800);
  const onde = clean(body.onde, 200);
  const fonte = clean(body.fonte, 600);
  const email = clean(body.email, 120);
  const trilha = clean(body.trilha, 40) || 'rotulagem';

  if (!parece || !realmente || !fonte) {
    return new Response(
      JSON.stringify({ error: 'Preencha o que parece ser, o que realmente é e a fonte.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!ALLOWED_TRILHAS.has(trilha)) {
    return new Response(JSON.stringify({ error: 'Trilha inválida.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const title = `[NOVA ENTRADA] ${parece}`.slice(0, 120);

  const issueBody = [
    '**Trilha:** ' + trilha,
    '',
    '**O que parece ser:**',
    parece,
    '',
    '**O que a fonte diz que realmente é (denominação oficial ou base regulatória):**',
    realmente,
    '',
    '**Onde viu:**',
    onde || '_não informado_',
    '',
    '**Fonte(s):**',
    '- ' + fonte,
    '',
    '**Contato (opcional, não publicar no site):**',
    email || '_não informado_',
    '',
    '**Por que isso não é "achismo":** _(a curadoria completa este campo na triagem)_',
    '',
    '**Confiança da alegação:** hipótese (sugestão da comunidade — aguardando checagem)',
    '',
    '---',
    '_Enviado pelo formulário /contribuir do Sabor Brazil._',
  ].join('\n');

  const gh = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body: issueBody,
      labels: ['nova-entrada'],
    }),
  });

  const payload = await gh.json().catch(() => ({}));

  if (!gh.ok) {
    const message =
      typeof payload?.message === 'string'
        ? payload.message
        : 'GitHub rejeitou a criação da issue.';
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(
    JSON.stringify({
      ok: true,
      url: payload.html_url as string | undefined,
      number: payload.number as number | undefined,
    }),
    { status: 201, headers: { 'Content-Type': 'application/json' } }
  );
};
