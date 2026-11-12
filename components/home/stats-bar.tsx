'use client'

import { motion } from 'framer-motion'
import { Counter } from '@/components/counter'
import { stats } from '@/lib/site'

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-xl lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-6 text-center sm:p-8"
            >
              <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
