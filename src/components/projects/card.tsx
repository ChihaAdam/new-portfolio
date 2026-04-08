import type { projectCardProps } from "@/@types/types";
import Image from "next/image";

function card({
  title,
  snapshot,
  description,
  demo,
  repository,
}: Readonly<projectCardProps>) {
  return (
    <div className="flex flex-col gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg w-fit justify-between shadow-md">
      <div className="relative w-96 h-auto aspect-video">
        <Image
          src={snapshot}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-center text-xl font-semibold">{title}</h3>
      <p className="text-center text-lg font-semibold max-w-sm">
        {description}
      </p>
      <div className="flex gap-10 justify-center">
        {demo && (
          <a href={demo} className="text-center text-md  font-semibold">
            demo
          </a>
        )}
        {repository && (
          <a href={repository} className="text-center text-md font-semibold">
            repository
          </a>
        )}
      </div>
    </div>
  );
}

export default card;
