import React from 'react'

interface SkillProps {
  title: string
  img: string
}

const Skill: React.FC<SkillProps> = ({ title, img }) => {
  return (
    <div
      className='bg-night-soft w-44 h-44 flex flex-col items-center
      justify-center gap-4 rounded-xl hover:bg-orange-soft transition-colors duration-500 cursor-pointer
      mini:w-[80px] mini:h-[80px] lg:w-full lg:h-[180px]'
    >
      <img src={img} alt={title} className='mini:w-10 lg:w-20' />
      <p className='mini:text-xs lg:text-xl'>{title}</p>
    </div>
  )
}

export default Skill
