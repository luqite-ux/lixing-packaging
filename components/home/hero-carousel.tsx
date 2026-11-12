'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const slides = [
  {
    image: '/images/facility/printing-line-hs1000.jpg',
    eyebrow: 'Flexible Packaging Manufacturer',
    title: 'Custom Packaging Bags & Films, Built to Spec',
    text: 'Design, printing, lamination, bag-making and export — all under one roof since 2012.',
  },
  {
    image: '/images/hero-bags.png',
    eyebrow: 'OEM / ODM Specialists',
    title: 'From Concept to Finished Pouch',
    text: 'Stand-up pouches, spout pouches, roll film and more for food, pet food and daily chemicals.',
  },
  {
    image: '/images/hero-rolls.png',
    eyebrow: 'Export-Ready Quality',
    title: 'Trusted Across Southeast Asia, Europe & America',
    text: '300 tons monthly capacity with a 15-day standard lead time and full export qualification.',
  },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-brand-navy">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 6.5, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image || '/placeholder.svg'}
            alt={slides[index].title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                {slides[index].eyebrow}
              </span>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
                {slides[index].title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                {slides[index].text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              Explore Products
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  )
}
