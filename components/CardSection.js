import Card from './Card'

export default function CardSection({ posts }) {
  return (
    <main className='container mx-auto flex flex-wrap justify-center py-6'>
      <section className='w-full md:w-2/3 flex flex-col'>
        {posts &&
          posts.map(({ title, slug, previewText, publishedAt, categories }, index) => {
            return (
              <Card
                key={index}
                title={title}
                link={`/posts/${slug.current.toLowerCase()}`}
                previewText={previewText}
                publishedAt={publishedAt}
                categories={categories}
              ></Card>
            )
          })}
        {posts.length === 0 && (
          <main>
            <h4 className='text-xl text-center text-synthgrape-50 font-callout mb-8 italic'>There are no posts here</h4>
          </main>
        )}
      </section>
    </main>
  )
}
