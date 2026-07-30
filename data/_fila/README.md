# Fila do Cursor (data/_fila)

Coloque aqui rascunhos de novas entradas (qualquer schema intermediário).

## Como processar

No chat do Cursor: `processar fila data/_fila`

O agente:
1. Converte para o schema do projeto
2. Publica em `data/<trilha>/` com ID sequencial
3. Gera hero + registra em `src/lib/heroes.ts`
4. Roda `npm run sync`
5. Move o rascunho para `processados/`

## Regras

- Esta pasta **não** entra no catálogo (só pastas de trilha em `scripts/sync-catalog.mjs`)
- Mantenha `entry-schema.md` como referência local se útil
- Não use prefixo `_` nos arquivos da fila (exceto esta pasta)
