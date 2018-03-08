import React from 'react'
import EventInformation from './EventInformation'

export default class EventItems extends React.Component{
	handleClack (){
		var { id } = this.props 
		// igual que: var id = this.props.id

		this.props.changePage ("EventInformation", this.props.id)
	}
	
	handleClick(){
		
		var id = this.props.id
		this.props.removeEvent(id)	
	}

	handleClicks(){
		var { id } = this.props 
		
		this.props.changePage('UpdateEvent',this.props.id)
}
	render(){
		return(
			<div className="eventlist_grid padding_allways padding_top">
				<img
					src= "http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_40/v1518869045/trash_bin_full.png" 
					onClick={this.handleClick.bind(this)}
					/>					
				<h3 
					onClick={this.handleClack.bind(this)}
					className="text_in_grey">{this.props.events}</h3>
				<button
					onClick={this.handleClicks.bind(this)}
					className="edit_button">EDIT
				</button>

			</div>
		)	
	}
}