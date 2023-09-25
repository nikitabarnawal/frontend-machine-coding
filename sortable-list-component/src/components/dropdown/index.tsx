import React from "react";
import './dropdown.scss';

interface DropdownProps {
  allSkills: Array<string>;
  skills: Array<string>;
  handleSelectSkill: (skill: string) => void;
}

const Dropdown = ({ allSkills, skills, handleSelectSkill }: DropdownProps) => {
  const unSelectedSkill: string[] = allSkills.filter(skill => !skills.includes(skill));
  return (
    <div className="dropdownList">
      {unSelectedSkill.map((skill, index) => <div className="dropdownSkill" key={index} onClick={() => handleSelectSkill(skill)}>{skill}</div>)}
    </div>
  )
}

export default Dropdown;