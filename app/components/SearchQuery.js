/**
 * Created by Walter on 6/13/2016.
 */
var React = require('react');

var SearchQuery = React.createClass({

    handleNewQuerySubmit: function(e) {

        /*PREVENT PAGE REFRESH*/
        e.preventDefault();

        /*GET FORM VALUES*/
        var queryTermValue = this.refs.queryTermInput.value;
        var startYearValue = this.refs.startYearInput.value.toString();
        var endYearValue = this.refs.endYearInput.value.toString();

        /*CLEAR FORM VALUES*/
        this.refs.queryTermInput.value = '';
        this.refs.startYearInput.value = '';
        this.refs.endYearInput.value = '';

        /*PASS FORM VALUES TO PARENT*/
        this.props.submitQuery(queryTermValue,startYearValue,endYearValue);

    },

    render: function() {
        return (
            <form onSubmit={this.handleNewQuerySubmit}>
                <div className="form-group">
                    <h4 className=""><strong>queryTerm</strong></h4>
                    <input type="text" className="form-control " ref="queryTermInput" />
                    <h4 className=""><strong>Start Year</strong></h4>
                    <input type="number" className="form-control " ref="startYearInput" />
                    <h4 className=""><strong>End Year</strong></h4>
                    <input type="number" className="form-control " ref="endYearInput" />
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
                </div>
            </form>
        )
    }
});

module.exports = SearchQuery;