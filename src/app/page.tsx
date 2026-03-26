import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TickerBar from '@/components/TickerBar'
import About from '@/components/About'
import Events from '@/components/Events'
import Gallery from '@/components/Gallery'
import Why from '@/components/Why'
import Voice from '@/components/Voice'
import EventGallery from '@/components/EventGallery'
import Operators from '@/components/Operators'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TickerBar />
        <About />
        <Events />
        <Gallery />
        <Why />
        <Voice />
        <EventGallery />
        <Operators />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
