import React, { MouseEventHandler } from 'react'

interface NavbarProps {
  handleClick: MouseEventHandler<HTMLAnchorElement>
}

const Navbar: React.FC<NavbarProps> = ({ handleClick }) => {
  return (
    <nav
      className='mini:hidden lg:w-auto lg:flex-row lg:flex mini:gap-4 xl:gap-8
      md:text-base lg:text-lg xl:text-xl mini:flex-col mini:w-full mini:items-center'>
      <a
        className='hover:text-blue-soft transition-all active mini:w-full mini:text-center lg:w-auto'
        href='#home' onClick={handleClick}>Inicio</a>
      <a
        className='hover:text-blue-soft transition-all mini:w-full mini:text-center lg:w-auto'
        href='#about' onClick={handleClick}>Acerca de</a>
      <a
        className='hover:text-blue-soft transition-all mini:w-full mini:text-center lg:w-auto'
        href='#portafolio' onClick={handleClick}>Portafolio</a>
      <a
        className='hover:text-blue-soft transition-all mini:w-full mini:text-center lg:w-auto'
        href='#contact' onClick={handleClick}>Contacto</a>
    </nav>
  )
}

export default Navbar
