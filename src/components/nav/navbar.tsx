import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import DarkMode from "./dark-mode";
import { sections } from "@/constants/constants";
function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex max-sm:flex-col justify-between items-center p-2 bg-zinc-100/50 dark:bg-zinc-800/50  backdrop-blur-sm shadow-lg">
      <div className="flex gap-2 items-center">
        <div className="relative w-16 h-16">
          <Image src="/favicon.svg" alt="favicon" fill sizes="64px" />
        </div>
        <h1 className="text-3xl">my portfolio</h1>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4">
        <nav className="flex items-center gap-4">
          {sections.map((section) => (
            <Button
              variant="link"
              className="cursor-pointer "
              title={section.name}
              name={section.name}
              asChild
              key={section.name}
            >
              <Link
                href={section.href}
                aria-label={section.ariaLabel}
                role="navigation"
                aria-roledescription={`navigation to ${section.name}`}
              >
                {section.name}
              </Link>
            </Button>
          ))}
        </nav>
        <DarkMode />
      </div>
    </header>
  );
}

export default Navbar;
