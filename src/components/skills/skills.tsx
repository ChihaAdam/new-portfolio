import Card from "./card";
import type { skillsCardProps } from "@/@types/types.ts";

const skillsData: skillsCardProps[] = [
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

function Skills() {
  return (
    <div className="flex flex-col gap-5" id="skills">
      <h2 className="text-4xl font-bold text-gradiant">skills</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {skillsData.map((skill) => (
          <Card key={skill.title} title={skill.title} image={skill.image} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
