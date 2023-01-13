import React from 'react'
import Skills from './skills/Skills'
import Portfolio from './portfolio/Portfolio'

const AboutMe: React.FC = () => {
  return (
    <section className='py-10' id='about'>
      <h1 className='mb-5 mini:text-base minsm:text-lg lg:text-6xl'>Acerca de mi</h1>
      <div className='flex gap-4 mini:flex-col lg:flex-row'>
        <span className='w-14 h-1 bg-orange-light mt-3'></span>
        <p className='mini:w-full lg:w-3/4 mini:text-sm lg:text-lg text-justify'>
          Soy estudiante de 5.° ciclo de Desarrollo de sofware, me considero autodidacta,
          con muchas ganas de aprender más sobre el Desarrollo Web, me desarrollo más en
          el lado del Front End con React, tambien he hecho Back End como API REST en NodeJs y Express.
          No cuento con experiencia en el campo laboral pero si tengo proyectos personales
          que he ido avanzando hace unos meses.
        </p>
      </div>
      <Skills />
      <Portfolio />
    </section>
  )
}

export default AboutMe
