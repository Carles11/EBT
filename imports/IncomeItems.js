import React from 'react'
import UpdateExpense from './UpdateExpense'

export default class IncomeItems extends React.Component{

	handleClick(){
		var id = this.props.id
		this.props.removeIncome(id)	
	}
	handleClicks(){
		this.props.changePage('UpdateIncome')	
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
					className="text_in_grey">{this.props.incomes} / {this.props.amount}€</h3>
				<button
					onClick={this.handleClicks.bind(this)}
					className="edit_button">EDIT
				</button>
				<div style={style}>
				<UpdateIncome
					incomes = {this.props.incomes}
					comment = {this.props.comment}
					amount	 = {this.props.amount}
					id 		 = {this.props.id}/>
				</div>
			</div>
		)	
	}
}