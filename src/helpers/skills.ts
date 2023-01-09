import express from '../assets/express.svg'
import js from '../assets/javascript.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import node from '../assets/node.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import redux from '../assets/redux.svg'
import rrouter from '../assets/react-router.svg'

interface skill {
  name: string
  img: string
}

const skills: skill[] = [{
  name: 'HTML',
  img: html
}, {
  name: 'CSS',
  img: css
}, {
  name: 'TailwindCSS',
  img: tailwind
}, {
  name: 'Javascript',
  img: js
},
{
  name: 'React',
  img: react
}, {
  name: 'NodeJs',
  img: node
}, {
  name: 'Express',
  img: express
}, {
  name: 'Redux Toolkit',
  img: redux
}, {
  name: 'React Router',
  img: rrouter
}]

export {
  skills
}
