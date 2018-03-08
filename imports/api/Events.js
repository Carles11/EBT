import { Mongo } from 'meteor/mongo'


export const Events = new Mongo.Collection(null)

var EventBudgetTracker = new LocalPersist(Events, 'event-List');

