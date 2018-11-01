import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
  render() {
    return (      
      <div className="App">
        <AppHeader />
      </div>
    );
  }
}

export default App;
