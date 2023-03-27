import React, { useState } from 'react'
import { ErrorMessage } from './ErrorMessage'
import { StepProps } from './Step.interface'

type NameStepProps = StepProps

const NameStep: React.FC<NameStepProps> = ({ onSave }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const onNextStep = () => {
    if (!firstName) {
      setErrorMessage('First Name is required')
      return
    }
    if (!lastName) {
      setErrorMessage('Last Name is required')
      return
    }
    setErrorMessage('')
    onSave('names', { firstName, lastName })
  }

  return (
    <>
      <div>
        First Name:{' '}
        <input
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
        ></input>
      </div>
      <br />
      <div>
        Last Name:{' '}
        <input
          onChange={({ target: { value } }) => {
            setLastName(value)
          }}
          value={lastName}
        ></input>
      </div>
      <ErrorMessage error={errorMessage} />

      <button onClick={onNextStep}>Next</button>
    </>
  )
}

export default NameStep
