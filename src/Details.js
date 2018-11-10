import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import './Details.css';

class Details extends Component {

  render() {
    const date = this.props.date;
    const weather = this.props.weather;
    let view;

    if (weather.status === 'wait') {
      view = (
        <div className="details-item">
          <p className="details-item__secondary">
            Загружаем...
          </p>
        </div>
      );
    } else if (weather.status === 'done' && weather.data) {
      let listItems = weather.data.map((obj) => (
        <li
          key = {obj.dt}
          className = 'details-item'
        >
          <p className='details-item__headline'>
            <span className='details-item__time'>
              <Moment               
                locale="ru"
                format="HH:MM"
              >
                {new Date(obj.dt * 1000)}
              </Moment>
            </span>
            {getTemperature(obj)}
          </p>
          <p className='details-item__secondary'>
            Ага-ага, это время дня
          </p>
          <p className='details-item__secondary'>
            {obj.weather[0].description}
          </p>
        </li>
      ));    

      view = (
        <ul className="details-slider">
          {listItems}
        </ul>
      );
    } else {
      view = (
        <div className="details-item">
          <p className="details-item__secondary">
            Нет данных :(
          </p>
        </div>
      );      
    }

    let listItems = [];
    // if (data) {
    //   listItems = data.map((obj) => (
    //     <li
    //       key = {obj.key}
    //       className = 'details-item'
    //     >
    //       <p className='details-item__headline'>
    //         <span className='details-item__time'>
    //           {obj.departure} → {obj.arrival}
    //         </span>
    //         <span className='details-item__cost'>
    //           <small> от </small> {obj.cost} ₽
    //         </span>
    //       </p>
    //       <p className='details-item__secondary'>
    //         Внуково, VKO - Рощино, TJM
    //       </p>
    //       <p className='details-item__secondary'>
    //         Время в пути: 2 ч 40 мин
    //       </p>
    //     </li>
    //   ));
    // }

    return (
      <div className="details">

        <p className="details-title">
          <span> 
            Погода&nbsp;
          </span>
          <Moment 
            className="details-title_date"
            locale="ru"
            format="DD MMMM"
          >
            {this.props.date}
          </Moment>
        </p>

        <div>
          {view}
        </div>
      </div>
    )
  }
}

function toCelcius(temperature) {
  let result = Math.round(temperature - 273.15);
  return result > 0 ? '+' + result + '' : '' + result + '';
};

function getTemperature(obj) {
  const tempMin = toCelcius(obj.main.temp_min);
  const tempMax = toCelcius(obj.main.temp_max);

  if (tempMin != tempMax) {
    return (
      <span className='details-item__cost'>
        {tempMin}..{tempMax}
      </span>
    );
  }

  return (
    <span className='details-item__cost'>
      {tempMin}
    </span>
  );
};

export default Details;
