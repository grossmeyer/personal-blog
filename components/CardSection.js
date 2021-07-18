import Card from './Card'

export default function CardSection({ posts }) {
  return (
    <section className='pb-2 md:pb-4 mb-auto'>
      <div className='flex flex-col'>
        {posts.map(({ title, slug, previewText }, index) => {
          return (
            <Card
              key={index}
              title={title}
              link={`posts/${slug.current}`}
              previewText={title}
            >
            </Card>
          )
        })}

        <Card
          title='Documentation'
          link='https://nextjs.org/docs'
          image='/images/reference-docs.jpg'
          altText='Picture of dusty old library books'
          previewText='Find in-depth information about Next.js features and API.'
        />

        <Card
          title='Learn'
          link='https://nextjs.org/learn'
          image='/images/learning-sign.jpg'
          altText='Picture of sign reading "Love To Learn"'
          previewText='Learn about Next.js in an interactive course with quizzes!'
        />

        <Card
          title='Examples'
          link='https://github.com/vercel/next.js/tree/master/examples'
          image='/images/projects-sign.jpg'
          altText='Picture of sign reading "Projects"'
          previewText='Discover and deploy boilerplate example Next.js projects.'
        />

        <Card
          title='Deploy'
          link='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          image='/images/deploy-building.jpg'
          altText='Picture of futuristic grid-like building'
          previewText='Instantly deploy your Next.js site to a public URL with Vercel.'
        />
      </div>
    </section>
  )
}
