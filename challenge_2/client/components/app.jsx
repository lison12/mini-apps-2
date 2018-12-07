import React from 'react';
import axios from 'axios';
import Chart from './chart.jsx';
import Search from './search.jsx';
// import {Line} from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: {},
    };
    this.getData = this.getData.bind(this);
  }

  
  componentDidMount() {
    this.getData(0, 0);
  }

  getData(start, end) {
    axios.get(`/coindata/${start}/${end}`)
      .then(data => {
        // console.log(data.data.bpi);
        this.setState({
          bpi: data.data.bpi,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render () {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <Search getData={this.getData} />
        <Chart bpi={this.state.bpi} />
        <h6>"Powered by CoinDesk"</h6>
      </div>
    )
  }

}


export default App;