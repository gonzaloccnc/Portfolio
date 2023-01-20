import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Modal from '../modal/Modal'
import Loading from '../load/Loading'

interface FormProps {
  handleEvent: React.ChangeEventHandler
  form: any
  isValid: boolean
  defaultValue: { user_name: string, user_email: string, message: string }
}

const Form: React.FC<FormProps> = ({ handleEvent, form, isValid, defaultValue }) => {
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const message = useRef<HTMLTextAreaElement>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isSending, setIsSending] = useState<boolean>(false)

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (name.current !== null && email.current !== null && message.current !== null) {
      if (name.current.value.length === 0 || email.current.value.length === 0 || message.current.value.length === 0) {
        setErrorMessage('Log inputs no pueden estar vacios')
        return
      }

      if (defaultValue.user_name === name.current.value || defaultValue.user_email === email.current.value) {
        setErrorMessage('No puede ser el mismo valor por defecto')
        return
      }

      if (!isValid) {
        setErrorMessage('Email incorrecto')
        return
      }

      setIsSending(true)
      emailjs.send('service_99qcgfd', 'template_fl7grwc', form, '_yPYKIBMBb4_DrvsM')
        .then(() => {
          setSuccessMessage('Correo enviado correctamente.')
        })
        .catch((ex) => {
          setErrorMessage('Ups ocurrio un error')
        })
        .finally(() => {
          setIsSending(false)
        })
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (errorMessage !== null) { setErrorMessage(null) }
      if (successMessage !== null) { setSuccessMessage(null) }
    }, 3000)
    return () => { clearTimeout(timeout) }
  }, [errorMessage, successMessage])

  useEffect(() => {
    if (message.current !== null) {
      message.current.style.height = String(message.current.scrollHeight).concat('px')
    }
  }, [])

  return (
    <>
      <div className='mini:w-[90%] mini:mx-auto minmd:w-2/5 border border-input-b dark:bg-contact relative bg-blue'>
        <div className='w-3/4 minsm:w-3/5 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col mini:gap-3 lg:gap-6'>
          <div className='flex flex-col mini:gap-2 lg:gap-4'>
            <label className='dark:text-label text-light lg:text-base mini:text-sm' htmlFor='user_name'>_nombre:</label>
            <input
              type='text'
              name='user_name'
              id='nuser_ame'
              ref={name}
              onChange={handleEvent}
              maxLength={100}
              value={form.user_name ?? ''}
              className='w-full dark:bg-inputs bg-light outline-none border text-night2
            dark:text-input-text border-input-b py-1 px-2 rounded-md mini:text-xs lg:text-base'
            />
          </div>
          <div className='flex flex-col mini:gap-2 lg:gap-4'>
            <label className='dark:text-label text-light lg:text-base mini:text-sm' htmlFor='user_email'>_email:</label>
            <input
              type='email'
              name='user_email'
              id='user_email'
              ref={email}
              onChange={handleEvent}
              maxLength={120}
              value={form.user_email ?? ''}
              className='w-full dark:bg-inputs bg-light outline-none border text-night2
            dark:text-input-text border-input-b py-1 px-2 rounded-md mini:text-xs lg:text-base'
            />
            {!isValid ? <p className='text-red-600 mini:text-xs minmd:text-sm'>Ingrese un correo valido</p> : null}
          </div>
          <div className='flex flex-col mini:gap-2 lg:gap-4'>
            <label className='dark:text-label text-light lg:text-base mini:text-sm' htmlFor="message">_mensaje:</label>
            <textarea
              name='message'
              id='message'
              ref={message}
              onChange={handleEvent}
              maxLength={400}
              value={form.message ?? ''}
              className='w-full dark:bg-inputs bg-light outline-none border text-night2
            dark:text-input-text border-input-b py-1 px-2 rounded-md resize-none overflow-hidden
            mini:text-xs lg:text-base'
            />
          </div>
          {errorMessage !== null ? <p className='text-red-600 mini:text-xs minmd:text-sm'>{errorMessage}</p> : null}
          {successMessage !== null ? <p className='text-green-600 mini:text-xs minmd:text-sm'>{successMessage}</p> : null}
          <div>
            <button
              className='dark:bg-btn bg-light lg:py-2 lg:px-12 mini:py-1 mini:px-5
            mini:mx-auto mini:block rounded-md'
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      {
        isSending
          ? (<Modal><Loading /></Modal>)
          : null
      }
    </>
  )
}

export default Form
