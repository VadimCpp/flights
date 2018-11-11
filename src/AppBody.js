import React, { Component } from 'react';
import Calendar from './Calendar.js'
import Details from './Details.js'
import './AppBody.css';

class AppBody extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      currentDate: today,
      today: today,
      weather: {
        status: 'wait',
        data: null,
      },
    };
  }

  componentDidMount() {
    this.getWeather(this.state.currentDate);
  }

  onDateChange(date) {
    let currentDay = this.state.currentDate;

    if (date.getDate() === currentDay.getDate())
      return;

    this.setState({ 
      currentDate: date,
      weather: {
        status: 'wait',
        data: null,
      },
    });

    this.getWeather(date);    
  }

  getWeather(date) {
    // Я вообще против хранения всяких ключей в репозитории,
    // но в данном случае оставлю ключ публичным.
    // 
    // NOTE!
    // Так же как в тестовых заданиях составляющий не предоставляет ключи,
    // так же и среднестатистический клиент завязывает разные реги на 
    // программиста и потом страдает.
    //
    // http://api.openweathermap.org/
    // Login: vadim.cpp at gmail.com 
    //
    const apiKey = '1c399c23302f8d89aafc5eede93a843c';
    const city = 'Kaliningrad,ru';
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey;
    const that = this;

    fetch(url)
    .then(function(response) {      
      return response.json();
    })
    .then(function(responseJson) {
      console.log(responseJson);

      let weatherDataFound = false;
      let weatherData = [];

      if (responseJson.list) {
        for (let i = 0; i < responseJson.list.length; i++) {
          const listItem = responseJson.list[i];          
          const listItemDate = new Date(listItem.dt * 1000);

          if (listItemDate.getDay() === date.getDay() &&
              listItemDate.getMonth() === date.getMonth() &&
              listItemDate.getYear() === date.getYear()) {
            
            weatherDataFound = true;
            weatherData.push(listItem);
          }          
        }
      }

      if (weatherDataFound) {
        that.setState({ 
          currentDate: date,
          weather: {
            status: 'done',
            data: weatherData,
          },
        });
      } else {
        that.setState({ 
          currentDate: date,
          weather: {
            status: 'error',
            data: null,
          },
        });      
      }
    });    
  }

  render() {
    return (
      <div className="App-body">
        <Calendar 
          date={this.state.currentDate}
          onDateChange={(date) => {this.onDateChange(date)}}
          today={this.state.today}
      	/>
    		<Details
            date={this.state.currentDate}
            weather={this.state.weather}
  	 	  />
      </div>
    )
  }
}

export default AppBody;
