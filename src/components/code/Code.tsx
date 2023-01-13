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
        <span className='dark:text-wordR text-night2'>const
          <span className='dark:text-var text-purple-700'>{' button '}
            <span className='dark:text-char text-text'>= </span>
            <span>
              {'document'}
              <span className='dark:text-char text-text'>.</span>
              querySelector
              <span className='dark:text-char text-text'>{'('}
                <span className='dark:text-text text-light'>{'\'#sendBtn\''}</span>
                {');'}
              </span>
            </span>
          </span>
        </span>
        <span className='dark:text-wordR text-night2'>const
          <span className='dark:text-var text-purple-700'> message </span>
          <span>= </span>
          <span className='dark:text-char text-text'>{'{'}</span>
          <br />
          <span className='dark:text-var text-purple-700 flex flex-col pl-4'>
            <span>name
              <span>: </span>
              <span className='dark:text-text text-light inline-block' id='s-name'>{`"${name}"`}</span>
              <span className='dark:text-char text-text'>,</span>
            </span>
            <span>email
              <span>: </span>
              <span className='dark:text-text text-light' id='s-email'>{`"${email}"`}</span>
              <span className='dark:text-char text-text'>,</span>
            </span>
            <span>message
              <span>: </span>
              <span className='dark:text-text text-light' id='s-message'>{`"${message}"`}</span>
              <span className='dark:text-char text-light'>,</span>
            </span>
            <span>date
              <span>: </span>
              <span className='dark:text-text text-light'>
                {`
              "${new Date(Date.now())
                    .toDateString()
                    .replace(' ' + new Date(Date.now()).getFullYear().toString(), '')}"
              `}
              </span>
            </span>
          </span>

        </span>
        <span className='dark:text-char text-text'>{'}'}</span>
        <span className='flex flex-col'>
          <span className='dark:text-var text-purple-700'>button
            <span className='dark:text-char text-text'>.</span>
            addEventListener
            <span className='dark:text-char text-text'>{'('}</span>
            <span className='dark:text-text text-light'>{'\'click\''}</span>
            <span>,</span>
            <span className='dark:text-char text-purple-700'>{' ()'}
              <span className='dark:text-wordR text-night2'> {'=> '}</span>
              {'{'}
            </span>
          </span>
          <span className='dark:text-var text-purple-700 pl-4'>form
            <span className='dark:text-char text-purple-700'>.</span>
            send
            <span className='dark:text-char text-purple-700'>{'('}</span>
            message
            <span className='dark:text-char text-purple-700'>{');'}</span>
          </span>
          <span className='dark:text-char text-purple-700'>{'})'}</span>
        </span>
      </p>
    </div>
  )
}

export default Code
