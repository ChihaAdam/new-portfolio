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
      <Image src={snapshot} alt={title} width={400} height={400} />
      <h3 className="text-center text-xl font-semibold">{title}</h3>
      <p className="text-center text-lg font-semibold max-w-sm">
        {description}
      </p>
      <div className="flex gap-10 justify-center">
        {demo && (
          <a
            href={demo}
            className="text-center text-md  font-semibold opacity-50 hover:opacity-100"
          >
            demo
          </a>
        )}
        {repository && (
          <a
            href={repository}
            className="text-center text-md font-semibold opacity-50 hover:opacity-100"
          >
            repository
          </a>
        )}
      </div>
    </div>
  );
}

export default card;
