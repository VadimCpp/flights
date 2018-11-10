import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './AppHeader.css';

class AppHeader extends Component {
  moveBack() {    
    window.location.href = 'https://github.com/VadimCpp/flights';
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-header_title"> 
          Прогноз погоды
        </h1>
        <p className="App-header_subtitle"> 
          с разбивкой по 3 часа, все как надо
        </p>
        <button 
          onClick={() => { this.moveBack()}}
          className="App-header_back"
        > 
          <FontAwesomeIcon icon={faChevronLeft} />
    	  </button>
      </header>
    )
  }
}


export default AppHeader;
