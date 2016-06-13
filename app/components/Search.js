/**
 * Created by Walter on 6/13/2016.
 */
var React = require('react');

var SearchQuery = require('./SearchQuery');
var SearchResults = require('./SearchResults');
var helper = require('../utils/helper');




var Search = React.createClass({

    getInitialState: function() {

        return {
            results: {},

            queryTerm: '',
            startYear: '',
            endYear: ''
        }
    },

    handleQuerySubmit: function(queryTermValue,startYearValue,endYearValue) {

        console.log('QUERY: ' + queryTermValue + ' ' + startYearValue + ' ' + endYearValue);

        /*PASS VALUES TO HELPER FUNCTION*/
        helper.getSearchResults(queryTermValue,startYearValue,endYearValue)
            .then(function(data){
                this.setState({
                    results: data.results,
                    queryTerm: queryTermValue,
                    startYear: startYearValue,
                    endYear: endYearValue
                })
            }.bind(this));

    },

    render: function(){

        console.log('RENDER SEARCH');

        return(
            <div className="row">
                <div className="col-lg-12">

                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title"><strong>
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
                        </div>
                        <div className="panel-body">

                            <SearchQuery submitQuery={this.handleQuerySubmit} />

                        </div>
                    </div>


                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title"><strong>
                                <i className="fa fa-list-alt"></i>  Results</strong></h1>
                        </div>
                        <div className="panel-body">

                            <SearchResults results={this.state.results} />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Search;