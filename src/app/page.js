import Image from 'next/image'
import HeroBanner from '@/components/HeroBanner'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main>
        <HeroBanner />
        <AboutSection />
    </main>
  )
}
