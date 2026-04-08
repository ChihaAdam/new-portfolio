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
        src="/avatar.png"
        alt="avatar"
        width={600}
        height={600}
        className="rounded-full"
        fetchPriority="high"
        loading="eager"
      />
      <div className="flex flex-col gap-10 flex-1">
        <Bio />
        <KeyPoints />
      </div>
    </section>
  );
}

export default Home;
