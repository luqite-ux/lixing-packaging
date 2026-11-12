import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { company, navLinks, productCategories } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-white p-3 inline-block">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {company.legalName}. A trusted manufacturer of custom flexible
            packaging bags and films since {company.founded}, exporting worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Products
          </h3>
          <ul className="mt-4 space-y-2.5">
            {productCategories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href="/products"
                  className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5">
            <li className="flex gap-3 text-sm text-white/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-yellow" />
              <span>{company.address}</span>
            </li>
            <li>
              <a
                href={company.phoneHref}
                className="flex gap-3 text-sm text-white/70 transition-colors hover:text-brand-yellow"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-yellow" />
                <span>{company.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={company.emailHref}
                className="flex gap-3 text-sm text-white/70 transition-colors hover:text-brand-yellow"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-yellow" />
                <span>{company.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName} All rights
            reserved.
          </p>
          <p>Custom Flexible Packaging Bags &amp; Films Manufacturer</p>
        </div>
      </div>
    </footer>
  )
}
