import type { ProductIds } from "../Buyflow"

export interface StepProps {
  onSave: (property: string, value: unknown) => void
}

export interface CheckoutData {
  names: {
    firstName: string
    lastName: string
  }
  email: string
  age: number,
  product: ProductIds
}
