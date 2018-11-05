import React, { Component } from 'react';
import Calendar from './Calendar.js'
import Details from './Details.js'

class AppBody extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentDate: new Date(),
    };
  }

  onDateChange(date) {
    let currentDay = this.state.currentDate;    
    if (date.getDate() === currentDay.getDate())
      return;    

    this.setState({ currentDate: date });
  }

  render() {
    return (
      <div className="App-body">
        <Calendar 
        	date={this.state.currentDate}
        	onDateChange={(date) => {this.onDateChange(date)}}
    	/>
		<Details
        	date={this.state.currentDate}
		/>
      </div>
    )
  }
}


export default AppBody;
