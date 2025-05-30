//crear un objeto mapa 
var map = L.map("mapa", {
  attributionControl: false
}).setView([-14.67594, -70.36064], 12);


// enlazar el open street map
var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:21});
var sat = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',{maxZoom:21});
var black = L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{maxZoom:21});
var hib = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',{maxZoom:21}).addTo(map);
//Enlazar archivos GeoJson -------------------------------------------------------------------

//var ciudades_mundo =L.geoJSON(ciudades_mundo).addTo(map);
//var paises_mundo = L.geoJSON(paises_mundo) ;

//--------------------------
var derecho_via = L.geoJSON(derecho_via,{style: derecho_via_style}) . addTo(map);

//----------------------------
var predios = L.geoJSON(predios,{
									style:predios_style,
									onEachFeature:tooltipPredios,
				}) ;
//---------------------

//-------------------------

var BGR = L.geoJSON(BGR,{
						style:BGR_style,
						onEachFeature: popupBGR,
				}) ;
//-----------------------

var cluster_cal= L.markerClusterGroup();
var calicatas = L.geoJSON(calicatas3, {
  pointToLayer: function(feature, latlng) {
    // Creamos el marcador con el ícono deseado
    var marker = L.marker(latlng, {
      icon: calicatas_icon
    });

    // Asignamos la etiqueta permanente con la propiedad Text
    marker.bindTooltip(feature.properties.Codigo_de_calicata, {
      permanent: true,   // Muestra la etiqueta siempre
      direction: 'right' // Ajusta la dirección si lo deseas ('auto', 'center', etc.)
    });

    // Devolvemos el marcador para que se agregue al mapa
    return marker;
  },
     onEachFeature: popupCalicatas // el pop up que creamos en popups.js xd
});

cluster_cal.addLayer(calicatas);
map.addLayer(cluster_cal); //aniadir el cluster al mapa base


// aniadir archivos ie con cluster-------------------------------
var cluster_IE= L.markerClusterGroup();

var inter_elect= L.geoJSON(inter_elect,{
										onEachFeature: cargarIconIE

}) ;
	 
cluster_IE.addLayer(inter_elect);

//----------------------------------------------------------------

//Crear un control de busqueda de atributos de una capa GeoJSON (Search-Control)
//https://github.com/stefanocudini/leaflet-search
// Crear la capa pero no agregarla al mapa directamente
var capaProgresivas = L.geoJSON(progresivas, {  
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: progresiva_icon,
      opacity: 0  // oculto inicialmente
    });
  },
  onEachFeature: popupProgresivas
}).addTo(map);

// (Opcional) Si quieres tener un grupo de búsqueda:
// var grupoBusqueda = L.layerGroup([capaProgresivas]);

// Crear el control de búsqueda usando la capa
var searchControl = new L.Control.Search({
  layer: capaProgresivas,
  propertyName: "Text",
  moveToLocation: function(latlng, title, map) {
    if (latlng.layer.getBounds) {
      var zoom = map.getBoundsZoom(latlng.layer.getBounds());
      map.setView(latlng, zoom);
    } else if (latlng.layer.getLatLng) {
      map.setView(latlng, 18);
    }
  },
  marker: false
}).addTo(map);

// Evento para resaltar el resultado y mostrar el popup
searchControl.on('search:locationfound', function(e){
  // Si es un marcador, no se puede usar setStyle; en su lugar, cambiamos la opacidad o el icono
  if(e.layer.setOpacity){
    e.layer.setOpacity(1); // hacer visible el marcador buscado
  }
  if (e.layer.getPopup()) {
    e.layer.openPopup();
  }
}).on('search:collapsed', function(e){
  // Al colapsar la búsqueda, volvemos a ocultar los marcadores
  capaProgresivas.eachLayer(function(layer){
    if(layer.setOpacity){
      layer.setOpacity(0);
    }
  });
});





//----------------------------------------------------------------

console.log(calicatas2);
//controlador de capas--------------------------------------

var mapas_base = {
				"Desactivar Mapa Base" : L.layerGroup([]),
				"openstreetmap":osm,
				"Google Satelite":sat,
				"Google Hibrid":hib,
				"Blanco y Negro":black,				
				};
// controlador de capas jojojo que son en realidad tus geojson 

var leyenda = {

				"Derecho de Vía" : derecho_via,
				//"Predios" : predios,	
				//"Base Grafica Registral" : BGR,			
				"Calicatas" : cluster_cal,
				//"Inter. Electricas" : cluster_IE, // es cluster por que ese alberga al ins electricas xd 
				"Progresivas" : capaProgresivas,
};

L.control.layers(mapas_base,leyenda).addTo(map);


// ubicacion gps 

L.control.locate({
					position			: "topleft",
					strings				: {
											title: "Mostrar mi ubicación"
					},
					locateOptions		: {
											maxZoom: 20
					},
    				keepCurrentZoomLevel: true,
    				flyTo				: true,
    				setView				: true
}).addTo(map);