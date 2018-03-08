import React from 'react'

export default class AddExpense extends React.Component{
	constructor(){
		super()
		this.state ={
			category:''

		}
		this.handleClick = this.handleClick.bind(this)
	}
	selectPage = e => {		
        this.props.changePage(e.target.id,this.props.eventId) //does exist any kind of refContent??
    }
    setsState(e){ 
    	let category = e.target.id
    	this.setState({category:category},(err)=>{    
        })
    }
	handleClick(){

		this.props.changePage('EventInformation', this.props.eventId)
		selectPage()
	}
	handleSubmit(){
		let id = this.props.eventId
		let item = this.refs.expense.value.trim()
		let price 	= this.refs.price.value.trim()
		let date 	= this.refs.date.value.trim()
		let category = this.state.category
		
		this.props.addExpense (id,item,date,price,category,(err)=>{
				null
		})
		this.props.changePage('ExpensesList',this.props.eventId)
		
	}
	render(){

		return (
			<div>
			<div className= "body_padtop padding_allways">
				<div className= "site_title">ADD EXPENSES to:<br />
				 {this.props.myEvent.event}</div><br />
				<span className= 'label '>Expense description</span><br />
				<input 
				    maxLength="45"
					className = "padding_down input_field"
					ref= 'expense' 
					placeholder=""/><br />
		
				<span className= 'label'>Price</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'price' 
					placeholder="€"/><br />

				<span className= 'label'>Date</span><br />
					<input 
					type="date"
					className = "padding_down input_field"
					ref= 'date' 
					placeholder="DD/MM/YYYY"/>
			</div>
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