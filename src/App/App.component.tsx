import * as React from 'react'
import {createRef, MouseEvent} from 'react'

import Stupid, { stupidService } from '../components/Stupid/index'
import { IAppRefs, IAppState } from './App.interface'

import './App.css'

class App extends React.Component {

  public state : IAppState
  public refInstance : IAppRefs = {
    stupid: createRef(),
  }

  constructor(props : any) {
    super(props)
    this.state = {
      buttonClass: '',
      stupidValue: '',
    }
    stupidService.fetchData(null).then(res => {
      console.log(res)
    })
  }

  public componentWillMount() {
    this.setState({buttonClass: 'asd'})
  }

  public render() {
    const {buttonClass, stupidValue} = this.state
    const {stupid} = this.refInstance
    return (
      <div className="App">
        <button className={buttonClass} onClick={this.handleClick}>a</button>
        <Stupid ref={stupid} value={stupidValue} onChange={this.handleChange}/>
      </div>
    )
  }

  private handleChange = (e: string) => {
      this.setState({
        stupidValue: e
      })
  }
  private handleClick = (e : MouseEvent <HTMLButtonElement>) => {
    console.log('stupid console', e)
    this.setState({buttonClass: 'dsa'})
  }
}

export default App
