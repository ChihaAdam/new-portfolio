import Image from "next/image";
import KeyPoints from "./key-points";
import Bio from "./bio";

async function Home() {
  return (
    <section
      className="flex max-lg:flex-col justify-between items-center gap-10  lg:h-screen"
      id="home"
    >
      <Image
        src="/avatar.jpg"
        alt="avatar"
        width={500}
        height={500}
        className="rounded-full border-8 border-green-700 size-xl max-sm:w-64 max-sm:h-64"
      />
      <div className="flex flex-col gap-10">
        <Bio />
        <KeyPoints />
      </div>
    </section>
  );
}

export default Home;
