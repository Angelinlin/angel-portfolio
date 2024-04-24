
import Link from "next/link"

export function Footer() {
  return (
    <footer key="1" className="w-full py-12 border-t-2 border-neutral-500">
      <div className="container flex items-center justify-center gap-4 px-4 md:px-6">
        <Link
          className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center transition-colors hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
          href="https://www.linkedin.com/in/angel-esteban-cervantes-464087280/"
          target="_blank"
        >
          <LinkedinIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-600" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center transition-colors hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
          href="https://twitter.com/sir420solsol"
          target="_blank"
        >
          <TwitterIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-600" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center transition-colors hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
          href="https://github.com/Angelinlin"
          target="_blank"
        >
          <GithubIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-600" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center transition-colors hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
          href="#"
          target="_blank"
        >
          <MailIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-600" />
          <span className="sr-only">Gmail</span>
        </Link>
      </div>
    </footer>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
