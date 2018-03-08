import React from 'react'
import EventItems from './EventItems'
export default class EventsList extends React.Component{
	
	
	render(){
		
		var events = this.props.eventList
		return(
			<div>
				{ events.map((ele,i)=>{
					
				return(
					
					<EventItems 
						key = {i}
						events = {ele.event}
						id	   = {ele._id}
						comment = {ele.comment}
						budget 	= {ele.budget}
						removeEvent = {this.props.removeEvent}
						changePage = {this.props.changePage}
					/>

				)
				})
				}
		   </div>
		)
	}
}

