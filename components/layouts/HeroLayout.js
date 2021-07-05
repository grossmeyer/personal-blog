import CardSection from '../CardSection'
import Header from '../Header'
import Footer from '../Footer'
import Hero from '../Hero'

export default function HeroLayout({ posts }) {
  return (
    <div className='container'>
      <Header title='GlennMeyer.DEV Homepage' />
      <main className='flex flex-col h-screen'>
        <Hero />
        <CardSection posts={posts} />
        <Footer />
      </main>
    </div>
  )
}