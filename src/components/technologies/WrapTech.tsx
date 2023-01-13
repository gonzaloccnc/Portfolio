import React from 'react'

interface WrapTechProps {
  children: React.ReactNode
  extraClass: string
}

const WrapTech: React.FC<WrapTechProps> = ({ children, extraClass }) => {
  return (
    <div
      className={`${extraClass} dark:bg-night-light bg-blue-light rounded-full grid place-content-center
      dark:grayscale-700 grayscale-500`}
    >
      {children}
    </div>
  )
}

export default WrapTech
