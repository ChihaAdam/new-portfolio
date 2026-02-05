import Navbar from "@/components/nav/navbar";
import Home from "@/components/home/home";
import Skills from "@/components/skills/skills";
import Certificates from "@/components/certificates/certificates";
import Project from "@/components/projects/project";
import Contact from "@/components/contact/contact";

function Page() {
  return (
    <>
      <Navbar />
      <main className="xl:px-20 md:px-10 pb-10">
        <Home />
        <Skills />
        <Certificates />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default Page;
