class WeatherController {
  
  constructor(Weather, amMoment) {
    this.name = 'weather';
    this.location = '';
    this.zipCode = '';
    this.Weather = Weather;
    this.amMoment = amMoment;
    this.weatherReport = [];
    this.getForecast();
  }

  getForecast() {
  	 this.Weather.getForecast().then((response)=>{
  	 	this.setData();
  	 });
  }

  getForecastWithZip(){
  	this.Weather.getForecastWithZip(this.zipCode).then((response)=>{
		this.setData();
  	})
  }

  setData(){
  	let state = this.Weather.getState();
  	this.weatherReport = state.weatherReport;
  	this.location = state.location;
  	this.zipCode = state.zipCode;
  }

}

export default WeatherController;
