"use client"

import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-6">
      <Link href="/" className="text-xl font-bold tracking-tighter" data-cursor-text>
        DEVRAT DAVE
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/projects" className="relative group" data-cursor-text>
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/resume" className="relative group" data-cursor-text>
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group" data-cursor-text>
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}