import React from 'react'
import Arrow from '../../../components/arrow/Arrow'

const Experience: React.FC = () => {
  return (
    <section className='mt-20'>
      <h1 className='text-center mb-10'>Experiencia</h1>
      <div>
        <Arrow year={2023} title='Practicante' desc='En busca de experiencia....' />
      </div>
    </section>
  )
}

export default Experience
