import React from 'react'
import { proyects } from '../../../helpers/proyects'
import Proyect from '../../../components/proyect/Proyect'
import Experience from '../experience/Experience'

const Portfolio: React.FC = () => {
  return (
    <section className='mini:pt-5 lg:pt-20' id='portafolio'>
      <section>
        <h1 className='text-center'>Portafolio</h1>
        <div className='w-[90%] mx-auto grid mini:grid-cols-1 lg:grid-cols-3 mini:gap-3 lg:gap-8 place-items-center mini:py-4 lg:py-14'>
          {
            proyects.map(({ title, des, github, web, img }, idx) =>
              <Proyect key={idx} title={title} des={des} github={github} web={web} img={img} />
            )
          }
        </div>
      </section>
      <section>
        <Experience />
      </section>
    </section>
  )
}

export default Portfolio
