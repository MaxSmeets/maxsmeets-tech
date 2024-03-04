import React from "react";
import config from "../data/config.json";
import SkillBar from "./SkillBar";

function SkillsCard() {
  const { soft_skills: softSkills, tech_skills: techSkills } = config[0];

  return (
    <div className='flex flex-col py-4 rounded-lg md:flex-row bg-tertiary'>
      <div className='flex-1 mx-2'>
        <h2 className='mb-4 text-xl font-bold'>Soft Skills</h2>
        <ul>
          {softSkills.map((skill) => (
            <SkillBar
              id={skill.id}
              name={skill.name}
              value={skill.value}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
      <div className='flex-1 mx-2'>
        <h2 className='mb-4 text-xl font-bold'>Technical Skills</h2>
        <ul>
          {techSkills.map((skill) => (
            <SkillBar
              id={skill.id}
              name={skill.name}
              value={skill.value}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsCard;
