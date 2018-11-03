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

  scrollLeft() {
    let prevDay = this.state.currentDate;
    prevDay.setDate(prevDay.getDate() - 1);
    this.setState({ currentDate: prevDay });
  }

  scrollRight() {
    let nextDay = this.state.currentDate;
    nextDay.setDate(nextDay.getDate() + 1);
    this.setState({ currentDate: nextDay });
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
          <button onClick={() => this.scrollLeft()}> Left </button>
          <button onClick={() => this.scrollRight()}> Right </button>
        </div>
        <div className="calendar-slider">          
          <Slider currentDate={this.state.currentDate}/>
        </div>
      </div>
    )
  }
}

export default Calendar;
