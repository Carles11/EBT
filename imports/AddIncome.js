import React from 'react'

export default class AddIncome extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick(){

		this.props.changePage('EventInformation')
		
	}
	handleSubmit(e){debugger
		e.preventDefault()
		
		let item = this.refs.income.value.trim()
		let amount = this.refs.amount.value.trim()
		let date 	= this.refs.date.value.trim()
debugger
		this.props.AddIncome (item,amount,date)
debugger
		this.props.changePage('IncomesList') 
		debugger
	}
	render(){

		return (
			<div>
			<div className= "body_padtop padding_allways">
				<div className= "site_title">ADD INCOMES to:</div><br />
				<span className= 'label '>Here Event name {this.props.name}</span><br />
				<span className= 'label '>Income description</span><br />
				<input 
				    maxLength="45"
					className = "padding_down input_field"
					ref= 'income' 
					placeholder=""/><br />
		
				<span className= 'label'>Amount</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'amount' 
					placeholder="€"/>

				<span className= 'label'>Date</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'date' 
					placeholder="DD/MM/YYYY"/>
			</div>
			<div>
				<div className="bottom_description butt_grid">
	       		<form onSubmit = {this.handleSubmit.bind(this)}>
	       	        <button className = " save_button">SAVE
		         	</button>
		        </form>	           
	            	<button 
	            		onClick= {this.handleClick.bind(this)} 
	            		className = "discard_button">DISCARD
	            	</button>	     
	            </div>
	        </div>
	        </div>           
		)
	}
}