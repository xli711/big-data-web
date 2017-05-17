mapboxgl.accessToken = 'pk.eyJ1IjoieGluaHVpbGkiLCJhIjoiY2l2MWFnY3M3MDA2ZzJvczN1MnZjdTV2MCJ9.IVc-aEM5bxHBNMNXb8yfBQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/xinhuili/cj1ykdkez000q2rn6kfb1kcf9',
    center: [-75.156090, 39.978720],
    zoom: 11
});
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function () {

    map.addSource('heatmap', {
        type: 'geojson',
        data: 'assets/geojsons/heatmap_contour.geojson'
    });
    map.addLayer({
        'id': 'heatmap',
        'type': 'line',
        'source': 'heatmap',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'line-color': {
                property: 'Contour',
                type: 'exponential',
                stops: [
                    [-0.199, '#d73027'],
                    [-0.047, '#fc8d59'],
                    [0.104, '#fee090'],
                    [0.256, '#ffffbf'],
                    [0.407, '#e0f3f8'],
                    [0.559, '#91bfdb'],
                    [0.71, '#4575b4']
                    ]
            },
            'line-width': 0.8,
            'line-opacity': 0.7
        }
    });

    map.addSource('lihtc', {
        type: 'geojson',
        data: 'assets/geojsons/lihtc.geojson'
    });
    map.addLayer({
        'id': 'lihtc',
        'type': 'circle',
        'source': 'lihtc',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': {
                'base': 0.8,
                'stops': [[12, 2], [22, 30]]
       //       'property': 'tw_densi_1',
       //       'stops': [
                //   [{zoom: 12, value: 0}, 2],
                //   [{zoom: 12, value: 479}, 10],
                //   [{zoom: 22, value: 0}, 30],
                //   [{zoom: 22, value: 479}, 60]
                // ]
            },

            'circle-color': 'rgba(237, 23, 176, 0.6)',
            // {
            //     property: 'MEAN_tw_de',
            //     type: 'exponential',
            //     stops: [
            //         [-0.17, '#d73027'],
            //         [-0.01, '#fc8d59'],
            //         [0.22, '#fee090'],
            //         [0.34, '#ffffbf'],
            //         [0.43, '#e0f3f8'],
            //         [0.57, '#91bfdb'],
            //         [0.74, '#4575b4']
            //     ]
            // }
        }
    });

    map.addLayer({
        'id': 'lihtc-highlight',
        'type': 'circle',
        'source': 'lihtc',
        'layout': {
        },
        'paint': {
            'circle-radius': {
                'base': 0.8,
                'stops': [[12, 5], [22, 40]]
            },
            'circle-color': 'rgba(237, 23, 176, 1)',
        },
        "filter": ["==", "OBJECTID", 5000]
    });

    map.addLayer({
        'id': 'lihtc-fade',
        'type': 'circle',
        'source': 'lihtc',
        'layout': {
            "visibility": "none"
        },
        'paint': {
            'circle-radius': {
                'base': 0.8,
                'stops': [[12, 2], [22, 30]]
            },
            'circle-color': 'rgba(237, 23, 176, 0.2)',
        },
        "filter": ["!=", "PROJECT", ""]
    });

    map.addSource('tweets', {
        type: 'geojson',
        data: 'assets/geojsons/tweets.geojson'
    });
    map.addLayer({
        'id': 'tweets',
        'type': 'circle',
        'source': 'tweets',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': {
            	'base': 0.8,
                'stops': [[12, 1], [22, 12]]
            },
            'circle-color': 'rgba(23, 179, 237, 1)'
        }
    });

    map.addSource('tweets_emoji', {
        type: 'geojson',
        data: 'assets/geojsons/tw_show_emoji.geojson'
    });
    map.addLayer({
        'id': 'tweets_emoji',
        'type': 'circle',
        'source': 'tweets_emoji',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': {
                'base': 0.8,
                'stops': [[12, 2], [22, 12]]
            },
            'circle-color': {
                property: 'average_s',
                type: 'exponential',
                stops: [
                    [-0.25, '#d73027'],
                    [-0.02, '#fc8d59'],
                    [0.19, '#fee090'],
                    [0.34, '#ffffbf'],
                    [0.47, '#e0f3f8'],
                    [0.6, '#91bfdb'],
                    [0.78, '#4575b4']
                    ]
            }
        }
    });

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'lihtc', function(e) {
        //if (map.getZoom() > 13){
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Populate the popup and set its coordinates
            // based on the feature found.
            //twemoji.size = '16x16';
            var count = e.features[0].properties.tw_densi_1;
            var name = e.features[0].properties.PROJECT;
            var score = e.features[0].properties.MEAN_tw_de;

            popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(name + "<br>"+ count + " tweets" + "<br>" + "Score: " + score)
            .addTo(map);
        //}
    });

    map.on('mouseleave', 'lihtc', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});

var layerIDs = ['heatmap', 'lihtc', 'tweets', 'tweets_emoji'];



map.on('zoomend', function(){
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    // map.on('mouseenter', 'tweets', function(e) {
    //     if (map.getZoom() > 14){
    //         // Change the cursor style as a UI indicator.
    //         map.getCanvas().style.cursor = 'pointer';

    //         // Populate the popup and set its coordinates
    //         // based on the feature found.
    //         //twemoji.size = '16x16';
    //         var content = twemoji.parse(e.features[0].properties.content);

    //         popup.setLngLat(e.features[0].geometry.coordinates)
    //         .setHTML(content)
    //         .addTo(map);
    //     }
    // });

    // map.on('mouseleave', 'tweets', function() {
    //     map.getCanvas().style.cursor = '';
    //     popup.remove();
    // });

    map.on('mouseenter', 'tweets_emoji', function(e) {
        if (map.getZoom() > 13){
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Populate the popup and set its coordinates
            // based on the feature found.
            //twemoji.size = '16x16';
            var content = twemoji.parse(e.features[0].properties.content);

            popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(content)
            .addTo(map);
        }
    });

    map.on('mouseleave', 'tweets_emoji', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    
});

//TOGGLE POINT LAYERS
$('#lihtc-toggle').on('click', function(){
    toggleLihtc();
});

$('#tweet-toggle').on('click', function(){
    toggleTweets();
});

$('#gradient-legend').hide();

$('#emoji-toggle').on('click', function(e){
    toggleEmoji();
});

$('#heatmap-toggle').on('click', function(e){
    toggleHeatmap();
});


var nav = [
{num:1, text: "Where do people tweet?"},
{num:2, text: "Are the tweets happy?"},
{num:3, text: "What's the pattern of the tweet sentiment?"},
{num:4, text: "Where are LIHTC developments?"},
{num:5, text: "Which areas have higher sentiment scores?"},
{num:6, text: "Which areas have lower sentiment scores?"},
{num:7, text: "Which LIHTC developments have higher sentiment scores?"},
{num:8, text: "Which LIHTC developments have lower sentiment scores?"}
];

var navNum = 1;
updateNav();

$("#nav-button-right").on('click', function(){
    if (navNum < nav.length){
        navNum += 1;
        updateNav();
    }
    changeStep();
});

$("#nav-button-left").on('click', function(){
    if (navNum > 1){
        navNum -= 1;
        updateNav();
    }
    changeStep();
});

//make the navigation dots clickable
for (var idx in nav){
    $('#'+nav[idx].num.toString()).parent().on('click', function(){
        //console.log(this.children[0].id);
        navNum = parseInt(this.children[0].id);
        updateNav();
        changeStep();
    });
}

function changeStep(){
    if (navNum === 1){
        map.flyTo({
            center: [-75.156090, 39.978720],
            zoom: 11
        });
        map.setLayoutProperty('heatmap', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'none');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'none');
        map.setLayoutProperty('tweets', 'visibility', 'visible');
        updateToggles();
        $(".description").fadeOut(500);
    }

    if (navNum === 2){
        map.flyTo({
            center: [-75.156090, 39.978720],
            zoom: 11
        });
        map.setLayoutProperty('heatmap', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'none');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'visible');
        updateToggles();
        $(".description").fadeOut(500);
    }

    if (navNum === 3){
        map.flyTo({
            center: [-75.156090, 39.978720],
            zoom: 11
        });
        map.setLayoutProperty('heatmap', 'visibility', 'visible');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'none');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'none');
        updateToggles();
        $(".description").fadeOut(500);
    }

    if (navNum === 4){
        map.flyTo({
            center: [-75.156090, 39.978720],
            zoom: 11
        });
        map.setLayoutProperty('heatmap', 'visibility', 'none');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'none');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'visible');
        updateToggles();
        $(".description").fadeOut(500);
    }

    if (navNum === 5){
        map.flyTo({
            center: [-75.139703, 39.966272],
            zoom: 14.5
        });
        map.setLayoutProperty('heatmap', 'visibility', 'visible');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'visible');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'none');
        updateToggles();
        showDescription(sites[0]);
    }

    if (navNum === 6){
        map.flyTo({
            center: [-75.098952, 39.999714],
            zoom: 14.5
        });
        map.setLayoutProperty('heatmap', 'visibility', 'visible');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'visible');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'none');
        updateToggles();
        showDescription(sites[1]);
    }

    if (navNum === 7){
        map.flyTo({
            center: [-75.200837, 39.961718],
            zoom: 14.5
        });
        map.setLayoutProperty('heatmap', 'visibility', 'visible');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'visible');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'visible');
        updateToggles();
        showDescription(sites[2]);
    }

    if (navNum === 8){
        map.flyTo({
            center: [-75.156570, 40.019997],
            zoom: 14.5
        });
        map.setLayoutProperty('heatmap', 'visibility', 'visible');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'visible');
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('lihtc', 'visibility', 'visible');
        updateToggles();
        showDescription(sites[3]);
    }
}


var sites = [
    {name: "North Liberties", num: 5, link:"northliberty.JPG", description: "Northern Liberties is located north of Center City (specifically, Old City). In recent years, Northern Liberties has become a major enclave of young professionals, students, artists, and design professionals. Large improvement and revitalization projects have also been undertaken recently, causing a large jump in property values. The neighborhood's proximity to Center City has made it one of the city's most desirable development districts, both for commercial and residential real estate."},
    {name: "Harrowgate and surroundings", num: 6, link:"lowest_region.JPG", description: "Located close to the Delaware Express Way, this area is characterized by large blocks of big-box retail stores with parking lots."},
    {name: "Lancester Ave at Spring Garden St", num: 7, link:"highest_emoji_lihtc.JPG", description: "This LIHTC development is located right along Lancester Ave, which is a commercial corridor that extends from Drexel University Campus. Its surroundings seems to be dominated by two to three story buildings with robust streetscape, and the development is adjacent to a number of restaurants and a police station."},
    {name: "Nicetown Court", num: 8, link:"lowest_emoji_lihtc.JPG", description: "This development is a four-story building that seems to be newly developed, and is located right next to the elevated Lincoln Highway/Roosevelt Express Way. The surrounding neighborhood looks old but clean and safe, with a number of commercial amenities scattered."},

]

$(".description").hide();

$(".close-button").on("click", function(){
    $(".description").fadeOut(500);
});

function showDescription(site){
    $("#site-title").html(site.name);
    $("#site-streetview").attr("src", "img/streetviews/" + site.link);
    $("#site-description").html(site.description);
    $(".description").fadeIn(500);
}


function updateNav(){
    for (var idx in nav){
        if (nav[idx].num == navNum){
            $("#"+nav[idx].num.toString()).addClass("filled");
            $("#nav-title").html(nav[idx].text);
        } else {
            $("#"+nav[idx].num.toString()).removeClass("filled");
        }
    }
}

function toggleTweets(){
    if (map.getLayoutProperty('tweets', 'visibility') === 'visible') {
        map.setLayoutProperty('tweets', 'visibility', 'none');
    } else{
        map.setLayoutProperty('tweets_emoji', 'visibility', 'none');
        map.setLayoutProperty('tweets', 'visibility', 'visible');
    }
    updateToggles();
}

function toggleEmoji(){
    if (map.getLayoutProperty('tweets_emoji', 'visibility') === 'visible') {
        map.setLayoutProperty('tweets_emoji', 'visibility', 'none');
    } else {
        map.setLayoutProperty('tweets', 'visibility', 'none');
        map.setLayoutProperty('tweets_emoji', 'visibility', 'visible');
    }
    updateToggles();
}

function toggleLihtc(){
    if (map.getLayoutProperty('lihtc', 'visibility') === 'visible') {
        map.setLayoutProperty('lihtc', 'visibility', 'none');
    } else {
        map.setLayoutProperty('lihtc', 'visibility', 'visible');
    }
    updateToggles();
}

function toggleHeatmap(){
    if (map.getLayoutProperty('heatmap', 'visibility') === 'visible') {
        map.setLayoutProperty('heatmap', 'visibility', 'none');
    } else {
        map.setLayoutProperty('heatmap', 'visibility', 'visible');
    }
    updateToggles();
}

function updateToggles(){
    if (map.getLayoutProperty('tweets', 'visibility') === 'visible'){
        $('#tweet-toggle').removeClass('fa-circle-o').addClass('fa-check-circle').removeClass('deactivated');
    } else {
        $('#tweet-toggle').removeClass('fa-check-circle').addClass('fa-circle-o').addClass('deactivated');
    }

    if (map.getLayoutProperty('lihtc', 'visibility') === 'visible'){
        $('#lihtc-toggle').removeClass('fa-circle-o').addClass('fa-check-circle').removeClass('deactivated');
        $('#barchart-container').fadeIn(500);
    } else {
        $('#lihtc-toggle').removeClass('fa-check-circle').addClass('fa-circle-o').addClass('deactivated');
        $('#barchart-container').fadeOut(500);
    }

    if (map.getLayoutProperty('tweets_emoji', 'visibility') === 'visible'){
        $('#emoji-toggle').removeClass('fa-circle-o').addClass('fa-check-circle').removeClass('deactivated');
    } else {
        $('#emoji-toggle').removeClass('fa-check-circle').addClass('fa-circle-o').addClass('deactivated'); 
    }

    if (map.getLayoutProperty('heatmap', 'visibility') === 'visible'){
        $('#heatmap-toggle').removeClass('fa-circle-o').addClass('fa-check-circle').removeClass('deactivated');
    } else {
        $('#heatmap-toggle').removeClass('fa-check-circle').addClass('fa-circle-o').addClass('deactivated');
    }

    if ((map.getLayoutProperty('heatmap', 'visibility') === 'visible') || (map.getLayoutProperty('tweets_emoji', 'visibility') === 'visible')){
        $('#gradient-legend').fadeIn(500);
    } else{
        $('#gradient-legend').fadeOut(500);
    }
}



$('#barchart-container').hide();
barChart();

function barChart(){
    var svg = d3.select("#barchart"),
      margin = {top: 10, right: 10, bottom: 10, left: 10},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;
      
    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("assets/geojsons/lihtc.geojson", function(error, data) {
    data = data.features;
    
    //filter out the ones without tweets
    function notZero(data){
        return data.properties.tw_densi_1 > 0;
    }
    data = data.filter(notZero);
    data.sort(function(a, b){ return a.properties.tw_densi_1 - b.properties.tw_densi_1});
    //console.log(data);
    //if (error) throw error;

    x.domain(data.map(function(d) { return d.length; }));
    y.domain([0, d3.max(data, function(d) { return d.properties.tw_densi_1; })]);

    // g.append("g")
    //     .attr("class", "axis axis--x")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(d3.axisBottom(x));

    // g.append("g")
    //     .attr("class", "axis axis--y")
    //     .call(d3.axisLeft(y).ticks(10, "%"))
    //   .append("text")
    //     .attr("transform", "rotate(-90)")
    //     .attr("y", 6)
    //     .attr("dy", "0.71em")
    //     .attr("text-anchor", "end")
    //     .text("Density");

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d,i) { return i*7; })
        .attr("y", function(d) { return y(d.properties.tw_densi_1); })
        .attr("width", 6)
        .attr("height", function(d) { return height - y(d.properties.tw_densi_1); })
        .on('mouseover', function(d){
            map.setFilter("lihtc-highlight", ["==", "OBJECTID", d.properties.OBJECTID]);
            map.setLayoutProperty('lihtc-fade', 'visibility', 'visible');
            map.setLayoutProperty('lihtc', 'visibility', 'none');
            map.setFilter("lihtc-fade", ["!=", "OBJECTID", d.properties.OBJECTID]);
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.properties.PROJECT) + ": " + (d.properties.tw_densi_1) + " tweets");
            //console.log();
        })
        .on('mouseout', function(d){
            map.setFilter("lihtc-highlight", ["==", "OBJECTID", 5000]);
            map.setLayoutProperty('lihtc-fade', 'visibility', 'none');
            map.setLayoutProperty('lihtc', 'visibility', 'visible');
            map.setFilter("lihtc-fade", ["!=", "OBJECTID", 5000]);
            tooltip.style("display", "none");
            //console.log();
        });
    });
}
