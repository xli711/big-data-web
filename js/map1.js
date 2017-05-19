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

var svg1 = d3.select("#map1").append("svg")
  .attr("id","svg1")
    .attr("width", width1+margin.left+margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("background","black")
  .append("g");

var barwidth=10;

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
    d3.selectAll("#lc_density").moveToFront2();
    d3.select("#district-borders").moveToFront2();
    d3.select("#mask").moveToFront2();
    return tooltip1.style("visibility", "visible").text("Commercial Parcel Activity level");
    // d3.select("#c_density").moveToBack();
    // Update whether or not the elements are active
    // c_density.active = active;
  })
      .on("mousemove", function(d){
        return tooltip1.text("Commercial Parcel Activity level");
      })
      .on("mouseout", function(d){
        d3.select("#c_density").moveToBack2();
        d3.selectAll("#lc_density").moveToBack2();
        d3.select("#mask").moveToBack2();
        return tooltip1.style("visibility", "hidden");
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
        d3.selectAll("#cr_legend").moveToFront2();
        d3.select("#district-borders").moveToFront2();
        d3.select("#mask").moveToFront2();
        return tooltip1.style("visibility", "visible").text("Mixeduse Parcel Activity level");
      })
      .on("mouseout",function(d){
        d3.select("#cr_density").moveToBack2();
        d3.selectAll("#cr_legend").moveToBack2();
        d3.select("#mask").moveToBack2();
        return tooltip1.style("visibility", "hidden");
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
        d3.selectAll("#r_legend").moveToFront2();
        d3.select("#district-borders").moveToFront2();
        d3.select("#mask").moveToFront2();
        return tooltip1.style("visibility", "visible").text("Residential Parcel Activity level");
      })
      .on("mouseout",function(d){
        d3.select("#r_density").moveToBack2();
        d3.selectAll("#r_legend").moveToBack2();
        d3.select("#mask").moveToBack2();
        return tooltip1.style("visibility", "hidden");
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
        d3.selectAll("#lc_density").moveToFront2();
        d3.select("#mask").moveToFront2();
        return tooltip1.style("visibility", "visible").text("Commercial Parcel Sentiment level");
      })
      .on("mouseout",function(d){
        d3.select("#c_emoji").moveToBack2();
        d3.selectAll("#lc_density").moveToBack2();
        d3.select("#mask").moveToBack2();
        return tooltip1.style("visibility", "hidden");
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
        d3.selectAll("#cr_legend").moveToFront2();
        d3.select("#mask").moveToFront2();
        return tooltip1.style("visibility", "visible").text("Mixeduse Parcel Sentiment level");
      })
      .on("mouseout",function(d){
        d3.select("#cr_emoji").moveToBack2();
        d3.selectAll("#cr_legend").moveToBack2();
        d3.select("#mask").moveToBack2();
        return tooltip1.style("visibility", "hidden")
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
        d3.selectAll("#r_legend").moveToFront2();
        d3.select("#mask").moveToFront2();
        return tooltip1.style("visibility", "visible").text("Residential Parcel Sentiment level");
      })
      .on("mouseout",function(d){
        d3.select("#r_emoji").moveToBack2();
        d3.selectAll("#r_legend").moveToBack2();
        d3.select("#mask").moveToBack2();
        return tooltip1.style("visibility", "hidden")
      });

      svg1.append("text")
        .attr("class","lable")
        .text("0.39")
        .attr("x",x3-2)
        .attr("y",287.7);

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

var legendbar = d3.scaleLinear()
    .domain([1, 6])
    .rangeRound([400,500]);

var tooltip = d3.select("#map1")
  .append("svg2")
  .style("position","absolute")
  .style("font-family", "'Open Sans', sans-serif")
  .style("font-size", "10px")
  .style("z-index", "10")
  .style("padding","5px")
  .style("background", "white")
  .style("border-style", "dashed")
  .style("border-width","2px")
  .style("visibility", "hidden")
  .style("background","white")
  .style("opacity","0.8");

var tooltip1 = d3.select("#map1")
  .append("svg2")
  .style("class","lable")
  .style("position","absolute")
  .style("font-family", "'Open Sans', sans-serif")
  .style("font-size", "10px")
  .style("x","120px")
  .style("z-index", "10")
  .style("padding","5px")
  .style("background", "white")
  .style("visibility", "hidden")
  .style("background","white");



d3.queue()
    .defer(d3.json,"data/luall.geojson")
    .defer(d3.csv,"data/lu.csv")
    .await(ready);

    function ready(error,luall,lu){
      if (error) throw error;
        
        var mapcolors = d3.scaleThreshold()
            .domain([0.116156,0.555,1.033,1.50,2.46])
            .range(d3.schemeReds[5]);

        var legend=d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemeReds[5]);

        var legend1=d3.scaleThreshold()
            .domain(d3.range(2,3))
            .range(["black",c]);

        var mapcolors1 = d3.scaleThreshold()
            .domain([0,0.42])
            .range(d3.schemeReds[3]);

        var mapcolors2 = d3.scaleThreshold()
            .domain([0.389,0.87,1.65,3.37,4.67])
            .range(d3.schemeOranges[5]);

        var legend2=d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemeOranges[5]);

        var mapcolors3 = d3.scaleThreshold()
            .domain([0,0.36,0.42,0.50,0.56])
            .range(d3.schemeOranges[5]);

        var mapcolors4 = d3.scaleThreshold()
            .domain([0.01,0.039,0.072,0.1036,0.79])
            .range(d3.schemeGreens[5]);

        var legend3=d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemeGreens[5]);

        var mapcolors5 = d3.scaleThreshold()
            .domain([0,0.26,0.389,0.4668,0.678])
            .range(d3.schemeGreens[5]);

        var mapcolors6 = d3.scaleThreshold()
            .domain([0,1.12,3.75,5.795,8.828])
            .range(d3.schemeGreys[5]);

        var legend4 = d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemeGreys[5]);

  var y3=415;

    g2.selectAll(".rect")
    .data(legend.range().map(function(d) {
      d = legend.invertExtent(d);
      if (d[0] == null) d[0] = legendbar.domain()[0];
      if (d[1] == null) d[1] = legendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
      .attr("id","lc_density")
      .attr("fill",function(d){return legend(d[0]);})
      .attr("x",function(d){ return legendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return legendbar(d[1])-legendbar(d[0]);})
      .attr("height",10);

      g2.selectAll(".rect")
    .data(legend2.range().map(function(d) {
      d = legend2.invertExtent(d);
      if (d[0] == null) d[0] = legendbar.domain()[0];
      if (d[1] == null) d[1] = legendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
  .attr("id","cr_legend")
      .attr("fill",function(d){return legend2(d[0]);})
      .attr("x",function(d){ return legendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return legendbar(d[1])-legendbar(d[0]);})
      .attr("height",10);

      g2.selectAll(".rect")
    .data(legend3.range().map(function(d) {
      d = legend3.invertExtent(d);
      if (d[0] == null) d[0] = legendbar.domain()[0];
      if (d[1] == null) d[1] = legendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
  .attr("id","r_legend")
      .attr("fill",function(d){return legend3(d[0]);})
      .attr("x",function(d){ return legendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return legendbar(d[1])-legendbar(d[0]);})
      .attr("height",10);

      g2.selectAll(".rect")
    .data(legend4.range().map(function(d) {
      d = legend4.invertExtent(d);
      if (d[0] == null) d[0] = legendbar.domain()[0];
      if (d[1] == null) d[1] = legendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
      .attr("fill",function(d){return legend4(d[0]);})
      .attr("x",function(d){ return legendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return legendbar(d[1])-legendbar(d[0]);})
      .attr("height",10);

  svg2.append("g")
      .append("rect")
      .attr("fill",c)
      .attr("x",30)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  svg2.append("g")
      .append("rect")
      .attr("fill",cr)
      .attr("x",170)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  svg2.append("g")
      .append("rect")
      .attr("fill",r)
      .attr("x",300)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  svg2.append("text")
      .attr("class","lable")
      .text("Commercial Parcels")
      .attr("x",55)
      .attr("y",y3+10);

  svg2.append("text")
      .attr("class","lable")
      .text("Mixeduse Parcels")
      .attr("x",195)
      .attr("y",y3+10);

  svg2.append("text")
      .attr("class","lable")
      .text("Residential Parcels")
      .attr("x",325)
      .attr("y",y3+10);

  svg2.append("text")
    .attr("class","lable")
    .text("Low")
    .attr("x",400)
    .attr("y",30);

  svg2.append("text")
    .attr("class","lable")
    .text("High")
    .attr("x",475)
    .attr("y",30); 

  g2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill","black")
      .attr("d", path);

  g2.append("path")
        .datum(luall, luall.geometry, function(a, b) { return a !== b; })
        .attr("id", "district-borders")
        .attr("d", path);

  g2.append("g")
      .attr("class", "map")
      .attr("id","c_density")
    .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){console.log(d); return mapcolors(d.properties.tw_c_acre);})
      .attr("d", path);


  g2.append("g")
      .attr("class", "map")
      .attr("id","c_emoji")
    .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){console.log(d); return mapcolors1(d.properties.MEAN_ave_1);})
      .attr("d", path);

  

  g2.append("g")
      .attr("class", "map")
      .attr("id","cr_density")
    .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors2(d.properties.tw_cr_area);})
      .attr("d", path); 

  g2.append("g")
      .attr("class", "map")
      .attr("id","cr_emoji")
    .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors3(d.properties.MEAN_ave_2);})
      .attr("d", path); 

  g2.append("g")
      .attr("class", "map")
      .attr("id","r_density")
    .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors4(d.properties.tw_r_acre);})
      .attr("d", path);

  g2.append("g")
      .attr("class", "map")
      .attr("id","r_emoji")
    .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors5(d.properties.MEAN_avera);})
      .attr("d", path)
      .classed("active",false);

    g2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(luall.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors6(d.properties.agg);})
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
        .datum(luall, luall.geometry, function(a, b) { return a !== b; })
        .attr("id", "district-borders")
        .attr("d", path);

  svg2.append("g")
      .attr("id", "mask")
      .append("rect")
      .attr("fill","white")
      .attr('x',150)
      .attr('y',0)
      .attr('width',240)
      .attr('height',20)

  g2.append("text")
      .attr("class","lable")
      .text("Tweets Activity and Sentiment Level Aggregated")
      .attr("x",150)
      .attr("y",18);
};

