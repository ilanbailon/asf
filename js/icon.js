//crear iconos personalizados
var calicatas_icon =	L.icon({
		iconUrl		:"plugin/images/calicata.png",
		iconSize	: [20,20],
		iconAnchor	: [10,10],
		popupAnchor	: [0,-25],
	});
// iconos de interferencias electricas

var Medidor_icon =	L.icon({
		iconUrl		:"plugin/images/Medidor.png",
		iconSize	: [20,20],
	});
var PAT_icon =	L.icon({
		iconUrl		:"plugin/images/PAT.png",
		iconSize	: [20,20],
	});

var PBT_icon =	L.icon({
		iconUrl		:"plugin/images/PBT.png",
		iconSize	: [20,20],
	});

var PMT_icon =	L.icon({
		iconUrl		:"plugin/images/PMT.png",
		iconSize	: [20,20],
	});
var SEBP_icon =	L.icon({
		iconUrl		:"plugin/images/SEBP.png",
		iconSize	: [20,20],
	});

//Crear una funcion para tener el icono de interferencias eletcias------------------------------
function obtenerIconIE(feature){
	if(feature.properties.Tipo === "PAT" ){
		return PAT_icon;
	} else if (feature.properties.Tipo === "PBT" ){
		return PBT_icon;
	} else if (feature.properties.Tipo === "PMT" ){
		return PMT_icon;
	} else if (feature.properties.Tipo === "SUB ESTACION" ){
		return SEBP_icon;
	}
};

function cargarIconIE(feature,layer){
	layer.setIcon(obtenerIconIE(feature));
};
//----------------------------------------------------------------

var progresiva_icon = L.icon({
	iconUrl: "plugin/images/marker-icon.png", 
	iconSize: [10, 20],
});