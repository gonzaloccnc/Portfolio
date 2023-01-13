import React from 'react'
import { skills } from '../../../helpers/skills'
import Skill from '../../../components/skill/Skill'

const Skills: React.FC = () => {
  return (
    <section className='mini:mt-5 lg:mt-20'>
      <h1 className='text-center'>Mis Habilidades</h1>
      <div
        id='skills'
        className='w-3/4 mx-auto grid mini:grid-cols-2 mini:gap-x-4 minsm:grid-cols-4 gap-y-5
        place-items-center py-14 md:gap-x-2'
      >
        {
          skills.map((skill, idx) => <Skill key={idx} title={skill.name} img={skill.img} />)
        }
      </div>
    </section>
  )
}

export default Skills
