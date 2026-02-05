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
    <div className="flex flex-col gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="relative">
        <Image src={data.image_url} alt={data.name} width={400} height={400} />

        <a href={data.image_url} download className="absolute top-2 right-2">
          <Download className="icon text-zinc-400 hover:text-zinc-600 transition-colors hover:bg-zinc-200/20 p-2 rounded-full box-content" />
        </a>
      </div>
      <h3 className="text-center text-xl font-semibold">{data.name}</h3>
    </div>
  );
}

export default CertificateCard;
