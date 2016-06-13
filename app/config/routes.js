/**
 * Created by Walter on 6/13/2016.
 */
var React = require('react');

/*REQUIRE COMPONENTS NEEDED FOR ROUTING*/
var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

/*USE NPM PACKAGE FOR ROUTING*/
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute  = Router.IndexRoute;

/*DECLARE ROUTE CONFIGURATION*/
module.exports = (
    <Route path="/" component={Main}>
        <Route path="search" component={Search} />
        <Route path="saved" component={Saved} />
        <IndexRoute component={Search} />
    </Route>
);