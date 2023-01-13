import React from 'react'

interface CodeProps {
  name: string
  email: string
  message: string
}

const Code: React.FC<CodeProps> = ({ name, email, message }) => {
  return (
    <div className='minsm:w-9/12 mini:w-9/12 absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4' id='code'>
      <p className='flex flex-col gap-5 w-full overflow-hidden'>
        <span className='text-wordR'>const
          <span className='text-var'>{' button '}
            <span className='text-char'>= </span>
            <span>
              {'document'}
              <span className='text-char'>.</span>
              querySelector
              <span className='text-char'>{'('}
                <span className='text-text'>{'\'#sendBtn\''}</span>
                {');'}
              </span>
            </span>
          </span>
        </span>
        <span className='text-wordR'>const
          <span className='text-var'> message </span>
          <span>= </span>
          <span className='text-char'>{'{'}</span>
          <br />
          <span className='text-var flex flex-col pl-4'>
            <span>name
              <span>: </span>
              <span className='text-text inline-block' id='s-name'>{`"${name}"`}</span>
              <span className='text-char'>,</span>
            </span>
            <span>email
              <span>: </span>
              <span className='text-text' id='s-email'>{`"${email}"`}</span>
              <span className='text-char'>,</span>
            </span>
            <span>message
              <span>: </span>
              <span className='text-text' id='s-message'>{`"${message}"`}</span>
              <span className='text-char'>,</span>
            </span>
            <span>date
              <span>: </span>
              <span className='text-text'>
                {`
              "${new Date(Date.now())
                    .toDateString()
                    .replace(' ' + new Date(Date.now()).getFullYear().toString(), '')}"
              `}
              </span>
            </span>
          </span>

        </span>
        <span className='text-char'>{'}'}</span>
        <span className='flex flex-col'>
          <span className='text-var'>button
            <span className='text-char'>.</span>
            addEventListener
            <span className='text-char'>{'('}</span>
            <span className='text-text'>{'\'click\''}</span>
            <span>,</span>
            <span className='text-char'>{' ()'}
              <span className='text-wordR'> {'=> '}</span>
              {'{'}
            </span>
          </span>
          <span className='text-var pl-4'>form
            <span className='text-char'>.</span>
            send
            <span className='text-char'>{'('}</span>
            message
            <span className='text-char'>{');'}</span>
          </span>
          <span className='text-char'>{'})'}</span>
        </span>
      </p>
    </div>
  )
}

export default Code
