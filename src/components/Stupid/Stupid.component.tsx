import * as React from 'react'
import { ChangeEvent } from 'react'

import { IStupidProps } from './Stupid.interface'
import stupidService from './Stupid.service'

import './Stupid.scss'

class Stupid extends React.Component<IStupidProps> {
    public static defaultProps = {
        value: null,
    }
    public some: string

    constructor(props: IStupidProps) {
        super(props)
        stupidService.fetchData(null).then(res => {
            console.log(res.body.value)
        })
    }

    public something() {
        this.some = ''
    }

    public render() {
        const { value } = this.props
        return <input value={value} onChange={this.handleChange} />
    }

    private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value)
    }

}

export default Stupid
