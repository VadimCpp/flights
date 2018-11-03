import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import Slider from './slider/Slider.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      position: 0,
      step: 100,
      today: new Date(),
    };
  }

  render() {    
    return (    
      <div className="calendar">
        <div className="calendar-header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <Moment 
            className="calendar-header_month"
            locale="ru"
            format="MMMM"
          >
            {this.state.today}
          </Moment>
        </div>
        <div className="calendar-slider">          
          <Slider />
        </div>
      </div>
    )
  }
}

export default Calendar;
