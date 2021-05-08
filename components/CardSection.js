import Card from './Card'

export default function CardSection() {
  return (
    <section className='pb-2 md:pb-4 mb-auto flex-grow'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-1'>
        <Card
          title='Documentation'
          link='https://nextjs.org/docs'
          image='/images/reference-docs.jpg'
          altText='Picture of dusty old library books'
          shortText='Find in-depth information about Next.js features and API.'
        >
        </Card>

        <Card
          title='Learn'
          link='https://nextjs.org/learn'
          image='/images/learning-sign.jpg'
          altText='Picture of sign reading "Love To Learn"'
          shortText='Learn about Next.js in an interactive course with quizzes!'
        >
        </Card>

        <Card
          title='Examples'
          link='https://github.com/vercel/next.js/tree/master/examples'
          image='/images/projects-sign.jpg'
          altText='Picture of sign reading "Projects"'
          shortText='Discover and deploy boilerplate example Next.js projects.'
        >
        </Card>

        <Card
          title='Deploy'
          link='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          image='/images/deploy-building.jpg'
          altText='Picture of futuristic grid-like building'
          shortText='Instantly deploy your Next.js site to a public URL with Vercel.'
        >
        </Card>
      </div>
    </section>
  )
}