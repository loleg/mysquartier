mysquartier.kmlgen = {};

mysquartier.kmlgen.import = {
	regions : [
	  { 
			name: "Breitsch",
			kmltemplate: "data/breitsch.kmltemplate",
			poiKml : null
		}
	],

	pois : [],

  generatePOIs : function() {
			$.ajax({ url : "data/bern-poi.geojson", type : "GET", success : mysquartier.kmlgen.import.poiLoadComplete, dataType : "json" });
	},

	poiLoadComplete : function(data, textStatus, jqXHR) {
		var features = data.features,
		    i,
				pois = mysquartier.kmlgen.import.pois;

		/*
		for ( i = 0; i < features.length; i++) {
			var poi = {};
			poi.type = features[i].CATEGORY;
			poi.coordinates = {};
			poi.coordinates.x = features[i].coordinates[0];
			poi.coordinates.y = features[i].coordinates[1];
			
			pois.push(poi);
		}
		*/


		var poi = $.extend(true, {}, data);
		for ( i = 0; i < features.length; i++) {

		}

	},

	generateRegions : function() {
		var i,
		    regions = mysquartier.kmlgen.import.regions;

		for (i = 0; i < regions.length; i++) {
			$.ajax({ url : regions[i].kmltemplate, type : "GET", success : mysquartier.kmlgen.import.regionLoadComplete, dataType : "xml" });
		}
	},

	regionLoadComplete : function(data, textStatus, jqXHR) {
		alert( "data: " + data + "" + $(data).text().replace(/\$world/, "foobar"));
	},

	show : function(event) {
		alert("event: " + event.target.name);
	}
};


$(document).ready(function(){
	$("#Ausgang").change(mysquartier.kmlgen.import.show);
	$("#Restaurant").change(mysquartier.kmlgen.import.show);
	$("#Kindergarten").change(mysquartier.kmlgen.import.show);

  //mysquartier.kmlgen.import.generateRegions();
  mysquartier.kmlgen.import.generatePOIs();
});

