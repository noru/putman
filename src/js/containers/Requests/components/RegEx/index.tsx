import React, { MouseEventHandler } from 'react'
import cls from 'classname'
import './index.scss'

interface Props {
  enabled: boolean
  onClick: MouseEventHandler
}

export const RegEx = ({ enabled, onClick }: Props) => {
  return (
    <span className={cls('regex-switch', enabled && 'regex-switch-on')} onClick={onClick}>
      .*
    </span>
  )
}

export default RegEx
