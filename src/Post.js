import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      body: props.body
    }
  }

  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  handleFormInput (e) {
    console.log(e);
    this.setState({
      body: e.target.value
    });
  }

  render() {

    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ];

    let allAuthors = [
      <Author body={this.props.authors[0]} />,
      <Author body={this.props.authors[1]} />,
      <Author body={this.props.authors[2]} />,
    ];

    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        {allAuthors}
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
          <input type="text" onChange={(e) => this.handleFormInput(e)} />
        </div>
        <strong>Comments:</strong>
        {allComments}
      </div>
    );
  }
}

export default Post;
