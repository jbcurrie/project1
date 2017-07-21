            // lat: 37.9635374,
            // lon: -77.7373582,
console.log(this)
var stAbbr = ""
var city = ""
var beginConvert = ""
var end= ""
var lat = ""
var lon = ""

  $("#submit").on("click", function(e) {
    e.preventDefault();
    debugger;
    lat = $("#lat").val().trim()
    lon = $("#lon").val().trim()
    var startDateData = $("#startDate").val().trim()
    // this.reset() 

    //replace begin with the calendar month to a string from 1-12 (i.e. jan is var begin = 01)
    var begin = String(startDateData);
    beginConvert = begin + '01';
    end = begin + '28';
    latlng();
  });


  function monthly() {
    var monthlyURL = "http://api.wunderground.com/api/49f1eacd626559d9/planner_"+beginConvert+end+"/q/" + stAbbr + "/" + city + ".json"
    $.ajax({
      url : monthlyURL,
      dataType : "jsonp",
      success : function(parsed_json) {
        debugger;
        console.log(parsed_json)
        console.log(monthlyURL);
        var low = parsed_json['trip']['temp_low']['avg']['F'];
        var high = parsed_json['trip']['temp_high']['avg']['F'];
        var chance = parsed_json['trip']['chance_of']['chanceofprecip']['percentage'];
        $('#imageOne').append()
        $('#imageOne').append("<h2>Forecasts for the month of your trip</h2>")
        $('#imageOne').append("<h3>Average low "+low+" F°</h3>")
        $('#imageOne').append("<h3>Average high "+high+" F°</h3>")
        $('#imageOne').append("<h3>Chance of precipitation "+chance+" %</h3>");
      }
    });
  }

  function current() {
    var currentURL = "http://api.wunderground.com/api/49f1eacd626559d9/geolookup/conditions/q/" + stAbbr + "/" + city + ".json"

    $.ajax({
      url : currentURL,
      dataType : "jsonp",
      success : function(parsed_json) {
        debugger;
        console.log(parsed_json)
        console.log(currentURL);
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var image = parsed_json['current_observation']['icon_url'];
        var conditions = parsed_json['current_observation']['weather'];  
        $('#imageTwo').html("<img src="+ image +">")
        $('#imageTwo').append("<h2>"+ temp_f +" F°</h2>")
        $('#imageTwo').append("<h3>The current condition is "+ conditions.toLowerCase() +".</h3>")
      }
      });
  } 
function latlng() {
  var queryURL = "http://api.wunderground.com/api/49f1eacd626559d9/geolookup/q/" + lat + "," + lon + ".json"
  debugger;
  lat;
  lon;
   $.ajax({
    url : queryURL,
    dataType : "jsonp",
    success : function(parsed_json) {
      debugger;
      console.log(parsed_json)
      console.log(queryURL);
      stAbbr = parsed_json.location.state
      city = parsed_json.location.city
      //add to divs
      $("#imageOne").before("<div id='image'>")
      $('#image').append("<h2>"+ city + "," + stAbbr +"</h2>")
      monthly ();
      current();
    }
  });

}
