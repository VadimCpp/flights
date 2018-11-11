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
  hidden: { opacity: 0.1 }
});    

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  onDateClick(date) {
    this.setState({isVisible: false});
    setTimeout(() => {
      this.props.onDateChange(date);
      this.setState({isVisible: true});
    }, 100);
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
          <button            
            onClick={() => { this.onDateClick(this.props.today)}}
            className="calendar-header_todaylink"
          >
            Сегодня
          </button>
        </div>
        <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}>
          <div className="calendar-slider">          
            <Slider 
              currentDate={this.props.date}
              onDateClick={(date) => {this.onDateClick(date)}}
            />
          </div>
        </Box>
      </div>
    )
  }
}

export default Calendar;
