import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Score from './score.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // score: '',
    };
  }

  render() {
    return (
      <div className='app-container'>
        <h3>Bowling Score App</h3>
        <Score />
      </div>
    );
  }
}

export default App;