
class WeatherService {
	
	constructor($http, $q) {
		'ngInject';
		this.$http = $http;
		this.state = {};
		this.$q = $q;
		this.APIKEY = 'YOUR_OWM_API_KEY';
		this.state.location = '';
		this.state.zipCode = '';
		this.state.weatherReport = {};
	}

	getGeoLocation() {
		return this.$q(function(resolve, reject) {
			window.navigator.geolocation.getCurrentPosition(function(position){
  				resolve(position);
			}, function(error){
				resolve(false);
			});
		});
	}

	getZipCode(position){
		if(position){
			return this.$http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true');
		}else{
			return this.$http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=41.883030,-87.644101&sensor=true');
		}
	}

	getAddress(zipCode){
		return this.$http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&sensor=true`);
	}

	getWeatherData(zipCode){
		return this.$http.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&APPID=${this.APIKEY}`);
	}

	getForecast(){
		return this.getGeoLocation().then((position)=>{
			
			return this.getZipCode(position);

		}).then((response)=>{
			
			this.state.location = response.data.results[0].address_components[2].long_name + ', ' + response.data.results[0].address_components[5].short_name;
			let zipCode = response.data.results[0].address_components[7].long_name;
			this.state.zipCode = zipCode;
			return this.getWeatherData(zipCode);

		}).then((response)=>{
			this.setWeather(response);
		});
	}

	getForecastWithZip(zipCode){
		this.state.zipCode = zipCode;
		return this.getAddress(zipCode).then((response)=>{
			this.state.location = response.data.results[0].address_components[1].long_name + ', ' + response.data.results[0].address_components[3].short_name;
			return this.getWeatherData(zipCode);

		}).then((response)=>{
			
			this.setWeather(response);

		});
	}

	setWeather(weatherReport){
		
		var list = [];

		weatherReport.data.list.forEach(function(time, idx){
			if(idx%8 === 0){
				list.push(time);
			}
		});

		this.state.weatherReport = list;
	}

	getState(){
		return this.state;
	}
}

WeatherService.$inject = ['$http', '$q'];

export default WeatherService;


