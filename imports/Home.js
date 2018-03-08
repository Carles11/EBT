import React from 'react'

export default class Home extends React.Component{

	selectPage = e => {
		
        this.props.changePage(e.target.name) //does exist any kind of refContent??
    }
	render(){

		return (
			<div>
				<h1 className="title">Event</h1>
				<h1 className="subtitle">Budget Tracker</h1>
				<div className="home_grid" >
					<img name = "Description" onClick = {this.selectPage} height="125" width="125" src="http://res.cloudinary.com/dssldws2k/image/upload/v1518650693/EventBudgetTracker/Circle_left.png"/>
					<img name = "My events" onClick = {this.selectPage} height="125" width="125" src="http://res.cloudinary.com/dssldws2k/image/upload/v1518650693/EventBudgetTracker/Circle_right.png"/>
				</div>
			</div>
		)
	}
}