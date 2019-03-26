import React from 'react'
import HorizontalField from '#/components/HorizontalField'

export function Headers({ headers }) {
  return (
    <>
      {Object.entries(headers).map(([name, value]) => {
        return <HorizontalField key={name} label={name} value={value} />
      })}
    </>
  )
}

export default Headers
