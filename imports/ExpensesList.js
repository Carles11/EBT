import React from 'react'
import ExpenseItems from './ExpenseItems'

export default class ExpensesList extends React.Component{

	componentWillMount(){
		
         this.props.findMyExpenses(this.props.eventId)  
       
	}
	render(){

		return(
			<div>
			<br/><br/><br/><br/><br/><br/>
			<span className= 'label '>Event: {this.props.myEvent.event}</span>			
				{this.props.expenses.map((ele,i)=>{					
					return(
						<div key = {i}>
						<h3 className="padding_top_max">Expense</h3>
						<ExpenseItems 
							id= {ele._id}
							projectID ={ele.id}
							expense = {ele.expense}
							price 	= {ele.price}
							date	= {ele.date}
							removeExpense = {this.props.removeExpense}
							changePage = {this.props.changePage}
						    event={this.props.myEvent.event}
						/>
						</div>
					)
				})
				}
		   </div>
		)
	}
}