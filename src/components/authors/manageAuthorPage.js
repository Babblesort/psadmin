'use strict';

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {}
    };
  },
  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },
  authorFormIsValid: function() {
    var isValid = true;
    this.state.errors = {};
    if (this.state.author.firstName.length < 1) {
      this.state.errors.firstName = 'First name must be at least 1 character';
      isValid = false;
    }
    if (this.state.author.lastName.length < 1) {
      this.state.errors.lastName = 'Last name must be at least 1 character';
      isValid = false;
    }
    this.setState({ errors: this.state.errors });
    return isValid;


  },
  saveAuthor: function(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved.');
    this.transitionTo('authors');
  },
  render: function() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageAuthorPage;
