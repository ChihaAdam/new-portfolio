import type { contactCardProps } from "@/@types/types";
import Image from "next/image";

function Card({ text, icon, link }: Readonly<contactCardProps>) {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <Image src={icon} alt={text} width={40} height={40} />
      <a
        href={link}
        className="text-center text-md font-semibold opacity-50 hover:opacity-100"
      >
        {text}
      </a>
    </div>
  );
}

export default Card;
