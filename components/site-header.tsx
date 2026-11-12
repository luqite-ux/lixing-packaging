'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks, productCategories, company } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-transparent bg-background',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            if (link.href === '/products') {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href="/products"
                    className={cn(
                      'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform',
                        megaOpen && 'rotate-180',
                      )}
                    />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-popover p-3 shadow-xl">
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products?category=${encodeURIComponent(cat.name)}`}
                              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent"
                            >
                              <span className="relative size-11 shrink-0 overflow-hidden rounded-md bg-muted">
                                <Image
                                  src={cat.image}
                                  alt={cat.name}
                                  fill
                                  sizes="44px"
                                  className="object-cover"
                                />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-foreground">
                                  {cat.name}
                                </span>
                                <span className="block truncate text-xs text-muted-foreground">
                                  {cat.description}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                if (link.href === '/products') {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <Link
                          href="/products"
                          className="flex-1 rounded-md px-3 py-3 text-base font-medium text-foreground"
                        >
                          Products
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileProductsOpen((v) => !v)
                          }
                          aria-label="Toggle product categories"
                          className="rounded-md p-3 text-foreground"
                        >
                          <ChevronDown
                            className={cn(
                              'size-5 transition-transform',
                              mobileProductsOpen && 'rotate-180',
                            )}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {productCategories.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/products?category=${encodeURIComponent(cat.name)}`}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 px-3 text-sm font-medium text-foreground"
                >
                  <Phone className="size-4" />
                  {company.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
