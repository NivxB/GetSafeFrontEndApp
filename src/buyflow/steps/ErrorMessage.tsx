import React from 'react'

interface ErrorMessageProps {
  error?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) =>
  error ? <span className='errorMessage'>{error}</span> : null
