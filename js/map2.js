var xmargin = {top: 50, right: 20, bottom: 40, left: 40},
    xwidth = 600,
    xheight = 337.5,
    xgap=10;

var xr="#D2D945"
var lihtc="#C10250"

//xsvg1
var xwidth1 = 100

var xxx1=72.5,
    xx2=107.5,
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
      .text("Activity Level")
      .attr("x",xxx1+5)
      .attr("y",242);

    xsvg1.append("text")
      .attr("class","title")
      .text("Sentiment Level")
      .attr("x",xxx1)
      .attr("y",425);



  xsvg1.append("g")
      .attr("class", "bar")
      .append("rect")
      .attr("fill",xr)
      .attr("x",xxx1)
      .attr("width",barxwidth)
      .attr("y",186.9)
      .attr("height",37.1)
      .on("mouseover", function(d){
      //Determine if current line is visible
     // var active   = c_density.active ? false : true,
     //   newOpacity = active ? 0 : 1;
     // Hide or show the elements
    d3.select("#xr_density").moveToFront();
    d3.select("#district-borders").moveToFront();
    // d3.select("#c_density").moveToBack();
    // Update whether or not the elements are active
    // c_density.active = active;
  })
      .on("mouseout", function(d){
        d3.select("#xr_density").moveToBack();
      });

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
    .on("mouseover",function(d){
        d3.select("#lihtc_density").moveToFront();
        d3.select("#district-borders").moveToFront();
      })
      .on("mouseout",function(d){
        d3.select("#lihtc_density").moveToBack();
      });

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
      .on("mouseover",function(d){
        d3.select("#xr_emoji").moveToFront();
        d3.select("#district-borders").moveToFront();
      })
      .on("mouseout",function(d){
        d3.select("#xr_emoji").moveToBack();
      });

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
    .on("mouseover",function(d){
        d3.select("#lihtc_emoji").moveToFront();
        d3.select("#district-borders").moveToFront();
      })
      .on("mouseout",function(d){
        d3.select("#lihtc_emoji").moveToBack();
      });

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


d3.queue()
    .defer(d3.json,"data/r_lihtc.geojson")
    .await(ready);

    function ready(error,r_lihtc){
      if (error) throw error;

        
        var mapcolors = d3.scaleThreshold()
            .domain([0,0.22,1.11,3.54,5.65])
            .range(d3.schemePuRd[5]);

        var mapcolors1 = d3.scaleThreshold()
            .domain([0,0.26,0.39,0.47,0.68])
            .range(d3.schemePuRd[5]);

        var mapcolors2 = d3.scaleThreshold()
            .domain([0,3.58,8.34,13.90,59.2])
            .range(d3.schemeBlues[5]);

        var mapcolors3 = d3.scaleThreshold()
            .domain([0,0.28,0.366,0.4635,0.61])
            .range(d3.schemeBlues[5]);

  var y3=415;

  xsvg2.append("g")
      .append("rect")
      .attr("fill",xr)
      .attr("x",50)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);

  xsvg2.append("g")
      .append("rect")
      .attr("fill",lihtc)
      .attr("x",200)
      .attr("y",y3)
      .attr("width",20)
      .attr("height",10);


  xsvg2.append("text")
      .attr("class","lable")
      .text("Residential")
      .attr("x",75)
      .attr("y",y3+10);

  xsvg2.append("text")
      .attr("class","lable")
      .text("LIHTC")
      .attr("x",225)
      .attr("y",y3+10);

  xg2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(r_lihtc.features)
    .enter().append("path")
      .attr("fill","black")
      .attr("d", xpath);

  xg2.append("path")
        .datum(r_lihtc, r_lihtc.geometry, function(a, b) { return a !== b; })
        .attr("id", "district-borders")
        .attr("d", xpath);

  xg2.append("g")
      .attr("class", "map")
      .attr("id","xr_density")
    .selectAll("path")
      .data(r_lihtc.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors(d.properties.tw_density);})
      .attr("d", xpath);

  xg2.append("g")
      .attr("class", "map")
      .attr("id","xr_emoji")
    .selectAll("path")
      .data(r_lihtc.features)
    .enter().append("path")
      .attr("fill",function(d){console.log(d); return mapcolors1(d.properties.MEAN_ave_1);})
      .attr("d", xpath);

  xg2.append("g")
      .attr("class", "map")
      .attr("id","lihtc_density")
    .selectAll("path")
      .data(r_lihtc.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors2(d.properties.lithc_d);})
      .attr("d", xpath); 

  xg2.append("g")
      .attr("class", "map")
      .attr("id","lihtc_emoji")
    .selectAll("path")
      .data(r_lihtc.features)
    .enter().append("path")
      .attr("fill",function(d){return mapcolors3(d.properties.MEAN_avera);})
      .attr("d", xpath); 

    xg2.append("g")
      .attr("class", "map")
      .selectAll("path")
      .data(r_lihtc.features)
    .enter().append("path")
      .attr("fill","black")
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
        .datum(r_lihtc, r_lihtc.geometry, function(a, b) { return a !== b; })
        .attr("id", "district-borders")
        .attr("d", xpath);
};