'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <p>React is a thing</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
      </div>
    );
  }
});

module.exports = Home;
