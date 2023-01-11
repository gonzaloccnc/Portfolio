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
    <div className='w-2/5 border border-input-b bg-contact relative'>
      <div className='w-3/4 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <label className='text-label' htmlFor='name'>_nombre:</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={handleEvent}
            maxLength={120}
            value={form.name ?? ''}
            className='w-full bg-inputs outline-none border text-input-text border-input-b
            py-1 px-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-label' htmlFor='email'>_email:</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={handleEvent}
            maxLength={120}
            value={form.email ?? ''}
            className='w-full bg-inputs outline-none border text-input-text border-input-b
            py-1 px-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-label' htmlFor="message">_mensaje:</label>
          <textarea
            name='message'
            id='message'
            ref={message}
            onChange={handleEvent}
            maxLength={400}
            value={form.message ?? ''}
            className='w-full bg-inputs outline-none border text-input-text border-input-b
            py-1 px-2 rounded-md resize-none overflow-hidden'
          />
        </div>
        <div>
          <button className='bg-btn py-2 px-12 rounded-md'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Form
