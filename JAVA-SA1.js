fetch('"SA1_BLACKTOWN.geojson"')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map); 
    });
