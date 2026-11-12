'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { resolveProductImage } from '@/lib/media'
import { type Product, productCategoryFilters } from '@/lib/site'

export default function ProductsClient({
  products,
  initialCategory = 'All',
}: {
  products: Product[]
  initialCategory?: string
}) {
  const [active, setActive] = useState(
    productCategoryFilters.includes(initialCategory) ? initialCategory : 'All',
  )

  const filtered = useMemo(
    () =>
      active === 'All'
        ? products
        : products.filter((p) => p.category === active),
    [products, active],
  )

  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Custom Packaging Bags & Films"
        description="Functional flexible packaging engineered for food, pet food, daily chemicals, seasonings and baking. Every product is fully customizable — structure, size, material and printing."
        image="/images/hero-bags.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            All products
          </h2>
          <div className="flex flex-wrap gap-2">
            {productCategoryFilters.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={resolveProductImage(product.image || '/placeholder.svg')}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  {product.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {product.summary}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-accent px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View details
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Custom Flexible Packaging Bags &amp; Films Manufacturer
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              As a professional manufacturer of flexible{' '}
              <strong className="text-foreground">packaging bags</strong> and{' '}
              <strong className="text-foreground">packaging film</strong>,
              CHAOZHOU CHAOAN LIXING PACKAGING CO., LTD. has specialized in
              plastic soft packaging for more than a decade. Our packaging bags
              include tea pouches, spout pouches, retort pouches, eight-side seal
              pouches, stand-up zipper pouches, back seal pouches, three-side seal
              pouches, frozen food pouches and die-cut shaped pouches, while our
              roll stock packaging film is engineered for high-speed automatic
              filling lines. Every solution is produced in-house through design,
              gravure printing, dry lamination, bag-making and slitting.
            </p>
            <p>
              Our custom packaging bags and films are widely used across the
              food, pet food, daily chemical, seasoning and baking industries.
              We help brands protect product freshness with high-barrier
              structures, extend shelf life with moisture and oxygen barriers,
              and elevate shelf appeal with vivid gravure and digital printing.
              Whether you need resealable zipper pouches, recyclable
              mono-material film, retort bags for ready meals or matte-finish
              pet food bags with handles, our engineering team tailors the
              material structure, thickness, size and finishing to your exact
              specification.
            </p>
            <p>
              With full self-owned import and export qualification, our
              packaging bags and packaging film are exported to Southeast Asia,
              Europe and America. A monthly capacity of 300 tons and a standard
              15-day lead time make us a dependable OEM/ODM packaging partner for
              growing brands and established manufacturers alike. Contact our
              engineers today for samples, artwork support and a competitive
              quote on your next flexible packaging project.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
