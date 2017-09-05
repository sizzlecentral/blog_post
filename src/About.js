import React, { Component } from 'react';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      highTemp: 0,
      lowTemp: 0,
      city: '',
      description: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value});
    console.log('Your zip code is' + this.state.zipcode);
  }

  handleSubmit(event) {

    let base = this;

    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('Parsed JSON', json)
        // update state
        base.setState({
          city: json.name,
          description: json.weather[0].description,
          highTemp: json.main.temp_max,
          lowTemp: json.main.temp_min
        });
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Err! ' + ex);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        Check out what I can do! See what the weather is where you are.
      <form onSubmit={this.handleSubmit}>
        <p>
          {this.state.city}: currently {this.state.description} with a high of {this.state.highTemp} degrees and a low of {this.state.lowTemp} degrees.
        </p>
        <label>
          Please enter your zip code for the weather:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get my forecast!" />
      </form>
      </div>
    );
  }
}


export default About;
