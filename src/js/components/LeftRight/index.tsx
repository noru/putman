import React, { HTMLAttributes } from 'react'
import classname from 'classname'
import './index.scss'

export type ReactAttributes = HTMLAttributes<any> & JSX.IntrinsicAttributes

export default function({ children, className }: ReactAttributes) {
  let childrenArr = React.Children.toArray(children)
  if (childrenArr.length > 2) {
    console.warn('Only supports 2 children, the rests will be ignored')
  }

  return (
    <div className={classname(className, 'level', 'left-right-wrapper')}>
      <div className="level-left">
        <div className="level-item">{childrenArr[0]}</div>
      </div>
      <div className="level-right">
        <div className="level-item">{childrenArr[1]}</div>
      </div>
    </div>
  )
}
