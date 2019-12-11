// var jumbo-head = document.getelementbyid();
// empty url: q tagged part is sample from NYT
// apiurl = https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet;

$(document).ready(function () {
    // on page load -> do nothing? wait for button click
    var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet&q=";

    // we want the clear and submit buttons
    let clearBtn = $('#clear');
    let searchBtn = $('#search');
    let topArticleDiv = $('.inputAPI');

    clearBtn.on('click', clearFormAndTopArticles);
    searchBtn.on('click', searchForArticles);

    function clearFormAndTopArticles() {
        event.preventDefault();
        // clear inputs
        // clear top articles div
        let form = document.forms[0];
        console.log(form);
        form.reset();
        topArticleDiv.empty();
    }

    function renderTopArticles(data) {
        console.log(data.docs);
        // data.docs[0].headline.main = 'title'
        // data.docs[0].byline.original = 'By Author Name'

        let articles = data.docs;

        articles.forEach((article, i) => {
            let dl = i % 2 === 0 ? 'bg-dark text-white-50' : 'bg-light';
            let div = $('<div class=row>');
            div.addClass(dl);
            let col = $('<div class=col>');
            let jumbo = $('<div class="h3 col-12">');
            jumbo.text((i + 1) + " " + article.headline.main);
            col.text(article.byline.original);
            div.append(jumbo, $('<br>'), col);
            topArticleDiv.append(div);
        });
    }

    function searchForArticles() {
        event.preventDefault();
        // populate query url
        let url = populateQueryUrl();

        $.get(url).then(response => {
            renderTopArticles(response.response);
        });
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
