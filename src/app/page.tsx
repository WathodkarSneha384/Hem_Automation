import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import TrustBar from '@/components/TrustBar'
import ProblemsSection from '@/components/ProblemsSection'
import ProductsSection from '@/components/ProductsSection'
import WhyHEM from '@/components/WhyHEM'
import IndustriesSection from '@/components/IndustriesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TechDashboard from '@/components/TechDashboard'
import VideosSection from '@/components/VideosSection'
import Testimonials from '@/components/Testimonials'
import CTABand from '@/components/CTABand'
import TeamSection from '@/components/TeamSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <TrustBar />
      <ProblemsSection />
      <ProductsSection />
      <WhyHEM />
      <IndustriesSection />
      <CaseStudiesSection />
      <TechDashboard />
      <VideosSection />
      <Testimonials />
      <CTABand />
      <TeamSection />
    </>
  )
}
