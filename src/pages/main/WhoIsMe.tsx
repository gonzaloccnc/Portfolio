import { IoLogoNodejs, IoLogoJavascript, IoLogoReact } from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'
import React from 'react'
import WrapTech from '../../components/technologies/WrapTech'
import DownloadButton from '../../components/button/DownloadButton'

const WhoIsMe: React.FC = () => {
  return (
    <section className='w-full h-[600px] pt-10 flex overflow-hidden shadow-md'>
      <div className='text-night-soft w-3/4'>
        <div className='flex flex-col'>
          <span>{'</html>'}</span>
          <span className='pl-5'>{'<body>'}</span>
          <span className='h-5'></span>
          <span className='pl-8'>{'<h1>'}</span>
        </div>
        <h1 className='flex flex-col text-7xl font-bold pl-12 text-white'>
          <span>Hola</span>
          <span>Soy <span className='text-orange'>Gonzalo</span>,</span>
          <span>Desarrollador web
            <span className='text-night-soft text-base'> {'</h1>'}</span>
          </span>
        </h1>
        <div className='pl-8'>
          <span>{'<p>'}</span>
          <p className='pl-3 text-xl text-white'>desarollador front end.</p>
          <span>{'</p>'}</span>
        </div>
        <div className='pt-8 pl-8'>
          <DownloadButton route='public/cv.pdf'>Descargar CV</DownloadButton>
        </div>
      </div>
      <div className='w-2/5 relative'>
        <div
          className='relative w-[400px] h-[400px] rounded-full bg-night2 shadow-inner
          shadow-night-soft rotate'
        >
          <WrapTech extraClass='w-20 h-20 absolute top-14 -left-4 shadow-xl shadow-black'>
            <IoLogoNodejs fill='green' fontSize='45' />
          </WrapTech>
          <WrapTech extraClass='w-16 h-16 absolute top-2 right-10 shadow-xl shadow-black'>
            <IoLogoJavascript fill='yellow' fontSize='40' />
          </WrapTech>
          <WrapTech extraClass='w-24 h-24 absolute -bottom-5 left-10 shadow-xl shadow-black'>
            <IoLogoReact fill='lightblue' fontSize='60' />
          </WrapTech>
          <WrapTech extraClass='w-20 h-20 absolute bottom-8 right-0 shadow-xl shadow-black'>
            <SiTailwindcss fill='lightblue' fontSize='45' />
          </WrapTech>
        </div>
        <div className='absolute top-0 left-0 w-full h-full bg-me bg-cover grayscale-800'></div>
      </div>
    </section>
  )
}

export default WhoIsMe
