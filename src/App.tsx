import React, { useEffect } from 'react'
import Header from './components/header/Header'
import WhoIsMe from './pages/main/WhoIsMe'
import AboutMe from './pages/about/AboutMe'
import Contact from './pages/contact/Contact'

const App: React.FC = () => {
  useEffect(() => {
    const home = document.querySelector('#home') as HTMLElement
    const about = document.querySelector('#about') as HTMLElement
    const portfolio = document.querySelector('#portafolio') as HTMLElement
    const contact = document.querySelector('#contact') as HTMLElement

    window.addEventListener('scroll', (e) => {
      const activeLnk = document.querySelector('a.active')

      if (window.pageYOffset < (home.offsetTop + home.clientHeight - 71)) {
        activeLnk?.classList.remove('active')
        const newActive = document.querySelector('a[href="#'.concat(home.id).concat('"]'))
        newActive?.classList.add('active')
        return
      }

      if (window.pageYOffset < (about.offsetTop + about.clientHeight - 71 - portfolio.clientHeight - 71)) {
        activeLnk?.classList.remove('active')
        const newActive = document.querySelector('a[href="#'.concat(about.id).concat('"]'))
        newActive?.classList.add('active')
        return
      }

      if (window.pageYOffset < (portfolio.offsetTop + portfolio.clientHeight - 71)) {
        activeLnk?.classList.remove('active')
        const newActive = document.querySelector('a[href="#'.concat(portfolio.id).concat('"]'))
        newActive?.classList.add('active')
        return
      }

      if (window.pageYOffset < (contact.offsetTop + contact.clientHeight - 71)) {
        activeLnk?.classList.remove('active')
        const newActive = document.querySelector('a[href="#'.concat(contact.id).concat('"]'))
        newActive?.classList.add('active')
      }
    })
  }, [])

  return (
    <>
      <Header />
      <main className='pt-[71px]'>
        <WhoIsMe />
        <AboutMe />
        <Contact />
      </main>
    </>
  )
}

export default App
