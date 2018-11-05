import React, { Component } from 'react';
import './Details.css';

class Details extends Component {

  render() {
    const dataByDates = this.props.dataByDates;
    const date = this.props.date;
    const data = dataByDates[date.getTime()];

    console.log(dataByDates);
    console.log(date);
    console.log(data);

    let listItems = [];
    if (data) {
      listItems = data.map((obj) => (
        <li
          key = {obj.key}
          className = 'details-item'
        >
          <p className='details-item__headline'>
            <span className='details-item__time'>
              {obj.departure} → {obj.arrival}
            </span>
            <span className='details-item__cost'>
              <small> от </small> {obj.cost} ₽
            </span>
          </p>
          <p className='details-item__secondary'>
            Внуково, VKO - Рощино, TJM
          </p>
          <p className='details-item__secondary'>
            Время в пути: 2 ч 40 мин
          </p>
        </li>
      ));
    }
    return (
      <div className="details">
        <p className="details-title">Прямые рейсы</p>
        <ul className="details-slider">
          {listItems}
      	</ul>
      </div>
    )
  }
}

export default Details;
