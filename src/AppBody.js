import React, { Component } from 'react';
import Calendar from './Calendar.js'
import Details from './Details.js'

class AppBody extends Component {
  render() {
    return (
      <div className="App-body">
        <Calendar />
		<Details />     
      </div>
    )
  }
}


export default AppBody;
