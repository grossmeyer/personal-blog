import HeroCol from './HeroCol'

export default function Hero() {
  return (
    <section className='py-6 md:py-12 mb-6 md:mb-12'>
      <div className='container px-4 mx-auto'>

        <div className='text-center max-w-2xl mx-auto'>
          <h1 className='text-3xl md:text-5xl font-callout mb-2 text-synthpink-100'>I want <span className='underline italic font-typeface text-synthblue-500'>you</span> to be a <br />Web Developer</h1>
          <button className='bg-synthgreen-600 text-synthgreen-50 hover:bg-synthgreen-200 hover:text-synthgreen-700 py-2 px-6 rounded-full text-xl mt-6 font-callout'>Let's do it!</button>
        </div>

        <div className='md:flex md:flex-wrap md:mx-4 mt-6 md:mt-12'>
          <HeroCol
            header='HTML'
            text='The building blocks of the internet, understanding HTML thoroughly is critically important'
          />

          <HeroCol
            header='CSS'
            text='Unless you want your design to look like 1995, knowing how to use CSS to craft your distinct style is key'
          />

          <HeroCol
            header='JavaScript'
            text='Dynamic content brings your creation to life and JavaScript is the "secret formula" to enable it'
          />
        </div>
      </div>
    </section>
  )
}
