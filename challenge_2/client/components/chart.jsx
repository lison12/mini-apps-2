import React from 'react';
import {Line} from 'react-chartjs-2';


const Chart = ({ bpi }) => {

  let dates = Object.keys(bpi);     // creates dates array from bpi object
  let prices = Object.values(bpi);    // creates prices array from bpi object
  // let prices = [];
  // dates.forEach(price => {          
  //   prices.push(bpi[price]);
  // });


  const data = {
    labels: dates,   // dates from bpi
    datasets: [
      {
        label: 'My Bitcoin Price Index (BPI)',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: prices      // prices from bpi
      }
    ]
  };

  return (
    <div>
      <h2>Crypto Chart</h2>
      <Line data={data} />
    </div>
  )

}

export default Chart;