import sanityClient from '../client'
import MainLayout from '../components/layouts/MainLayout'

export default function Home({ posts }) {
  return <MainLayout posts={posts} />
}

export const getServerSideProps = async () => {
  const apiResult = await sanityClient.fetch(`*[_type == "post"]{
    title,
    slug,
    'categories': categories[]->title,
    previewText,
    publishedAt,
  }`)

  if (!apiResult || !apiResult.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts: apiResult,
      },
    }
  }
}
