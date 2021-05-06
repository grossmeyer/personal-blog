import Image from 'next/image'

export default function Card({ title, link, image = '/images/logo-white.png', altText = 'Alt Text', shortText }) {
  return (
    <div className='max-w-xs justify-self-center m-4 hover:border-2 hover:border-gray-800'>
      <a href={link} className='flex flex-col items-center rounded-lg shadow-lg bg-blue-300 text-gray-800 hover:bg-blue-200 pt-3 px-2'>
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