import { Download } from "lucide-react";
import Image from "next/image";

export interface Certificate {
  name: string;
  image_url: string;
}

interface CertificateCardProps {
  data: Certificate;
}

function CertificateCard({ data }: Readonly<CertificateCardProps>) {
  return (
    <article className="flex w-full max-w-sm flex-col gap-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <div className="relative aspect-4/3 w-full">
        <Image
          src={data.image_url}
          alt={data.name}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-contain"
        />

        <a
          href={data.image_url}
          download
          aria-label={`download ${data.name}`}
          className="absolute right-2 top-2"
        >
          <Download className="icon box-content rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-200/20 hover:text-zinc-600" />
        </a>
      </div>

      <h3 className="text-center text-xl font-semibold">{data.name}</h3>
    </article>
  );
}

export default CertificateCard;