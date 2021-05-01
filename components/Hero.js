export default function Hero() {
  return (
    <section className="bg-lightBg py-6 md:py-12 mb-6 md:mb-12">
      <div className="container px-4 mx-auto">

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-header mb-2">Get the header you needed for your awesome website.</h1>
          <button className="bg-darkAccent text-lightAccent hover:bg-lightAccent hover:text-darkAccent py-2 px-6 rounded-full text-xl mt-6">Get Started</button>
        </div>

        <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
            <span className="w-20 border-t-2 border-solid border-lightAccent inline-block mb-3"></span>
            <h5 className="text-xl font-header uppercase mb-4">Fresh Design</h5>
            <p className="text-darkAccent font-typeface">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable</p>
          </div>

          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
            <span className="w-20 border-t-2 border-solid border-lightAccent inline-block mb-3"></span>
            <h5 className="text-xl font-header uppercase mb-4">Clean Code</h5>
            <p className="text-darkAccent font-typeface">FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
          </div>

          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
            <span className="w-20 border-t-2 border-solid border-lightAccent inline-block mb-3"></span>
            <h5 className="text-xl font-header uppercase mb-4">Perfect Tool</h5>
            <p className="text-darkAccent font-typeface">FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}