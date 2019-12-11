// var jumbo-head = document.getelementbyid();
// empty url: q tagged part is sample from NYT
// apiurl = https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet;
var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=ibDCUlr0NbVM7oh6s6RIiAubOTmpKaet&q=";

// click handler for the text input from the search field
$().on("click", function(){
    var term = $(searchclassname).val(); // generic name
    apiurl += term;   
})
// click handler for the numer of articles wanted
$().on("click", function(){
    var num = $(numberclassname).val(); // generic name
})

// click handler for the start year
$().on("click", function(){
    var start = $(startclassname).val(); // generic name   
})