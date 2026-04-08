import Card from "./card";
import { skillsData } from "@/constants/constants";
function Skills() {
  return (
    <div className="flex flex-col gap-5" id="skills">
      <h2 className="text-4xl font-bold text-gradiant">skills</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {skillsData.map((skill) => (
          <Card key={skill.title} title={skill.title} image={skill.image}/>
        ))}
      </div>
    </div>
  );
}

export default Skills;
