'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { resolveProductImage } from '@/lib/media'

export function ProductGallery({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const gallery = images.length ? images : ['/placeholder.svg?height=600&width=600&query=packaging product']
  const [active, setActive] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')
  const containerRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMove}
        className="relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-white"
      >
        <Image
          src={resolveProductImage(gallery[active] || '/placeholder.svg')}
          alt={`${name} view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 transition-transform duration-200 ease-out"
          style={{
            transform: zoom ? 'scale(1.9)' : 'scale(1)',
            transformOrigin: origin,
          }}
        />
      </div>

      {gallery.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {gallery.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 bg-white transition-colors ${
                active === i ? 'border-primary' : 'border-border hover:border-primary/50'
              }`}
            >
              <Image
                src={resolveProductImage(img || '/placeholder.svg')}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                sizes="120px"
                className="object-contain p-1.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
