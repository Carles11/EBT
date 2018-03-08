import React from 'react'

export default class UpdateEvent extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){		
		this.props.changePage("My events", this.props.eventId)		
	}
	handleUpdate(){	
		var id 			   = this.props.eventId	
		var newEvent       = this.refs.event.value.trim() || this.props.event
		var newComment 	   = this.refs.comment.value.trim() || this.props.comment
		var newAmount 	   = this.refs.amount.value.trim() || this.props.budget		
		this.props.updateEvent (id,newEvent,newComment,newAmount)
		this.props.changePage('EventInformation', this.props.eventId) 
	}
	render(){
		
		return (
			<div className="body_padtop">
			<div className="padding_allways">
				<div className= "site_title">UPDATE THIS EVENT</div><br />
				<span className= 'label'>{this.props.event}</span><br />
				<input 
				    maxLength="25"
					className = "padding_down input_field"
					ref= 'event' 
					placeholder="Write here a new name"/><br />
				<p></p>
				<span className= 'label'>{this.props.comment}</span><br />
				
					<input
					className = "longtext_input_field padding_down"
					ref= 'comment'
					placeholder="Write here new comments"/><br />
		
				<span className= 'label'>{this.props.budget}</span><br />
					<input 
					className = "padding_down input_field"
					ref= 'amount' 
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