import React, { useState } from 'react'
import { StepProps } from './Step.interface'


type EmailStepProps = StepProps


const EmailStep: React.FC<EmailStepProps> = ({ onSave }) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => onSave('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
