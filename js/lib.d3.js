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

function scatterheat(dataset, container){
  var margin = {
                top: 20, 
                right:20, 
                bottom: 20, 
                left: 20
              },
              height = 300 - margin.top - margin.bottom;
              width = parseInt(d3.select(container).style("width")) - margin.left - margin.right;
          
  var max_ = new Array();
  var min_ = new Array(); 
  for(let i = 0 ; i <= data.length-1 ; i ++){      
      max_[i] = d3.max(d3.values(data[i]));
      min_[i] = d3.min(d3.values(data[i]));
  }

  var max = Math.max(...max_);
  var min = Math.min(...min_);

  var heat = d3.scale.linear()
    .domain([0,max,min])  
    .range(['#1B5AD9', '#D9401B']); 
    //#46EDD6 
    //#F86A52
  var x = d3.scale.linear()
    .domain([d3.min(data, function(d){return d[0]}), d3.max(data, function(d) { return d[0]; })])
    .range([ 0, width ]);
    
  var y = d3.scale.linear()
    .domain([d3.min(data, function(d){return d[1]}), d3.max(data, function(d) { return d[1]; })])
    .range([ height, 0 ]);
 
  var chart = d3.select(container)
    .append('svg:svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

  var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)

  var g = main.append("svg:g"); 
    
  g.selectAll("dots")
    .data(data)
    .enter()
    .append("svg:circle")
    .attr("fill", function(d){ return heat(d[0],d[1])})
    .attr("cx", function (d,i) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("r", 3)

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

