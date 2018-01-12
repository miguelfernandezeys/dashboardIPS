/***************************** 
	Libreria D3.js
	Cristhian Plazas Ortega
	cristhianplaza.o@gmail.com
*////////////////////////////

// Table Library
function table(dataset, columnas, container){  

  var tbody = d3.select(container).append('tbody');

  var rows = tbody.selectAll("tr")
    .data(dataset)
    .enter()
    .append("tr")
    .text(function(column) { //return column;
       return column.id + " " + column.name;
     });

  var cells = rows.selectAll("td")
    .data(function(row){
      return columnas.map(function(column){
        return {column:column, value:row[column]};
      });
    })
    .enter()
    .append("td")

    return tbody;
}

// Donut Library
function donut(dataset, container) {
  var width = 100,
      height = 100,
      radius = Math.min(width, height) / 2;

  var color  = d3.scale.ordinal()
      .range(["#f39d41","#4682b4"]);

  var pie = d3.layout.pie()
      .sort(null);

  var arc = d3.svg.arc()
      .innerRadius(radius - 5)
      .outerRadius(radius - 10);

  var svg = d3.select(container).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var path = svg.selectAll("path")
      .data(pie(dataset.apples))
      .enter().append("path")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc);

  svg.append("text")
    .text(dataset.apples[0]+"/"+dataset.apples[1])
    .attr("class", "units-label")
    .attr("x", radius/20-25)
    .attr("y", radius/5)
    .attr("font-size", 25);
}

function tabla(){
  var datasetmal = [
        { 
          "id":1,
          "name":"Clinica 1"
        },
        {
          "id":2,
          "name":"Clinica 2"
        },
        {
          "id":3,
          "name":"Clinica 3"
        }
    ];
d3.select(".tablaips").selectAll("tr").data(datasetmal).enter().append("tr").attr("class","ipsre");
d3.selectAll(".ipsre").append("td").attr("class",function(d,i){return "id";});
d3.selectAll(".ipsre").append("td").attr("class",function(d,i){return "ips";});
  d3.selectAll(".id").data(datasetmal).text(function(d){return d.id;});
  d3.selectAll(".ips").data(datasetmal).text(function(d){return d.name;});

d3.select(".goodbutton").on("click",function(){
   var dataset = [
        { 
          "id":4,
          "name":"Clinica 4"
        },
        {
          "id":5,
          "name":"Clinica 5"
        },
        {
          "id":6,
          "name":"Clinica 6"
        }
    ];

 d3.selectAll(".id").data(dataset).text(function(d){return d.id;});
  d3.selectAll(".ips").data(dataset).text(function(d){return d.name;});
});

d3.select(".badbutton").on("click",function(){
   var dataset = [
        { 
          "id":4,
          "name":"Clinica 4"
        },
        {
          "id":5,
          "name":"Clinica 533"
        },
        {
          "id":6,
          "name":"Clinica 6"
        }
    ];

 d3.selectAll(".id").data(datasetmal).text(function(d){return d.id;});
  d3.selectAll(".ips").data(datasetmal).text(function(d){return d.name;});
});


}

