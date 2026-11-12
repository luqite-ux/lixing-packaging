import { HeroCarousel } from '@/components/home/hero-carousel'
import { StatsBar } from '@/components/home/stats-bar'
import { ProductShowcase } from '@/components/home/product-showcase'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsBar />
      <ProductShowcase />
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
