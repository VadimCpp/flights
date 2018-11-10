import React, { Component } from 'react';
import Calendar from './Calendar.js'
import Details from './Details.js'
import './AppBody.css';

class AppBody extends Component {
  constructor(props) {
    super(props);
    
    const today = new Date();
    // const delta = [-2, -1, 0, 1, 2];
    // const dates = delta.map((delta) => {
    //   let day = new Date(today.getTime());
    //   day.setDate(today.getDate() + delta);      
    //   return day;
    // });

    this.state = {
      currentDate: today,
      weather: {
        status: 'wait',
        data: null,
      },
    };
  }

  onDateChange(date) {
    let currentDay = this.state.currentDate;

    if (date.getDate() === currentDay.getDate())
      return;

    this.setState({ 
      currentDate: date,
      weather: {
        status: 'wait',
        data: null,
      },
    });
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
            weather={this.state.weather}
  	 	  />
      </div>
    )
  }
}

export default AppBody;
