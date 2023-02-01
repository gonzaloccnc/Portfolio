import React, { useState, useEffect, MouseEventHandler } from 'react'
import Navbar from './Navbar'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import SocialMedia from './SocialMedia'
import MobileNavbar from './MobileNavbar'

interface PageState {
  target: HTMLElement | null
  goTo: number
}

let initPosition = 0
const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [page, setPage] = useState<PageState>({
    target: null,
    goTo: 0
  })

  const effectScroll: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    const ancle: HTMLAnchorElement = e.currentTarget
    const position = window.pageYOffset
    const target: HTMLElement | null = document.querySelector(ancle.getAttribute('href') ?? '')
    const goTo = (target?.offsetTop ?? 0) - (isMobile ? 64 : 71)

    if (page.target === target && position < goTo + 71) return
    setPage((state) => ({ ...state, target, goTo }))
    initPosition = position
  }

  const handleShowBurger: React.MouseEventHandler<SVGAElement> = () => {
    if (!isMobile) setIsMobile(!isMobile)
    setShowLinks(!showLinks)
  }

  const endShowBurguer = (): void => {
    setShowLinks(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (initPosition < page.goTo) {
        initPosition += 30
        if (initPosition >= page.goTo) {
          if (page.target !== null) endShowBurguer()
          clearInterval(interval)
        }
      } else {
        initPosition -= 30
        if (initPosition <= page.goTo) {
          if (page.target !== null) endShowBurguer()
          clearInterval(interval)
        }
      }
      window.scrollTo(0, initPosition)
    }, 15)

    return () => { clearInterval(interval) }
  }, [page])

  return (
    <header
      className='flex w-full items-center mini:justify-between lg:justify-around py-5 border-b
      border-night-light dark:bg-night fixed z-50 mini:px-4 bg-light'
    >
      <div>
        <h1
          className='flex items-center gap-3 lg:text-2xl text-blue-light cursor-pointer'
          onClick={() => { window.scrollTo(0, 0) }}
        >
          <span className='text-blue'>{'<G/>'}</span>
          Gonzalo Manco
        </h1>
      </div>
      {isMobile ? null : <Navbar handleClick={effectScroll} />}
      <div
        className={`fixed ${showLinks ? 'translate-x-0 left-0' : 'translate-x-full'} top-0 flex 
        transition-all flex-col w-full h-screen bg-light dark:bg-night-light justify-center`}
      >
        <MobileNavbar
          mobileIsActive={showLinks}
          handleClick={effectScroll}
        />
        <SocialMedia hidden={false} />
        <AiFillCloseCircle
          className='absolute top-4 right-5 fill-blue-light'
          fontSize='40'
          onClick={handleShowBurger}
        />
      </div>
      <SocialMedia hidden />
      <RxHamburgerMenu className='lg:hidden' onClick={handleShowBurger} />
    </header>
  )
}

export default Header
