export enum MessageType {
  EnableInterceptor = 'EnableInterceptor',
  DisableInterceptor = 'DisableInterceptor',
}

export interface Message {
  type: MessageType
  payload: any
}
