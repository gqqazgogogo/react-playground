import { IBaseRequest, IBaseResponse } from '../../App/App.interface'
export interface IStupidProps {
    value: string
    onChange: (event: string) => void
}

// request interface
export interface IStupidRequest extends IBaseRequest {
    param1: string
}

export interface IStupidResponse extends IBaseResponse {
    body: IStupidBody,
}

interface IStupidBody {
    value: string,
    value2: string,
}