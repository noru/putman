export enum HttpMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  OPTIONS = 'OPTION',
  DELETE = 'DELETE',
}

export type HttpStatus = number // todo

export interface Headers {
  [props: string]: string
}

export interface Response {
  status: HttpStatus
  data?: string
  headers: Headers
}

export interface RequestLike {
  method: string
  host: string
  path: string
  search: string
  headers: Headers
  payload?: string
  response?: Response
}
