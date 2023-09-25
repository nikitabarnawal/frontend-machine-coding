import React from "react";
import SkillComponent from "../skillComponent";

const skillBar = 5;

interface SkillListProps {
  selectedSkills: Array<string>
  setSelectedSkills: (T: Array<string>) => void;
}

const SkillList = ({ selectedSkills, setSelectedSkills }: SkillListProps) => {

  const handleDeleteSkill = (deleteIndex: number) => {
    const RemainingSkills = selectedSkills.filter((skill, index) => index != deleteIndex)
    setSelectedSkills(RemainingSkills)
  }

  return (
    <>
      {Array(skillBar).fill(null).map((_, index) => <SkillComponent skills={selectedSkills} key={index} index={index} handleDeleteSkill={handleDeleteSkill} setSelectedSkills={setSelectedSkills} />)}
    </>
  )
}

export default SkillList;