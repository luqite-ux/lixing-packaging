import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Counter } from '@/components/counter'
import { CtaSection } from '@/components/cta-section'
import {
  Layers,
  Printer,
  Scissors,
  ShieldCheck,
  FlaskConical,
  PackageCheck,
  Gauge,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manufacturing & Quality Control',
  description:
    'Inside the Lixing Packaging factory: gravure printing, dry lamination, automatic bag making, class 100,000 clean room and full in-house quality control for flexible packaging.',
  alternates: { canonical: '/manufacturing' },
}

const capabilities = [
  {
    icon: Printer,
    title: 'Gravure & Flexo Printing',
    desc: 'Up to 9-color rotogravure printing with high-resolution cylinders for photographic-grade artwork and precise color matching to your brand.',
    image: '/images/equip-printing.png',
  },
  {
    icon: Layers,
    title: 'Dry & Solventless Lamination',
    desc: 'Multi-layer lamination of PET, PE, AL, NY and PP films to build tailored barrier structures for moisture, oxygen and aroma protection.',
    image: '/images/equip-lamination.png',
  },
  {
    icon: Scissors,
    title: 'Automatic Bag Making',
    desc: 'High-speed converting lines for stand-up, flat-bottom, three-side-seal, spout and shaped pouches with zippers, valves and tear notches.',
    image: '/images/equip-bagmaking.png',
  },
]

const process = [
  { step: '01', title: 'Artwork & Pre-press', desc: 'Design review, color separation and digital proofing before cylinder engraving.' },
  { step: '02', title: 'Printing', desc: 'Rotogravure printing with automatic color and register control.' },
  { step: '03', title: 'Lamination', desc: 'Bonding barrier layers to the printed film for strength and protection.' },
  { step: '04', title: 'Curing & Slitting', desc: 'Aging room curing then precision slitting to required widths.' },
  { step: '05', title: 'Bag Making', desc: 'Converting film into finished pouches with functional features.' },
  { step: '06', title: 'QC & Packing', desc: 'Full inspection, carton packing and export-ready palletizing.' },
]

const qc = [
  { icon: FlaskConical, title: 'Material Testing', desc: 'Tensile, peel-strength, thickness and barrier (OTR/WVTR) testing on every batch.' },
  { icon: ShieldCheck, title: 'Food-Grade Compliance', desc: 'Food-contact safe materials meeting FDA and EU 10/2011 standards.' },
  { icon: Gauge, title: 'In-line Inspection', desc: 'Automatic register and defect monitoring during printing and lamination.' },
  { icon: PackageCheck, title: 'Final AQL Inspection', desc: 'Sampling to AQL 2.5 before every shipment leaves the factory.' },
]

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="A real factory built for consistent, export-grade quality"
        description="From pre-press to packing, every step happens under one roof. Full vertical integration means tighter quality control, faster lead times and complete traceability."
        image="/images/facility/printing-line.png"
      />

      {/* Intro + capacity */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/facility/facility-collage.png"
                  alt="Lixing Packaging office, printing and workshop facilities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Vertically Integrated
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
                Everything in-house — nothing left to chance
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Many trading companies outsource production and lose control of
                quality. At Lixing, printing, lamination, slitting and bag making
                all happen in our own 2,500 m² facility. That means we control the
                schedule, the quality and the consistency of every order.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { v: 300, s: ' t', l: 'Monthly capacity' },
                  { v: 9, s: '-color', l: 'Gravure printing' },
                  { v: 100000, s: '', l: 'Clean room class' },
                  { v: 15, s: ' days', l: 'Typical lead time' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-border bg-card p-5">
                    <div className="font-heading text-3xl font-extrabold text-primary">
                      <Counter value={s.v} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
              Core manufacturing capabilities
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Advanced equipment operated by an experienced team.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.image || '/placeholder.svg'}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              How we work
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
              From artwork to export in 6 controlled steps
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-4xl font-extrabold text-primary/15">
                    {p.step}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality control */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/lab-testing.png"
                  alt="Quality control laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
                Quality Control
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-white text-balance sm:text-4xl">
                Tested at every stage, so you can buy with confidence
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Our in-house lab checks incoming raw materials and finished goods
                against strict specifications. Every shipment is inspected before
                it ships.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {qc.map((q) => (
                  <div key={q.title} className="flex gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-yellow">
                      <q.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{q.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {q.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clean room + sustainability */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/cleanroom.png"
                alt="Class 100,000 clean room"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <ShieldCheck className="size-7 text-brand-yellow" />
                <h3 className="mt-2 font-heading text-xl font-bold">
                  Class 100,000 Clean Room
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Hygienic environment for food and medical-grade packaging.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/facility/gate-warehouse.png"
                alt="Lixing Packaging warehouse with export-ready cartons"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <PackageCheck className="size-7 text-brand-yellow" />
                <h3 className="mt-2 font-heading text-xl font-bold">
                  Export-Ready Warehouse
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Finished goods carton-packed and palletized for reliable worldwide shipping.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
