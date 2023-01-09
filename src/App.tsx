import React from 'react'
import Header from './components/header/Header'
import WhoIsMe from './pages/main/WhoIsMe'
import AboutMe from './pages/about/AboutMe'
import Contact from './pages/contact/Contact'

const App: React.FC = () => {
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
