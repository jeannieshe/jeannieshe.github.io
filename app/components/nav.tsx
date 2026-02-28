"use client"
import Link from 'next/link'
import { useState } from 'react'

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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <aside className="sticky top-0 z-10 mb-8 tracking-tight bg-white dark:bg-black py-2">
      <div className="relative">
        <nav className="flex flex-row items-center w-full" id="nav">
          <Link href={homePath} className={`${linkClass} mx-0`}>
            {homeItem.name}
          </Link>

          {/* Desktop links */}
          <div className="ml-auto hidden md:flex flex-row items-center">
            {otherItems.map(([path, { name }]) => (
              <Link key={path} href={path} className={linkClass}>
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="ml-auto md:hidden p-2 text-neutral-800 dark:text-neutral-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute right-0 top-full flex flex-col items-end bg-black/70 backdrop-blur-sm px-4 py-2">
            {otherItems.map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="py-2 px-1 text-xl text-white transition-all hover:text-neutral-300"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
