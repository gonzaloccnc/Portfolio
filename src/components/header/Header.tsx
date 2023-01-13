import React, { useState } from 'react'
import Navbar from './Navbar'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import Modal from '../modal/Modal'
import SocialMedia from './SocialMedia'

const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleShowBurger: React.MouseEventHandler<SVGAElement> = () => {
    if (!isMobile) setIsMobile(!isMobile)
    setShowLinks(!showLinks)
  }

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
      {
        isMobile ? null : <Navbar hidden />
      }
      {
        showLinks
          ? (
            <Modal>
              <div className='flex flex-col w-full h-screen bg-light dark:bg-night-light justify-center'>
                <Navbar hidden={false} handleShowBurger={() => { setShowLinks(false) }} />
                <SocialMedia hidden={false} />
                <AiFillCloseCircle
                  className='absolute top-4 right-5 fill-blue-light'
                  fontSize='40'
                  onClick={handleShowBurger}
                />
              </div>
            </Modal>)
          : null
      }
      <SocialMedia hidden />
      <RxHamburgerMenu className='lg:hidden' onClick={handleShowBurger} />
    </header>
  )
}

export default Header
