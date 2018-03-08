import React from 'react'

export default class IncomesList extends React.Component{
	render(){
		var incomes = this.props.incomesList
		return(
			<div>
				{ incomes.map((ele,i)=>{
					
				return(
					<div>
					<h3>Income</h3>
					<IncomeItems 
						key = {i}
						incomes = {ele.incomes}
						id	   = {ele._id}
						amount 	= {ele.amount}
						removeIncome = {this.props.removeIncome}
						changePage = {this.props.changePage}
					/>
					</div>
				)
				})
				}
		   </div>
		)
	}
}