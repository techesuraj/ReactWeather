var React = require('react');
var DisplayWeather = require('DisplayWeather');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState:function(){
		return {
			isLoading:false
		}
	},
	handleSearch:function(location){
		var that = this;
	
		this.setState({isLoading:true})
		openWeatherMap.getTemp(location).then(function(temp){
				that.setState({
				location:location,
				temp: temp,
				isLoading: false
				
		});
	}, function(errorMessage){
			that.setState({isLoading:false});
			alert(errorMessage);
		})
	
	},
	render: function(){
		var {isLoading,temp,location} = this.state;
		
		function renderMessage(){
			if(isLoading){
					return <h3>Fetching weather..</h3>;
			}else if(temp && location){
					return <WeatherMessage  temp={temp} location={location}/>;
			}
		}
		return(
			<div>
			<h2>Weather component</h2>
			<DisplayWeather onSearch={this.handleSearch}/>
			{renderMessage()}
			</div>
			);
	}

});

module.exports = Weather;