import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java'
import synthwave84 from 'react-syntax-highlighter/dist/cjs/styles/prism/synthwave84'
import sanityClient from '../../client'
import Header from '../../components/Header'

const builder = imageUrlBuilder(sanityClient)
const urlFor = source => builder.image(source)

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('java', java)

const serializers = {
  types: {
    code: props => (
      <SyntaxHighlighter language='java' style={synthwave84}>
        {props.node.code}
      </SyntaxHighlighter>
    )
  }
}

const Post = props => {
  const { title = 'Missing title', mainImage, author, authorImage, body = [], categories } = props
  return (
    <>
      <Header title={title}></Header>
      <article className='container mx-auto max-w-4xl px-4 m-8'>
        <div className='flex justify-center p-2 mb-4'>
          <Image
            src={urlFor(mainImage).url()}
            alt='Solving LeetCode Series'
            width={800}
            height={240}
          />
        </div>
        <h2 className='text-3xl md:text-5xl font-code mb-2 text-gray-700 text-center'>{title}</h2>
        <header className='flex flex-col justify-center items-center'>
          <section className='flex justify-center items-center'>
            <p className='p-2 text-xl font-code text-gray-600'>Written by {author}
            </p>
            <Image
              src={urlFor(authorImage).url()}
              alt={`Author is ${author}`}
              width={40}
              height={40}
            />
          </section>
          <section className='flex justify-center items-center'>
            {categories.map(category =>
              <a
                key={category}
                className='rounded-2xl shadow-lg bg-yellow-300 text-gray-800 hover:bg-yellow-200 p-2 m-2 mb-4 font-callout uppercase no-underline'
              >{category}
              </a>
            )}
          </section>
        </header>
        <main className='prose-sm xl:prose-xl font-typeface'>
          <BlockContent
            blocks={body} serializers={serializers}
          />
        </main>
      </article>
    </>

  )
}

export const getServerSideProps = async context => {
  const { slug = '' } = context.params

  const apiResult = await sanityClient.fetch(
    `*[_type == 'post' && slug.current == $slug]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      'author': author->name,
      'authorImage': author->image,
			'categories': categories[]->title,
			publishedAt,
    }`,
    { slug }
  )
  const post = apiResult[0]

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      title: post.title,
      slug: post.slug,
      mainImage: post.mainImage,
      body: post.body,
      author: post.author,
      authorImage: post.authorImage,
      categories: post.categories,
      publishedAt: post.publishedAt
    }
  }
}

export default Post