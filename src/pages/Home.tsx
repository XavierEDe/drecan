import Hero from '../components/Hero'
import About from '../components/About'
import Packages from '../components/Packages'
import Payment from '../components/Payment'
import HowItWorks from '../components/HowItWorks'
import Collection from '../components/Collection'
import Wholesale from '../components/Wholesale'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Packages />
      <Payment />
      <HowItWorks />
      <Collection />
      <Wholesale />
      <Contact />
    </main>
  )
}
