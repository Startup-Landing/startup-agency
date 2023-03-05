import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    title: 'Home',
    path: '#home'
  },
  {
    title: 'Work',
    path: '#work'
  },
  {
    title: 'Why us',
    path: '#why-us'
  },
  {
    title: 'Team',
    path: '#team'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
]

export default function Header () {
  return (
    <header className='w-full shadow-sm py-2'>
      <nav className='w-full md:w-10/12 mx-auto flex justify-between items-center px-4'>
        <div className='flex items-center justify-center gap-2'>
          <Image src='/logo.jpg' className='w-10 h-10' width={64} height={64} alt='Starting Media Logo' />
          <h3 className='font-medium'>Starting Media</h3>
        </div>

        <ul className='hidden md:flex items-center justify-center gap-4'>
          {links.map((link, index) => (
            <li key={`nav-link-desktop-${index}`}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>

        <Link href='/get-started' className='hidden md:inline-flex font-semibold text-purple-500'>
          Get Started
        </Link>

        <div className='md:hidden'>
          Menu
        </div>
      </nav>
    </header>
  )
}
