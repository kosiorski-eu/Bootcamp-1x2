(function($) {

    $(document).ready(function() {
		
		//wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”
		var div = $("div.grid, div.grid-12");
		
		//wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”
		var a = $(".nav a[href^='http']");
		
		//wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked)
		var input = $("input[type='radio'], input[type='checkbox']").not(":checked");
		
		//wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text“
		var p = $("div#text p:first:empty");
		
		//wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
		var i = $(":not(span).pagination-item");

    });

})(jQuery);


















