import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import './Slider.css';

class Slider extends Component {
  render() {    
    return (
      <ul className="slider">
        <li>
          <p>
            <Moment locale="ru" format="dd">
              {this.props.currentDate}
            </Moment>
          </p>
          <p>
            <Moment locale="ru" format="D">
              {this.props.currentDate}
            </Moment>
          </p>
          <p>
            TODO: price
          </p>
      	</li>
      </ul>
    )
  }  
}

export default Slider;
