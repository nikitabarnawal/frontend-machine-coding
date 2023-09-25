import React, { useState } from "react";
import './sortableListContainer.scss';
import SkillList from "../skillList";
import SuggestedSkills from "../suggestedSkills";
import { AllSkills } from "../../data";

const InitialSelectedSkills = ['JavaScript', 'ReactJs', 'NextJs']

const SortableListContainer = () => {
  const [selectedSkills, setSelectedSkills] = useState<Array<string>>(InitialSelectedSkills);

  const handleAddSkill = (newSelectedskill: string) => {
    const result = selectedSkills.find(skill => skill == newSelectedskill)
    if (!result && selectedSkills.length < 5) {
      const newSkills = [...selectedSkills, newSelectedskill];
      setSelectedSkills(newSkills);
    }
  }

  return (
    < div className='sortable-list-container' >
      <div className="skill-list">
        <SkillList selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
      </div>
      <div className="suggested-skills">
        <SuggestedSkills skills={AllSkills} addSkill={handleAddSkill} />
      </div>
    </div >
  )
}

export default SortableListContainer