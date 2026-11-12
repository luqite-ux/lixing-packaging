import type { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { InquiryForm } from '@/components/inquiry-form'
import { company } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description:
    'Contact CHAOZHOU CHAOAN LIXING PACKAGING CO., LTD. for custom flexible packaging bags and films. Request a free quote, samples and artwork support. We reply within 24 hours.',
  alternates: { canonical: '/contact' },
}

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp / WeChat',
    value: company.whatsapp,
    href: `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Factory Address',
    value: company.address,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Request a Quote"
        description="Tell us about your packaging project and our engineers will reply within 24 hours with material recommendations, samples and a competitive quote."
        image="/images/warehouse.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Talk to a packaging engineer
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Whether you have finished artwork or just an idea, we&apos;ll guide
              you through structure, material and printing to get your packaging
              production-ready.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {d.label}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {d.value}
                      </p>
                    </div>
                  </div>
                )
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block rounded-xl p-2 transition-colors hover:bg-muted"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-2">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-border bg-secondary/50 p-5">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Business hours
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Monday – Saturday, 8:30 – 18:00 (GMT+8). Online inquiries are
                  answered within 24 hours, every day.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Send us your requirements
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fields marked with <span className="text-brand-red">*</span> are
              required.
            </p>
            <div className="mt-6">
              <InquiryForm subject="Quote Request (Contact Page)" showFileField />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
