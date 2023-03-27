import React, { useState } from 'react'
import { StepProps } from './Step.interface'

type NameStepProps = StepProps

const NameStep: React.FC<NameStepProps> = ({ onSave }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

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
      <button onClick={() => onSave('names', { firstName, lastName })}>
        Next
      </button>
    </>
  )
}

export default NameStep
