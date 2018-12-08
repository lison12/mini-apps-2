import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      score: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      frame: 0,
      bowls: 0,
      turn: 2,
      strike: false,
      spare: false,
      pinsUp: 10,
      pinsHit: [0,1,2,3,4,5,6,7,8,9,10],
    };
  }
  //most 10 frames + 1 (either 1 or 2 bowls each)
  //max score 300 points
  // () => {alert('You win!')}

  handleBowl(pin) {
    const { score, frame, bowls, turn, strike, spare, pinsUp, pinsHit } = this.state;
    console.log(pin)
    if (pin < 10) {
      //
    }
    if (pin === 10) {
      // 
      this.setState({})
    }
  }

  render() {
    const { score, frame, bowls, turn, pinsUp, pinsHit } = this.state;
  
    return (
      <div className='score-container'>
        <h3> Scoreboard </h3>
        <div> score: {score} </div>
        <div> frame: {frame} </div>
        <div> turn: {turn} </div>
        <div> bowls: {bowls} </div>
        <div> pinsUp: {pinsUp} </div>
        { pinsHit.map((score, i) => (
          <span key={i}>
            <button className='score' onClick={() => this.handleBowl(score)}>{score}</button>
          </span>
        )) }
      </div>
    )
  }
}

export default Score;