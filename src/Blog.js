import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';

class Blog extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }
  render() {

    let authors = [
      <Author author={this.props.allAuthors[0]}/>,
      <Author author={this.props.allAuthors[1]}/>,
      <Author author={this.props.allAuthors[2]}/>
    ];

    /**
     * Bonus: using .map!
     * @type {Array}
     */
    // let authors = this.props.allAuthors.map( (author, index) => (
    //   <Author author={author} key={index} />
    // ));

    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{authors}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <p>{comments}</p>
      </div>
    );
  }
}

export default Blog;
