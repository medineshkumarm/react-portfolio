import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-scroll";
export function Navbar() {
  return (
    <>
      <header
        className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8 dark:bg-black dark:text-white"
        id="HOME"
      >
        <Link className=" cursor-pointer text-lg font-bold " to="home">
          Dinesh Kumar M
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            className="cursor-pointer text-md font-medium hover:underline"
            smooth={true}
            duration={800}
            to="hero"
          >
            Home
          </Link>
          {/* <Link to="/contact" /> */}
          <Link
            className="cursor-pointer text-md font-medium hover:underline"
            smooth={true}
            duration={800}
            to="projects"
          >
            Projects
          </Link>

          <Link
            className="cursor-pointer text-md font-medium hover:underline"
            smooth={true}
            duration={800}
            to="resume"
            
          >
            Resume
          </Link>
          <Link
            className="cursor-pointer text-md font-medium hover:underline"
            smooth={true}
            duration={800}
            to="contact"
          >
            Contact
          </Link>
          <div className="px-1">
            <ModeToggle />
          </div>
        </nav>
        <div className="flex items-center space-x-2 md:hidden sm:scale-75">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="default">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link
                  className="flex items-center space-x-2"
                  smooth={true}
                  duration={700}
                  to="home"
                >
                  <HomeIcon className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="flex items-center space-x-2"
                  smooth={true}
                  duration={700}
                  to="projects"
                >
                  <FolderIcon className="h-4 w-4" />
                  <span>Projects</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="flex items-center space-x-2"
                  smooth={true}
                  duration={700}
                  to="resume"

                >
                  <UserIcon className="h-4 w-4" />
                  <span>Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="flex items-center space-x-2"
                  smooth={true}
                  duration={700}
                  to="contact"
                >
                  <MailIcon className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      {/* nav-bottom icons */}
      {/* <div className="md:hidden">
        <nav className="fixed bottom-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-around bg-white shadow-t dark:bg-gray-900 dark:shadow-t-gray-800">
          <a
            className="flex flex-col items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <HomeIcon className="mb-1 h-5 w-5" />
            Home
          </a>
          <a
            className="flex flex-col items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <UserIcon className="mb-1 h-5 w-5" />
            About
          </a>
          <a
            className="flex flex-col items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <FolderIcon className="mb-1 h-5 w-5" />
            Projects
          </a>
          <a
            className="flex flex-col items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <MailIcon className="mb-1 h-5 w-5" />
            Contact
          </a>
        </nav>
      </div> */}
    </>
  );
}

interface UserIconProps extends React.SVGProps<SVGSVGElement> {}

function FolderIcon(props: UserIconProps): JSX.Element {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function HomeIcon(props: UserIconProps): JSX.Element {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props: UserIconProps): JSX.Element {
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
  );
}

function MenuIcon(props: UserIconProps): JSX.Element {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}



function UserIcon(props: UserIconProps): JSX.Element {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// import { ModeToggle } from "./mode-toggle";

// export function Navbar () {
//     return (
//         <div className="flex justify-between dark:bg-black">
//             <div>
//                 <img src="images.jpg" alt="" width={50} height={50} />
//             </div>
//             <div className="flex list-none gap-2 p-2 ">
//                 <li className="dark:bg-black dark:text-white px-2 py-1 rounded-xl border-solid border-white">Home</li>
//                 <li className="dark:bg-black dark:text-white px-2 py-1 rounded-xl border-solid border-white">Home</li>
//                 <li className="dark:bg-black dark:text-white px-2 py-1 rounded-xl border-solid border-white">Home</li>
//                 <li className="dark:bg-black dark:text-white px-2 py-1 rounded-xl border-solid border-white">Home</li>
//             </div>
//             <div>
//                 <ModeToggle/>
//             </div>
//         </div>
//     )
// }
