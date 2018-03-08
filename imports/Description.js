import React from 'react'

export default class Description extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick(){
		this.props.changePage('Home')
		
	}
	handleSubmit(e){
		e.preventDefault()
		
		let event = this.refs.event.value.trim()
		let comment = this.refs.comment.value.trim()
		let budget = this.refs.budget.value.trim()
		
		this.props.addEvent (event,comment,budget)
		
		this.props.changePage('EventInformation') //does exist any kind of refContent??
    
	}
	render(){

		return (
			<div>
			<div className= "body_padtop padding_allways">
				<div className= "site_title">CREATE NEW EVENT</div><br />
				<span className= 'label '>Event name</span><br />
				<input 
				    maxLength="35"
					className = "padding_down input_field"
					ref= 'event' 
					placeholder=""/><br />
					<p></p>
				<span className= 'label'>Comments</span><br />
				
					<input
					maxLength="200"
					className = "longtext_input_field padding_down"
					ref= 'comment'
					placeholder=""/><br />
					<p></p>

				<span className= 'label'>Initial budget</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'budget' 
					placeholder="€"/>
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