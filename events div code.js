// debugger;
			var eventString = "'" + events[count].description + "'"
				// eventString = eventString.substring(0,140) + "...";
				// events[count].description = string
				// console.log(eventString)
			var content = [events[count].title, events[count].venue_name, events[count].start_time, eventString, events[count].venue_address, events[count].url]; // + "<br>" + events[count].vicinity + "<br>" + events[count].types;
			console.log(content);
			// debugger;
			console.log(content[3])
			windowInfoCreate(marker, latLng, events[count].title);
		}
		if(count == 0) {
			clearInterval(displayMarkers);
		}
		$("#entImage").append($('<div class="w3-card infocardRight"></div>'));
	
		