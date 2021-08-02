import Navbar from '../Navbar'
import Header from '../Header'
import CardSection from '../CardSection'
import Footer from '../Footer'

export default function MainLayout({ posts }) {
  return (
    <>
      <Navbar title='glennmeyer.dev' />
      <Header
        titleText={"Hi, I'm Glenn Meyer."}
        subtitleText={"I'm a technology professional who loves to learn and write about programming."}
      />
      <CardSection posts={posts} />
      <Footer />
    </>
  )
}
