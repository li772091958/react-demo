/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'

import Toast from '@/components/Toast'
import Dialog from '@/components/Dialog'

export default class Apply extends React.Component {

  constructor() {
    super()
    this.state = {
      toast1: false,
      toast2: false,
      dialog: false
    }
    this.showSuccessToast = this.showSuccessToast.bind(this)
    this.showLoadingToast = this.showLoadingToast.bind(this)
    this.showDialog = this.showDialog.bind(this)
    this.dialogButtonClick = this.dialogButtonClick.bind(this)
  }

  showSuccessToast(){
    // 显示Toast，并在2秒后自动关闭
    this.setState({toast1: true}, function(){
      setTimeout(function(){
        this.setState({toast1: false})
      }.bind(this), 2000)
    })

    // this.setState({ toast1: true })
  }
  showLoadingToast(){
    //显示Toast，并在2秒后自动关闭
    this.setState({toast2: true}, function(){
      setTimeout(function(){
        this.setState({toast2: false})
      }.bind(this), 2000)
    })
  }
  showDialog(){
    this.setState({dialog: true})
  }

  //dialog按钮点击事件
  dialogButtonClick(){
    this.setState({
      dialog: false
    })
  }

  render() {

    const buttons = [
        {
            type: 'default',
            label: 'Cancel',
            onClick: this.dialogButtonClick
        },
        {
            type: 'primary',
            label: 'Ok',
            onClick: this.dialogButtonClick
        }
    ]
    return (
      <div>
        <div style={Styles.button} onClick={this.showSuccessToast}>Toast success</div>
        <div style={Styles.button} onClick={this.showLoadingToast}>Toast loading</div>
        <div style={Styles.button} onClick={this.showDialog}>Dialog</div>
        <div style={Styles.button} onClick={ this.logout }>退出登录</div>

        <Toast icon="success-no-circle" show={this.state.toast1}>success</Toast>
        <Toast icon="loading" show={this.state.toast2}>Loading</Toast>

        <Dialog type="ios" title="这里是标题" buttons={buttons} show={this.state.dialog}>
            This is iOS Style 2
        </Dialog>
      </div>
    )
  }

  logout() {
    localStorage.clear('QSJS')
  }
}

const Styles = {
  button: {
    width: '10rem',
    height: '3rem',
    background: '#788cd2',
    margin: '20px 50px',
    borderRadius: '1rem',
    fontSize: '1.2rem',
    lineHeight: '3rem',
    textAlign: 'center'
  }
}


