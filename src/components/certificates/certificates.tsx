import CertificatesList from "../../data/certificates.json";
import CertificateCard from "./card";

function Certifications() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-bold text-gradiant">Certifications</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {CertificatesList.map((certificate) => (
          <CertificateCard key={certificate.name} data={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
