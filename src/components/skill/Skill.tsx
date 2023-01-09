import React from 'react'

interface SkillProps {
  title: string
  img: string
}

const Skill: React.FC<SkillProps> = ({ title, img }) => {
  return (
    <div
      className='bg-night-soft w-44 h-44 flex flex-col items-center
      justify-center gap-4 rounded-xl hover:bg-orange-soft transition-colors duration-500 cursor-pointer'
    >
      <img src={img} alt={title} className='w-20' />
      <p className='text-xl'>{title}</p>
    </div>
  )
}

export default Skill
