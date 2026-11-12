import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Check, ArrowRight, FileText } from 'lucide-react'
import { ProductGallery } from '@/components/product-gallery'
import { CtaSection } from '@/components/cta-section'
import { company, products } from '@/lib/site'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

function getProduct(slug: string) {
  return products.find((p) => p.slug === slug) ?? null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Product not found' }
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.summary,
      images: [product.image],
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.categorySlug === product.categorySlug,
  )
  const others = products.filter(
    (p) => p.slug !== product.slug && p.categorySlug !== product.categorySlug,
  )
  const related = [...sameCategory, ...others].slice(0, 3)

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.gallery} name={product.name} />

          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {product.category}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              SKU / Model: <span className="font-medium text-foreground">{product.sku}</span>
            </p>

            <h2 className="mt-6 font-heading text-lg font-bold text-foreground">
              Key features
            </h2>
            <ul className="mt-4 space-y-4">
              {product.features.map((f, i) => (
                <li key={f.title || i} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-foreground">
                    {f.title && (
                      <span className="font-semibold text-foreground">{f.title}: </span>
                    )}
                    <span className="text-muted-foreground">{f.detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="bg-card">
                    <th className="w-1/3 px-4 py-3 text-left font-medium text-muted-foreground">
                      SKU / Model
                    </th>
                    <td className="px-4 py-3 text-foreground">{product.sku}</td>
                  </tr>
                  <tr className="bg-secondary/40">
                    <th className="w-1/3 px-4 py-3 text-left font-medium text-muted-foreground">
                      Category
                    </th>
                    <td className="px-4 py-3 text-foreground">{product.category}</td>
                  </tr>
                  <tr className="bg-card">
                    <th className="w-1/3 px-4 py-3 text-left font-medium text-muted-foreground">
                      Customization
                    </th>
                    <td className="px-4 py-3 text-foreground">
                      Size, structure, material, printing &amp; surface finish
                    </td>
                  </tr>
                  <tr className="bg-secondary/40">
                    <th className="w-1/3 px-4 py-3 text-left font-medium text-muted-foreground">
                      Service
                    </th>
                    <td className="px-4 py-3 text-foreground">OEM / ODM, samples on request</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={company.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <FileText className="size-4" />
                Email for Samples
              </a>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Related products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={p.image || '/placeholder.svg'}
                    alt={p.name}
                    className="size-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {p.name}
                  </h3>
                  <ArrowRight className="size-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
