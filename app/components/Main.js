/**
 * Created by Walter on 6/13/2016.
 */
var React = require('react');

var Main = React.createClass({
    render: function(){
        return (
            <div className="container">

            {/*<!-- Navbar -->*/}
            <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">NY Times React</a>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
            <li><a href="#/search">Search</a></li>
            <li><a href="#/saved">Saved Articles</a></li>
        </ul>
        </div>{/*<!-- /.navbar-collapse -->*/}
        </div>
        </nav>

        {/*<!-- Jumbotron -->*/}
        <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
        <h3 className="text-center">Search for and save articles of interest.</h3>
        </div>

        {this.props.children}
        </div>
        )
    }
});

module.exports = Main;