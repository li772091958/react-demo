/**
* 错误消息弹框
*/ 

import React, { Component } from 'react'

export default class ErrMsg extends Component { 

  render() {
    return (
      <div style={Style.pop}>
        <div style={Style.main}></div>
        <div style={Style.content}>
          <span style={Style.text}>密码错误</span>
        </div>
      </div>
    )
  }
}

const Style = {
  pop: {
    position: 'fixed',
    width: '100%',
    height: '100%'
  },
  main: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '9999',
    opacity: '0.4',
    background: '#222'
  },
  content: {
    position: 'fixed',
    top: '2rem',
    zIndex: '10000',
    width: '100%',
    textAlign: 'center'
  },
  text: {
    color:'red',
    background: '#fff'
  }
}