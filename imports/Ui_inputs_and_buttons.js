<div className="ui basic label">
  					<label for="Event name" className="ui label">Event name</label>
  					<input ref = 'event' placeholder = "" />	
				</div>
				<p></p>
				<div className="ui form">
				  <div className="field">
				    <label for="Comments" className="ui label">Comments</label>
				    <textarea ref = 'comment' placeholder = "Type a short description or take notes about this event"></textarea>
				  </div>
				
				</div><br />
				<div className="ui basic label">
  					<label for="amount" className="ui label">€</label>
  					<input ref = 'amount' placeholder = "Initial Budget" />
  					
				</div><br />
				<p></p>
				<button onClick = {this.handleClick.bind(this)} className="ui primary button">
	  				Save
				</button>
				<button className="ui button">
	 				Discard
				</button>