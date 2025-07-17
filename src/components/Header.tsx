import Navigation from "./Navigation";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="flex flex-row justify-between p-8 fixed top-0 left-0 w-full z-50 shadow-md bg-gray-500 dark:bg-gray-800">
            <ModeToggle />
            <Navigation />
    </header>
  )
}
