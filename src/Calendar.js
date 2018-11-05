import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import Slider from './slider/Slider.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './Calendar.css';

class Calendar extends Component {
  onDateClick(date) {
    this.props.onDateChange(date);    
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
            {this.props.date}
          </Moment>
        </div>
        <div className="calendar-slider">          
          <Slider 
            currentDate={this.props.date}
            onDateClick={(date) => {this.onDateClick(date)}}
          />
        </div>
      </div>
    )
  }
}

export default Calendar;
