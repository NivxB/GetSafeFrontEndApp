import React, { useState } from 'react'
import AgeStep from './steps/AgeStep'
import EmailStep from './steps/EmailStep'
import SummaryStep from './steps/SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

enum PRODUCT_STEPS {
  CONTACT_EMAIL,
  CONTACT_AGE,
  SUMMARY,
}

export enum ProductIds {
  devInsurance = 'insurance_dev',
}

const PRODUCT_CONFIG = {
  [ProductIds.devInsurance]: {
    title: 'Developer Insurance',
    initial_step: PRODUCT_STEPS.CONTACT_EMAIL,
  },
}

const STEP_CONFIG = {
  [PRODUCT_STEPS.CONTACT_AGE]: {
    component: AgeStep,
    nextStep: PRODUCT_STEPS.SUMMARY,
  },
  [PRODUCT_STEPS.CONTACT_EMAIL]: {
    component: EmailStep,
    nextStep: PRODUCT_STEPS.CONTACT_AGE,
  },
  [PRODUCT_STEPS.SUMMARY]: {
    component: SummaryStep,
    nextStep: null,
  },
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
  const selectedProduct = PRODUCT_CONFIG[productId]

  const [currentStep, setStep] = useState<PRODUCT_STEPS>(
    selectedProduct.initial_step
  )

  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: PRODUCT_STEPS | null) => (
    field: string,
    value: unknown
  ) => {
    updateData({ ...collectedData, [field]: value })
    if (nextStep) {
      setStep(nextStep)
    }
  }
  const stepConfig = STEP_CONFIG[currentStep]
  const CurrentStepComponent = stepConfig.component
  return (
    <>
      <h4>Buying {selectedProduct.title}</h4>
      {CurrentStepComponent && (
        <CurrentStepComponent
          onSave={getStepCallback(stepConfig.nextStep)}
          collectedData={collectedData}
        />
      )}
    </>
  )
}

export default Buyflow
