import Link from 'next/link'
import moment from 'moment'

export default function Card({ title, link, categories, previewText = 'Default Preview Text', publishedAt }) {
  return (
    <article className='flex flex-col'>
      <section className='flex flex-row space-x-4 text-sm uppercase my-2'>
        {categories &&
          categories.map((category, index) => {
            return (
              <Link href={`/categories/${category}`} key={index}>
                <a className='font-callout text-synthgrape-800 bg-synthpink-100 hover:bg-synthpink-200 px-2 py-1 rounded-lg'>
                  {category}
                </a>
              </Link>
            )
          })}
      </section>
      <Link href={link}>
        <a className='pb-8'>
          <section className='flex flex-col p-4 bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg'>
            <h2 className='text-3xl font-header pb-4 text-synthgrape-50'>{title}</h2>
            {publishedAt && (
              <p className='text-sm text-synthgrape-50 pb-3 italic'>
                Published {moment(publishedAt).format('MMMM Do, YYYY')}
              </p>
            )}
            <p className='mb-6 font-typeface text-synthgrape-50'>{previewText}</p>
          </section>
        </a>
      </Link>
    </article>
  )
}
