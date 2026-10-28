import type { projectCardProps } from "@/@types/types";
import Image from "next/image";

function ProjectCard({
  title,
  snapshot,
  description,
  demo,
  repository,
}: Readonly<projectCardProps>) {
  return (
    <article className="flex w-full max-w-sm flex-col justify-between gap-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <div className="relative aspect-video w-full">
        <Image
          src={snapshot}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="text-center text-xl font-semibold">{title}</h3>

      <p className="text-center text-lg font-semibold">{description}</p>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
        {demo && (
          <a href={demo} className="text-md font-semibold">
            demo
          </a>
        )}
        {repository && (
          <a href={repository} className="text-md font-semibold">
            repository
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;