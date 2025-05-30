//crear una funcion para crear un pop up a la capa calicatas.js

function popupCalicatas(feature, layer) {
  if (feature.properties &&
      feature.properties.Codigo_de_calicata &&
      feature.properties.Progresiva &&
      feature.properties.Este &&
      feature.properties.Norte &&
      feature.properties.Cota_de_terreno_Natural &&
      feature.properties.Estratigrafia &&
      feature.properties.Profundidad_de_napa_freatica &&

      feature.properties.Este_Agua &&
      feature.properties.Norte_Agua &&
      feature.properties.Cota_Agua &&
      feature.properties.Profundidad__m__Agua &&
      feature.properties.Di__metro__mm__Agua &&
      feature.properties.Di__metro__plg__Agua &&
      feature.properties.Material_Agua &&
      feature.properties.Estado_de_conservaci__n_Agua &&
      feature.properties.Distancia_al_eje_de_la_carretera__m__Agua &&
      feature.properties.Distancia_a_la_acometida_domiciliaria__m__Agua &&

      feature.properties.Este_Desague &&
      feature.properties.Norte_Desague &&
      feature.properties.Cota_Desague &&
      feature.properties.Profundidad__m__Desague &&
      feature.properties.Di__metro__mm__Desague &&
      feature.properties.Material_Desague &&
      feature.properties.Estado_de_conservaci__n_Desague &&
      feature.properties.Distancia_al_eje_de_la_carretera__m__Desague &&
      feature.properties.Distancia_a_la_acometida_domiciliaria__m__Desague &&
      feature.properties.Observaciones &&
      feature.properties.Link_foto_360) {

    // Rutas de imágenes
    var ruta_img_calicata = 
      '<a href="images/calicatas/' + feature.properties.f1 + '.jpg" target="_blank">' +
        '<img src="images/calicatas/' + feature.properties.f1 + '.jpg" class="popup-img-calicatas">' +
      '</a>';
    var ruta_img_calicata2 = 
      '<a href="images/calicatas/' + feature.properties.f2 + '.jpg" target="_blank">' +
        '<img src="images/calicatas/' + feature.properties.f2 + '.jpg" class="popup-img-calicatas">' +
      '</a>';      
    var ruta_img_calicata3 = 
      '<a href="images/calicatas/' + feature.properties.f3 + '.jpg" target="_blank">' +
        '<img src="images/calicatas/' + feature.properties.f3 + '.jpg" class="popup-img-calicatas">' +
      '</a>';     
    var ruta_img_calicata4 = 
      '<a href="images/calicatas/' + feature.properties.f4 + '.jpg" target="_blank">' +
        '<img src="images/calicatas/' + feature.properties.f4 + '.jpg" class="popup-img-calicatas">' +
      '</a>';     

    // Contenido del popup con <details> y <summary>
    var popupHTML = `
      <style>
        details {
          margin-bottom: 8px;
          border: 1px solid #ccc;
          padding: 4px;
          border-radius: 4px;
        }
        details summary {
          cursor: pointer;
          font-weight: bold;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 4px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 4px;
          font-size: 13px;
          text-align: left;
        }
        .popup-img-calicatas {
          width: 60px;
          height: auto;
          margin: 2px;
        }
      </style>

      <details open>
        <summary>Datos Generales</summary>
        <table>
          <tr><th>Código</th><td>${feature.properties.Codigo_de_calicata}</td></tr>
          <tr><th>Progresiva</th><td>${feature.properties.Progresiva}</td></tr>
          <tr><th>Este</th><td>${feature.properties.Este}</td></tr>
          <tr><th>Norte</th><td>${feature.properties.Norte}</td></tr>
          <tr><th>Cota terreno Natural</th><td>${feature.properties.Cota_de_terreno_Natural}</td></tr>
          <tr><th>Estratigrafía</th><td>${feature.properties.Estratigrafia}</td></tr>
          <tr><th>Prof. Napa Freatica</th><td>${feature.properties.Profundidad_de_napa_freatica}</td></tr>
          <tr><th>Observaciones</th><td>${feature.properties.Observaciones}</td></tr>
        </table>
      </details>

      <details>
        <summary>Datos de Tuberia de Agua</summary>
        <table>

          <tr><th>Este</th><td>${feature.properties.Este_Agua}</td></tr>
          <tr><th>Norte</th><td>${feature.properties.Norte_Agua}</td></tr>
          <tr><th>Cota</th><td>${feature.properties.Cota_Agua}</td></tr>
          <tr><th>Profundidad (m)</th><td>${feature.properties.Profundidad__m__Agua}</td></tr>
          <tr><th>Diámetro mm</th><td>${feature.properties.Di__metro__mm__Agua}</td></tr>
          <tr><th>Diámetro plg</th><td>${feature.properties.Di__metro__plg__Agua}</td></tr>
          <tr><th>Material</th><td>${feature.properties.Material_Agua}</td></tr>
          <tr><th>Estado conservación</th><td>${feature.properties.Estado_de_conservaci__n_Agua}</td></tr>
          <tr><th>Dist. eje carretera</th><td>${feature.properties.Distancia_al_eje_de_la_carretera__m__Agua}</td></tr>
          <tr><th>Dist. acometida</th><td>${feature.properties.Distancia_a_la_acometida_domiciliaria__m__Agua}</td></tr>
        </table>
      </details>

      <details>
        <summary>Datos de Tuberia de Desagüe</summary>
        <table>

          <tr><th>Este</th><td>${feature.properties.Este_Desague}</td></tr>
          <tr><th>Norte</th><td>${feature.properties.Norte_Desague}</td></tr>
          <tr><th>Cota</th><td>${feature.properties.Cota_Desague}</td></tr>
          <tr><th>Profundidad (m)</th><td>${feature.properties.Profundidad__m__Desague}</td></tr>
          <tr><th>Diámetro mm</th><td>${feature.properties.Di__metro__mm__Desague}</td></tr>
          <tr><th>Material</th><td>${feature.properties.Material_Desague}</td></tr>
          <tr><th>Estado conservación</th><td>${feature.properties.Estado_de_conservaci__n_Desague}</td></tr>
          <tr><th>Dist. eje carretera</th><td>${feature.properties.Distancia_al_eje_de_la_carretera__m__Desague}</td></tr>
          <tr><th>Dist. acometida</th><td>${feature.properties.Distancia_a_la_acometida_domiciliaria__m__Desague}</td></tr>
          
        </table>
      </details>

      <div style="margin-top: 5px; text-align: center;">
        ${ruta_img_calicata}
        ${ruta_img_calicata2}
        ${ruta_img_calicata3}
        ${ruta_img_calicata4}
      </div>
      <tr>
            <th style="text-align: center !important;">
              <div style="width:100%; text-align: center;">Foto 360</div>
            </th>
            <td style="text-align: center !important;">
              <div style="width:100%; text-align: center;">
                <a href="${feature.properties.Link_foto_360}" target="_blank">Ver foto</a>
              </div>
            </td>
          </tr>
    `;

    // Vinculamos el popup con autoPan para centrarlo con un padding inferior mayor
    layer.bindPopup(popupHTML, {
      autoPan: true,
      autoPanPadding: [30, 100]
    });

    // Listener para centrar el mapa con un desplazamiento cuando se abra el popup y gestionar el acordeón
    layer.on('popupopen', function(e) {
      // Ajuste inicial al abrir el popup
      var markerLatLng = layer.getLatLng();
      var markerPoint = map.latLngToContainerPoint(markerLatLng);
      markerPoint.y += -250;
      var newLatLng = map.containerPointToLatLng(markerPoint);
      map.panTo(newLatLng, { animate: true });

      // Asegurarse de que solo un <details> esté abierto a la vez (comportamiento de acordeón)
      var popupEl = e.popup.getElement();
      var detailsList = popupEl.querySelectorAll('details');
      detailsList.forEach(function(detail) {
        detail.addEventListener('toggle', function() {
          if (this.open) {
            detailsList.forEach(function(otherDetail) {
              if (otherDetail !== detail) {
                otherDetail.removeAttribute('open');
              }
            });
            // Cada vez que se abre un <details>, se centra el mapa nuevamente con el mismo desplazamiento
            var markerPoint = map.latLngToContainerPoint(layer.getLatLng());
            markerPoint.y += -250;
            var newLatLng = map.containerPointToLatLng(markerPoint);
            map.panTo(newLatLng, { animate: true });
          }
        });
      });
    });
  }
}


function popupProgresivas(feature, layer){
	if(feature.properties && feature.properties.Text ){
		layer.bindPopup("<b>Prog.:</b> " + feature.properties.Text
			);
	}
};



function popupBGR(feature, layer){
	if(feature.properties && feature.properties.PART_REG
							&& feature.properties.AA_TIT){
				var popupContent = 	"<b>Partida :</b> " + feature.properties.PART_REG	+
										"<br><b>Año :</b> " + feature.properties.AA_TIT;
				layer.bindPopup(popupContent,{
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
					fillOpacity : 0.2,
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