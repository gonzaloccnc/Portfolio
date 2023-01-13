import React, { useEffect, useRef } from 'react'

interface FormProps {
  handleEvent: React.ChangeEventHandler
  form: any
}

const Form: React.FC<FormProps> = ({ handleEvent, form }) => {
  const message = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (message.current !== null) {
      message.current.style.height = String(message.current.scrollHeight).concat('px')
    }
  }, [])

  return (
    <div className='mini:w-[90%] mini:mx-auto minmd:w-2/5 border border-input-b bg-contact relative'>
      <div className='w-3/4 minsm:w-3/5 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col mini:gap-3 lg:gap-6'>
        <div className='flex flex-col mini:gap-2 lg:gap-4'>
          <label className='text-label lg:text-base mini:text-sm' htmlFor='name'>_nombre:</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={handleEvent}
            maxLength={120}
            value={form.name ?? ''}
            className='w-full bg-inputs outline-none border text-input-text border-input-b
            py-1 px-2 rounded-md mini:text-xs lg:text-base'
          />
        </div>
        <div className='flex flex-col mini:gap-2 lg:gap-4'>
          <label className='text-label lg:text-base mini:text-sm' htmlFor='email'>_email:</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={handleEvent}
            maxLength={120}
            value={form.email ?? ''}
            className='w-full bg-inputs outline-none border text-input-text border-input-b
            py-1 px-2 rounded-md mini:text-xs lg:text-base'
          />
        </div>
        <div className='flex flex-col mini:gap-2 lg:gap-4'>
          <label className='text-label lg:text-base mini:text-sm' htmlFor="message">_mensaje:</label>
          <textarea
            name='message'
            id='message'
            ref={message}
            onChange={handleEvent}
            maxLength={400}
            value={form.message ?? ''}
            className='w-full bg-inputs outline-none border text-input-text border-input-b
            py-1 px-2 rounded-md resize-none overflow-hidden mini:text-xs lg:text-base'
          />
        </div>
        <div>
          <button className='bg-btn lg:py-2 lg:px-12 mini:py-1 mini:px-5 mini:mx-auto mini:block rounded-md'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Form
