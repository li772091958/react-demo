import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore()

import Bundle from './bundle'

import loadHome from 'bundle-loader?lazy&name=home!./home'
import loadAbout from 'bundle-loader?lazy&name=about!./about'

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

import '../static/styles/common.css'

export default class App extends Component {

	render() {
		return (
 			<Provider store={store}>
				   <Router>
				      <div>
				          <Switch>
					           	<Route exact path='/' component={Home} />
					           	<Route exact path='/about' component={About} />
				          </Switch>
				        </div>
				    </Router>
			</Provider>
		)
	}

}
