import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import './Details.css';

class Details extends Component {

  render() {
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
                format="HH:mm"
              >
                {new Date(obj.dt * 1000)}
              </Moment>
            </span>
            {getTemperature(obj)}
          </p>
          <p className='details-item__secondary'>
            {getIcon(obj)}
            Ага-ага, это время дня <br />
            И еще строка для красоты
            
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
        <p className="details-title">
          <span> 
            В Калининграде
          </span>
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

  if (tempMin !== tempMax) {
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

function getIcon(obj) {
  const base = 'http://openweathermap.org/img/w/';
  const url = base + obj.weather[0].icon + '.png';

  return (
    <img 
      src={url} 
      alt={obj.weather[0].description} 
      className='details-item__icon'
      width='35'
      height='35'
    />
  );
}

export default Details;
