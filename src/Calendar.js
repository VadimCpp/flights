import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {month: 'April'};
  }
  
  render() {
    return (
      <div className="calendar">
        <div class="calendar-header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span class="month">          
            {this.state.month}
          </span> 
        </div>
        <div class="calendar-slider">
          TODO: calendar-slider
        </div>
      </div>
    )
  }
}

export default Calendar;
