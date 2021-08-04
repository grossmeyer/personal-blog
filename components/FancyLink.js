import Link from 'next/link'

export default function FancyLink({ href, children }) {
  return (
    <Link href={href}>
      <a className='no-underline text-synthgrape-800 font-callout italic bg-synthpink-200 rounded px-1 rounded-lg hover:underline'>
        {children}
      </a>
    </Link>
  )
}
