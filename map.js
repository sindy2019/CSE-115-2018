function setupMapData(input_array){
  var lat_array=[];
  var lon_array=[];
  var text_array=[];
  for(var i of input_array){
      lat_array.push(i[0]);
      lon_array.push(i[1]);
      text_array.push(i[2]);
  }

  var map_data={};
  map_data["type"]="scattermapbox";
  map_data["mode"]="markers";
  map_data["marker"]={"size":5, "color":"rgb(255,0,0)"};
  map_data["lat"]=lat_array;
  map_data["lon"]=lon_array;
  map_data["text"]=text_array;

  return [map_data]
}

function findCenter(input_array){
  var ret=[]
  var min_lat=1000;
  var max_lat=-1000;
  var min_lon=1000;
  var max_lon=-1000;
  for( var i of input_array){
      if(i[0]>max_lat){
          max_lat=i[0];
      }
      if(i[0]<min_lat){
          min_lat=i[0];
      }
      if(i[1]>max_lon){
          max_lon=i[1];
      }
      if(i[1]<min_lon){
          min_lon=i[1];
      }
  }
  return [(max_lat+min_lat)/2, (max_lon+min_lon)/2]
}


function setupMapLayout(input_array){
    var a = findCenter(input_array)[0];
    var b = findCenter(input_array)[1];
    var layout={"mapbox":{"style": "satellite-streets","zoom": 11, "center":{"lat": a, "lon": b}}};
    return layout;
}


function getMapParams(json_format_string){
  var input_array=JSON.parse(json_format_string);
  return {"data":setupMapData(input_array),"layout":setupMapLayout(input_array)};
}

// Plotly.setPlotConfig({
//   mapboxAccessToken: 'pk.eyJ1Ijoic2luZHlsdW8yMDE4IiwiYSI6ImNqbjdsa3E4dDA2cDQzcnBiZDQwNnRoemMifQ.EF6TR0QmuGGf-tUUwrRA0Q'
// })
// var mapParams = getMapParams(JSON.stringify([[20.3,-56.8, "test point 1"],[26.3,-59.8, "test point 2"],[21.3,-50.8, "test point 3"]]));
// Plotly.plot('myDiv', mapParams.data, mapParams.layout); 