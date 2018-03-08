import React from 'react'

export default class UpdateExpense extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}	
	handleClick(){		
		this.props.changePage("ExpensesList")	
	}
	setsState(e){
		var category = e.target.name
		this.setState({category:category})
	}
	handleUpdate(){
		
		var newExpense     = this.refs.newExpense.value.trim()
		var id 			   = this.props.eventId
		var newAmount 	   = this.refs.newAmount.value.trim()
		var newDate		   = this.refs.newDate.value.trim()
		var newCategory	   = this.state.category
		
		this.props.updateExpense (id,newExpense,newDate,newAmount,newCategory)
		this.props.changePage('ExpensesList',this.props.eventId) 
	}
	render(){

		return (
			<div className="body_padtop">
			<div className="padding_allways">
				<div className= "site_title">UPDATE THIS EXPENSE</div><br />
				<p>{this.props.myEvent.event}</p>
				<span className= 'label'>{this.props.expense}</span><br />
				<input 
				    maxLength="25"
					className = "padding_down input_field"
					ref= 'newExpense' 
					placeholder="Write here a new name"/><br />
				<p></p>
				<span className= 'label'>{this.props.price}</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'newAmount' 
					placeholder="write here a new amount"/>
				<span className= 'label'>{this.props.date}</span><br />
					<input
					type="date"
					className = "padding_down input_field"
					ref= 'newDate' 
					placeholder="write here a new date"/>
				</div>
				<h3>Category: {this.props.category}</h3>
				<div className = 'category_grid'>

	        	<div 
	        		id="technique"
	        		onClick = {this.setsState.bind(this)}>Audio visual
	        		</div>
	        	<div 
	        		id="catering"
	        		onClick = {this.setsState.bind(this)}>Catering</div>
	        	<div 
	        		id="transport"
	        		onClick = {this.setsState.bind(this)}>Transport</div>
	        </div>
	         <div className = 'category_grid'>
	        	<div 
	        		id="venue"
	        		onClick = {this.setsState.bind(this)}>Venue rental</div>
	        	<div 
	        		id="artists"
	        		onClick = {this.setsState.bind(this)}>Artists</div>
	        	<div 
	        		id="marketing"
	        		onClick = {this.setsState.bind(this)}>Marketing</div>
	        </div>
	        <div className = 'category_grid'>
	        	<div 
	        		id="insurance"
	        		onClick = {this.setsState.bind(this)}>Insurance</div>
	        	<div 
	        		id="personal"
	        		onClick = {this.setsState.bind(this)}>Personal</div>
	        	<div 
	        		id="decoration"
	        		onClick = {this.setsState.bind(this)}>Decoration</div>
	        </div>
	        <div className = 'category_grid'>
	        	<div 
	        		id="travel"
	        		onClick = {this.setsState.bind(this)}>Travel expenses</div>
	        	<div 
	        		id="photographer"
	        		onClick = {this.setsState.bind(this)}>Photographer</div>
	        	<div 
	        		id="video"
	        		onClick = {this.setsState.bind(this)}>Video production</div>
	        </div>
	        <div className = 'category_grid'>
	        	<div 
	        		id="deposit"
	        		onClick = {this.setsState.bind(this)}>Deposit</div>
	        	<div 
	        		id="wifi"
	        		onClick = {this.setsState.bind(this)}>WIFI/Internet acces</div>
	        	<div 
	        		id="speaker"
	        		onClick = {this.setsState.bind(this)}>Speaker</div>
	        </div>
	        <div className = 'category_grid'>
	        	<div 
	        		id="office"
	        		onClick = {this.setsState.bind(this)}>Office supplies</div>
	        	<div 
	        		id="legal"
	        		onClick = {this.setsState.bind(this)}>Legal fees</div>
	        	<div 
	        		id="consultant"
	        		onClick = {this.setsState.bind(this)}>Consultant fees</div>
	        </div>
				<div className="bottom_update_exp butt_grid">
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