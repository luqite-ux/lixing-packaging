'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Paperclip } from 'lucide-react'
import { company } from '@/lib/site'

type Props = {
  subject?: string
  showFileField?: boolean
  className?: string
  compact?: boolean
}

export function InquiryForm({
  subject = 'Contact Form',
  showFileField = false,
  className = '',
  compact = false,
}: Props) {
  const [isPending, setIsPending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [fileName, setFileName] = useState<string>('')

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsPending(true)

    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone / WhatsApp: ${form.phone}` : '',
      form.company ? `Company: ${form.company}` : '',
      '',
      'Project details:',
      form.message,
      fileName ? `\nAttached reference: ${fileName}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const mailto = `${company.emailHref}?subject=${encodeURIComponent(
      `[Website Inquiry] ${subject}`,
    )}&body=${encodeURIComponent(lines)}`

    // Open the visitor's email client pre-filled with their inquiry.
    window.location.href = mailto

    window.setTimeout(() => {
      setIsPending(false)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
      setFileName('')
    }, 600)
  }

  const inputCls =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20'
  const labelCls = 'mb-1.5 block text-sm font-medium text-foreground'

  if (status === 'success') {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-accent p-8 text-center ${className}`}
      >
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
          Thank you for your inquiry.
        </h3>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Your email draft has opened — just hit send and our team will reply
          within 24 hours. Prefer another channel? Email us at{' '}
          <a href={company.emailHref} className="font-medium text-primary underline">
            {company.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className={compact ? 'space-y-3' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label className={labelCls} htmlFor="if-name">
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="if-name"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputCls}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-email">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="if-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputCls}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-phone">
            Phone / WhatsApp
          </label>
          <input
            id="if-phone"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputCls}
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-company">
            Company
          </label>
          <input
            id="if-company"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputCls}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className={labelCls} htmlFor="if-message">
          Project details <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="if-message"
          required
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputCls} resize-y`}
          placeholder="Tell us about your packaging: product, bag type, size, quantity, material..."
        />
      </div>

      {showFileField && (
        <div className="mt-4">
          <label className={labelCls} htmlFor="if-file">
            Attach drawing / artwork
          </label>
          <label
            htmlFor="if-file"
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-muted/40 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-accent"
          >
            <Paperclip className="size-4 shrink-0 text-primary" />
            <span className="truncate">
              {fileName || 'Upload artwork, dieline or reference (PDF, AI, PNG, JPG)'}
            </span>
          </label>
          <input
            id="if-file"
            type="file"
            accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.svg"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending && <Loader2 className="size-4 animate-spin" />}
        {isPending ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
