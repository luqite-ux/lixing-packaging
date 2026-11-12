export const company = {
  name: 'Lixing Packaging',
  legalName: 'CHAOZHOU CHAOAN LIXING PACKAGING CO., LTD.',
  legalNameCn: '潮州市潮安区丽兴包装制品有限公司',
  address: 'Guolong Industrial Zone, Anbu Town, Chaoan District, Chaozhou City, Guangdong, China',
  phone: '+86 15876881168',
  phoneHref: 'tel:+8615876881168',
  email: 'kelly@lixingprinting.com',
  emailHref: 'mailto:kelly@lixingprinting.com',
  whatsapp: '+86 15876881168',
  founded: 2012,
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

import productsData from './products.json'

export type ProductFeature = { title: string; detail: string }

export type Product = {
  slug: string
  sku: string
  name: string
  category: string
  categorySlug: string
  image: string
  gallery: string[]
  features: ProductFeature[]
  /** One-line summary derived from the leading feature, used in cards & metadata. */
  summary: string
}

// Full catalog generated from the supplier product sheet (lib/products.json).
export const products: Product[] = (
  productsData as Omit<Product, 'summary'>[]
).map((p) => ({
  ...p,
  summary: p.features[0]?.detail ?? '',
}))

// Filter chips on the catalog page — "All" plus every category in sheet order.
export const productCategoryFilters = [
  'All',
  ...Array.from(new Set(products.map((p) => p.category))),
]

export type ProductCategory = {
  slug: string
  name: string
  description: string
  image: string
}

// Six curated categories featured in the home-page bento grid.
const featuredCategories: { slug: string; description: string }[] = [
  { slug: 'spout-pouch', description: 'Stand-up spout pouches for beverages, jelly, sauces and liquid foods.' },
  { slug: '8-side-seal-pouch', description: 'Flat-bottom octagonal pouches with premium shelf presence for coffee and more.' },
  { slug: 'stand-up-pouch', description: 'Resealable zipper stand-up pouches for snacks, nuts and dry goods.' },
  { slug: 'retort-pouch', description: 'High-temperature retort pouches for ready meals and boil-safe foods.' },
  { slug: 'shaped-pouch', description: 'Die-cut custom-contour pouches that stand out on the shelf.' },
  { slug: 'roll-film', description: 'Printed roll stock film for high-speed automatic packaging lines.' },
]

export const productCategories: ProductCategory[] = featuredCategories.map((fc) => {
  const first = products.find((p) => p.categorySlug === fc.slug)
  return {
    slug: fc.slug,
    name: first?.category ?? fc.slug,
    description: fc.description,
    image: first?.image ?? '/placeholder.svg',
  }
})

export const stats = [
  { value: 13, suffix: '+', label: 'Years in flexible packaging' },
  { value: 300, suffix: ' tons', label: 'Monthly production capacity' },
  { value: 2500, suffix: ' m²', label: 'Factory floor area' },
  { value: 15, suffix: ' days', label: 'Standard order lead time' },
]

export const industries = [
  'Food & Beverage',
  'Pet Food',
  'Daily Chemicals',
  'Seasonings & Sauces',
  'Baking & Confectionery',
  'Health & Nutrition',
]
