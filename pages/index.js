import sanityClient from '../client'
import HeroLayout from '../components/layouts/HeroLayout'

export default function Home({ posts }) {
  return (
    <HeroLayout posts={posts} />
  )
}

export const getServerSideProps = async () => {
  const apiResult = await sanityClient.fetch(`*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
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
        posts: apiResult
      }
    }
  }
}