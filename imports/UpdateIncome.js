import React from 'react'

export default class UpdateIncome extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick(){
		
		this.props.changePage("IncomesList")
		
	}
	handleUpdate(){
		
		var newIncome       = this.refs.newIncome.value.trim()
		//var { id } 		   = this.props // és el mateix que: 
		var id 			   = this.props.id
		var newAmount 	   = this.refs.newAmount.value.trim()
		
		this.props.updateIncome (id,newIncome,newAmount)

		this.props.changePage('EventInformation') 
	}
	render(){

		return (
			<div className="body_padtop">
			<div className="padding_allways">
				<div className= "site_title">UPDATE THIS INCOME</div><br />
				<h2>{this.props.item}{this.props.income}{this.props.amount}{this.props.amount}</h2>
				<span className= 'label'>Name</span><br />
				<input 
				    maxLength="25"
					className = "padding_down input_field"
					ref= 'newIncome' 
					placeholder="Write here a new name"/><br />
				<p></p>
				
		
				<span className= 'label'>Amount</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'newAmount' 
					placeholder="write here a new amount"/>
				</div>
				<div className="bottom_update butt_grid">
	       		    <button 
	       		    	onClick= {this.handleUpdate.bind(this)}
	       		    	className = " save_button">SAVE CHANGES
		         	</button>
		                
	            	<button 
	            		onClick= {this.handleClick.bind(this)} 
	            		className = "discard_button">CANCEL CHANGES
	            	</button>	     
	            </div>
	        </div>            
		)
	}
}