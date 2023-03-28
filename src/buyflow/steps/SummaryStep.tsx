import React from 'react'
import { Link } from 'react-router-dom'
import { CheckoutData } from './Step.interface'

interface SummaryStepProps {
  collectedData: CheckoutData
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      {props.collectedData.names.firstName ? (
        <div>First Name: {props.collectedData.names.firstName} </div>
      ) : null}
      {props.collectedData.names.lastName ? (
        <div>Last Name: {props.collectedData.names.lastName} </div>
      ) : null}
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to={`/purchased=${props.collectedData.product}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
