/**
 * Created by Walter on 6/13/2016.
 */
//Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

//reactDOM renderer
ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)