import React, { useState } from 'react'
import Code from '../../components/code/Code'
import Form from '../../components/form/Form'

type FormState = Record<string, string>
const defaultValue = {
  user_name: 'Gonzalo Manco',
  user_email: 'mancogonzalo@gmail.com',
  message: '¡Oye! ¡Acabo de revisar su sitio web y se ve increíble! Además, revisé sus artículos en Medium. Aprendí algunos buenos consejos. ¡Gracias!'
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(defaultValue)
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm((state) => ({ ...state, [target.name]: target.value }))
    if (target.id === 'message') {
      target.style.height = String(target.scrollHeight).concat('px')
    }

    if (target.id === 'user_email') {
      const value = target.value
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isValid = value.match(regex)

      if (isValid != null) setIsValidEmail(true)
      else setIsValidEmail(false)
    }
  }

  return (
    <section className='py-20 shadow-md dark:bg-contact bg-blue' id='contact'>
      <h1 className='text-center mb-10'>Contactame</h1>
      <div className='w-full mini:h-[890px] minmd:h-[700px] mini:grid minmd:flex'>
        <Form handleEvent={handleChange} form={form} isValid={isValidEmail} defaultValue={defaultValue} />
        <div
          className='mini:w-[90%] mini:mx-auto mini:border-l minmd:w-3/5 border-t border-r border-b
           border-input-b dark:bg-contact relative bg-blue'
        >
          <Code name={form.user_name ?? ''} email={form.user_email ?? ''} message={form.message ?? ''} />
        </div>
      </div>
    </section>
  )
}

export default Contact
