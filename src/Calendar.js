import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './Calendar.css';

function SliderBody(props) {
  return (
    <div className="slider-body" style={props.styles}>
      Slider body
    </div>
  );
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 'April',
      position: 0,
      step: 100,
    };
  }
  
  swipeLeft() {
    const position = this.state.position - this.state.step;
    console.log('swipeLeft to ' + position);
    this.setState({
      position: position,
    });
  }

  swipeRight() {
    const position = this.state.position + this.state.step;
    console.log('swipeRight to ' + position);
    this.setState({
      position: position,      
    });
  }

  render() {    
    return (
      <div className="calendar">
        <div className="calendar-header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span className="month">          
            {this.state.month}
          </span> 
        </div>
        <button onClick={() => (this.swipeLeft())}>
          Left
        </button>
        <button onClick={() => (this.swipeRight())}>
          Right
        </button>
        <div className="calendar-slider">          
          <SliderBody styles={{left: this.state.position}} />
        </div>
      </div>
    )
  }
}

export default Calendar;
