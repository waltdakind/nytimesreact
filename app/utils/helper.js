/**
 * Created by Walter on 6/13/2016.
 */
var axios = require('axios');

var helper = {
    getSearchResults: function(topic,yearStart,yearEnd) {

        /*NYT ARTICLE SEARCH URI STRUCTURE*/
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
                'api-key': "1a5ef496ae3c4307aa3c9ed8b8e2b6d0",
                'q': topic,
                'begin_date': yearStart + "0000",
                'end_date': yearEnd + "1231",
            });

        console.log(url);

        return axios.get(url)
            .then(function(result){
                return {
                    results: result.data.response.docs
                }
            })
    }

};

module.exports = helper;