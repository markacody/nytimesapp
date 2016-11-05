var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var q = '';
var beginDate = '';
var endDate = '';

queryURL += '?' + $.param({
  'api-key': "e796d49b53714bef9e51cd90df118570",
  'q': validateSearch()
  'begin_date': beginDate
  'end_date': endDate
});


function validateSearch(){
var search = $("#searchField").data("search", this.val());

	if (search === "null"){

		alert("Not a real search");
		return;
	}

	else{

		return $("#search").data('search');

	}


}

$.ajax({url: queryURL, method: 'GET'}).done(function(){

	

})