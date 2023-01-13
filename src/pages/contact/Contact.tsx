import React, { useState } from 'react'
import Code from '../../components/code/Code'
import Form from '../../components/form/Form'

type FormState = Record<string, string>
const defaultValue = {
  name: 'Gonzalo Manco',
  email: 'mancogonzalo@gmail.com',
  message: '¡Oye! ¡Acabo de revisar su sitio web y se ve increíble! Además, revisé sus artículos en Medium. Aprendí algunos buenos consejos. ¡Gracias!'
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(defaultValue)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm((state) => ({ ...state, [target.name]: target.value }))
    if (target.id === 'message') {
      target.style.height = String(target.scrollHeight).concat('px')
    }
  }

  return (
    <section className='py-20 shadow-md bg-contact' id='contact'>
      <h1 className='text-center mb-10'>Contactame</h1>
      <div className='w-full mini:h-[890px] minmd:h-[700px] mini:grid minmd:flex'>
        <Form handleEvent={handleChange} form={form} />
        <div className='mini:w-[90%] mini:mx-auto mini:border-l minmd:w-3/5 border-t border-r border-b border-input-b bg-contact relative'>
          <Code name={form.name ?? ''} email={form.email ?? ''} message={form.message ?? ''} />
        </div>
      </div>
    </section>
  )
}

export default Contact
