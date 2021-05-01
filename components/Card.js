import Image from 'next/image'

export default function Card({ title, link, image = '/images/logo-white.png', altText = 'Alt Text', shortText }) {
  return (
    <div className='max-w-xs justify-self-center m-4'>
      <a href={link} className='flex flex-col items-center rounded-lg shadow-sm hover:bg-lightAccent hover:text-darkAccent bg-darkAccent text-lightAccent-lighter'>
        <Image
          src={image}
          alt={altText}
          width={200}
          height={100}
          className='rounded-lg'
        />
        <h3 className='text-2xl pt-1 font-heading'>{title} &rarr;</h3>
        <p className='p-2 font-typeface'>{shortText}</p>
      </a>
    </div>
  )
}