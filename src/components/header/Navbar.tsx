import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className='flex gap-8 text-xl'>
      <a className='hover:text-blue-soft transition-all active' href='#Home'>Inicio</a>
      <a className='hover:text-blue-soft transition-all' href='#Portafolio'>Portafolio</a>
      <a className='hover:text-blue-soft transition-all' href='#About'>Acerca de</a>
      <a className='hover:text-blue-soft transition-all' href='#Contact'>Contacto</a>
    </nav>
  )
}

export default Navbar
