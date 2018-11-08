import React, { Component } from 'react';
import posed from 'react-pose';
import Moment from 'react-moment';
import 'moment/locale/ru';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Slider from './slider/Slider.js';
import './Calendar.css';

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});    

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

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
        <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}/>
      </div>
    )
  }
}

export default Calendar;
