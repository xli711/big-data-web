height = 600
width = 600
gap = 50

svg = d3.select("body")
    .append("svg")
    .attr("id", "mainsvg")
    .attr("height", height)
    .attr("width", width*2 + gap)

//svg1
var x=d3.scale.ordinal()
    .rangeRoundBands([0,width], .1, .3);

var y = d3.scale.linear()
    .range([height, 0])
    .domain([1.5,0]);

var xAxis=d3.svg1.axis()
    .scale(x)
    .orient("bottom");

var yAxis=d3.svg1.axis()
    .scale(y)
    .orient("left")
    .ticks(8);


var svg1 = d3.select("body").append("svg")
	.attr("id","svg1")
    .attr("width", width+margin.left+margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");


var colors = d3.scale.ordinal().range(["#E43700","#DB8A70","#FA7F0C","#FAB778","#D9C06F","#D9CDA5"]);

// load the data
d3.csv("data/landuse.csv",type, function(error,data){
      x.domain(data.map(function(d){return d.field;}));
      y.domain([0,d3.max(data, function(d){return d.level;})]);
      // if (error,data) {if (error) throw error;

  svg1.append("text")
      .attr("class","title")
      .attr("x",100)
      .attr("y",-26)
      .text("Twitter Pattern in Different Planning District");

  svg1.append("g")
      .attr("class","x axis")
      .attr("transform","translate(0," + height + ")")
      .call(xAxis)
    .selectAll(".tick text")
      .call(wrap,x.rangeBand());

  svg1.append("g")
    .attr("class","y axis")
    .call(yAxis);


  svg1.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("fill",function(d,i) {console.log(d);return colors(i);})
      .attr("x", function(d) { return x(d.field); })
      .attr("width", x.rangeBand())
      .attr("y", function(d){return y(d.level);})
      .attr("height", function(d) {return height-y(d.level);});
  

  svg1.selectAll(".text")
      .data(data)
    .enter().append("text")
    .attr("class","lable")
    .attr("x",function(d){return x(d.field);})
    .attr("y",function(d){return y(d.level)+1;})
    .attr("dy",".75em")
    .text(function(d){return d.level;});
});

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

function type(d) {
  d.level = +d.level;
  return d;
}

//svg2
svg2 = d3.select("svg#mainsvg")
    .append("g") // group to move svg sideways
      .attr("transform", "translate(" + (width+gap) + ")")
      .append("svg")
      .attr("id", "svg2")
      .attr("height", height)
      .attr("width", width)
      .attr(centered)

var projection = d3.geoAlbers()
    .scale( 100000 )
    .rotate([75.140791])
    .center([0,39.989870])
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg2 = d3.select("#map")
	.append("svg")
    .attr("width", width)
    .attr("height", height);

var g = svg2.append("g");

d3.json("data/lucomparison.geojson", function(error, lucomparison) {
  if (error) throw error;

var breaks = ss.jenks(geometry.map(function(d) { 
          return d.properties.tw_c_acre; 
      }), 5);
      
      breaks.shift(); // remove min value from breaks Array before applying to domain
      breaks.pop(); // same for max
      
      var colors = ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"];

      var jenks = d3.scale.threshold()
          .domain(breaks)
          .range(colors);

  g.append("g")
      .attr("id", "c_density")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("d", path);
      
      

  g.append("path")
      .datum(lucomparison, lucomparison.geometry, function(a, b) { return a !== b; })
      .attr("id", "district-borders")
      .attr("d", path);
});


}