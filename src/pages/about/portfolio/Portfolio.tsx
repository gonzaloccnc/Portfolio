import React from 'react'
import { proyects } from '../../../helpers/proyects'
import Proyect from '../../../components/proyect/Proyect'
import Experience from '../experience/Experience'

const Portfolio: React.FC = () => {
  return (
    <section className='pt-20' id='portafolio'>
      <section>
        <h1 className='text-center'>Portafolio</h1>
        <div className='w-[90%] mx-auto grid grid-cols-3 gap-8 place-items-center py-14'>
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
