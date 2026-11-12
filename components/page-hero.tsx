import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
}: {
  eyebrow?: string
  title: string
  description?: string
  image: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20">
      <Image
        src={image || '/placeholder.svg'}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="hover:text-brand-yellow">
            Home
          </Link>
          {(crumbs ?? [{ label: title }]).map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" />
              {c.href ? (
                <Link href={c.href} className="hover:text-brand-yellow">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className="mt-6 inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
