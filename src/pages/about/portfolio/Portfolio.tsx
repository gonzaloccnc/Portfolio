import React from 'react'
import { proyects } from '../../../helpers/proyects'
import Proyect from '../../../components/proyect/Proyect'

const Portfolio: React.FC = () => {
  return (
    <section className='mt-20'>
      <h1 className='text-center'>Portafolio</h1>
      <div className='w-[90%] mx-auto grid grid-cols-3 gap-8 place-items-center py-14'>
        {
          proyects.map(({ title, des, github, web, img }, idx) =>
            <Proyect key={idx} title={title} des={des} github={github} web={web} img={img} />
          )
        }
      </div>
    </section>
  )
}

export default Portfolio
