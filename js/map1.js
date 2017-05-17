var margin = {top: 50, right: 20, bottom: 40, left: 40},
    width = 600,
    height = 337.5,
    gap=10;

var c="#FF5850";
var cr="#FCB040"
var r="#D2D945"

//svg1
var width1 = 100

var x1=55,
    x2=90,
    x3=125,
    y1=400,
    y2=450;

var x=d3.scaleBand()
    .rangeRound([0,width1])
    .padding(0.1,0.3);

var y = d3.scaleLinear()
    .range([(height-gap)/2, 0])
    .domain([1.5,0]);

var xAxis=d3.axisBottom(x);

// var yAxis=d3.axisLeft(y).ticks(8);


var svg1 = d3.select("#map1").append("svg")
  .attr("id","svg1")
    .attr("width", width1+margin.left+margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("background","black")
  .append("g");

var barwidth=10;

// load the data
d3.csv("data/landuse.csv",type, function(error,data){
      x.domain(data.map(function(d){return d.field;}));
      y.domain([0,d3.max(data, function(d){return d.level;})]);
      // if (error,data) {if (error) throw error;

  // svg1.append("text")
  //     .attr("class","title")
  //     .attr("x",100)
  //     .attr("y",26)
  //     .text("Twitter Pattern in Different Planning District");

  // svg1.append("g")
  //     .attr("class","x axis")
  //     .attr("transform","translate(0," + height + ")")
  //     .call(xAxis)
  //   .selectAll("text")
  //     .call(wrap,x.bandwidth());

  // svg1.append("g")
  //   .attr("class","y axis")
  //   .call(yAxis);


  // svg1.selectAll(".bar")
  //     .data(data)
  //   .enter().append("rect")
  //     .attr("class", "bar")
  //     .attr("id", function(d,i){console.log(d); return i;})
  //     .attr("fill","white")
  //     .attr("x", function(d,i) { return 45+88*i; })
  //     .attr("width", 10)
  //     .attr("y", function(d){return y(d.level);})
  //     .attr("height", function(d) {return height-y(d.level);});

  
    // https://github.com/wbkd/d3-extended
    d3.selection.prototype.moveToFront2 = function() {  
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
    };
    d3.selection.prototype.moveToBack2 = function() {  
        return this.each(function() { 
            var firstChild = this.parentNode.firstChild; 
            if (firstChild) { 
                this.parentNode.insertBefore(this, firstChild); 
            } 
        });
    };

  svg1.append("text")
      .attr("class","title")
      .text("Activity Level (tweets/acre)")
      .attr("x",5)
      .attr("y",242);

    svg1.append("text")
      .attr("class","title")
      .text("Sentiment Level (0-1)")
      .attr("x",30)
      .attr("y",425);



  svg1.append("g")
      .attr("class", "bar")
      .append("rect")
      .attr("fill",c)
      .attr("x",x1)
      .attr("width",barwidth)
      .attr("y",129.2)
      .attr("height",94.8)
      .on("mouseover", function(d){
      //Determine if current line is visible
     // var active   = c_density.active ? false : true,
     //   newOpacity = active ? 0 : 1;
     // Hide or show the elements
    d3.select("#c_density").moveToFront2();
    d3.select("#district-borders").moveToFront2();
    // d3.select("#c_density").moveToBack();
    // Update whether or not the elements are active
    // c_density.active = active;
  })
      .on("mouseout", function(d){
        d3.select("#c_density").moveToBack2();
      });

  svg1.append("text")
    .attr("class","lable")
    .text("0.59")
    .attr("x",x1-2)
    .attr("y",125.2);

  svg1.append("g")
    .attr("class", "bar")
    .append("rect")
    .attr("fill",cr)
    .attr("x",x2)
    .attr("width",barwidth)
    .attr("y",20)
    .attr("height",204)
    .on("mouseover",function(d){
        d3.select("#cr_density").moveToFront2();
        d3.select("#district-borders").moveToFront2();
      })
      .on("mouseout",function(d){
        d3.select("#cr_density").moveToBack2();
      });

    svg1.append("text")
    .attr("class","lable")
    .text("1.27")
    .attr("x",x2-2)
    .attr("y",16);

  svg1.append("g")
    .attr("class", "bar")
    .append("rect")
    .attr("fill",r)
    .attr("x",x3)
    .attr("width",barwidth)
    .attr("y",203.2)
    .attr("height",20.8)
    .on("mouseover",function(d){
        d3.select("#r_density").moveToFront2();
        d3.select("#district-borders").moveToFront2();
      })
      .on("mouseout",function(d){
        d3.select("#r_density").moveToBack2();
      });

    svg1.append("text")
    .attr("class","lable")
    .text("0.13")
    .attr("x",x3-2)
    .attr("y",199.2);
  
    svg1.append("g")
      .attr("class", "bar")
      .append("rect")
      .attr("fill",c)
      .attr("x",x1)
      .attr("width",barwidth)
      .attr("y",272.2)
      .attr("height",132.8)
      .on("mouseover",function(d){
        d3.select("#c_emoji").moveToFront2();
        d3.select("#district-borders").moveToFront2();
      })
      .on("mouseout",function(d){
        d3.select("#c_emoji").moveToBack2();
      });

    svg1.append("text")
        .attr("class","lable")
        .text("0.42")
        .attr("x",x1-2)
        .attr("y",268.2);

  svg1.append("g")
    .attr("class", "bar")
    .append("rect")
    .attr("fill",cr)
    .attr("x",x2)
    .attr("width",barwidth)
    .attr("y",278.8)
    .attr("height",126.2)
    .on("mouseover",function(d){
        d3.select("#cr_emoji").moveToFront2();
        d3.select("#district-borders").moveToFront2();
      })
      .on("mouseout",function(d){
        d3.select("#cr_emoji").moveToBack2();
      });

      svg1.append("text")
        .attr("class","lable")
        .text("0.41")
        .attr("x",x2-2)
        .attr("y",274.8);

  svg1.append("g")
    .attr("class", "bar")
    .append("rect")
    .attr("fill",r)
    .attr("x",x3)
    .attr("width",barwidth)
    .attr("y",291.7)
    .attr("height",113.3)
    .on("mouseover",function(d){
        d3.select("#r_emoji").moveToFront2();
        d3.selectAll("#district-borders").moveToFront2();
      })
      .on("mouseout",function(d){
        d3.select("#r_emoji").moveToBack2();
      });

      svg1.append("text")
        .attr("class","lable")
        .text("0.39")
        .attr("x",x3-2)
        .attr("y",287.7);



  // svg1.selectAll(".text")
  //     .data(data)
  //   .enter().append("text")
  //   .attr("class","x axis")
  //   .attr("x",function(d,i){return 45+88*i;})
  //   .attr("y",function(d){return y(d.level)-10;})
  //   .attr("dy",".75em")

  //   .text(function(d){return d.level;});
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
var width2=500;
svg2 = d3.select("#map1")
    .append("g") // group to move svg sideways
      .attr("transform", "translate(" + (width2+gap) + ")")
      .append("svg")
      .attr("id", "svg2")
      .attr("height", height+margin.top+margin.bottom)
      .attr("width", width2);

var projection = d3.geoAlbers()
    .scale( 72000 )
    .rotate([75.140791])
    .center([0,39.989870])
    .translate([width2 / 2, height / 2+margin.top]);

var path = d3.geoPath()
    .projection(projection);

var g2 = svg2.append("g");

var tooltip = d3.select("#map1")
  .append("svg2")
  .style("position","absolute")
  .style("font-family", "'Open Sans', sans-serif")
  .style("font-size", "10px")
  .style("z-index", "10")
  .style("padding","5px")
  .style("border-style", "dashed")
  .style("border-width","2px")
  .style("visibility", "hidden")
  .style("background","white")
  .style("opacity","0.8");


d3.queue()
    .defer(d3.json,"data/lucomparison.geojson")
    .defer(d3.csv,"data/lu.csv")
    .await(ready);

    function ready(error,lucomparison,lu){
      if (error) throw error;

        
        var mapcolors = d3.scaleThreshold()
            .domain([0.116156,0.555,1.033,1.50,2.46])
            .range(d3.schemeReds[5]);

        var mapcolors1 = d3.scaleThreshold()
            .domain([0.42])
            .range(["black",c]);

        var mapcolors2 = d3.scaleThreshold()
            .domain([0.389,0.87,1.65,3.37,4.67])
            .range(d3.schemeOranges[5]);

        var mapcolors3 = d3.scaleThreshold()
            .domain([0,0.36,0.42,0.50,0.56])
            .range(d3.schemeOranges[5]);

        var mapcolors4 = d3.scaleThreshold()
            .domain([0.01,0.039,0.072,0.1036,0.79])
            .range(d3.schemeGreens[5]);

        var mapcolors5 = d3.scaleThreshold()
            .domain([0,0.26,0.389,0.4668,0.678])
            .range(d3.schemeGreens[5]);

  var y3=415;

  svg2.append("g")
      .append("rect")
      .attr("fill",c)
      .attr("x",50)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  svg2.append("g")
      .append("rect")
      .attr("fill",cr)
      .attr("x",200)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  svg2.append("g")
      .append("rect")
      .attr("fill",r)
      .attr("x",350)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  svg2.append("text")
      .attr("class","lable")
      .text("Commercial Parcels")
      .attr("x",75)
      .attr("y",y3+10);

  svg2.append("text")
      .attr("class","lable")
      .text("Mixeduse Parcels")
      .attr("x",225)
      .attr("y",y3+10);

  svg2.append("text")
      .attr("class","lable")
      .text("Residential Parcels")
      .attr("x",375)
      .attr("y",y3+10);

  g2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill","black")
      .attr("d", path);

  g2.append("path")
        .datum(lucomparison, lucomparison.geometry, function(a, b) { return a !== b; })
        .attr("id", "district-borders")
        .attr("d", path);

  g2.append("g")
      .attr("class", "map")
      .attr("id","c_density")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors(d.properties.tw_c_acre);})
      .attr("d", path);

  g2.append("g")
      .attr("class", "map")
      .attr("id","c_emoji")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill",function(d){console.log(d); return mapcolors1(d.properties.MEAN_ave_1);})
      .attr("d", path);

  g2.append("g")
      .attr("class", "map")
      .attr("id","cr_density")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors2(d.properties.tw_cr_area);})
      .attr("d", path); 

  g2.append("g")
      .attr("class", "map")
      .attr("id","cr_emoji")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors3(d.properties.MEAN_ave_2);})
      .attr("d", path); 

  g2.append("g")
      .attr("class", "map")
      .attr("id","r_density")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors4(d.properties.tw_r_acre);})
      .attr("d", path);

  g2.append("g")
      .attr("class", "map")
      .attr("id","r_emoji")
    .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors5(d.properties.MEAN_avera);})
      .attr("d", path)
      .classed("active",false);

    g2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(lucomparison.features)
    .enter().append("path")
      .attr("fill","black")
      .attr("d", path)
      .on("mouseover",function(d){
        return tooltip.style("visibility", "visible").text(d.properties.DIST_NAME);
      })
      .on("mousemove", function(d){
        return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").html(d.properties.DIST_NAME +"<br/>"+"Activity Level in Commercial Area: " + d3.format(".2") (d.properties.tw_c_acre)+" tweets/acre" +"<br/>"+"Activity Level in Mixeduse Area: "+d3.format(".2")(d.properties.tw_cr_area)+" tweets/acre"+"<br/>"+"Activity Level in Residential Area: "+d3.format(".2")(d.properties.tw_r_acre)+" tweets/acre"+"<br/>"+"Sentiment Level in Commercial Area: "+d3.format(".2")(d.properties.MEAN_ave_1)+" (0-1)"+"<br/>"+"Sentiment Level in Mixeduse Area: "+d3.format(".2")(d.properties.MEAN_ave_2)+" (0-1)"+"<br/>"+"Sentiment Level in Residential Area: "+d3.format(".2")(d.properties.MEAN_avera)+" (0-1)");
      })
      .on("mouseout", function(d){
        return tooltip.style("visibility", "hidden");
      });

  g2.append("path")
        .datum(lucomparison, lucomparison.geometry, function(a, b) { return a !== b; })
        .attr("id", "district-borders")
        .attr("d", path);
};

