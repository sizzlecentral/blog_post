import React, {Component} from 'react';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      movieTitle: '',
      movieDirector: '',
      movieSummary: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
    console.log('Your search query is' + this.state.searchQuery);
  }

  handleSubmit(event) {

    let base = this;

    let withSpaces = this.state.searchQuery.replace(/%20/g, " ");

    this.setState({searchQuery: withSpaces});

    console.log('You are adding the following movie: ' + this.state.searchQuery);

    fetch('http://netflixroulette.net/api/api.php?title=' + this.state.searchQuery)
      .then(function(response) {
        console.log(response);
        return response.json()
      }).then(function(json) {
        console.log('Parsed JSON', json)
        base.setState({
          movieTitle: json.show_title,
          movieDirector: json.director,
          movieSummary: json.summary,
         })
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Error! ' + ex);
      });

    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get this movie!" />

        <p>{this.state.movieTitle}</p>
        <p>Directed by {this.state.movieDirector}</p>
        <p>{this.state.movieSummary}</p>
      </form>
    );
  }
}

export default Movie;
