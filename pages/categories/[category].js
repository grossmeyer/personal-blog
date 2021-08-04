import sanityClient from '../../client'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import CardSection from '../../components/CardSection'
import Footer from '../../components/Footer'

const Category = props => {
  const category = props.posts[0].category
  const fullTitle = props.posts[0].fullTitle
  const posts = props.posts[0].posts
  console.log(posts)
  return (
    <>
      <Navbar title={category} />
      <Header titleText={category.toUpperCase()} subtitleText={fullTitle} />
      <CardSection posts={posts} />
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ params: { category } }) => {
  category = category.toUpperCase()

  const posts = await sanityClient.fetch(
    `*[_type == "category" && title == $category]{
        "category": $category,
        fullTitle,
        "posts": *[_type == "post" && references(^._id)]{
          title, 
          slug,
          'categories': categories[]->title,
          previewText, 
          publishedAt, 
        }
      }`,
    { category }
  )

  if (!posts || !posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}

export const getStaticPaths = async () => {
  const categories = await sanityClient.fetch(
    `*[_type == 'category']{
      title,
    }`
  )

  return {
    paths: categories.map(category => {
      return {
        params: {
          category: category.title.toLowerCase(),
        },
      }
    }),
    fallback: false,
  }
}

export default Category
