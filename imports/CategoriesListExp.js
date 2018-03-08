import React from 'react'

export default class CategoriesListExp extends React.Component{
	render(){
		var categoriesExp = this.props.CategoriesListExp
		return(
			<div>
				{ categoriesExp.map((ele,i)=>{
					
				return(
					
					<ExpenseItems 
						key = {i}
						name = {ele.name}
						categoriesExp = {ele.categoriesExp}
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