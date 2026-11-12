import Image from 'next/image'
import Link from 'next/link'
import { company } from '@/lib/site'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`${company.name} home`}
    >
      <Image
        src="/logo.png"
        alt="Lixing Packaging logo"
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
        priority
      />
      <div className="flex flex-col leading-none">
        <span className="font-heading text-lg font-extrabold tracking-tight text-primary">
          LIXING
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Packaging
        </span>
      </div>
    </Link>
  )
}
