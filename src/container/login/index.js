import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { requestLogin, clearErr } from './action'

import './index.css'

class Auth extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  };
	  this.loginSubmit = this.loginSubmit.bind(this)
	}

	componentWillMount(){
	}

	loginSubmit(){
		let values = {
			phone: this.refs.phone.value,
			password: this.refs.password.value
		}
		if(this.validate(values)){
			//登录
			this.props.requestLogin(values)
		}
	}

	validate(values){
		let { phone, password } = values
		if(!phone){
			alert("请输入手机号")
			return false
		} else if(!(/^1[34578]\d{9}$/.test(phone))){ 
	        alert("手机号码有误，请重填"); 
	        return false; 
	    } else if(!password) {
			alert("请输入密码")
			return false
		} else {
			return true
		}
	}

	render() {
		const { fetching, err } = this.props.loginReducer
		return (
			<div className="login">
				<form>
					<div className="items">
						<input type="text" ref="phone" placeholder="手机号" maxLength="11" defaultValue="13297907357"/>
					</div>
					<div className="items">
						<input type="password" ref="password" placeholder="密码" defaultValue="QQ137696235"/>
					</div>
					<div className=" btn-fileds">
						{fetching ? 
							<div className="login-btn">登录中……</div>
							:
							<div className="login-btn" onClick={this.loginSubmit}>登录</div>
						}
					</div>
				</form>
				<div className="error">{err}</div>
			</div>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		requestLogin: values => dispatch(requestLogin(values)),
		clearErr: () => dispatch(clearErr())
	}
}


function mapStateToProps(state){
	return {
		loginReducer: state.loginReducer
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
