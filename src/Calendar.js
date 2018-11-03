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
      currentDate: new Date(),
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
            {this.state.currentDate}
          </Moment>
        </div>
        <div className="calendar-slider">          
          <Slider currentDate={this.state.currentDate}/>
        </div>
      </div>
    )
  }
}

export default Calendar;
