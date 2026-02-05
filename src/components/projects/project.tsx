import ProjectsList from "../../data/projects.json";
import Card from "./card";

function Project() {
  return (
    <div className="flex flex-col gap-5" id="projects">
      <h2 className="text-4xl font-bold text-gradiant">Projects</h2>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        {ProjectsList.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
