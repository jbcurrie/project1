var entityId = "";
var entityType = "";
    function onload(param) {

        Zomato.init({
            key: "d150aa87132f13a2b96ee66a7f926f6f"
        });
        // debugger;
        Zomato.locations({
            //replace query with the city name from google search
            query: "Hell, MI 48169, USA",
            //replace with the lat/long variables
            latitude: 42.43472,
            longitude: -83.985,
            //returns the first matching city
            count: 1
        }, function(s) {
            // document.getElementById("locations_op").innerHTML = JSON.stringify(s);
            console.log(s)
            // debugger;
            //need these to run the locationsDetails function
            entityId = s.location_suggestions[0].entity_id;
            entityType = s.location_suggestions[0].entity_type;
            alsoload();
            geocode();
        });
    };

    function alsoload(param) {   
        Zomato.locationsDetails({
            entity_id: entityId,
            entity_type: entityType,
        }, function(s) {
            // document.getElementById("locations_op").innerHTML = JSON.stringify(s);
            console.log(s)
            console.log(entityId)
            console.log(entityType)
        });
    };

    function geocode(param) {
        // debugger;
        Zomato.geocode({
            //replace query with the city name from google search
            //replace with the lat/long variables
            lat: 42.43472,
            lon: -83.985
        }, function(s) {
            // document.getElementById("locations_op").innerHTML = JSON.stringify(s);
            console.log(s)
            // debugger;
        });
    }