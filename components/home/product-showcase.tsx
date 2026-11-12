import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { resolveProductImage } from '@/lib/media'
import { productCategories } from '@/lib/site'

// Bento layout tuned for six category cards on a 4-column grid.
const spans = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-2',
  '',
  '',
  'sm:col-span-2',
  'sm:col-span-2',
]

export function ProductShowcase() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Packaging built for every industry
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            From resealable pouches to high-barrier roll film, we produce
            functional flexible packaging tailored to your product.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          View all products
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-4">
        {productCategories.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
            aria-label={`View ${cat.name} products`}
            className={`group relative block touch-manipulation overflow-hidden rounded-2xl border border-border bg-card ${spans[i] ?? ''}`}
          >
            <Image
              src={resolveProductImage(cat.image || '/placeholder.svg')}
              alt={cat.name}
              fill
              sizes="(max-width: 640px) calc(100vw - 2rem), 50vw"
              quality={70}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-heading text-lg font-bold text-white">
                {cat.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-white/75">
                {cat.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-yellow opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                View details
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
