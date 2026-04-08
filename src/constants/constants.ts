import type {
  keywordsType,
  sectionsType,
  skillsCardProps,
} from "@/@types/types";

export const keywords: keywordsType[] = [
  {
    text: "clean code",
    className: "text-cyan-900 dark:text-cyan-200 bg-cyan-500/20",
  },
  {
    text: "performance",
    className: "text-purple-900 dark:text-purple-200 bg-purple-500/20",
  },
  {
    text: "user experience",
    className: "text-blue-900 dark:text-blue-200 bg-blue-500/20",
  },
  {
    text: "problem solving",
    className: "text-yellow-900 dark:text-yellow-200 bg-yellow-500/25",
  },
];

export const sections: sectionsType[] = [
  { name: "Home", href: "#home", ariaLabel: "this is the home section" },
  { name: "Skills", href: "#skills", ariaLabel: "this is the skills section" },
  {
    name: "Projects",
    href: "#projects",
    ariaLabel: "this is the projects section",
  },
  {
    name: "Contact",
    href: "#contact",
    ariaLabel: "this is the contact section",
  },
];

export const skillsData: skillsCardProps[] = [
  {
    title: "HTML",
    image: "/skills/html.svg",
  },
  {
    title: "CSS",
    image: "/skills/css.svg",
  },
  {
    title: "JavaScript",
    image: "/skills/javascript.svg",
  },
  {
    title: "TypeScript",
    image: "/skills/typescript.svg",
  },
  {
    title: "React",
    image: "/skills/reactjs.svg",
  },
  {
    title: "Next.js",
    image: "/skills/nextjs.svg",
  },
  {
    title: "Node.js",
    image: "/skills/nodeJs.svg",
  },
  {
    title: "Express.js",
    image: "/skills/expressJs.png",
  },
  {
    title: "MongoDB",
    image: "/skills/mongodb.svg",
  },
  {
    title: "Redux",
    image: "/skills/redux.svg",
  },
  {
    title: "React Query",
    image: "/skills/react-query.svg",
  },
  {
    title: "React Router",
    image: "/skills/reactrouter.svg",
  },
  {
    title: "Tailwind CSS",
    image: "/skills/tailwindcss.svg",
  },
  {
    title: "Shadcn UI",
    image: "/skills/shadcn.svg",
  },
  {
    title: "Vite",
    image: "/skills/vite.svg",
  },
  {
    title: "Git",
    image: "/skills/git.svg",
  },
  {
    title: "GitHub",
    image: "/skills/github.png",
  },
  {
    title: "VS Code",
    image: "/skills/vscode.svg",
  },
];
