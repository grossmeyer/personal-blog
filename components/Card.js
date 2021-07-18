import Image from 'next/image'

export default function Card({ title, link, image = '/images/logo-white.png', altText = 'Alt Text', previewText }) {
  return (
    <a href={link} className='flex flex-row space-x-4 rounded-2xl bg-synthpink-100 hover:bg-synthpink-300 p-4 m-4 no-underline text-synthpurple-800 hover:text-synthpurple-1000'>
      <Image
        src={image}
        alt={altText}
        width={150}
        height={75}
        className='rounded-lg flex-grow-0 flex-shrink-0'
      />
      <div>
        <h3 className='text-3xl font-header flex-grow'>{title}</h3>
        <p className='pt-1 font-typeface flex-shrink'>{previewText}</p>
      </div>
    </a>
  )
}