import Image from 'next/image'

export default function Card({ title, link, image = '/images/logo-white.png', altText = 'Alt Text', shortText }) {
  return (
    <div className='max-w-xs justify-self-center m-4 hover:border-2 hover:border-synthpurple-100'>
      <a href={link} className='flex flex-col items-center rounded-2xl shadow-lg bg-synthblue-300 text-synthpurple-1000 hover:bg-synthblue-500 pt-3 px-2 no-underline'>
        <Image
          src={image}
          alt={altText}
          width={200}
          height={100}
          className='rounded-lg'
        />
        <h3 className='text-2xl pt-1 font-header'>{title} &rarr;</h3>
        <p className='p-2 font-typeface text-center'>{shortText}</p>
      </a>
    </div>
  )
}