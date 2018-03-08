import React from 'react'

export default class CategoriesListInc extends React.Component{
	render(){
		var categoriesInc = this.props.CategoriesListInc
		return(
			<div>
				{ categoriesInc.map((ele,i)=>{
					
				return(
					
					<CategoriesItemsInc 
						key = {i}
						name = {ele.name}
						categoriesInc = {ele.categoriesInc}
						id	   = {ele._id}
						changePage = {this.props.changePage}
					/>

				)
				})
				}
		   </div>
		)
	}
}