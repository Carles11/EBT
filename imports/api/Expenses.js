import { Mongo } from 'meteor/mongo'


export const Expenses = new Mongo.Collection(null)

var EventBudgetTracker = new LocalPersist(Expenses, 'expenses-List');


