import { Mongo } from 'meteor/mongo'


export const Incomes = new Mongo.Collection(null)

var EventBudgetTracker = new LocalPersist(Incomes, 'incomes-List');



