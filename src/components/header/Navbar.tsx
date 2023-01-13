import React, { MouseEventHandler, useEffect, useState } from 'react'

interface PageState {
  target: HTMLElement | null
  goTo: number
}
interface NavbarProps {
  hidden: boolean
  handleShowBurger?: () => void
}

let initPosition = 0
const Navbar: React.FC<NavbarProps> = ({ hidden, handleShowBurger }) => {
  const [page, setPage] = useState<PageState>({
    target: null,
    goTo: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (initPosition < page.goTo) {
        initPosition += 30
        if (initPosition >= page.goTo) {
          if (handleShowBurger !== undefined && page.target !== null) handleShowBurger()
          clearInterval(interval)
        }
      } else {
        initPosition -= 30
        if (initPosition <= page.goTo) {
          if (handleShowBurger !== undefined && page.target !== null) handleShowBurger()
          clearInterval(interval)
        }
      }
      window.scrollTo(0, initPosition)
    }, 15)

    return () => { clearInterval(interval) }
  }, [page])

  const effectScroll: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    const ancle: HTMLAnchorElement = e.currentTarget
    const position = window.pageYOffset
    const target: HTMLElement | null = document.querySelector(ancle.getAttribute('href') ?? '')
    const goTo = (target?.offsetTop ?? 0) - 71

    if (page.target === target && position < goTo + 71) return
    setPage((state) => ({ ...state, target, goTo }))
    initPosition = position
  }

  return (
    <nav
      className={`${hidden ? 'mini:hidden' : 'mini:flex'} lg:w-auto lg:flex-row lg:flex mini:gap-4 xl:gap-8 
      md:text-base lg:text-lg xl:text-xl mini:flex-col mini:w-full mini:items-center`}
    >
      <a
        className='hover:text-blue-soft transition-all active mini:w-full mini:text-center lg:w-auto'
        href='#home' onClick={effectScroll}>Inicio</a>
      <a
        className='hover:text-blue-soft transition-all mini:w-full mini:text-center lg:w-auto'
        href='#about' onClick={effectScroll}>Acerca de</a>
      <a
        className='hover:text-blue-soft transition-all mini:w-full mini:text-center lg:w-auto'
        href='#portafolio' onClick={effectScroll}>Portafolio</a>
      <a
        className='hover:text-blue-soft transition-all mini:w-full mini:text-center lg:w-auto'
        href='#contact' onClick={effectScroll}>Contacto</a>
    </nav>
  )
}

export default Navbar
