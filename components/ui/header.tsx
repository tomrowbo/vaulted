import Link from 'next/link'
import LoginButton from '../login-button'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4 flex items-center">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero" fill="none">
                  <g className="fill-blue-50" transform="translate(3 3)">
                    <circle cx="5" cy="5" r="5" />
                    <circle cx="19" cy="5" r="5" />
                    <circle cx="5" cy="19" r="5" />
                    <circle cx="19" cy="19" r="5" />
                  </g>
                  <g className="fill-sky-300">
                    <circle cx="15" cy="5" r="5" />
                    <circle cx="25" cy="15" r="5" />
                    <circle cx="15" cy="25" r="5" />
                    <circle cx="5" cy="15" r="5" />
                  </g>
                </g>
              </svg>
            </Link>
            <span className="ml-3 text-slate-100 text-xl font-extrabold tracking-tight">OpenPerks</span>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                {/* <LoginButton /> */}
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
