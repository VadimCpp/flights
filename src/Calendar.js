import React, { Component } from 'react';
import Slider from './slider/Slider.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 'April',
      position: 0,
      step: 100,
    };
  }

  render() {    
    return (
      <div className="calendar">
        <div className="calendar-header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span className="calendar-header_month">          
            {this.state.month}
          </span> 
        </div>
        <div className="calendar-slider">          
          <Slider />
        </div>
      </div>
    )
  }
}

export default Calendar;
