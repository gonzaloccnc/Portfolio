import React from 'react'
import './loading.css'

const Loading: React.FC = () => {
  return (
    <div className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)]'>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  )
}

export default Loading
