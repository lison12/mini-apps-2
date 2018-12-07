import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      currency: '',
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    const { start, end } = this.state;
    this.props.getData(start, end)
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <input type='date' name='start' onChange={this.handleChange} />
        <input type='date' name='end' onChange={this.handleChange} />
        <button onClick={this.handleSubmit} >Submit</button>
      </div>

    )
  }
}

export default Search;