window.onload = () => {
  L.Icon.Default.prototype.options.iconUrl = "images/marker-icon.png";
  L.Icon.Default.prototype.options.iconRetinaUrl = "images/marker-icon-2x.png";
  L.Icon.Default.prototype.options.shadowUrl = "images/marker-shadow.png";
  var map = L.map('map').setView([9.911657797094934, -84.02942419052123], 18);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  fetch('/output.json').then(response => {
    response.json().then(response => {
      L.geoJson(response, {
        onEachFeature: function(feature, layer) {
          if (feature.properties.etiqueta !== undefined && feature.properties.etiqueta !== null) {
            layer.bindPopup(feature.properties.etiqueta)
          }
        }
      }).addTo(map)
    })
  })
}

