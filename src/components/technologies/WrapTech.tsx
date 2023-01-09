import React from 'react'

interface WrapTechProps {
  children: React.ReactNode
  extraClass: string
}

const WrapTech: React.FC<WrapTechProps> = ({ children, extraClass }) => {
  return (
    <div
      className={`${extraClass} bg-night-light rounded-full grid place-content-center
      grayscale-700`}
    >
      {children}
    </div>
  )
}

export default WrapTech
