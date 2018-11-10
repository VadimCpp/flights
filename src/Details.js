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
        <p class="details-item__secondary">
          Загружаем...
        </p>
      );
    } else if (weather.status === 'done') {
      view = (
        <p>
          TODO:
        </p>
      );
    } else {
      view = (
        <p>
          Ошибка загрузки данных :(
        </p>
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

        <ul className="details-slider">
          {listItems}
      	</ul>
        
      </div>
    )
  }
}

export default Details;
