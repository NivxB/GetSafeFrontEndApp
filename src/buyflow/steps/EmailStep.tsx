import React, { useState } from 'react'
import { ErrorMessage } from './ErrorMessage'
import { StepProps } from './Step.interface'

type EmailStepProps = StepProps

const EmailStep: React.FC<EmailStepProps> = ({ onSave }) => {
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const onNextStep = () => {
    if (!email) {
      setErrorMessage('Email is required')
      return
    }
    setErrorMessage('')
    onSave('email', email)
  }
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
        <ErrorMessage error={errorMessage} />
      </div>
      <button onClick={onNextStep}>Next</button>
    </>
  )
}

export default EmailStep
