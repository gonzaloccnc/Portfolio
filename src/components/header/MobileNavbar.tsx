import React, { MouseEventHandler } from 'react'

interface MobileNavbarProps {
  mobileIsActive: boolean
  handleClick: MouseEventHandler<HTMLAnchorElement>
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ mobileIsActive, handleClick }) => {
  return (
    <nav
      className={`${mobileIsActive ? 'active' : ''} flex flex-col items-center gap-4 
      text-base w-full`}
      id='mobile-nav'
    >
      <a
        className='hover:text-blue-soft transition-all active w-full text-center'
        href='#home' onClick={handleClick}>Inicio</a>
      <a
        className='hover:text-blue-soft transition-all w-full text-center'
        href='#about' onClick={handleClick}>Acerca de</a>
      <a
        className='hover:text-blue-soft transition-all w-full text-center'
        href='#portafolio' onClick={handleClick}>Portafolio</a>
      <a
        className='hover:text-blue-soft transition-all w-full text-center'
        href='#contact' onClick={handleClick}>Contacto</a>
    </nav>
  )
}

export default MobileNavbar
