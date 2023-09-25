import React, { useState, useEffect } from "react";
import chevron from '../../icons/Chevron.svg';
import plus from '../../icons/Plus.svg';
import Dropdown from "../dropdown";
import { AllSkills } from "../../data";
import { debounce } from "../utils";
import './skillComponent.scss';

interface SkillComponentProps {
  skills: Array<string>
  index: number;
  handleDeleteSkill: (index: number) => void;
  setSelectedSkills: (skill: Array<string>) => void;
}

const SkillComponent = ({ skills, index, handleDeleteSkill, setSelectedSkills }: SkillComponentProps) => {
  const [isChevronSelect, setIsChevronSelect] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const [filteredSkillList, setFilteredSkillList] = useState(AllSkills)

  useEffect(() => {
    if (!inputValue) return;

    const debouncedFilteredSkills = debounce(getFilteredList, 1000);
    debouncedFilteredSkills(inputValue);
    setIsChevronSelect(false);

  }, [inputValue])

  const handleChevronUpdate = () => {
    setIsChevronSelect(isChevronSelect => !isChevronSelect);
  }

  const handleSelectSkill = (selectedSkill: string) => {
    const newSkill: Array<string> = [...skills, selectedSkill]
    setSelectedSkills(newSkill);
    setInputValue('');
  }

  const getFilteredList = (value: string) => {
    const result = AllSkills.filter(val => val.toLowerCase().indexOf(value.toLowerCase()) > -1);
    setFilteredSkillList(result)
  }

  return (
    <>
      {
        index < skills.length ?
          <div className="skill">
            {skills[index]}
            <img src={plus} alt='delete' onClick={() => handleDeleteSkill(index)} />
          </div> :
          index === skills.length ? <div className='skill input'>
            <input type='text' placeholder="Add Skill" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <img src={chevron} onClick={handleChevronUpdate} />
            {(isChevronSelect || (inputValue.length > 0 && filteredSkillList.length > 0)) && <Dropdown allSkills={filteredSkillList} skills={skills} handleSelectSkill={handleSelectSkill} />}
          </div> : <div className='skill disable'>Add Skill</div>
      }
    </>
  )

}

export default SkillComponent;
