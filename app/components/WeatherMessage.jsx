var React = require('react');

var WeatherMessage = ({temp,location}) => {
	
	return ( 
		<h2>Current Weather is {temp} in {location}</h2>
	);
}
module.exports = WeatherMessage;