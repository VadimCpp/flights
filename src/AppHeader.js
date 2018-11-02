import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-header-title"> Москва - Тюмень </h1>
        <p className="App-header-subtitle"> Шаг 1 из 5. Выберите рейс «Туда» </p>
      </header>
    )
  }
}


export default AppHeader;
