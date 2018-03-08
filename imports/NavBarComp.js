
import React from 'react'

export default class NavBarComp extends React.Component {
    selectPage = e => {
    	
            this.props.changePage(e.target.textContent)
    }

    render(){
    	let style ={
    		display:this.props.display
    	}
    	
        return(
        	<div style={style}
                 className = "navigation_grid padding_topdown">
                <div 
                    onClick = {this.selectPage.bind(this)}
                    className="padding_sides">Home</div>
                <div 
                    onClick = {this.selectPage.bind(this)}
                    className="padding_sides">My events</div>
            </div>

        )
    }

}
