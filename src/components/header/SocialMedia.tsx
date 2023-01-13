import React from 'react'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

interface SocialMediaProps {
  hidden: boolean
}

const SocialMedia: React.FC<SocialMediaProps> = ({ hidden }) => {
  return (
    <div
      className={`${hidden ? 'mini:hidden' : 'mini:flex'} lg:flex lg:flex-row mini:flex-col mini:gap-4 
      mini:mt-4 lg:mt-0 lg:gap-8 items-center`}
      id='lnk-ctc'
    >
      <a
        target='_blank'
        href='https://www.linkedin.com/in/gonzalo-manco-garcia-6ab21924a'
        rel='noreferrer'
        className='flex gap-2 justify-center items-center hover:text-blue transition-colors
          font-normal relative before:content-[""] before:absolute before:w-1/2 before:h-[2px]
          before:bottom-0 before:bg-blue'
      >
        <AiFillLinkedin />
        LinkedIn
      </a>
      <a
        target='_blank'
        href='https://github.com/gonzaloccnc'
        rel='noreferrer'
        className='flex gap-2 justify-center items-center hover:text-blue transition-colors
          font-normal relative before:content-[""] before:absolute before:w-1/2 before:h-[2px]
          before:bottom-0 before:bg-blue'
      >
        <AiFillGithub />
        Github
      </a>
      <a
        href='#mailme'
      >
        <AiOutlineMail fill='#000000' />
      </a>
    </div>
  )
}

export default SocialMedia
