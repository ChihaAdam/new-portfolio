import type { skillsCardProps } from "@/@types/types.ts";
import * as motion from "motion/react-client";
import Image from "next/image";
function Card({ title, image }: Readonly<skillsCardProps>) {
  return (
    <div
      className="flex flex-col items-center justify-center w-64 gap-8 p-4 border rounded shadow-md bg-white dark:bg-gray-800"
      aria-label={title}
    >
      <Image src={image} alt={title} width={128} height={128} />
      <h3 className="text-xl  font-semibold select-none">{title}</h3>
    </div>
  );
}

export default Card;
