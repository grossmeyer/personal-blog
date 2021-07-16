export default function HeroCol({ header, text }) {
  return (
    <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
      <span className="w-20 border-t-2 border-solid border-synthblue-500 inline-block mb-3"></span>
      <h5 className="text-xl text-synthpink-500 font-callout uppercase mb-4">{header}</h5>
      <p className="text-synthpurple-100 font-typeface">{text}</p>
    </div>
  )
}