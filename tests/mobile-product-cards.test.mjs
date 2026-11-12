import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('catalog images stay local and Next image optimization remains enabled', async () => {
  const mediaSource = (await readFile(new URL('../lib/media.ts', import.meta.url), 'utf8')).replace(
    /src: string/,
    'src',
  )
  const configSource = await readFile(new URL('../next.config.mjs', import.meta.url), 'utf8')
  const { resolveProductImage } = await import(
    `data:text/javascript;base64,${Buffer.from(mediaSource).toString('base64')}`
  )

  assert.equal(resolveProductImage('/images/catalog/BBFD001-1.png'), '/images/catalog/BBFD001-1.png')
  assert.doesNotMatch(configSource, /unoptimized\s*:\s*true/)
  assert.doesNotMatch(configSource, /lixing-packaging-m2mkn8dey-huanqiu\.vercel\.app/)
})

test('homepage category links are the card root without a motion wrapper', async () => {
  const source = await readFile(new URL('../components/home/product-showcase.tsx', import.meta.url), 'utf8')

  assert.doesNotMatch(source, /<motion\.div/)
  assert.match(source, /productCategories\.map[\s\S]*?<Link[\s\S]*?href=\{`\/products\?category=/)
})
