var xmargin = {top: 50, right: 20, bottom: 40, left: 40},
    xwidth = 600,
    xheight = 337.5,
    xgap=10;

var xr="#D2D945"
var lihtc="#C10250"

//xsvg1
var xwidth1 = 100

var xxx1=50,
    xx2=85,
    xy1=400,
    xy2=450;

// var x=d3.scaleBand()
//     .rangeRound([0,xwidth1])
//     .padding(0.1,0.3);

// var y = d3.scaleLinear()
//     .range([(xheight-xgap)/2, 0])
//     .domain([1.5,0]);

// var xAxis=d3.axisBottom(x);

// var yAxis=d3.axisLeft(y).ticks(8);


var xsvg1 = d3.select("#map2").append("svg")
  .attr("id","xsvg1")
    .attr("width", xwidth1+xmargin.left+xmargin.right)
    .attr("height", xheight + xmargin.top + xmargin.bottom)
    .attr("background","black")
  .append("g");

var barxwidth=10;


    d3.selection.prototype.moveToFront = function() {  
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
    };
    d3.selection.prototype.moveToBack = function() {

        return this.each(function() { 
            var firstChild = this.parentNode.firstChild; 
            if (firstChild) { 
                this.parentNode.insertBefore(this, firstChild); 
            } 
        });
    };

  xsvg1.append("text")
      .attr("class","title")
      .text("Activity Level (tweets/1000)")
      .attr("x",5)
      .attr("y",242);

    xsvg1.append("text")
      .attr("class","title")
      .text("Sentiment Level (0-1)")
      .attr("x",20)
      .attr("y",425);



  xsvg1.append("g")
      .attr("class", "bar")
      .append("rect")
      .attr("fill",xr)
      .attr("x",xxx1)
      .attr("width",barxwidth)
      .attr("y",186.9)
      .attr("height",37.1)
      .on("click", function(d){
      //Determine if current line is visible
     // var active   = c_density.active ? false : true,
     //   newOpacity = active ? 0 : 1;
     // Hide or show the elements
    d3.select("#xr_density").moveToFront();
    d3.select("#xdistrict-borders").moveToFront();
    d3.selectAll("#xr_legend").moveToFront();
    d3.select("#initialx").style("visibility", "hidden");
    return xtooltip1.style("visibility", "visible").text("Residential Activity Level by Population");
    // d3.select("#c_density").moveToBack();
    // Update whether or not the elements are active
    // c_density.active = active;
  });
      // .on("mouseout", function(d){
      //   d3.select("#xr_density").moveToBack();
      //   d3.selectAll("#xr_legend").moveToBack();
      //   d3.select("#xmask").moveToBack();
      //   return xtooltip1.style("visibility","hidden");
      // });

  xsvg1.append("text")
    .attr("class","lable")
    .text("1.23")
    .attr("x",xxx1-2)
    .attr("y",182.9);

  xsvg1.append("g")
    .attr("class", "bar")
    .append("rect")
    .attr("fill",lihtc)
    .attr("x",xx2)
    .attr("width",barxwidth)
    .attr("y",20)
    .attr("height",204)
    .on("click",function(d){
        d3.select("#lihtc_density").moveToFront();
        d3.select("#xdistrict-borders").moveToFront();
        d3.selectAll("#lihtc_legend").moveToFront();
        d3.select("#initialx").style("visibility", "hidden");
        return xtooltip1.style("visibility","visible").text("LIHTC Activity Level by Population");
      });
      // .on("mouseout",function(d){
      //   d3.select("#lihtc_density").moveToBack();
      //   d3.selectAll("#lihtc_legend").moveToBack();
      //   d3.select("#xmask").moveToBack();
      //   return xtooltip1.style("visibility","hidden")
      // });

    xsvg1.append("text")
    .attr("class","lable")
    .text("6.71")
    .attr("x",xx2-2)
    .attr("y",16);

    
    xsvg1.append("g")
      .attr("class", "bar")
      .append("rect")
      .attr("fill",xr)
      .attr("x",xxx1)
      .attr("width",barxwidth)
      .attr("y",272.2)
      .attr("height",132.8)
      .on("click",function(d){
        d3.select("#xr_emoji").moveToFront();
        d3.select("#xdistrict-borders").moveToFront();
        d3.selectAll("#xr_legend").moveToFront();
        d3.select("#initialx").style("visibility", "hidden");
        return xtooltip1.style("visibility", "visible").text("Residential Sentiment Level by Population");
      });
      // .on("mouseout",function(d){
      //   d3.select("#xr_emoji").moveToBack();
      //   d3.selectAll("#xr_legend").moveToBack();
      //   d3.select("#xmask").moveToBack();
      //   return xtooltip1.style("visibility","hidden");
      // });

    xsvg1.append("text")
        .attr("class","lable")
        .text("0.39")
        .attr("x",xxx1-2)
        .attr("y",268.2);


  xsvg1.append("g")
    .attr("class", "bar")
    .append("rect")
    .attr("fill",lihtc)
    .attr("x",xx2)
    .attr("width",barxwidth)
    .attr("y",291.7)
    .attr("height",113.3)
    .on("click",function(d){
        d3.select("#lihtc_emoji").moveToFront();
        d3.select("#xdistrict-borders").moveToFront();
        d3.selectAll("#lihtc_legend").moveToFront();
        d3.select("#initialx").style("visibility", "hidden");
        return xtooltip1.style("visibility","visible").text("LIHTC Sentiment Level by Population");
      });
      // .on("mouseout",function(d){
      //   d3.select("#lihtc_emoji").moveToBack();
      //   d3.selectAll("#lihtc_legend").moveToBack();
      //   d3.select("#xmask").moveToBack();
      //   return xtooltip1.style("visibility","hidden")
      // });

      xsvg1.append("text")
        .attr("class","lable")
        .text("0.37")
        .attr("x",xx2-2)
        .attr("y",287.7);



  // xsvg1.selectAll(".text")
  //     .data(data)
  //   .enter().append("text")
  //   .attr("class","x axis")
  //   .attr("x",function(d,i){return 45+88*i;})
  //   .attr("y",function(d){return y(d.level)-10;})
  //   .attr("dy",".75em")

  //   .text(function(d){return d.level;});


// function wrap(text, xwidth) {
//   text.each(function() {
//     var text = d3.select(this),
//         words = text.text().split(/\s+/).reverse(),
//         word,
//         line = [],
//         lineNumber = 0,
//         lineheight = 1.1, // ems
//         y = text.attr("y"),
//         dy = parseFloat(text.attr("dy")),
//         tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
//     while (word = words.pop()) {
//       line.push(word);
//       tspan.text(line.join(" "));
//       if (tspan.node().getComputedTextLength() > xwidth) {
//         line.pop();
//         tspan.text(line.join(" "));
//         line = [word];
//         tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * linexheight + dy + "em").text(word);
//       }
//     }
//   });
// }

// function type(d) {
//   d.level = +d.level;
//   return d;
// }

//xsvg2
var xwidth2=500;
xsvg2 = d3.select("#map2")
    .append("g") // group to move svg sideways
      .attr("transform", "translate(" + (xwidth2+xgap) + ")")
      .append("svg")
      .attr("id", "xsvg2")
      .attr("height", xheight+xmargin.top+xmargin.bottom)
      .attr("width", xwidth2);

var xprojection = d3.geoAlbers()
    .scale( 72000 )
    .rotate([75.140791])
    .center([0,39.989870])
    .translate([xwidth2 / 2, xheight / 2+xmargin.top]);

var xpath = d3.geoPath()
    .projection(xprojection);

var xg2 = xsvg2.append("g");

var xlegendbar = d3.scaleLinear()
    .domain([1, 6])
    .rangeRound([400,500]);

var xtooltip = d3.select("#map2")
  .append("xsvg2")
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

var xtooltip1 = d3.select("#map2")
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
    .defer(d3.json,"assets/geojsons/r_lihtc_1.geojson")
    .await(ready);

    function ready(error,r_lihtc_1){
      if (error) throw error;

        
        var xmapcolors = d3.scaleThreshold()
            .domain([0,0.22,1.11,3.54,5.65])
            .range(d3.schemeGreens[5]);

        var xmapcolors1 = d3.scaleThreshold()
            .domain([0,0.26,0.39,0.47,0.68])
            .range(d3.schemeGreens[5]);

        var xmapcolors2 = d3.scaleThreshold()
            .domain([0,3.58,8.34,13.90,59.2])
            .range(d3.schemePuRd[5]);

        var xmapcolors3 = d3.scaleThreshold()
            .domain([0,0.28,0.366,0.4635,0.61])
            .range(d3.schemePuRd[5]);

        var xlegend=d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemeGreens[5]);

        var xlegend1=d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemePuRd[5]);

        var xmapcolors4 = d3.scaleThreshold()
            .domain([8,21,47,72,104])
            .range(d3.schemeGreys[5]);

        var xlegend2=d3.scaleThreshold()
            .domain(d3.range(2,6))
            .range(d3.schemeGreys[5]);

  var y3=415;

  xg2.selectAll(".rect")
    .data(xlegend.range().map(function(d) {
      d = xlegend.invertExtent(d);
      if (d[0] == null) d[0] = xlegendbar.domain()[0];
      if (d[1] == null) d[1] = xlegendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
      .attr("id","xr_legend")
      .attr("fill",function(d){return xlegend(d[0]);})
      .attr("x",function(d){ return xlegendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return xlegendbar(d[1])-xlegendbar(d[0]);})
      .attr("height",10);

  xg2.selectAll(".rect")
    .data(xlegend1.range().map(function(d) {
      d = xlegend1.invertExtent(d);
      if (d[0] == null) d[0] = xlegendbar.domain()[0];
      if (d[1] == null) d[1] = xlegendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
      .attr("id","lihtc_legend")
      .attr("fill",function(d){return xlegend1(d[0]);})
      .attr("x",function(d){ return xlegendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return xlegendbar(d[1])-xlegendbar(d[0]);})
      .attr("height",10);

        xg2.selectAll(".rect")
    .data(xlegend2.range().map(function(d) {
      d = xlegend2.invertExtent(d);
      if (d[0] == null) d[0] = xlegendbar.domain()[0];
      if (d[1] == null) d[1] = xlegendbar.domain()[1];
      return d;
    }))
  .enter().append("rect")
      .attr("fill",function(d){return xlegend2(d[0]);})
      .attr("x",function(d){ return xlegendbar(d[0]);})
      .attr("y",5)
      .attr("width",function(d){return xlegendbar(d[1])-xlegendbar(d[0]);})
      .attr("height",10);

  xsvg2.append("g")
      .append("rect")
      .attr("fill",xr)
      .attr("x",100)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  xsvg2.append("g")
      .append("rect")
      .attr("fill",lihtc)
      .attr("x",300)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);


  xsvg2.append("text")
      .attr("class","lable")
      .text("Residential Developments")
      .attr("x",125)
      .attr("y",y3+10);

  xsvg2.append("text")
      .attr("class","lable")
      .text("LIHTC Developments")
      .attr("x",325)
      .attr("y",y3+10);

  xsvg2.append("text")
    .attr("class","lable")
    .text("Low")
    .attr("x",400)
    .attr("y",30);

  xsvg2.append("text")
    .attr("class","lable")
    .text("High")
    .attr("x",475)
    .attr("y",30); 

  xg2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(r_lihtc_1.features)
    .enter().append("path")
      .attr("fill","black")
      .attr("d", xpath);

  xg2.append("path")
        .datum(r_lihtc_1, r_lihtc_1.geometry, function(a, b) { return a !== b; })
        .attr("id", "xdistrict-borders")
        .attr("d", xpath);

  xg2.append("g")
      .attr("class", "map")
      .attr("id","xr_density")
    .selectAll("path")
      .data(r_lihtc_1.features)
    .enter().append("path")
      .attr("fill",function(d){return xmapcolors(d.properties.tw_density);})
      .attr("d", xpath);

  xg2.append("g")
      .attr("class", "map")
      .attr("id","xr_emoji")
    .selectAll("path")
      .data(r_lihtc_1.features)
    .enter().append("path")
      .attr("fill",function(d){return xmapcolors1(d.properties.MEAN_ave_1);})
      .attr("d", xpath);

  xg2.append("g")
      .attr("class", "map")
      .attr("id","lihtc_density")
    .selectAll("path")
      .data(r_lihtc_1.features)
    .enter().append("path")
      .attr("fill",function(d){return xmapcolors2(d.properties.lithc_d);})
      .attr("d", xpath); 

  xg2.append("g")
      .attr("class", "map")
      .attr("id","lihtc_emoji")
    .selectAll("path")
      .data(r_lihtc_1.features)
    .enter().append("path")
      .attr("fill",function(d){return xmapcolors3(d.properties.MEAN_avera);})
      .attr("d", xpath); 

    xg2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(r_lihtc_1.features)
    .enter().append("path")
      .attr("fill",function(d){return xmapcolors4(d.properties.Count_);})
      .attr("d", xpath)
      .on("mouseover",function(d){
        return xtooltip.style("visibility", "visible").text(d.properties.DIST_NAME);
      })
      .on("mousemove", function(d){
        return xtooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").html(d.properties.DIST_NAME +"<br/>"+"Activity Level in Normal Residential Developments: " + d3.format(".2") (d.properties.tw_density)+" tweets/1000 residents" +"<br/>"+"Activity Level in LIHTC Developments: "+d3.format(".2")(d.properties.lithc_d)+" tweets/1000 residents"+"<br/>"+"Sentiment Level in Normal Residential Developments: "+d3.format(".2")(d.properties.MEAN_ave_1)+" (0-1)"+"<br/>"+"Sentiment Level in LIHTC Developments: "+d3.format(".2")(d.properties.MEAN_avera)+" (0-1)");
      })
      .on("mouseout", function(d){
        return xtooltip.style("visibility", "hidden");
      });

  xg2.append("path")
        .datum(r_lihtc_1, r_lihtc_1.geometry, function(a, b) { return a !== b; })
        .attr("id", "xdistrict-borders")
        .attr("d", xpath);

   // xsvg2.append("g")
   //    .attr("id", "xmask")
   //    .append("rect")
   //    .attr("fill","white")
   //    .attr('x',150)
   //    .attr('y',0)
   //    .attr('width',240)
   //    .attr('height',20)

  xg2.append("text")
      .attr("class","lable")
      .attr("id","initialx")
      .text("Density of LIHTC Developments")
      .attr("x",150)
      .attr("y",18);
};