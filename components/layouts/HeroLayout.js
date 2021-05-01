import CardSection from '../CardSection'
import Header from '../Header'
import Footer from '../Footer'
import Hero from '../Hero'

export default function HeroLayout() {
  return (
    <>
      <Header title='GlennMeyer.DEV Homepage' />
      <main>
        <Hero />
        <CardSection />
      </main>
      <Footer />
    </>
  )
}