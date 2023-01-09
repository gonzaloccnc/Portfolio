interface proyect {
  title: string
  des: string
  github: string
  web: string
  img: string
}

const proyects: proyect[] = [{
  title: 'Eccomerce',
  des: 'Proyecto personal sobre una tienda online, basado en un diseño de wix.',
  github: 'https://github.com/gonzaloccnc/TechSed-Ecommerce',
  web: 'https://techsed.netlify.app/',
  img: 'bg-techsed'
}, {
  title: 'API Eccomerce',
  des: 'Proyecto personal de una API REST hecha en Express, JWT, mongoose.',
  github: 'https://github.com/gonzaloccnc/api-eccomerce',
  web: 'https://service-ecommerce-api.onrender.com/api/products',
  img: 'bg-api'
}, {
  title: 'Dopamine',
  des: 'Proyecto personal en el que pude implementar React, TailwindCSS, ReactRouter y Responsive Design. Me base en un diseño de behance',
  github: 'https://github.com/gonzaloccnc/Dopamine-React',
  web: 'https://dopamine-react.netlify.app/',
  img: 'bg-dopamine'
}]

export {
  proyects
}
