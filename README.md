Angular Weather
===================
This is a weather app made with [NG6-Starter](https://github.com/rdbruhn/NG6-starter) by Angular Class and a custom weather component. It gets location data from the [google geo-code javascript api](https://developers.google.com/maps/documentation/javascript/geocoding) and the [Open Weather Map](https://openweathermap.org/api). This was a first attempt at using new ES6 syntax and webpack with Angular 1.X.

----------

To Run
-------------
Requirements: 
Node v.7.5.0
npm 4.1.2
webpack 2.4.1
gulp 3.9.1
karma 1.6.0

First run `npm install`
Get a free API key from  [Open Weather Map](https://openweathermap.org/api). 

Then replace 'YOUR_OWM_API_KEY' in 
`client/app/common/weather/weather.service.js`

Last, run `gulp`

Basic template tests can be run using `npm test`
