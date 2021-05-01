import Head from 'next/head'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'

export default function Header({ title = 'GlennMeyer.DEV' }) {
  return (
    <header className="flex flex-wrap flex-row justify-between items-center md:space-x-4 py-6 px-6 relative">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Logo />

      <Navbar />
    </header>
  )
}