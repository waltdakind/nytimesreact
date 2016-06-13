/**
 * Created by Walter on 6/13/2016.
 */
var React = require('react');

var SearchResults = React.createClass({

    render: function(){

        console.log('--render called--');
        console.log(this.props.results);

        function item(result) {

            // moment to format date
            var date = moment(result.pub_date).format('lll');

            return(
                <li className="list-group-item" key={result._id}>
                    <div className="btn-group pull-right">
                        <a className="btn btn-default" href={result.web_url} target="_blank">View Article</a>
                        <a className="btn btn-primary">Save</a>
                    </div>
                    <h4><em>{result.headline.main}</em></h4>
                    <p>{date}</p>
                </li>
            )
        }

        return(
            <ul className="list-group">
                {this.props.results.map(item)}
            </ul>
        )
    }
});

module.exports = SearchResults;