import React,{Component} from 'react'
import { connect } from 'react-redux'

import { aboutAction } from './action'

import './index.css'

class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  };
	}

	componentWillMount(){
		this.props.aboutAction('about')
	}

	render() {

		return (
			<div className='about'>

				{this.props.data}

			</div>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		aboutAction: (data) => dispatch(aboutAction(data))
	}
}


function mapStateToProps(state){
	return {
		data: state.aboutReducer.data
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
