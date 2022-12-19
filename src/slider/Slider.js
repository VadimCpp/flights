import React, { Component } from 'react';
import Moment from 'react-moment';
import { motion } from 'framer-motion';
import 'moment/locale/ru';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstIdx: -2,
      lastIdx: 2,
    };
    this.scrollObjRef = React.createRef();
  }

  scrollHandler = (event) => {
    const element = event.target;
    const a = element.scrollWidth - element.offsetWidth;

    if (element.scrollLeft > a * 0.95) {
      this.setState({
        ...this.state,
        lastIdx: this.state.lastIdx + 5
      });
    }
  };
   
  componentDidMount() {
    this.scrollObjRef?.current?.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    this.scrollObjRef?.current?.removeEventListener('scroll', this.scrollHandler)
  }

  renderItem(idx) {
    let date = new Date();
    date.setDate(date.getDate() + idx);

    return (
      <motion.div
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        key={idx} 
        className="slider-item slider-item__fixed-width"
        onClick={() => this.props.onDateClick(date)}
      >
        <p>
          <Moment locale="ru" format="dd" className='slider-item_day'>
            {date}
          </Moment>
        </p>
        <p>
          {date.getDate() === this.props.currentDate.getDate() ? (
              <Moment locale="ru" format="D" className="selected-date calendar-header_date">
                {date}
              </Moment>
            ) : (
              <Moment locale="ru" format="D" className="calendar-header_date">
                {date}
              </Moment>
            )
          }
        </p>
        {date.getDate() === this.props.currentDate.getDate() &&
            <div className="selection-circle">
            </div>
        }
        <p>
          <br />
        </p>     
      </motion.div>
    )
  }

  renderItems() {
    const { firstIdx, lastIdx } = this.state;
    const items = [];
    for (let i = firstIdx; i <= lastIdx; i++) {
      items.push(this.renderItem(i));
    }
    return items;
  }

  render() {
    return (
      <div className="slider" ref={this.scrollObjRef}>
        { this.renderItems() }
      </div>
    );
  }
}


export default Slider;