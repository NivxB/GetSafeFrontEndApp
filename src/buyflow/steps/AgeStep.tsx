import React, { useState } from 'react'
import { ErrorMessage } from './ErrorMessage'
import { StepProps } from './Step.interface'

type AgeStepProps = StepProps

const AgeStep: React.FC<AgeStepProps> = ({ onSave }) => {
  const [age, setAge] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onNextStep = () => {
    if (!age) {
      setErrorMessage('Age is required')
      return
    }
    setErrorMessage('')
    onSave('age', age)
  }
  return (
    <>
      <div>
        Age:*{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        />
        <ErrorMessage error={errorMessage} />
      </div>
      <button onClick={onNextStep}>Next</button>
    </>
  )
}

export default AgeStep
