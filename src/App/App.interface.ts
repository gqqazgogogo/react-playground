import {RefObject} from 'react'
import Stupid from '../components/Stupid/index'

export interface IAppState {
    buttonClass : string,
    stupidValue: string,
  }
export interface IAppRefs {
    stupid : RefObject <Stupid>,
}
// network interface: START
export interface IBaseRequest {
    baseParam1: Array<string | number>,
}
export interface IBaseResponse {
    code: number,
    body: any,
    message: string,
}
// network interface: END