import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <>
      <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8 dark:bg-black dark:text-white">
        <a className="text-lg font-bold " href="#">
          Dinesh Kumar M
        </a>
        <nav className="hidden space-x-4 md:flex">
          <a className="text-md font-medium hover:underline" href="#">
            Home
          </a>
          <a className="text-md font-medium hover:underline" href="#">
            About
          </a>
          <a className="text-md font-medium hover:underline" href="#">
            Projects
          </a>
          <a className="text-md font-medium hover:underline" href="#">
            Contact
          </a>
          <div className="px-1">
            <ModeToggle />
          </div>
        </nav>
        <div className="flex items-center space-x-2 md:hidden sm:scale-75">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="default">
                <MoonIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Button className="w-full justify-start" variant="ghost">
                  <SunIcon className="h-4 w-4 mr-2" />
                  Light
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full justify-start" variant="ghost">
                  <MoonIcon className="h-4 w-4 mr-2" />
                  Dark
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full justify-start" variant="ghost">
                  <MonitorIcon className="h-4 w-4 mr-2" />
                  System
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="default">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a className="flex items-center space-x-2" href="#">
                  <HomeIcon className="h-4 w-4" />
                  <span>Home</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="flex items-center space-x-2" href="#">
                  <UserIcon className="h-4 w-4" />
                  <span>About</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="flex items-center space-x-2" href="#">
                  <FolderIcon className="h-4 w-4" />
                  <span>Projects</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="flex items-center space-x-2" href="#">
                  <MailIcon className="h-4 w-4" />
                  <span>Contact</span>
                </a>
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

interface UserIconProps extends React.SVGProps<SVGSVGElement>{}

function FolderIcon(props:UserIconProps):JSX.Element
 {
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

function HomeIcon(props:UserIconProps):JSX.Element {
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

function MailIcon(props:UserIconProps):JSX.Element {
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

function MenuIcon(props:UserIconProps):JSX.Element {
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

// function MonitorIcon(props:UserIconProps):JSX.Element {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="14" x="2" y="3" rx="2" />
//       <line x1="8" x2="16" y1="21" y2="21" />
//       <line x1="12" x2="12" y1="17" y2="21" />
//     </svg>
//   );
// }

// function MoonIcon(props:UserIconProps):JSX.Element {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//     </svg>
//   );
// }

// function SunIcon(props:UserIconProps):JSX.Element {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="4" />
//       <path d="M12 2v2" />
//       <path d="M12 20v2" />
//       <path d="m4.93 4.93 1.41 1.41" />
//       <path d="m17.66 17.66 1.41 1.41" />
//       <path d="M2 12h2" />
//       <path d="M20 12h2" />
//       <path d="m6.34 17.66-1.41 1.41" />
//       <path d="m19.07 4.93-1.41 1.41" />
//     </svg>
//   );
// }

function UserIcon(props:UserIconProps):JSX.Element {
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