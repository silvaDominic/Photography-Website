document.domain = "localhost";
var url = "http://localhost:8080/port-jeff-album/";
console.log($.ajax());

$.getJSON(url, function(data){
	var items = [];
	$.each(data.images, function(key, val){
	items.push("<img src = \"" + url + JSON.parse(val).filename + "\"/>")
	console.log(url + JSON.parse(val).filename);
	console.log(JSON.parse(val).filename);
});

  $( "<div/>", {
    "class": "galleria",
    html: items.join( "" )
  }).appendTo( "body" );
});

if (Galleria) {
    Galleria.loadTheme('../galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');
}
