import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Movie from './Movie.js';
import Food from './Food.js';
import './App.css';

const post = {
  title: "Baby's first post",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny trex",
    "Iguanadon Ivory"
  ],
  body: "look at me i'm a posting baby!",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">My Blog</Link></li>
        <li><Link to="/about">About moi</Link></li>
        <li><Link to="/movie">The best movie</Link></li>
        <li><Link to="/food">Favourite Food</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/movie" component={Movie}/>
      <Route exact path="/food" component={Food}/>
      <Route path="/blog" component={
        () => (<Blog title={post.title}
                  allAuthors={post.authors}
                  body={post.body}
                  comments={post.comments} />
        )}/>
    </div>
  </Router>
)

export default App;
