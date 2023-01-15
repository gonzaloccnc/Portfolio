import { IoLogoNodejs, IoLogoJavascript, IoLogoReact } from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'
import React from 'react'
import WrapTech from '../../components/technologies/WrapTech'
import DownloadButton from '../../components/button/DownloadButton'

const WhoIsMe: React.FC = () => {
  return (
    <section
      className='w-full lg:h-[600px] mini:gap-7 lg:gap-0 mini:pt-10 flex mini:flex-col
      minsm:flex-row overflow-hidden shadow-md'
      id='home'
    >
      <div className='text-night-soft mini:w-auto mini:mx-auto minsm:w-3/4 pb-4'>
        <div className='flex flex-col'>
          <span>{'</html>'}</span>
          <span className='mini:pl-2 lg:pl-5'>{'<body>'}</span>
          <span className='mini:h-3 lg:h-5'></span>
          <span className='mini:pl-3 lg:pl-8'>{'<h1>'}</span>
        </div>
        <h1 className='flex flex-col font-bold mini:pl-5 lg:pl-12 dark:text-white text-night2'>
          <span className='lg:text-7xl minsm:text-4xl' >Hola</span>
          <span className='lg:text-7xl minsm:text-4xl' >Soy
            <span className='text-orange lg:text-7xl minsm:text-4xl'> Gonzalo</span>,
          </span>
          <span className='lg:text-7xl minsm:text-4xl' >Desarrollador web
            <span className='text-night-soft text-base'> {'</h1>'}</span>
          </span>
        </h1>
        <div className='mini:pl-3 lg:pl-8'>
          <span>{'<p>'}</span>
          <p className='pl-3 mini:text-xs minsm:text-xl text-night2 dark:text-white'>desarollador front end.</p>
          <span>{'</p>'}</span>
        </div>
        <div className='mini:pt-4 lg:pt-8 mini:pl-4 lg:pl-8'>
          <DownloadButton route='./cv.pdf'>Descargar CV</DownloadButton>
        </div>
      </div>
      <div className='mini:w-full minsm:w-2/5 relative mini:grid mini:place-content-center'>
        <div
          className='relative mini:w-[170px] mini:h-[170px] lg:w-[400px] lg:h-[400px]
          minsm:w-[250px] minsm:h-[250px] rounded-full dark:bg-night2 bg-blue shadow-inner shadow-night-soft rotate'
        >
          <WrapTech
            extraClass='mini:w-10 mini:h-10 lg:w-20 lg:h-20 minsm:w-14 minsm:h-14 absolute top-14
            -left-4 shadow-xl shadow-black'
          >
            <IoLogoNodejs fill='green' className='lg:text-[45px] mini:text-xl minmd:text-2xl' />
          </WrapTech>
          <WrapTech
            extraClass='mini:w-8 mini:h-8 lg:w-16 lg:h-16 minsm:w-12 minsm:h-12 absolute
            lg:top-2 lg:right-10 shadow-xl shadow-black mini:top-5 mini:right-0'
          >
            <IoLogoJavascript fill='yellow' className='lg:text-[40px] mini:text-[15px] minmd:text-xl' />
          </WrapTech>
          <WrapTech
            extraClass='mini:w-12 mini:h-12 lg:w-24 lg:h-24 minsm:w-16 minsm:h-16 absolute
            -bottom-5 left-10 shadow-xl shadow-black'
          >
            <IoLogoReact fill='lightblue' className='lg:text-[60px] mini:text-[30px] minmd:text-3xl' />
          </WrapTech>
          <WrapTech
            extraClass='mini:w-10 mini:h-10 lg:w-20 lg:h-20 minsm:w-14 minsm:h-14 absolute
            bottom-8 lg:right-0 shadow-xl shadow-black mini:-right-3'
          >
            <SiTailwindcss fill='lightblue' className='lg:text-[45px] mini:text-xl minmd:text-2xl' />
          </WrapTech>
        </div>
        <div
          className='absolute top-0 left-0 w-full h-full bg-me lg:bg-cover mini:bg-contain
          grayscale-800 bg-no-repeat mini:bg-center'
        >
        </div>
      </div>
    </section>
  )
}

export default WhoIsMe
