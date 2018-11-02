import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {month: 'April'};
  }
  
  render() {
    return (
      <div className="calendar">
        <p class="month">
        	TODO: icon {this.state.month}
        </p> 
      </div>
    )
  }
}

export default Calendar;
