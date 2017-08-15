import React,{Component} from 'react'
import { connect } from 'react-redux'

import { requestData } from './action'

import './index.css'

class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  };
	}

	componentWillMount(){
		this.props.requestData()
	}

	render() {
		const { data, fetching } = this.props.homeReducer
		return (
			<div className='home'>
				{fetching ? <div className="spinner"></div> : ''}
				{data.map( (item,index) =>
					<h6 key={item.id}>{index+1}. {item.name}-{item.artistName}</h6>
				)}
			</div>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		requestData: (data) => dispatch(requestData(data))
	}
}


function mapStateToProps(state){
	return {
		homeReducer: state.homeReducer
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
