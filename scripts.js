// var jumbo-head = document.getelementbyid();
// empty url: q tagged part is sample from NYT
var apiurl = https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet;
var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet&" + term;
// click handler for the text input from the search field
$().on("click", function(){
    var term = $(searchclassname).val();

})
