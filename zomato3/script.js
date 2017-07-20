var entityId = "";
var entityType = "";
    function onload(param) {

        Zomato.init({
            key: "d150aa87132f13a2b96ee66a7f926f6f"
        });
        // debugger;
        Zomato.locations({
            query: "charlotte",
            latitude: 35.2270869,
            longitude: -80.8431267,
            count: 2
        }, function(s) {
            document.getElementById("locations_op").innerHTML = JSON.stringify(s);
            console.log(s)
            debugger;
            entityId = s.location_suggestions[0].entity_id;
            entityType = s.location_suggestions[0].entity_type;
        });
        
        Zomato.locationsDetails({
            entity_id: 303,
            entity_type:"city",
        }, function(s) {
            document.getElementById("locations_op").innerHTML = JSON.stringify(s);
            console.log(s)
            console.log(entityId)
            console.log(entityType)
        });
    }