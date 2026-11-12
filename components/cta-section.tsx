import { Reveal } from '@/components/reveal'
import { InquiryForm } from '@/components/inquiry-form'
import { company } from '@/lib/site'
import { Phone, Mail, Clock } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-red/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="text-white">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
              Custom Packaging?
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
              Talk to our engineers today
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              Have a custom packaging requirement? Send us your specs or artwork
              and get a tailored OEM/ODM quote — no minimum headaches, fast
              turnaround.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-brand-yellow">
                  <Phone className="size-5" />
                </span>
                <a href={company.phoneHref} className="font-medium hover:text-brand-yellow">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-brand-yellow">
                  <Mail className="size-5" />
                </span>
                <a href={company.emailHref} className="font-medium hover:text-brand-yellow">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-brand-yellow">
                  <Clock className="size-5" />
                </span>
                <span className="text-white/80">Reply within 24 hours</span>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-card p-6 shadow-2xl sm:p-8">
            <h3 className="font-heading text-lg font-bold text-foreground">
              Request a Quote
            </h3>
            <p className="mb-5 mt-1 text-sm text-muted-foreground">
              Fill in the form and attach your drawing if you have one.
            </p>
            <InquiryForm subject="Homepage RFQ" showFileField />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
