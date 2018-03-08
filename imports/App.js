import React from 'react'
import {Events} from './api/Events'
import {Expenses} from './api/Expenses'
import {Incomes} from './api/Incomes'
import Home from './Home'
import EventsList from './EventsList'
import ExpensesList from './ExpensesList'
import IncomesList from './IncomesList'
import CategoriesListExp from './CategoriesListExp'
import CategoriesListInc from './CategoriesListInc'
import EventItems from './EventItems'
import ExpenseItems from './ExpenseItems'
import IncomeItems from './IncomeItems'
import CategoriesItemsExp from './CategoriesItemsExp'
import CategoriesItemsInc from './CategoriesItemsInc'
import Description from './Description' //this adds events
import AddExpense from './AddExpense'
import AddIncome from './AddIncome'
import UpdateEvent from './UpdateEvent'
import UpdateExpense from './UpdateExpense'
import UpdateIncome from './UpdateIncome'
import EventInformation from './EventInformation' 
import ExpensesSummaryCats from './ExpensesSummaryCats'
import IncomesSummaryCats from './IncomesSummaryCats'
import NavBarComp from './NavBarComp'



//import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

//require('react-datetime');

export default class App extends React.Component{
	constructor(){
		super()
		this.state = {
            page: '',
            display:'none',
            myExpenses:'',
            myEvent:'',
			events: '',
			budget:'',
			comment:'',
			date:'',
			amount:'',
			price:'',
			expenses:'',
			incomes:'',
			CategoriesExp:[{"item":"Audiovisual rental"},{"item":"Catering"},{"item":"Venue rental"},{"item":"Artists"},{"item":"Marketing"},{"item":"Insurance"},{"item":"Personal"},{"item":"Decoration"},{"item":"Travel expenses"},{"item":"Fotografer"},{"item":"Video production"},{"item":"Deposit"},{"item":"WIFI/Internet access"},{"item":"Speaker"},{"item":"Office supplies"},{"item":"Legal fees"},{"item":"Consultant fees"}],
			CategoriesInc:[{"item":"Own budget"},{"item":"Sponsors"},{"item":"Participant fees"},{"item":"Government grants"},{"item":"Fundraising"},{"item":"Merchandising sales"},{"item":"Raffles"},{"item":"Donations"}]
		}
		this.changePage = this.changePage.bind(this)
        this.addEvent   = this.addEvent.bind(this)
        this.addExpense   = this.addExpense.bind(this)
        this.addIncome   = this.addIncome.bind(this)
        this.removeEvent = this.removeEvent.bind(this)
        this.removeExpense = this.removeExpense.bind(this)
        this.removeIncome = this.removeIncome.bind(this)
        this.updateEvent = this.updateEvent.bind(this)
        this.updateExpense = this.updateExpense.bind(this)
        this.updateIncome = this.updateIncome.bind(this)
        this.findEvents = this.findEvents.bind(this)
        this.findExpenses = this.findExpenses.bind(this)
        this.findIncomes = this.findIncomes.bind(this)
        this.findMyExpenses = this.findMyExpenses.bind(this)

	}
    componentWillMount () {
        this.findEvents()
        this.findExpenses()
        this.findIncomes()
    }

    findMyExpenses(id){
       var expenses =  Expenses.find({id}).fetch()
       
        this.setState({expenses:expenses})
    }

    findEvents(){
        var list = Events.find({}).fetch()
        this.setState({events:list},(err)=>{    
        })
    }
    findExpenses(){  
        var list = Expenses.find({}).fetch() 
        this.setState({expenses:list},(err)=>{      
        })
    }
    findIncomes(){ 
        var list = Incomes.find({}).fetch()
        this.setState({incomes:list},(err)=>{     
        })
    }

    changePage(page, eventId){ 
       	
        var myEvent = Events.findOne({_id:eventId})
        page =="Home" ? this.setState({display:'none'}) : this.setState({display:'grid'})
        this.setState({page, myEvent, eventId},()=>{    
        })    
    }
	
    addEvent(event,comment,budget){
            var that = this
            Events.insert({event,comment,budget},(err, data)=>{         	
            	var myEvent = Events.findOne({_id:data})
               	that.setState({
                    eventId:data, 
                    myEvent
                },()=>{
               		this.findEvents()  
               	})    
            })   
    }
    removeEvent(_id) {
        alert('Are you sure to delete this event?')
            var that = this     
                Events.remove({_id},(err, data)=>{  
                    that.findEvents()     
                })
    }
    updateEvent(id,event,comment,budget){     
            Events.update({_id:id},{$set:{event,comment,budget}},(err, data)=>{
                this.findEvents()
            })
    }
    addExpense(id,expense,date,price,category){
        var that = this
        Expenses.insert({id,expense,date,price,category},()=>{
        })

     
    }
    removeExpense(_id) {
        alert('Are you sure to delete this expense?')
            var that = this 
                Expenses.remove({_id},(err, data)=>{  
                    that.findExpenses()  
                })
    }
    updateExpense(id,expense,date,price,category){
        
            Expenses.update({id:id},{$set:{expense,date,price,category}},(err,data)=>{              
                this.findExpenses()
            })
    }
    addIncome(item,amount,date,category){   
            Incomes.insert({item,amount,date,category},()=>{
                 this.findIncomes()                     
            })      
    }
    removeIncome(_id) {
        alert('Are you sure to delete this income?')
        var that = this  
            Incomes.remove({_id},()=>{  
                that.findIncomes()  
            })
    }
    updateIncome(_id,item,amount,date,category){
            Incomes.update({_id,item,amount,date,category},()=>{
                this.findIncomes()
            })
    }


	render(){
        
       let page  = this.state.page || 'Home'
       let   shown
	   if(page == 'Home') {
                shown = <Home 
                            changePage={this.changePage}/>
        }else if(page == 'Description'){
                shown = <Description 
                            addEvent={this.addEvent}
                            changePage={this.changePage}/>
        }else if(page == 'My events'){
                shown = <EventsList 
                            eventList={this.state.events}
                            removeEvent={this.removeEvent}
                            changePage={this.changePage}/>
        }else if(page == 'EventInformation'){
                shown = <EventInformation 
                            changePage={this.changePage}
                            eventId = {this.state.eventId}
                            myEvent = {this.state.myEvent}
                            />
        
        }else if(page == 'EventItems'){
                shown = <EventItems />
        
        }else if(page == 'UpdateEvent'){
                shown = <UpdateEvent         
                            {...this.state.myEvent}
                            eventId= {this.state.eventId}
                            updateEvent= {this.updateEvent}
                            changePage={this.changePage}/>
        }else if(page == 'ExpensesSummaryCats'){
                shown = <ExpensesSummaryCats
                            changePage={this.changePage}/>
        }else if(page == 'AddExpense'){
                shown = <AddExpense
                            {...this.state.myExpense}
                            eventId= {this.state.eventId}
                            addExpense={this.addExpense}
                            changePage={this.changePage}
                            myEvent = {this.state.myEvent}
                            event= {this.state.event}
                            myEvent={this.state.myEvent}/>

        }else if(page == 'UpdateExpense'){
                shown = <UpdateExpense
                            {...this.state.myExpense}
                            expense= {this.state.expense}
                            date= {this.state.date}
                            price= {this.state.price}
                            eventId= {this.state.eventId}
                            myEvent= {this.state.myEvent} 
                            updateExpense= {this.updateExpense}
                            changePage={this.changePage}/>
        
        }else if(page == 'ExpensesList'){
                shown = <ExpensesList
                            findMyExpenses= {this.findMyExpenses}
                            expenses = {this.state.expenses}
                            eventId= {this.state.eventId} 
                            expensesList={this.state.expenses}
                            removeExpense={this.removeExpense}
                            changePage={this.changePage}
                            event={this.state.event}
                            myEvent={this.state.myEvent}
                            myExpenses={this.state.myExpenses}
                            findExpenses={this.findExpenses}
                        />
        }else if(page == 'AddIncome'){
                shown = <AddIncome
                            addIncome={this.addIncome}
                            changePage={this.changePage}/>
        }else if(page == 'UpdateIncome'){
                shown = <UpdateIncome 
                            updateIncome= {this.updateIncome}
                            changePage={this.changePage}/>
        
        }else if(page == 'IncomesList'){
                shown = <IncomesList
                            incomesList={this.state.incomes}
                            removeIncome={this.removeIncome}
                            changePage={this.changePage}/>
        }else if(page == 'ExpenseItems'){
                shown = <ExpenseItems/>
        }else if(page == 'IncomeItems'){
                shown = <IncomeItems />
        }else if(page == 'IncomesSummary'){
                shown = <IncomesSummary 
                            changePage={this.changePage}/>
        }
    
    

		return (
			<div>
            <NavBarComp 
                display={this.state.display}
                changePage={this.changePage}/>

            {shown} 
            </div>		
			
		)	
	}
}