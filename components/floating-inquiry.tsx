'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquareText, X } from 'lucide-react'
import { InquiryForm } from '@/components/inquiry-form'

export function FloatingInquiry() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30"
        aria-label="Open quick inquiry form"
      >
        <MessageSquareText className="size-5" />
        <span className="hidden sm:inline">Quick Inquiry</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-brand-navy/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-card p-6 shadow-2xl sm:rounded-2xl"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Get a Fast Quote
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us what you need — our engineers reply within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>
              <InquiryForm subject="Quick Inquiry (Floating)" compact showFileField />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
