import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Counter } from '@/components/counter'
import { CtaSection } from '@/components/cta-section'
import { company, stats, industries } from '@/lib/site'
import { Button } from '@/components/ui/button'
import {
  Target,
  Eye,
  HandshakeIcon,
  Globe2,
  Award,
  Users,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: `${company.legalName} is a professional flexible packaging manufacturer founded in ${company.founded}, based in Chaozhou, Guangdong, China, exporting custom printed pouches and film worldwide.`,
  alternates: { canonical: '/about' },
}

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To help brands stand out on the shelf with high-quality, custom flexible packaging delivered on time, every time.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the most trusted flexible packaging partner for growing brands and importers around the world.',
  },
  {
    icon: HandshakeIcon,
    title: 'Our Promise',
    desc: 'Transparent communication, consistent quality and a genuine long-term partnership — not just a one-off transaction.',
  },
]

const timeline = [
  { year: '2012', title: 'Founded', desc: 'Lixing Packaging established in Chaoan, Chaozhou with printing operations.' },
  { year: '2015', title: 'Expansion', desc: 'Added lamination and automatic bag-making lines for full in-house production.' },
  { year: '2018', title: 'Going Global', desc: 'Started exporting to overseas brands across Asia, Europe and North America.' },
  { year: '2021', title: 'Clean Room', desc: 'Commissioned class 100,000 clean room for food and medical-grade packaging.' },
  { year: 'Today', title: 'Trusted Partner', desc: 'Serving 300+ clients worldwide with 300 tons monthly capacity.' },
]

const trustPoints = [
  'Verified manufacturer — not a trading middleman',
  'Full in-house production with traceability',
  'Food-grade, FDA & EU compliant materials',
  'OEM / ODM custom design support',
  'Flexible MOQ for growing brands',
  'Export experience with reliable logistics',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A flexible packaging partner you can actually trust"
        description={`${company.legalName} — a verified manufacturer producing custom printed pouches and film since ${company.founded}.`}
        image="/images/facility/facility-collage.png"
      />

      {/* Company intro */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/facility/gate-warehouse.png"
                  alt="Lixing Packaging company entrance and warehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Who We Are
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
                {company.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{company.legalName}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Based in the Guolong Industrial Zone of Chaozhou, Guangdong, we are
                a professional flexible packaging manufacturer specializing in
                custom printed pouches, bags and roll-stock film. Since {company.founded},
                we have helped food, beverage, pet-food and daily-chemical brands
                package their products beautifully and safely.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We understand the biggest worry importers have: &quot;Is this a real
                factory, and can they deliver consistent quality?&quot; That is exactly
                why we invite every serious buyer to inspect our facility, request
                samples and audit our process.
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">Request a Factory Audit or Sample</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-heading text-4xl font-extrabold text-primary">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
              Our journey
            </h2>
          </Reveal>
          <div className="mt-12 space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                      {t.year}
                    </span>
                    {i < timeline.length - 1 && (
                      <span className="mt-2 h-full w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why Buyers Trust Lixing
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
                We remove the risk of ordering from overseas
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {trustPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Award, label: 'Certified Quality', v: 'ISO-grade QC' },
                  { icon: Globe2, label: 'Global Export', v: '30+ countries' },
                  { icon: Users, label: 'Happy Clients', v: '300+ brands' },
                  { icon: CheckCircle2, label: 'On-time Delivery', v: '98% rate' },
                ].map((c) => (
                  <div key={c.label} className="rounded-2xl border border-border bg-card p-6">
                    <c.icon className="size-7 text-primary" />
                    <div className="mt-4 font-heading text-xl font-bold text-foreground">
                      {c.v}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
              Industries we serve
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 0.05}>
                <span className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
                  {ind}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
