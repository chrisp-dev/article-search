// var jumbo-head = document.getelementbyid();
// empty url: q tagged part is sample from NYT
// apiurl = https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet;

$(document).ready(function () {
    // on page load -> do nothing? wait for button click
    var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet&q=";

    // we want the clear and submit buttons
    let clearBtn = $('#clear');
    let searchBtn = $('#search');

    clearBtn.on('click', clearFormAndTopArticles);
    searchBtn.on('click', searchForArticles);

    function clearFormAndTopArticles() {
        event.preventDefault();
        // clear inputs
        // clear top articles div
    }

    function searchForArticles() {
        event.preventDefault();
        // populate query url
        let url = populateQueryUrl();

        $.get(url).then(response => console.log(response));
    }

    /**
     * Generate a queryurl to $.get
     */
    function populateQueryUrl() {
        // q / term
        let searchTerm = 'education'
        // if begin_date
        // if (true) searchTerm += '&begin_date=' + 2000;
        // if end_date
        // if (true) searchTerm += '&end_date=' + 2010;
        // number of records
        return apiurl + searchTerm;
    }

})
