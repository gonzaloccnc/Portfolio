import React from 'react'

interface SkillProps {
  title: string
  img: string
}

const Skill: React.FC<SkillProps> = ({ title, img }) => {
  return (
    <div
      className='dark:bg-night-soft bg-blue w-44 h-44 flex flex-col items-center
      justify-center gap-4 rounded-xl dark:hover:bg-orange-soft transition-colors duration-500 cursor-pointer
      mini:w-[80px] mini:h-[80px] minmd:w-[100px] minmd:h-[100px] lg:w-[150px] lg:h-[150px] hover:bg-night-light'
    >
      <img src={img} alt={title} className='mini:w-10 lg:w-20' />
      <p className='mini:text-xs lg:text-xl dark:text-night2 text-light'>{title}</p>
    </div>
  )
}

export default Skill
