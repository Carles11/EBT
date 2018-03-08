import React from 'react'

export default class ExpenseItems extends React.Component{

	handleClick(){
		var id = this.props.id
		this.props.removeExpense(id)	
	}
	handleClicks(){
		this.props.changePage('UpdateExpense',this.props.eventId)	
	}
	render(){
		
		return(

			<div className="eventlist_grid padding_allways padding_top">
				<img
					src= "http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_40/v1518869045/trash_bin_full.png" 
					onClick={this.handleClick.bind(this)}
					/>	
				<h3 
					className="text_in_grey">{this.props.expense} / {this.props.price}€</h3>
				<button
					onClick={this.handleClicks.bind(this)}
					className="edit_button">EDIT
				</button>
			</div>

		)	
	}
}