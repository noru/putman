import React, { ReactNode } from 'react'
import './index.scss'

interface Props {
  label: ReactNode
  value: ReactNode
}

export const HorizontalField = ({ label, value }: Props) => {
  return (
    <div className="horizontalfield-wrapper columns">
      <label className="column is-3">{label}</label>
      <span className="column">{value}</span>
    </div>
  )
}

export default HorizontalField
