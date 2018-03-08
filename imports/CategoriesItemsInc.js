import React from 'react'

export default class CategoriesItemsInc extends React.Component{
	handleClack (){
		var { id } = this.props 
		// igual que: var id = this.props.id

		this.props.changePage ("CategoriesListInc")
	}
	
	handleClick(){
		var id = this.props.id
		this.props.removeEvent(id)	
	}

	handleClicks(){
		this.props.changePage('UpdateEvent')	
}
	render(){
		let style ={
    		display:'none'
    	}

		return(
			<div className="eventlist_grid padding_allways padding_top_center">
				<img
					src= "http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_40/v1518869045/trash_bin_full.png" 
					onClick={this.handleClick.bind(this)}
					/>
					
				<h3 
					onClick={this.handleClack.bind(this)}
					className="padding_top_center">{this.props.events}</h3>
				<button
					onClick={this.handleClicks.bind(this)}
					className="edit_button">EDIT
				</button>
				<div style={style}>
				<UpdateEvent
					name      = {this.props.name} 
					events    = {this.props.events}
					comment = {this.props.comment}
					amount	 = {this.props.amount}
					id 		 = {this.props.id}/>
				<EventInformation 
					name      = {this.props.name} 
					events    = {this.props.events}
					comment = {this.props.comment}
					amount	 = {this.props.amount}
					id 		 = {this.props.id}/>
				</div>
			</div>
		)	
	}
}