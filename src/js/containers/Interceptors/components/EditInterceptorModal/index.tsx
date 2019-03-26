import React from 'react'
import './index.scss'
import { RequestLike } from '#/types'

interface Props {
  show: boolean
  interceptor: RequestLike
}

export const EditInterceptorModal = (_props: Props) => {
  return <div className="edit-interceptor-modal" />
}

export default EditInterceptorModal
