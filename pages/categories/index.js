import Link from 'next/link'

import sanityClient from '../../client'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Categories = ({ categories }) => {
  return (
    <>
      <Navbar title='Categories' />
      <Header titleText='Categories' subtitleText='These are the categories written about on the site' />
      <main className='container mx-auto flex flex-row justify-center max-w-full md:max-w-1/2 px-4 m-8'>
        <section className='w-full flex flex-col md:w-2/3 md:grid md:grid-cols-2 md:grid-flow-row xl:grid-cols-3 md:gap-2 md:justify-items-center'>
          {categories &&
            categories.map(({ title, fullTitle, description }, index) => {
              return (
                <article className='m-2 md:m-4' key={index}>
                  <Link href={`/categories/${title.toLowerCase()}`}>
                    <a className='pb-8'>
                      <section className='flex flex-col p-4 bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg'>
                        <h2 className='text-3xl font-header pb-4 text-synthgrape-50'>{title}</h2>
                        <h3 className='text-xl font-header pb-4 text-synthgrape-50 italic'>{fullTitle}</h3>
                        <p className='mb-6 font-typeface text-synthgrape-50'>{description}</p>
                      </section>
                    </a>
                  </Link>
                </article>
              )
            })}
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async context => {
  const categories = await sanityClient.fetch(
    `*[_type == "category"] | order(title) {
      title,
      fullTitle,
      description,
    }`
  )

  if (!categories || !categories.length) {
    return {
      props: {
        categories: [],
      },
    }
  } else {
    return {
      props: {
        categories,
      },
    }
  }
}

export default Categories
