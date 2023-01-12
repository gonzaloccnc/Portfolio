import React from 'react'

interface PropsDownloadButton {
  children: React.ReactNode
  route: string
}

const DownloadButton: React.FC<PropsDownloadButton> = ({ children, route }) => {
  return (
    <a
      className='text-white bg-blue mini:py-2 mini:px-4 py-4 px-8 hover:bg-blue-light transition-colors'
      href={route}
      download
    >
      {children}
    </a>
  )
}

export default DownloadButton
