import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
interface SocialMediaProps {
  hidden: boolean
}

const SocialMedia: React.FC<SocialMediaProps> = ({ hidden }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const divDark = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const child = divDark.current?.firstElementChild as HTMLElement
    const html = document.querySelector('html') as HTMLElement

    if (darkMode) {
      html.classList.add('dark')
      child.classList.remove('-translate-x-0')
      child.classList.add('translate-x-full')
      child.classList.add('rotate-[360deg]')
    } else {
      html.classList.remove('dark')
      child.classList.remove('rotate-[360deg]')
      child.classList.remove('translate-x-full')
      child.classList.add('-translate-x-0')
    }
  }, [darkMode])

  const handleDarkMode: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setDarkMode(!darkMode)
  }

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
        href='mailto:gonz.gm.dev@outlook.com?subject=Hola Gonzalo, Tenemos una noticia para ti!!'
        className='py-2 px-2 bg-blue rounded-full hover:bg-blue-soft transition-colors duration-500'
      >
        <AiOutlineMail fill='#000000' />
      </a>
      <div
        className='py-2 px-2 bg-blue rounded-full w-14'
        ref={divDark}
        onClick={handleDarkMode}>
        <MdDarkMode
          className='dark:fill-yellow-300 fill-night dark:bg-night bg-white rounded-full
          transition-transform duration-500'
        />
      </div>
    </div>
  )
}

export default SocialMedia
