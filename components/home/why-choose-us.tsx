import Image from 'next/image'
import { Truck, Settings2, ShieldCheck, Globe2, Layers, Recycle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { industries } from '@/lib/site'

const reasons = [
  {
    icon: Truck,
    title: 'Fast Lead Times',
    text: 'Standard orders delivered in 15 days with 300 tons of monthly capacity.',
  },
  {
    icon: Settings2,
    title: 'OEM / ODM Service',
    text: 'Full customization — structure, size, material, printing and finishing.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigorous QC',
    text: 'Batch-to-batch deviation under 3% with full-process sample traceability.',
  },
  {
    icon: Globe2,
    title: 'Export Qualified',
    text: 'Self-owned import/export license serving Southeast Asia, Europe & America.',
  },
  {
    icon: Layers,
    title: 'In-House Everything',
    text: 'Design, gravure printing, lamination, bag-making and slitting under one roof.',
  },
  {
    icon: Recycle,
    title: 'Functional & Recyclable',
    text: 'High-barrier, retort and recyclable mono-material options available.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why Choose Lixing
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
                A packaging partner you can rely on
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Over a decade of deep focus on plastic flexible packaging. We
                integrate design, printing, lamination, bag-making, slitting and
                trade to deliver functional custom packaging for a wide range of
                industries.
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/hero-factory.png"
                  alt="Lixing Packaging production floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <r.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
