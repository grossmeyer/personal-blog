const Post = props => {
  return (
    <article>
      <p className='font-typeface text-4xl m-4'>This is props.slug:</p>

      <h3 className='font-header text-xl mx-4'>{props.slug}</h3>
    </article>
  )
}

export const getServerSideProps = async context => {
  const { slug } = context.params
  const res = await fetch('./Solving Eloquent Javascript Exercises - Chapter 2.md')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slug
    }
  }
}

export default Post