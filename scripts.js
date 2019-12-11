$(document).ready(function () {
    // on page load -> do nothing? wait for button click

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
    }

    // empty url: q tagged part is sample from NYT
    var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet&q=";
    // click handler for the text input from the search field
    $().on("click", function () {
        var term = $(searchclassname).val();

    })
})
