var React = require('react');


// var WeatherMessage = React.createClass({
	
// 	render: function(){
// 		var {temp,location} = this.props;
// 		return(
// 			<h2>Current Weather in {location} is {temp}</h2>
// 			);
// 	}

// });
var WeatherMessage = ({temp,location}) => {
	
	return ( 
		<h2>Current Weather is {temp} in {location}</h2>
	);
}
module.exports = WeatherMessage;