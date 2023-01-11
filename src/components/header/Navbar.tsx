import React, { MouseEventHandler, useEffect, useState } from 'react'

interface PageState {
  target: HTMLElement | null
  goTo: number
}

let initPosition = 0
const Navbar: React.FC = () => {
  const [page, setPage] = useState<PageState>({
    target: null,
    goTo: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (initPosition < page.goTo) {
        initPosition += 30
        if (initPosition >= page.goTo) {
          clearInterval(interval)
        }
      } else {
        initPosition -= 30
        if (initPosition <= page.goTo) {
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
    <nav className='flex gap-8 text-xl'>
      <a
        className='hover:text-blue-soft transition-all active'
        href='#home' onClick={effectScroll}>Inicio</a>
      <a
        className='hover:text-blue-soft transition-all'
        href='#about' onClick={effectScroll}>Acerca de</a>
      <a
        className='hover:text-blue-soft transition-all'
        href='#portafolio' onClick={effectScroll}>Portafolio</a>
      <a
        className='hover:text-blue-soft transition-all'
        href='#contact' onClick={effectScroll}>Contacto</a>
    </nav>
  )
}

export default Navbar
