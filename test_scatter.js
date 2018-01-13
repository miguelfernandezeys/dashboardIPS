var data = [
            [13.04,-8.78], 
            [25.41,-17.93], 
            [39.32,11.86],
            [41.53,19.51],
            [57.96,9.21],
            [46.68,42.86],
            [66.05,46.76],
            [91.04,42.30],
            [54.65,21.56],
            [52.67,19.28],
            [51.22,20.67],
            [53.25,27.50],
            [61.94,30.41],
            [83.56,19.20],
            [72.18,21.08],
            [79.58,21.05],
            [76.67,28.51],
            [90.67,2.55],
            [93.67,5.77],
            [86.47,4.50]
            ];
   
  var margin = {
                top: 20, 
                right: 15, 
                bottom: 60, 
                left: 60
              },
              width = 900 - margin.left - margin.right,
              height = 300 - margin.top - margin.bottom;

  var max_ = new Array();
  var min_ = new Array(); 
  for(let i = 0 ; i <= data.length-1 ; i ++){      
      max_[i] = d3.max(d3.values(data[i]));
      min_[i] = d3.min(d3.values(data[i]));
  }

  var max = Math.max(...max_);
  var min = Math.min(...min_);

  console.log(max);
  console.log(min);

  //var minmax = d3.extent(con.filter(function(d){ return !isNaN(d);}));
  //onsole.log(minmax)

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
 
  var chart = d3.select('#test')
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
