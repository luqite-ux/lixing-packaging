import type { Metadata } from 'next'
import ProductsClient from './products-client'
import { products } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Packaging Bags & Films Catalog',
  description:
    'Browse our full catalog of custom flexible packaging: tea pouches, spout pouches, retort pouches, stand-up zipper pouches, back seal bags, three-side seal pouches, shaped pouches and roll stock film. OEM/ODM manufacturing for food, pet food and daily chemicals.',
  alternates: { canonical: '/products' },
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  return (
    <ProductsClient products={products} initialCategory={category ?? 'All'} />
  )
}
