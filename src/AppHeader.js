import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-header_title"> 
        	<span className="App-header_title__departure">Москва</span> 
        	<FontAwesomeIcon icon={faPlane} /> 
        	<span className="App-header_title__arrival">Тюмень</span>
    	</h1>
        <p className="App-header_subtitle"> Шаг 1 из 5. Выберите рейс «Туда» </p>
      </header>
    )
  }
}


export default AppHeader;
