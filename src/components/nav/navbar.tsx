import Image from "next/image";
import type { sectionsType } from "@/@types/types.ts";
import Link from "next/link";
import { Button } from "../ui/button";
import DarkMode from "./dark-mode";

const sections: sectionsType[] = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex max-sm:flex-col justify-between items-center p-2 bg-zinc-100/50 dark:bg-zinc-800/50  backdrop-blur-sm shadow-lg">
      <div className="flex gap-2 items-center">
        <Image src="/favicon.svg" width={70} height={70} alt="favicon"></Image>
        <h1 className="text-3xl">my portfolio</h1>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4">
        <nav className="flex items-center gap-4">
          {sections.map((section: sectionsType) => (
            <Link key={section.name} href={section.href}>
              <Button variant="link" className="cursor-pointer ">
                {section.name}
              </Button>
            </Link>
          ))}
        </nav>
        <DarkMode />
      </div>
    </header>
  );
}

export default Navbar;
