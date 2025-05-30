function tooltipBGR (feature, layer){
	if(feature.properties && feature.properties.PART_REG
							&& feature.properties.AA_TIT){
				var tooltipContent = 	"<b>Partida :</b> " + feature.properties.PART_REG	+
										"<br><b>Año :</b> " + feature.properties.AA_TIT;
				layer.bindTooltip(tooltipContent,{
					permanent: false,
					direction: "top",
					offset: [0,0],
					className: "tooptip_BGR_style",
				});		
//estilo 
				var resaltadoStyle ={
					color: "blue"
				};
//estilo originarl del poligono lo copias de los styes de bgr ps que esta en symbology
				var originalStyle ={
					color: "red",
					weight: 3,
					opacity	: 1,// 1 es igual a sin opacidad xd  es para la linea
					fillOpacity : 0.5,
//					dashArray: "5, 10, 1" 
				};
				//evento para resaltar cuando pase el mause e de eventos xd
				layer.on("mouseover",function(e){
					layer.setStyle(resaltadoStyle)
				});		
				//evento para resaltar cuando pase el mause sale del poligono
				layer.on("mouseout",function(e){
					layer.setStyle(originalStyle)
				});		
			}
};

function tooltipPredios (feature, layer){
	if(feature.properties && feature.properties.codigo_2){
				var tooltipContentPredios = 	"<b>Partida :</b> " + feature.properties.codigo_2;
				layer.bindTooltip(tooltipContentPredios,{
					permanent: false,
					direction: "center",
					offset: [0,0],
					className: "tooptip_predios_style",
				});		
//estilo 
				var resaltadoStyle_p ={
					color: "blue"
				};
//estilo originarl del poligono lo copias de los styes de bgr ps que esta en symbology
				var originalStyle_p ={
					color: "#00f4f8",
					weight: 3,
					opacity	: 1,// 1 es igual a sin opacidad xd  es para la linea
					fillOpacity : 0.3,
				};
				//evento para resaltar cuando pase el mause e de eventos xd
				layer.on("mouseover",function(e_p){
					layer.setStyle(resaltadoStyle_p)
				});		
				//evento para resaltar cuando pase el mause sale del poligono
				layer.on("mouseout",function(e_p){
					layer.setStyle(originalStyle_p)
				});		
			}
};

