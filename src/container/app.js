import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore()

import Bundle from './bundle'

import loadHome from 'bundle-loader?lazy&name=home!./home'
import loadAbout from 'bundle-loader?lazy&name=about!./about'
import loadLogin from 'bundle-loader?lazy&name=about!./login'
import loadTest from 'bundle-loader?lazy&name=about!./test/index2'

// components load their module for initial visit
const Home = () => (
  <Bundle load={loadHome}>
    {(Home) => <Home/>}
  </Bundle>
)
const About = () => (
  <Bundle load={loadAbout}>
    {(About) => <About/>}
  </Bundle>
)
const Login = () => (
  <Bundle load={loadLogin}>
    {(Login) => <Login/>}
  </Bundle>
)
const Test = () => (
  <Bundle load={loadTest}>
    {(Test) => <Test/>}
  </Bundle>
)

import '../static/styles/common.css'

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={ (props) => {
		return rest.loggedIn ? (<Component {...props}/>) : (<Redirect to="/login" />)
	}}/>
)

class App extends Component {
	render() {
		const loggedIn = this.props.loggedIn
		return (
			<Router>
				<Switch>
					<PrivateRoute exact path="/" component={ Home } loggedIn={ loggedIn }/>
					<PrivateRoute exact path="/about" component={ About } loggedIn={ loggedIn }/>
					<Route path="/login" render={() => {
						return loggedIn ? (
							<Redirect to="/" />
							) : (
							<Login />)
					}}/>
					<Route path="/test" component={Test} />
				</Switch>
		    </Router>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
	}
}

function mapStateToProps(state){
	return {
		loggedIn: state.loginReducer.loggedIn
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
