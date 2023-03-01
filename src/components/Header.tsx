'use client';
import { usePathname } from 'next/navigation';
// import Image from 'next/image';
import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="p-4 text-gray-800 bg-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <Logo
            width={50}
            height={50}
            primaryColor="fill-blue-400"
            secondaryColor="fill-blue-50"
          />
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ${
                pathname == '/about'
                  ? 'dark:text-blue-400 dark:border-blue-400'
                  : ''
              }`}
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                pathname == '/experience'
                  ? 'dark:text-blue-400 dark:border-blue-400'
                  : ''
              }`}
            >
              Experience
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                pathname == '/certificate'
                  ? 'dark:text-blue-400 dark:border-blue-400'
                  : ''
              }`}
            >
              Certificate
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                pathname == '/projects'
                  ? 'dark:text-blue-400 dark:border-blue-400'
                  : ''
              }`}
            >
              Projects
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="links"
              className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${
                pathname == '/contact'
                  ? 'dark:text-blue-400 dark:border-blue-400'
                  : ''
              }`}
            >
              Links
            </a>
          </li>
        </ul>
        <button title="side nav bar" className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
