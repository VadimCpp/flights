import React, { Component } from 'react';
import Calendar from './Calendar.js'
import Details from './Details.js'

class AppBody extends Component {
  constructor(props) {
    super(props);
    
    const today = new Date();
    const delta = [-2, -1, 0, 1, 2];
    const dates = delta.map((delta) => {
      let day = new Date(today.getTime());
      day.setDate(today.getDate() + delta);      
      return day;
    });

    var dataByDates = {};
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      dataByDates[date.getTime()] = this.generateRandomData();
    }

    this.state = {
      currentDate: today,
      dataByDates: dataByDates,
    };
  }

  generateRandomData() {    
    let data = new Array(Math.floor(Math.random() * 11) + 20);
    for (let i = 0; i < data.length; i++) {
      data[i] = {
        'departure': '00:05',
        'arrival': '04:45',
        'cost': 4000 + i * 5,
        'key': i,
      }      
    }
    return data;
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
          dataByDates={this.state.dataByDates}
	 	  />
      </div>
    )
  }
}

export default AppBody;
