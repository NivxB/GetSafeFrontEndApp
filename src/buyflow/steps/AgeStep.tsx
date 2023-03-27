import React, { useState } from 'react'
import { StepProps } from './Step.interface'


type AgeStepProps = StepProps


const AgeStep: React.FC<AgeStepProps> = ({ onSave }) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => onSave('age', age)}>Next</button>
    </>
  )
}

export default AgeStep
