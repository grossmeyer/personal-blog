import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java'
import colddarkdark from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import sanityClient from '../../client'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const builder = imageUrlBuilder(sanityClient)
const urlFor = source => builder.image(source)

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('java', java)

const overrides = {
  h2: props => <h2 className='font-header text-synthblue-100 text-sm' {...props} />,
  h3: props => <h3 className='font-header text-synthpink-100 text-xs' {...props} />,
}

const serializers = {
  marks: {
    link: props => {
      return (
        <a
          href={props.mark.href}
          className='no-underline text-synthgrape-800 font-callout italic bg-synthpink-200 rounded px-1 rounded-lg hover:underline'
        >
          {props.children}
        </a>
      )
    },
  },
  types: {
    block: props =>
      overrides[props.node.style]
        ? overrides[props.node.style]({ children: props.children })
        : BlockContent.defaultSerializers.types.block(props),
    code: props => (
      <SyntaxHighlighter language='java' style={colddarkdark} codeTagProps={{ className: 'font-code' }}>
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
}

const Post = props => {
  const { title = 'Missing title', author, authorImage, body = [], categories } = props
  return (
    <>
      <Navbar title={title}></Navbar>
      <article className='container mx-auto max-w-4xl px-4 mx-8'>
        <Header titleText={title} subtitleText={`Written by ${author}`}>
          <Image src={urlFor(authorImage).url()} alt={`Author is ${author}`} width={40} height={40} />
        </Header>
        <section className='flex flex-row justify-center space-x-4 text-sm uppercase my-2'>
          {categories &&
            categories.map((category, index) => {
              return (
                <a
                  href={`/categories/${category}`}
                  key={index}
                  className='font-callout text-synthgrape-800 bg-synthpink-100 hover:bg-synthpink-200 px-2 py-1 rounded-lg'
                >
                  {category}
                </a>
              )
            })}
        </section>
        <main className='prose-lg md:prose-xl font-typeface text-synthgrape-50'>
          <BlockContent blocks={body} serializers={serializers} />
        </main>
      </article>
      <Footer />
    </>
  )
}

export const getStaticProps = async context => {
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
      notFound: true,
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
      publishedAt: post.publishedAt,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = await sanityClient.fetch(
    `*[_type == 'post']{
      slug,
    }`
  )

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug.current,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
