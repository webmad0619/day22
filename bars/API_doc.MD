method: map
http-verb: GET
use: in order to retrieve a map of all the bars
params: none

method: add-bar
http-verb: POST
use: creates a new bar
params: 
  name: @string: identifies the bar name
  description: @string: identifies the bar desc
  latitude: @number: identifies the bar lat
  longitude: @number: identifies the bar long


