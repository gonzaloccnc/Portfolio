import React from 'react'

const MobileNavbar: React.FC = () => {
  const effectScroll = (): void => { }

  return (
    <nav className='flex flex-col items-center gap-4 text-base w-full' id='mobile-nav'>
      <a
        className='hover:text-blue-soft transition-all active w-full text-center'
        href='#home' onClick={effectScroll}>Inicio</a>
      <a
        className='hover:text-blue-soft transition-all w-full text-center'
        href='#about' onClick={effectScroll}>Acerca de</a>
      <a
        className='hover:text-blue-soft transition-all w-full text-center'
        href='#portafolio' onClick={effectScroll}>Portafolio</a>
      <a
        className='hover:text-blue-soft transition-all w-full text-center'
        href='#contact' onClick={effectScroll}>Contacto</a>
    </nav>
  )
}

export default MobileNavbar
