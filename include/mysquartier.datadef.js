mysquartier.constants = {};
mysquartier.constants.types = {};
mysquartier.constants.types.AUSGANG = "Ausgang";
mysquartier.constants.types.RESTAURANTS = "Restaurants";
mysquartier.constants.types.UMWELTVERSCHMUTZUNG = "Umweltverschmutzung";

mysquartier.data = {};
mysquartier.data.region = {
	id: null,
	name : null, // descriptive name presented to the user //FIXME: I18N
	point : null, // this is a mysquartier.data.point defining where descriptions are centered on the screen
	shape : null // this is a mysquartier.data.shape containing the region
};

mysquartier.data.datapoint = {
	id : null,
	regionId : null,
	type : null, // see: mysquartier.constants.types
	value : null // some float value
};


mysquartier.data.point = {
	x : 0,
	y : 0
};

mysquartier.data.shape = {
};

