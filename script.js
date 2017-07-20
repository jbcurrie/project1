// EVENTFUL
//--------------------------------------------------------------------------------------------------------------//

$(document).ready(function () {
  console.log("i'm ready")

  var results = {};
  var div = $("<div>");
  var p = $("<p>");
  var eventObj = {};
  var latitude = "";
  var longitude = "";
  var location = "";

      var oArgs = { 
      app_key: "2pRpwC3ck9hKHFqh", 
      q:"music",
      // "35.2270869"+"," + "-80.8431267", - charlotte
      location: "35.2270869" +"," + "-80.8431267",
      within: 25,
      date: "This Week",
      // "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name
      // 'YYYYMMDD00-YYYYMMDD00', for example '2012042500-2012042700'; the last two digits of each date in this format are ignored. 
      sort_order: "popularity",
      sort_direction: "ascending",
      image_sizes: "small",
      page_size: 10
      //number of results per page
      // page_number: 1 
    }; 

    EVDB.API.call("/events/search", oArgs, function(data) { 
      results = data;

      console.log(results);
      // $(".print").append(JSON.stringify(data))
    })

  $("body").on("click","button", function(event) {  
      // debugger;
      event.preventDefault();
    
      // latitude= $("#latitude").val().trim();
      // longitude = $("#longitude").val().trim();
      // var events = results.events.event;
      var events
    for (var i=0; i < results.events.event.length; i++) {
      debugger;
         var html = "<h2>" + results.events.event[i].title + "</h2>" +
                     "<h2>"+ results.events.event[i].description  ;
      $ (".display").append(html)

     
      
          // image: $("<img class='img-responsive center-block'>"),
          // image: function () {eventObj.image.attr("src",events.image.small.url)},
          
          // p.text(events.title),
          // p.text(events.description),
          // p.text(events.venue_address),
          // p.text(events.postal_code),
          // p.text(events.latitude),
          // p.text(events.longitude),
          // p.text(events.start_time),
          // p.text(events.stop_time),
          // p.text(events.url)


      // eventObj.image.attr("src",events.image.small.url)
    }
    // $(".display").append(div);
  });
})


$(document).ready(function () {
  console.log("i'm ready")
  // $Zomato.init("d150aa87132f13a2b96ee66a7f926f6f");

  // Zomato.restaurant("16774318",function(restaurant){
  //   console.log(restaurant);
  //   //do your logic for restaurant's data.
  //   },function(error){
  //     console.log("not yet")
  //   //on error here is the logic for on error 
  // })

  var objTypeLoc = {
    "user-key" : "d150aa87132f13a2b96ee66a7f926f6f",
    "query" : "Charlotte",
    "lat" : "35.2270869", 
    "lon" : "-80.8431267",
    "count" : "10"
  } 

  //data.results[0].address_components[0].long_name
  var locationsURL = "https://developers.zomato.com/api/v2.1/locations?"
  // var apiKey = "d150aa87132f13a2b96ee66a7f926f6f"
    $.ajax({
        url: locationsURL,
        data: objTypeLoc,
        // headers: {
        //     'Accept': 'application/json',
        //     'user_key': 'd150aa87132f13a2b96ee66a7f926f6f'
        // },
        dataType:'jsonp',
        success: null
      })
      .done(function(data) {
        console.log(data)
  });
});
  // var locationsURLL = "https://developers.zomato.com/api/v2.1/locations?user-key=d150aa87132f13a2b96ee66a7f926f6f&query=charlotte"
  // $.get(locationsURLL,function (data) {
  //   console.log(data);
  // })
// // function showEvents () {
//   $("body").one("click",".eventBtn", function(event) {
//     event.preventDefault();
//     debugger;
//       // latitude= $("#latitude").val().trim();
//       // longitude = $("#longitude").val().trim();
//     var events = results.events.event;

//     for (var i=0; i < events.length; i++) {

//       eventObj = {
//           image: $("<img class='img-responsive center-block'>"),
//           image: function () {eventObj.image.attr("src",events.image.small.url)},
//           title: p.text(events.title),
//           description: p.text(events.description),
//           venue: p.text(events.venue_address),
//           postal: p.text(events.postal_code),
//           lat: p.text(events.latitude),
//           lng: p.text(events.longitude),
//           start: p.text(events.start_time),
//           stop: p.text(events.stop_time),
//           url: p.text(events.url)
//       }

//       // eventObj.image.attr("src",events.image.small.url)

//       for (property in eventObj) {
//         //append the property value to the same div
//         div.append(property);
//       }
//     }
//     $(".display").append(div);
//   });
// }

// $("body").ready(function() { 
    // var oArgs = { 
    //   app_key: "2pRpwC3ck9hKHFqh", 
    //   q:"music",
    //   // "35.2270869"+"," + "-80.8431267", - charlotte
    //   location: "35.2270869" +"," + "-80.8431267",
    //   within: 25,
    //   date: "This Week",
    //   // "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name
    //   // 'YYYYMMDD00-YYYYMMDD00', for example '2012042500-2012042700'; the last two digits of each date in this format are ignored. 
    //   sort_order: "popularity",
    //   sort_direction: "ascending",
    //   image_sizes: "small",
    //   page_size: 10
    //   //number of results per page
    //   // page_number: 1 
    // }; 
    // EVDB.API.call("/events/search", oArgs, function(data) { 
    //   results = data;
    //   console.log(results);
    //   // $(".print").append(JSON.stringify(data))
    // })

// });
  // var oArgs = { 
  //   app_key: "2pRpwC3ck9hKHFqh", 
  //   q:"music",
  //   location: "35.2270869"+"," + "-80.8431267",
  //   within: 25,
  //   date: "This Week",
  //   // "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name
  //   // 'YYYYMMDD00-YYYYMMDD00', for example '2012042500-2012042700'; the last two digits of each date in this format are ignored. 
  //   sort_order: "popularity",
  //   sort_direction: "ascending",
  //   image_sizes: "small",
  //   page_size: 10
  //   //number of results per page
  //   // page_number: 1 
  // }; 
  // EVDB.API.call("/events/search", oArgs, function(data) { 
  //   results = data;
  //   console.log(data);
  //   // $(".print").append(JSON.stringify(data))
  // })
  // // .done(function(response) {
  // // var results = response.data;
  // // console.log(results);
  // // });
  // showEvents();

// var queryURL = "https://api.eventful.com/rest/events/search?callback=?api_key=2pRpwC3ck9hKHFqh";
// "https://api.eventful.com/json/events/search?where=35.2212220000,-80.8403210000&within=5&date=This+Week&api_key=2pRpwC3ck9hKHFqh"

// var apiKey = 2pRpwC3ck9hKHFqh
// var objtype = {
//           "where": "35.2212220000" +"," + "-80.8403210000",
//           "within": "5", 
//           "date": "This+Week",
//           "units":"mi",
//           "sort_order" : "popularity",
//           "sort_direction" : "ascending",
//           "api_key": "2pRpwC3ck9hKHFqh"
//           }

// // var invocation = new XMLHttpRequest()

// // function callOtherDomain () {
// //      if(invocation) { 
// //   invocation.open('GET', queryURL, true);
// //   invocation.withCredentials = true;
// //   invocation.onreadystatechange = handler
// //   invocation.send(); 
// //   }
// // // }
// var json;


// // callOtherDomain();


// function jsonCallback(json){
//   console.log(json);
// }

// $.ajax({
//   url: queryURL,
//   dataType: "jsonp"
// });

// $(document).ready(function() {
//   $.getJSON(queryURL,function(json){
//     console.log(json);
//   });
// });



// $.ajax({
//     url: "https://api.eventful.com/json/events/search?where=35.2212220000,-80.8403210000&within=5&date=This+Week&api_key=2pRpwC3ck9hKHFqh",
//     type: 'GET',
//     data: objtype,
//     dataType: 'json',
//     // success: null,
//     error: function() {
//       console.log('error')
//     }
// })
// .done(function(response) {
//   var results = response.data;
//   console.log(results);
// });

// (function() {
//   var httpRequest;
//   document.getElementById("ajaxButton").addEventListener('click', makeRequest);

//   function makeRequest() {
//     httpRequest = new XMLHttpRequest();

//     if (!httpRequest) {
//       alert('Giving up :( Cannot create an XMLHTTP instance');
//       return false;
//     }
//     httpRequest.onreadystatechange = alertContents;
//     httpRequest.open('GET', queryURL + "api_key=2pRpwC3ck9hKHFqh" + "&where=32.746682,-117.162741&within=25");
//     httpRequest.send();
//   }

//   function alertContents() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//         alert(httpRequest.responseText);
//       } else {
//         alert('There was a problem with the request.');
//       }
//     }
//   }
// })();

  // TEST CORS
  // "http://www.test-cors.org/#?client_method=GET&client_credentials=false&client_postdata=%22where%22%3A%20%2235.2212220000%22%20%2B%22%2C%22%20%2B%20%22-80.8403210000%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22within%22%3A%20%225%22%2C%20%0A%20%20%20%20%20%20%20%20%20%20%22date%22%3A%20%22This%20Week%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22units%22%3A%22mi%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22sort_order%22%20%3A%20%22popularity%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22sort_direction%22%20%3A%20%22ascending%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22api_key%22%3A%20%222pRpwC3ck9hKHFqh%22%2C%20dataType%3A%20%22json%22&server_url=https%3A%2F%2Fapi.eventful.com%2Fjson%2Fevents%2Fsearch%3F&server_enable=true&server_status=200&server_credentials=false&server_methods=GET&server_tabs=local"
  // test-cors.org


  // Test Calendar 
