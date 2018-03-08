import React from 'react'
import {Events} from './api/Events'

export default class EventInformation extends React.Component{

	handleClicks(){
		this.props.changePage('UpdateEvent',this.props.eventId)	
	}
	selectPage = e =>{
		this.props.changePage(e.target.name, this.props.eventId)
		
	}
	render(){
		
 	if(this.props.myEvent){
		return (
			<div className="body_padtop padding_allways ">
				
				<h3 className="site_title">{this.props.myEvent.event}</h3>
					<p></p>	
				<button
					onClick={this.handleClicks.bind(this)}
					className="edit_button">EDIT
				</button>
				<div className="two_block_grid">
					<div><img
							name="AddExpense"
							onClick={this.selectPage.bind(this)}
							className="ui medium rounded image" 
							src="http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_200/v1518862809/money.png"/>
					<span>ADD EXPENSES</span>
					</div>
					<div><img 
						name="AddIncome"
						onClick={this.selectPage.bind(this)}
						className="ui medium rounded image" 
						src="http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_200/v1518862810/hand.png"/>
					<span>ADD INCOMES</span>
					</div>
				</div>
				<div className="two_block_grid">
					<div><img 
						name="ExpensesList"
						onClick={this.selectPage.bind(this)}
						className="ui medium rounded image" 
						src="http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_200/v1518864213/list.png"/>
					<span>SEE EXPENSES & INCOMES</span>
					</div>
					<div><img 
						name="ExpensesSummaryCats"
						onClick={this.selectPage.bind(this)}
						className="ui medium rounded image" 
						src="http://res.cloudinary.com/dssldws2k/image/upload/c_scale,w_200/v1518862810/graph.png"/>
					<span>SUMMARIES %</span>
					</div>
				</div>
			<h1>CURRENT BALANCE: {this.props.myEvent.budget} €</h1>
			</div>
		)
	}else return null
	}
}