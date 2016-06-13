/**
 * Created by Walter on 6/13/2016.
 */
var React = require('react');

var Saved = React.createClass({
    render: function(){
        return(

            <div className="row">
            <div className="col-lg-12">

            <div className="panel panel-primary">
            <div className="panel-heading">
            <h1 className="panel-title">
                <strong><i className="fa fa-list-alt"></i> Saved Articles</strong></h1>
            </div>
            <div className="panel-body">
            <ul className="list-group">

            </ul>
            </div>
            </div>

            </div>
            </div>
        )
    }

});

module.exports = Saved;