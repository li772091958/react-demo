import React from 'react'
import ReactDom from 'react-dom'
const NUM_OF_BLOCK = Array.from({length:100000}, (v,k) => k);

export default class Test extends React.Component {

  constructor() {
    super()
    this.state = {
      times: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    ReactDom.unstable_deferredUpdates(() => {
      this.setState({times: this.state.times + 1})
    })
  }


  render() {
    return (
      <div>
        <input type="text" style={{height: '3rem', width:'100%', display: 'inline', border: '1px solid #999'}}/>
        <input type="button" style={{height: '3rem', width:'80%', background: '#8d8d22'}} value="click me" onClick={this.handleClick} />
        <C value={this.state.times} nums={NUM_OF_BLOCK} />
      </div>
    )
  }

}

class C extends React.Component {

  render(){
    const { value, nums } = this.props
    return (
      <div style={{wordWrap: 'break-word'}}>
        {nums.map(i =>
          <span key={i}>{value}</span>
        )}
      </div>
    )
  }
}