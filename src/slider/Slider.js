import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import './Slider.css';

class Slider extends Component {
  render() {    
    const delta = [-2, -1, 0, 1, 2];
    const dates = delta.map((delta) => {
      let day = new Date(this.props.currentDate.getTime());
      day.setDate(this.props.currentDate.getDate() + delta);      
      return day;
    });
    const listItems = dates.map((date) =>
      <li key={date.toString()} className='slider-item'>
        <p>
          <Moment locale="ru" format="dd">
            {date}
          </Moment>
        </p>
        <p>
          {date.getTime() === this.props.currentDate.getTime() ? (
              <Moment locale="ru" format="D" className="selected-date">
                {date}
              </Moment>
            ) : (
              <Moment locale="ru" format="D">
                {date}
              </Moment>
            )
          }
        </p>
        <p>
          5 185+
        </p>      
      </li>
    );

    return (
      <ul className="slider">
        {listItems}
      </ul>
    )
  }  
}

export default Slider;
