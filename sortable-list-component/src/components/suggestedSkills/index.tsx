import React from "react";
import './suggestedSkills.scss';

interface SuggestedSkillProps {
  skills: Array<string>;
  addSkill: (T: string) => void;
}

const SuggestedSkills = ({ skills, addSkill }: SuggestedSkillProps) => {
  return (
    <>
      <h3>Suggested Skills</h3>
      {skills.map((skill, index) => <div key={index} className='allSkill' onClick={() => addSkill(skill)}>+{skill}</div>)}
    </>
  )
}

export default SuggestedSkills;