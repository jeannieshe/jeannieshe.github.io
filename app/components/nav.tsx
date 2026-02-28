import Link from 'next/link'

const navItems = {
  '/': {
    name: 'jeannie she',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
  '/coursework': {
    name: 'experience',
  },
  '/blog': {
    name: 'blog',
  },
}

const linkClass = "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative py-1 m-2 text-xl"

export function Navbar() {
  const [[homePath, homeItem], ...otherItems] = Object.entries(navItems)

  return (
    <aside className="sticky top-0 z-10 mb-8 tracking-tight bg-white dark:bg-black py-2">
      <div>
        <nav
          className="flex flex-row items-center w-full relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link href={homePath} className={`${linkClass} m-0 -ml-[0px]`}>
            {homeItem.name}
          </Link>
          <div className="ml-auto flex flex-row items-center">
            {otherItems.map(([path, { name }]) => (
              <Link key={path} href={path} className={linkClass}>
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
